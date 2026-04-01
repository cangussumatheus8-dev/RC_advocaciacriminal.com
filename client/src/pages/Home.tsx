import { useState } from 'react';
import { ChevronDown, MapPin, Phone, MessageCircle, Star, Shield, Clock, Target, Zap, Users, Heart } from 'lucide-react';

/**
 * Design: Minimalismo Jurídico Contemporâneo
 * Paleta: Azul Escuro (#2C3E50), Dourado (#D4A574), Branco
 * Tipografia: Playfair Display (títulos) + Lato (corpo)
 * Elementos: Barra vertical em dourado, cards com borda superior dourada, espaçamento generoso
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Nome: ${formData.name}\nTelefone: ${formData.phone}\nMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5562996287043?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', phone: '', message: '' });
  };

  const openWhatsApp = (text = 'Olá, gostaria de falar com um advogado criminalista.') => {
    const whatsappUrl = `https://wa.me/5562996287043?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER FIXO */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663480932232/YJvmHm6vJ2cYkxMD5Zyd3P/rc-logo_8d12dbc3.png"
            alt="RC Advocacia Criminal"
            className="h-14 w-auto"
          />

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('inicio')} className="text-primary hover:text-accent transition-colors text-sm font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection('advogado')} className="text-primary hover:text-accent transition-colors text-sm font-medium">
              Advogado
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-primary hover:text-accent transition-colors text-sm font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection('avaliacoes')} className="text-primary hover:text-accent transition-colors text-sm font-medium">
              Avaliações
            </button>
            <button onClick={() => scrollToSection('localizacao')} className="text-primary hover:text-accent transition-colors text-sm font-medium">
              Localização
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-primary hover:text-accent transition-colors text-sm font-medium">
              Contato
            </button>
          </nav>

          {/* Botão WhatsApp Header + Menu Mobile */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => openWhatsApp()}
              className="hidden sm:flex items-center gap-2 bg-accent text-primary px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all text-sm"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </button>

            {/* Menu Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-primary"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-secondary border-t border-border">
            <div className="container py-4 flex flex-col gap-3">
              <button onClick={() => scrollToSection('inicio')} className="text-left text-primary hover:text-accent transition-colors text-sm font-medium">
                Início
              </button>
              <button onClick={() => scrollToSection('advogado')} className="text-left text-primary hover:text-accent transition-colors text-sm font-medium">
                Advogado
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-left text-primary hover:text-accent transition-colors text-sm font-medium">
                Sobre
              </button>
              <button onClick={() => scrollToSection('avaliacoes')} className="text-left text-primary hover:text-accent transition-colors text-sm font-medium">
                Avaliações
              </button>
              <button onClick={() => scrollToSection('localizacao')} className="text-left text-primary hover:text-accent transition-colors text-sm font-medium">
                Localização
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-left text-primary hover:text-accent transition-colors text-sm font-medium">
                Contato
              </button>
              <button
                onClick={() => openWhatsApp()}
                className="flex items-center justify-center gap-2 bg-accent text-primary px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all text-sm w-full"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663480932232/YJvmHm6vJ2cYkxMD5Zyd3P/hero-background-9WrhTBbGzB4GevvYBzCuJ7.webp)',
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6">
              RC Advocacia Criminal
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              A RC Advocacia Criminal atua com foco na defesa criminal, oferecendo atendimento ágil, sigiloso e estratégico. Trabalhamos com seriedade em cada caso, buscando sempre a melhor solução para proteger seus direitos e sua liberdade.
            </p>

            {/* CTA Hero */}
            <button
              onClick={() => openWhatsApp('Gostaria de falar com um advogado criminalista agora.')}
              className="btn-primary w-full sm:w-auto"
            >
              <MessageCircle className="inline mr-2" size={20} />
              Falar com um Advogado Agora
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO ADVOGADO */}
      <section id="advogado" className="py-16 md:py-24 bg-secondary relative">
        <div className="vertical-bar" />
        <div className="container">
          <h2 className="section-title">Conheça o Advogado Ranier Cardoso</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Ranier Cardoso é advogado criminalista e atua de forma estratégica na defesa de pessoas investigadas ou acusadas em processos criminais. Seu trabalho é pautado pela ética, sigilo absoluto e rapidez na tomada de decisões, oferecendo ao cliente orientação firme desde os primeiros momentos do caso.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Com atendimento humanizado e postura técnica, Ranier acompanha cada etapa do processo com foco total na preservação dos direitos e da liberdade do cliente, garantindo uma atuação combativa e responsável quando cada detalhe pode mudar o rumo da situação.
              </p>

              {/* Áreas de Atuação */}
              <div className="bg-white p-6 rounded-lg border-l-4 border-accent mb-8">
                <h3 className="text-primary font-display font-bold mb-4">Atua principalmente em casos de:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Defesa em flagrante e acompanhamento em delegacia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Audiência de custódia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Habeas Corpus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Prisão preventiva e liberdade provisória</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Crimes patrimoniais (roubo e furto)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Lei de drogas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Violência doméstica / Maria da Penha</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Crimes contra a vida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Execução penal</span>
                  </li>
                </ul>
              </div>

              <p className="text-accent-gold mb-8 font-semibold">
                Se você ou um familiar foi preso ou está sendo investigado, procure orientação imediatamente.
              </p>

              <button
                onClick={() => openWhatsApp('Gostaria de falar com Ranier Cardoso sobre meu caso.')}
                className="btn-primary"
              >
                <MessageCircle className="inline mr-2" size={20} />
                Falar com Ranier no WhatsApp
              </button>
            </div>

            {/* Foto */}
            <div className="flex justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663480932232/YJvmHm6vJ2cYkxMD5Zyd3P/lawyer-portrait-placeholder-kVSjj43LvRFspHV2SN5SLd.webp"
                alt="Ranier Cardoso - Advogado Criminalista"
                className="rounded-lg shadow-lg max-w-sm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO SOBRE */}
      <section id="sobre" className="py-16 md:py-24 bg-white relative">
        <div className="vertical-bar" />
        <div className="container max-w-3xl">
          <h2 className="section-title">Sobre a RC Advocacia Criminal</h2>

          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            A RC Advocacia Criminal é um escritório especializado em Direito Penal, com atuação focada em defesa criminal estratégica e atendimento imediato para situações de urgência. Trabalhamos com responsabilidade e discrição em cada caso, garantindo suporte jurídico completo desde a fase inicial da investigação até a conclusão do processo.
          </p>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Nosso compromisso é oferecer atendimento ágil, postura firme e acompanhamento próximo, sempre com sigilo absoluto e dedicação total ao cliente. Em demandas criminais, tempo e estratégia fazem diferença — por isso, mantemos atendimento 24 horas para emergências e plantões.
          </p>

          {/* Destaque */}
          <div className="bg-primary text-white p-8 rounded-lg mb-8 text-center">
            <p className="text-2xl font-display font-bold">
              ⏰ Atendimento 24 horas – Plantão Criminal
            </p>
          </div>

          <button
            onClick={() => openWhatsApp('Gostaria de agendar um atendimento.')}
            className="btn-gold w-full"
          >
            <Clock className="inline mr-2" size={20} />
            Agendar Atendimento
          </button>
        </div>
      </section>

      {/* SEÇÃO DIFERENCIAIS */}
      <section id="diferenciais" className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <h2 className="section-title text-center mb-4">Por que Escolher a RC Advocacia Criminal?</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Cada minuto conta em situações criminais. Conte com orientação imediata.
          </p>

          {/* Cards de Diferenciais */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Card 1 */}
            <div className="card-premium">
              <div className="flex items-start gap-4">
                <Shield className="text-accent flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-primary font-display font-bold mb-2">Sigilo Absoluto</h3>
                  <p className="text-muted-foreground">Total discrição em todas as etapas do atendimento e do processo.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card-premium">
              <div className="flex items-start gap-4">
                <Zap className="text-accent flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-primary font-display font-bold mb-2">Atendimento Imediato</h3>
                  <p className="text-muted-foreground">Resposta rápida para casos urgentes, inclusive prisões e flagrantes.</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card-premium">
              <div className="flex items-start gap-4">
                <Target className="text-accent flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-primary font-display font-bold mb-2">Estratégia Personalizada</h3>
                  <p className="text-muted-foreground">Cada caso é analisado com profundidade para definir a melhor linha de defesa.</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card-premium">
              <div className="flex items-start gap-4">
                <Clock className="text-accent flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-primary font-display font-bold mb-2">Plantão 24 horas</h3>
                  <p className="text-muted-foreground">Disponibilidade real para emergências criminais, dia e noite.</p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="card-premium">
              <div className="flex items-start gap-4">
                <Star className="text-accent flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-primary font-display font-bold mb-2">Atuação Firme e Técnica</h3>
                  <p className="text-muted-foreground">Defesa combativa com responsabilidade e domínio do Direito Penal.</p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="card-premium">
              <div className="flex items-start gap-4">
                <Heart className="text-accent flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-primary font-display font-bold mb-2">Foco Total no Cliente</h3>
                  <p className="text-muted-foreground">Acompanhamento próximo, orientação clara e comunicação constante.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => openWhatsApp('Gostaria de solicitar uma orientação agora.')}
              className="btn-primary"
            >
              <MessageCircle className="inline mr-2" size={20} />
              Solicitar Orientação Agora
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO AVALIAÇÕES */}
      <section id="avaliacoes" className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <h2 className="section-title text-center mb-4">Avaliações de Clientes</h2>

          {/* Rating */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-4xl font-display font-bold text-primary">5,0</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={24} />
                ))}
              </div>
            </div>
            <p className="text-muted-foreground text-lg">(8 avaliações)</p>
          </div>

          {/* Depoimentos */}
          <div className="space-y-6 mb-12">
            {/* Depoimento 1 */}
            <div className="card-premium">
              <p className="text-muted-foreground mb-4 italic leading-relaxed">
                "Excelente atendimento! A Ranier Cardoso Advocacia resolveu meu processo com muita competência, clareza e profissionalismo. Me senti bem orientada durante todo o acompanhamento. Recomendo fortemente!"
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={16} />
                ))}
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="card-premium">
              <p className="text-muted-foreground mb-4 italic leading-relaxed">
                "Excelente escritório de advocacia criminal! Ranier é altamente competente, ético e dedicado, isso transmite muita segurança e confiança. Atendimento atencioso e atuação firme na defesa dos interesses do cliente. Recomendo!"
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={16} />
                ))}
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className="card-premium">
              <p className="text-muted-foreground mb-4 italic leading-relaxed">
                "Lugar excelente de profissionalismo impecável"
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={16} />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => openWhatsApp('Gostaria de falar com o escritório.')}
              className="btn-gold"
            >
              <MessageCircle className="inline mr-2" size={20} />
              Falar com o Escritório no WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO LOCALIZAÇÃO */}
      <section id="localizacao" className="py-16 md:py-24 bg-secondary relative">
        <div className="vertical-bar" />
        <div className="container">
          <h2 className="section-title">Localização e Atendimento</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Informações */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md mb-6">
                <h3 className="text-primary font-display font-bold mb-6">Ranier Cardoso - Advocacia Criminal</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-primary mb-1">Endereço</p>
                      <p className="text-muted-foreground">
                        Alameda Maracanã, Qd 119 - lote 23 - St. Jao<br />
                        Goiânia - GO, 74674-150
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-primary mb-1">Funcionamento</p>
                      <p className="text-muted-foreground">Aberto 24 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-primary mb-1">Telefone/WhatsApp</p>
                      <p className="text-muted-foreground">(62) 99628-7043</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-primary mb-1">Plus Code</p>
                      <p className="text-muted-foreground">9Q3F+W6 St. Jao, Goiânia - GO</p>
                    </div>
                  </div>
                </div>

                {/* Botões */}
                <div className="flex flex-col gap-3">
                  <a
                    href="https://maps.google.com/?q=Alameda+Maracanã,+Qd+119+-+lote+23+-+St.+Jao,+Goiânia+-+GO,+74674-150"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-center"
                  >
                    <MapPin className="inline mr-2" size={20} />
                    Abrir no Google Maps
                  </a>
                  <button
                    onClick={() => openWhatsApp('Olá, gostaria de mais informações sobre a localização.')}
                    className="whatsapp-btn justify-center w-full"
                  >
                    <Phone className="inline" size={20} />
                    Chamar no WhatsApp
                  </button>
                </div>
              </div>

              {/* Destaque */}
              <div className="bg-primary text-white p-6 rounded-lg text-center">
                <p className="text-xl font-display font-bold">
                  ⏰ Atendimento 24 horas – Plantão Criminal
                </p>
              </div>
            </div>

            {/* Mapa */}
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.8456789!2d-49.2561!3d-16.0123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e3f3f3f3f3f3f%3A0x3f3f3f3f3f3f3f3f!2sAlameda%20Maracan%C3%A3%2C%20119%20-%20Quadra%20119%20-%20Lote%2023%20-%20St%20Jao%2C%20Goi%C3%A2nia%20-%20GO%2074674-150%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1704067200000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO CONTATO */}
      <section id="contato" className="py-16 md:py-24 bg-white relative">
        <div className="vertical-bar" />
        <div className="container max-w-3xl">
          <h2 className="section-title text-center">Fale Agora com um Advogado Criminal</h2>

          <p className="text-center text-lg text-muted-foreground mb-12">
            O atendimento é sigiloso e rápido. Se a situação for urgente, entre em contato imediatamente para receber orientação profissional.
          </p>

          {/* Botão Grande */}
          <button
            onClick={() => openWhatsApp('Gostaria de atendimento imediato.')}
            className="btn-primary w-full mb-12 py-4 text-lg"
          >
            <MessageCircle className="inline mr-2" size={24} />
            Atendimento Imediato no WhatsApp
          </button>

          {/* Formulário */}
          <form onSubmit={handleFormSubmit} className="bg-secondary p-8 rounded-lg mb-6">
            <h3 className="text-primary font-display font-bold mb-6">Ou preencha o formulário abaixo</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-primary font-semibold mb-2">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-primary font-semibold mb-2">Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="(62) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-primary font-semibold mb-2">Mensagem</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Descreva brevemente sua situação..."
                />
              </div>

              <button type="submit" className="btn-gold w-full">
                Enviar Mensagem
              </button>
            </div>
          </form>

          <p className="text-center text-accent-gold font-semibold">
            Atendimento sigiloso e resposta rápida.
          </p>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Informações */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4">RC Advocacia Criminal</h3>
              <p className="text-gray-300 mb-4">Goiânia/GO</p>
              <p className="text-gray-300 text-sm">
                Atendimento sigiloso e especializado em Direito Penal.
              </p>
            </div>

            {/* Contato */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4">Contato</h3>
              <p className="text-gray-300 mb-2 flex items-center gap-2">
                <Phone size={18} />
                WhatsApp: (62) 99628-7043
              </p>
              <button
                onClick={() => openWhatsApp()}
                className="text-accent hover:text-opacity-80 transition-colors font-semibold mt-4"
              >
                Enviar Mensagem →
              </button>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4">Menu Rápido</h3>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('inicio')} className="text-gray-300 hover:text-accent transition-colors block">
                  Início
                </button>
                <button onClick={() => scrollToSection('advogado')} className="text-gray-300 hover:text-accent transition-colors block">
                  Advogado
                </button>
                <button onClick={() => scrollToSection('sobre')} className="text-gray-300 hover:text-accent transition-colors block">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('avaliacoes')} className="text-gray-300 hover:text-accent transition-colors block">
                  Avaliações
                </button>
                <button onClick={() => scrollToSection('localizacao')} className="text-gray-300 hover:text-accent transition-colors block">
                  Localização
                </button>
                <button onClick={() => scrollToSection('contato')} className="text-gray-300 hover:text-accent transition-colors block">
                  Contato
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400 text-sm mb-4">
              Este site possui caráter informativo e não substitui uma consulta jurídica.
            </p>
            <p className="text-center text-gray-500 text-xs">
              © 2026 RC Advocacia Criminal. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <button
        onClick={() => openWhatsApp()}
        className="floating-whatsapp"
        title="Falar no WhatsApp"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}
