# 📊 Smart Finance v1.0.0

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-6366f1?style=for-the-badge)
![PWA](https://img.shields.io/badge/PWA-ready-06b6d4?style=for-the-badge)
![License](https://img.shields.io/badge/license-Personal%20Use-10b981?style=for-the-badge)
![Offline](https://img.shields.io/badge/100%25-Offline-f59e0b?style=for-the-badge)
![Privacy](https://img.shields.io/badge/Privacy-First-8b5cf6?style=for-the-badge)

### *Suas finanças sob seu domínio!* 🚀

**Controle financeiro pessoal inteligente, offline e 100% privado.**

[Idealizado por RogerElizar™](mailto:rogerelizar@gmail.com)

</div>

---

## 📖 Sobre o Projeto

O **Smart Finance** é uma aplicação web progressiva (PWA) desenvolvida para oferecer um controle financeiro pessoal completo, elegante e **totalmente offline**. Todos os dados são armazenados localmente no dispositivo do usuário, garantindo **privacidade absoluta** — sem servidores, sem cadastros, sem rastreamento.

> *"Não se trata de quanto dinheiro você ganha, mas de quanto dinheiro você guarda."* — Robert Kiyosaki

---

## ✨ Principais Funcionalidades

### 💰 Gestão Financeira Completa
- ✅ **Transações** com suporte a receitas, despesas e transferências
- ✅ **Contas múltiplas** (corrente, poupança, investimento)
- ✅ **Cartões de crédito** com controle de fatura, limite e fechamento
- ✅ **Investimentos** (CDB, Tesouro, LCI/LCA, Fundos, Ações, FIIs)
- ✅ **Transações recorrentes e parceladas** automáticas
- ✅ **Orçamento por categoria** com comparativo de média (3 meses)
- ✅ **Projeção financeira** do próximo mês (média móvel)

### 📊 Visualizações e Relatórios
- 📈 Gráfico de **Entradas e Saídas** (6 meses)
- 💳 Gráfico de **Uso de Cartões** (6 meses)
- 🥧 Gráfico de **Despesas por Categoria**
- 🌊 **Waterfall Chart** (Fluxo de Caixa acumulado)
- 📊 **Gráfico de Evolução de Investimentos** (% de rendimento)
- 🖨️ Exportação em **CSV**, **PDF** e **JSON**

### 🔒 Segurança e Privacidade
- 🔐 **Backup criptografado** com AES-256-GCM + PBKDF2 (250k iterações)
- 👁️ **Modo Privacidade** (blur em valores sensíveis)
- 💾 Armazenamento 100% local via `localStorage`
- 🚫 Zero rastreamento, zero analytics, zero cookies

### 🎨 Experiência do Usuário
- 🌓 **Dark/Light Mode** com transições suaves
- 🌐 **Bilíngue**: Português (BR) e English (US)
- 💵 Moedas: **BRL (R$)** e **USD ($)**
- 📱 **Design responsivo** com gestos de swipe (mobile)
- ⚡ **PWA instalável** como app nativo
- ♿ **Acessibilidade**: focus trap, navegação por teclado
- 🎯 Sugestão automática de categoria por palavra-chave

### 🔔 Inteligência e Automação
- 🔔 Notificações de **contas a vencer** (3 dias)
- ⚠️ Alerta de **saldo negativo** (com opção de bloqueio)
- 💾 Sugestão de **backup automático** semanal
- 💡 **Sugestão de categoria** baseada em descrição
- 📱 Splash screen + Disclaimer + Frase motivacional

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
|--------|-----------|
| **Frontend** | HTML5, CSS3 (Glassmorphism), JavaScript (ES6+ IIFE) |
| **Gráficos** | [Chart.js](https://www.chartjs.org/) |
| **Criptografia** | Web Crypto API (AES-256-GCM + PBKDF2) |
| **PWA** | Service Worker + Manifest.json |
| **Armazenamento** | `localStorage` |
| **Fontes** | Inter (Google Fonts) |

---

## 📁 Estrutura do Projeto

```
smart-finance/
├── index.html          # Estrutura HTML + modais
├── styles.css          # Estilos (glassmorphism, responsivo)
├── app.js              # Lógica principal (classe SmartFinance)
├── sw.js               # Service Worker (cache offline)
├── manifest.json       # Configuração PWA
├── logo.svg            # Logo principal
└── favicon.svg         # Ícone do app
```

---

## 🚀 Instalação e Uso

### Opção 1: Abrir Localmente
```bash
# Clone o repositório
git clone https://github.com/rogerelizar/smart-finance.git
cd smart-finance

# Abra o index.html no navegador
# (Recomendado: servir via HTTP para habilitar PWA)
npx serve .
# ou
python -m http.server 8000
```

### Opção 2: Instalar como App (PWA)
1. Acesse a URL pelo navegador (Chrome, Edge, Safari)
2. Clique no ícone de instalação na barra de endereço
3. Confirme a instalação
4. Pronto! Use como app nativo 🎉

---

## 🎯 Guia Rápido

### 💡 Primeiros Passos
1. **Leia e aceite os Termos de Uso** (tela inicial)
2. **Veja a frase motivacional** do dia
3. **Cadastre suas contas** (💳 Contas)
4. **Cadastre seus cartões** (💳 Cartões)
5. **Adicione transações** via botão flutuante (+)
6. **Explore os gráficos** no dashboard

### ⌨️ Atalhos Úteis
- `ESC` → Fecha modal ativo
- `Tab` / `Shift+Tab` → Navegação em modais (focus trap)
- **Swipe para direita** (mobile) → Marca transação como paga
- **Swipe para esquerda** (mobile) → Exclui transação

### 💾 Backup e Restauração
- **Exportar**: Configurações → Fazer Agora
- **Proteger com senha**: Ative em Configurações → Backup
- **Importar**: Configurações → Restaurar Backup

---

## 🔐 Segurança do Backup

O sistema utiliza criptografia de nível bancário:

```javascript
// Derivação de chave: PBKDF2 + SHA-256 (250.000 iterações)
// Criptografia: AES-256-GCM
// Salt: 16 bytes aleatórios
// IV: 12 bytes aleatórios
```

⚠️ **Atenção**: Se você proteger o backup com senha, **guarde-a bem**. Sem ela, o backup é irrecuperável.

---

## 🌐 Internacionalização

| Idioma | Código | Moeda |
|--------|--------|-------|
| Português (Brasil) | `pt-BR` | BRL (R$) |
| English (US) | `en-US` | USD ($) |

Troque o idioma no menu **ℹ️ → Idioma**.

---

## 📊 Categorias Padrão

### 💸 Despesas (14 categorias)
Casa • Despensa • Transporte • Saúde • Educação • Cuidados Pessoais • Serviços • Lazer • Pets • Instituição Financeira • Documento/Jurídico • Empréstimo • Doação/Generosidade • Reserva/Aplicação

### 💰 Receitas (8 categorias)
Salário • Vale Alimentação • Auxílios • Benefícios • Restituição • Freelance • Rendimentos • Resgate

> 💡 **Dica**: As categorias são sugeridas automaticamente ao digitar a descrição!

---

## 🗺️ Roadmap (Próximas Versões)

- [ ] Sincronização opcional via cloud (end-to-end encryption)
- [ ] Importação de extratos bancários (OFX, CSV de bancos)
- [ ] Metas financeiras com acompanhamento visual
- [ ] Relatórios anuais completos
- [ ] Integração com APIs de cotação (dólar, euro, cripto)
- [ ] Modo família (múltiplos usuários)
- [ ] Exportação para contabilidade (DRE simplificada)

---

## 🤝 Contribuindo

Este é um projeto pessoal de código aberto para uso individual. Se você deseja contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: NovaFeature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

---

## 📜 Licença

**Uso gratuito para fins pessoais.**

O Smart Finance foi idealizado e desenvolvido por **RogerElizar™**.

- ✅ Uso pessoal liberado
- ✅ Modificações permitidas (com créditos)
- ❌ Uso comercial sem autorização
- ❌ Remoção de créditos do autor

---

## ☕ Apoie o Projeto

Se o Smart Finance tem sido útil na sua jornada financeira, que tal um cafezinho?

<div align="center">

**💚 Chave PIX:** `rogerelizar@gmail.com`

**📧 Feedback:** [rogerelizar@gmail.com](mailto:rogerelizar@gmail.com)

</div>

---

## 🙏 Agradecimentos

> *"Toda boa dádiva e todo dom perfeito vêm do alto, descendo do Pai das luzes."* — **Tiago 1:17**

Aos usuários que acreditam no controle financeiro como caminho para a liberdade.  
Que Deus abençoe sua jornada financeira. 🙏

---

## 📞 Contato

<div align="center">

**RogerElizar™**  
📧 [rogerelizar@gmail.com](mailto:rogerelizar@gmail.com)  
🌐 Smart Finance v1.0.0 — Julho 2026

*Com amor e orações,* ❤️

</div>

---

<div align="center">

### ⭐ Se este projeto te ajudou, deixe uma estrela no GitHub! ⭐

**Feito com 💜 e muito ☕ por RogerElizar™**

</div>