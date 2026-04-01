import express, { Express, Request, Response, NextFunction } from "express";
import { createServer, Server } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cache control constants for optimal performance
const CACHE_CONTROL = {
  STATIC: "public, max-age=31536000, immutable", // 1 year for hashed assets
  HTML: "public, max-age=3600, must-revalidate", // 1 hour for HTML
  DEFAULT: "public, max-age=3600",
};

async function startServer(): Promise<void> {
  const app: Express = express();
  const server: Server = createServer(app);

  // Security headers middleware
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("Permissions-Policy", "geolocation=(), microphone=(), camera=()");
    next();
  });

  // Determine static path based on environment
  const staticPath: string =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Cache headers middleware for optimal browser caching
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.path.match(/\.(js|css|woff2?|ttf|eot|svg|png|jpg|jpeg|gif|ico|webp)$/i)) {
      // Hashed assets can be cached long-term
      res.setHeader("Cache-Control", CACHE_CONTROL.STATIC);
    } else if (req.path.endsWith(".html")) {
      // HTML should be revalidated frequently
      res.setHeader("Cache-Control", CACHE_CONTROL.HTML);
    } else {
      res.setHeader("Cache-Control", CACHE_CONTROL.DEFAULT);
    }
    next();
  });

  // Serve static files with optimized settings
  app.use(
    express.static(staticPath, {
      maxAge: "1d",
      etag: true, // Enable ETag for efficient caching
      lastModified: true,
    })
  );

  // Client-side routing fallback - serve index.html for all unmatched routes
  app.get("*", (req: Request, res: Response) => {
    const indexPath: string = path.join(staticPath, "index.html");
    res.setHeader("Cache-Control", CACHE_CONTROL.HTML);
    res.sendFile(indexPath, (err: Error | null) => {
      if (err) {
        console.error(`Error sending file: ${err.message}`);
        res.status(404).json({ error: "404 - Page not found" });
      }
    });
  });

  // Error handling middleware
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(`Server error: ${err.message}`);
    res.status(500).json({ error: "500 - Internal server error" });
  });

  // Parse port and host from environment
  const port: number = parseInt(process.env.PORT || "3000", 10);
  const host: string = process.env.HOST || "0.0.0.0";

  server.listen(port, host, () => {
    console.log(`✓ Server running on http://${host}:${port}/`);
    console.log(`✓ Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`✓ Static path: ${staticPath}`);
  });

  // Graceful shutdown on SIGTERM
  process.on("SIGTERM", () => {
    console.log("SIGTERM received, shutting down gracefully...");
    server.close(() => {
      console.log("Server closed");
      process.exit(0);
    });
  });

  // Handle uncaught exceptions
  process.on("uncaughtException", (error: Error) => {
    console.error(`Uncaught exception: ${error.message}`);
    process.exit(1);
  });
}

// Start server with error handling
startServer().catch((error: Error) => {
  console.error(`Failed to start server: ${error.message}`);
  process.exit(1);
});
