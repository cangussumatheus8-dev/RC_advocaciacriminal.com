# Guia Completo: Configurar Domínio Próprio na Vercel

## 📋 Pré-requisitos

- ✅ Conta no GitHub com o repositório do projeto
- ✅ Conta na Vercel (criar em https://vercel.com)
- ✅ Domínio próprio comprado (ex: rcadvocaciacriminal.com.br)
- ✅ Acesso às configurações DNS do seu registrador de domínio

---

## 🚀 Passo 1: Criar Conta na Vercel e Fazer Deploy

### 1.1 - Acessar Vercel
1. Abra https://vercel.com
2. Clique em **"Sign Up"** (ou **"Log In"** se já tem conta)
3. Escolha **"Continue with GitHub"**
4. Autorize a Vercel a acessar seu GitHub

### 1.2 - Importar Projeto
1. Na dashboard da Vercel, clique em **"Add New..."**
2. Selecione **"Project"**
3. Clique em **"Import Git Repository"**
4. Procure por **"rc-advocacia-criminal"** e clique em **"Import"**

### 1.3 - Configurar Build
1. Na tela de configuração, deixe as opções padrão:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: (deixar em branco para usar padrão)

2. Clique em **"Deploy"**
3. Aguarde 2-3 minutos enquanto o projeto é construído
4. Você verá uma mensagem de sucesso com um URL como `https://rc-advocacia-criminal.vercel.app`

---

## 🌐 Passo 2: Comprar um Domínio (se ainda não tem)

### Opção A: Namecheap (Recomendado - Barato)
1. Acesse https://namecheap.com
2. Na barra de busca, digite seu domínio (ex: rcadvocaciacriminal.com.br)
3. Clique em **"Add to Cart"**
4. Complete o checkout
5. Anote as informações de acesso (email e senha)

### Opção B: Registro.br (Para domínios .com.br)
1. Acesse https://registro.br
2. Procure por seu domínio
3. Siga o processo de registro
4. Anote as credenciais de acesso

### Opção C: Google Domains
1. Acesse https://domains.google.com
2. Procure por seu domínio
3. Complete a compra
4. Anote as credenciais

---

## ⚙️ Passo 3: Adicionar Domínio na Vercel

### 3.1 - Acessar Configurações de Domínio
1. Na dashboard da Vercel, clique no seu projeto **"rc-advocacia-criminal"**
2. Vá para a aba **"Settings"** (engrenagem)
3. No menu esquerdo, clique em **"Domains"**

### 3.2 - Adicionar Novo Domínio
1. Clique em **"Add Domain"**
2. Digite seu domínio (ex: `rcadvocaciacriminal.com.br`)
3. Clique em **"Add"**

### 3.3 - Escolher Método de Configuração

Você verá duas opções:

**Opção A: Nameservers (Recomendado - Mais Fácil)**
- Vercel fornecerá 4 nameservers
- Você apontará seu domínio para esses nameservers
- **Vantagem**: Gerenciamento centralizado na Vercel
- **Tempo**: 24-48 horas para propagar

**Opção B: CNAME (Se Nameservers não funcionar)**
- Você criará um registro CNAME no seu registrador
- **Vantagem**: Funciona rápido
- **Desvantagem**: Mais técnico

---

## 🔧 Passo 4: Configurar DNS no Registrador

### 4.1 - Se Escolheu Nameservers (Opção A)

#### Para Namecheap:
1. Faça login em https://namecheap.com
2. Vá para **"Account"** → **"Domain List"**
3. Clique em **"Manage"** ao lado do seu domínio
4. Vá para a aba **"Nameservers"**
5. Selecione **"Custom DNS"**
6. Copie os 4 nameservers da Vercel e cole aqui:
   - ns1.vercel-dns.com
   - ns2.vercel-dns.com
   - ns3.vercel-dns.com
   - ns4.vercel-dns.com
7. Clique em **"Save"**

#### Para Registro.br:
1. Faça login em https://registro.br
2. Vá para **"Meus Domínios"**
3. Clique no seu domínio
4. Vá para **"Servidores de Nomes"**
5. Remova os nameservers atuais
6. Adicione os 4 nameservers da Vercel
7. Clique em **"Salvar"**

#### Para Google Domains:
1. Faça login em https://domains.google.com
2. Selecione seu domínio
3. Vá para **"DNS"** no menu esquerdo
4. Clique em **"Custom nameservers"**
5. Adicione os 4 nameservers da Vercel
6. Clique em **"Save"**

### 4.2 - Se Escolheu CNAME (Opção B)

1. Na Vercel, copie o valor CNAME fornecido
2. No seu registrador, vá para **"DNS Settings"** ou **"DNS Records"**
3. Crie um novo registro:
   - **Type**: CNAME
   - **Name**: @ (ou deixe em branco)
   - **Value**: (cole o valor da Vercel)
   - **TTL**: 3600 (ou padrão)
4. Clique em **"Save"**

---

## ⏳ Passo 5: Aguardar Propagação DNS

### Quanto Tempo Leva?
- **Nameservers**: 24-48 horas (às vezes até 72 horas)
- **CNAME**: 15 minutos a 2 horas

### Como Verificar se Propagou?

**Método 1: Vercel Dashboard**
1. Vá para **Settings → Domains** no seu projeto
2. Se o domínio estiver com um ✅ verde, está pronto!

**Método 2: Online (DNS Checker)**
1. Acesse https://dnschecker.org
2. Digite seu domínio
3. Selecione **"NS"** (para nameservers) ou **"CNAME"** (para CNAME)
4. Clique em **"Search"**
5. Se mostrar os nameservers/CNAME da Vercel, está propagado!

**Método 3: Terminal (Linux/Mac)**
```bash
nslookup rcadvocaciacriminal.com.br
# ou
dig rcadvocaciacriminal.com.br
```

---

## ✅ Passo 6: Verificar se Tudo Está Funcionando

### 6.1 - Testar no Navegador
1. Abra seu domínio no navegador (ex: https://rcadvocaciacriminal.com.br)
2. Seu site deve carregar normalmente
3. Verifique se todos os links e botões funcionam

### 6.2 - Verificar SSL/HTTPS
1. Procure pelo 🔒 (cadeado) na barra de endereço
2. Deve mostrar "Seguro" ou "Secure"
3. Vercel gera certificado SSL automaticamente

### 6.3 - Testar Responsividade
1. Abra seu site em um celular
2. Verifique se está responsivo
3. Teste os botões de WhatsApp

---

## 🔐 Passo 7: Configurações Adicionais (Opcional)

### 7.1 - Redirecionar www para não-www
1. Na Vercel, vá para **Settings → Domains**
2. Se tiver `www.rcadvocaciacriminal.com.br`, clique em **"Edit"**
3. Selecione **"Redirect to rcadvocaciacriminal.com.br"**
4. Clique em **"Save"**

### 7.2 - Ativar Analytics (Opcional)
1. Na Vercel, vá para **Analytics**
2. Clique em **"Enable Analytics"**
3. Você verá dados de visitantes, performance, etc.

### 7.3 - Configurar Email (Opcional)
Se quiser usar email no seu domínio (ex: contato@rcadvocaciacriminal.com.br):
1. Use serviços como Mailgun, SendGrid ou Zoho Mail
2. Configure os registros MX no DNS
3. Siga as instruções do serviço escolhido

---

## 🆘 Troubleshooting (Solução de Problemas)

### Problema 1: Domínio não conecta após 48 horas

**Solução:**
1. Verifique se os nameservers foram salvos corretamente no registrador
2. Use https://dnschecker.org para confirmar propagação
3. Limpe o cache do navegador (Ctrl+Shift+Delete)
4. Tente em outro navegador
5. Aguarde mais 24 horas

### Problema 2: Site mostra erro 404

**Solução:**
1. Verifique se o deploy na Vercel foi bem-sucedido
2. Vá para **Deployments** e confirme se tem um ✅ verde
3. Se não, clique em **"Redeploy"** no deployment anterior
4. Aguarde o novo deploy completar

### Problema 3: HTTPS não funciona

**Solução:**
1. Vercel gera SSL automaticamente
2. Aguarde 5-10 minutos após adicionar o domínio
3. Se persistir, vá para **Settings → Domains** e clique em **"Refresh"**
4. Aguarde mais 5 minutos

### Problema 4: Nameservers não aparecem na Vercel

**Solução:**
1. Clique em **"Add Domain"** novamente
2. Digite seu domínio
3. Selecione **"Nameserver"** (não CNAME)
4. Os nameservers devem aparecer

---

## 📞 Suporte

Se tiver problemas:

1. **Documentação Vercel**: https://vercel.com/docs/concepts/projects/domains
2. **Suporte Vercel**: https://vercel.com/support
3. **Comunidade**: https://github.com/vercel/vercel/discussions

---

## 📊 Resumo Final

| Etapa | Tempo | Status |
|-------|-------|--------|
| 1. Deploy na Vercel | 5 min | ✅ |
| 2. Comprar domínio | 10 min | ✅ |
| 3. Adicionar domínio na Vercel | 5 min | ✅ |
| 4. Configurar DNS | 10 min | ✅ |
| 5. Aguardar propagação | 24-48h | ⏳ |
| 6. Verificar funcionamento | 5 min | ✅ |
| **Total** | **~24-48 horas** | ✅ |

---

## 🎉 Parabéns!

Seu site RC Advocacia Criminal está ao vivo com domínio próprio!

**Próximos passos:**
- Monitorar visitantes no Analytics
- Acompanhar conversões via WhatsApp
- Otimizar SEO com conteúdo
- Adicionar blog com artigos jurídicos
