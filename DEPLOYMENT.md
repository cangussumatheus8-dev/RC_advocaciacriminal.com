# Guia de Deploy - RC Advocacia Criminal

## Deploy na Vercel

Este projeto está configurado para fazer deploy automático na Vercel. Siga os passos abaixo:

### Pré-requisitos

- Conta no GitHub com o repositório do projeto
- Conta na Vercel (https://vercel.com)

### Passos para Deploy

1. **Conectar GitHub à Vercel**
   - Acesse https://vercel.com/new
   - Selecione "Import Git Repository"
   - Conecte sua conta GitHub
   - Selecione o repositório `rc-advocacia-criminal`

2. **Configurar Build Settings**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install` (ou deixar padrão)

3. **Variáveis de Ambiente** (se necessário)
   - Adicione qualquer variável de ambiente necessária na seção "Environment Variables"
   - Para este projeto, geralmente não são necessárias

4. **Deploy**
   - Clique em "Deploy"
   - Aguarde a conclusão do build (normalmente 2-3 minutos)
   - Seu site estará disponível em `https://seu-projeto.vercel.app`

### Configurações Automáticas

O projeto já possui as seguintes configurações para garantir sucesso no deploy:

- **`.npmrc`** - Permite execução de build scripts do Tailwind e esbuild
- **`vercel.json`** - Configurações otimizadas de cache, headers e rewrites
- **`.vercelignore`** - Arquivos ignorados durante o deploy para reduzir tamanho
- **`package.json`** - Campo `pnpm.onlyBuiltDependencies` configurado

### Troubleshooting

#### Build falha com erro de scripts bloqueados

Se receber erro sobre scripts de compilação bloqueados:
1. O arquivo `.npmrc` já está configurado para resolver isso
2. Se persistir, verifique se está usando pnpm na Vercel
3. Alternativa: Use `npm` em vez de `pnpm`

#### Site mostra código em vez de renderizar

1. Verifique se o build completou sem erros
2. Limpe o cache: Settings → Deployments → Redeploy
3. Verifique os logs de build para erros específicos

#### Chunks muito grandes (warning)

O aviso sobre chunks > 500 kB é apenas um aviso, não impede o deploy. Para otimizar:
1. Considere usar code-splitting dinâmico
2. Ou aumente o limite em `vite.config.ts`

### Domínio Personalizado

Para usar um domínio personalizado:

1. Na dashboard da Vercel, vá para Settings → Domains
2. Adicione seu domínio (ex: rcadvocaciacriminal.com.br)
3. Siga as instruções para configurar DNS
4. Normalmente leva 24-48 horas para propagar

### Monitorar Deploy

- **Dashboard Vercel**: Acompanhe builds, deployments e performance
- **Logs**: Clique em um deployment para ver logs detalhados
- **Analytics**: Ative analytics para monitorar visitantes e performance

### Rollback

Se precisar reverter para uma versão anterior:

1. Na dashboard, vá para Deployments
2. Clique em "Redeploy" em um deployment anterior
3. Confirme para fazer rollback

### Suporte

Para mais informações:
- Documentação Vercel: https://vercel.com/docs
- Documentação Vite: https://vitejs.dev/
- Documentação Tailwind: https://tailwindcss.com/
