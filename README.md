# 💰 Smart Wallet v4.4.3

**Controle Financeiro Pessoal Inteligente**

> Idealizado por RogerElizar™ | rogerelizar@gmail.com

[![Versão](https://img.shields.io/badge/versão-4.4.3-blue.svg)](https://github.com/rogerelizar-2026/smartwallet)
[![Licença](https://img.shields.io/badge/licença-MIT-green.svg)](LICENSE)
[![PWA](https://img.shields.io/badge/PWA-ready-purple.svg)](https://web.dev/progressive-web-apps/)

---

## 📖 Sobre

Smart Wallet é uma aplicação web progressiva (PWA) para controle financeiro pessoal, desenvolvida com foco em **privacidade**, **simplicidade** e **inteligência financeira**. Todos os dados são armazenados localmente no seu dispositivo, garantindo total controle sobre suas informações.

### 🎯 Filosofia

- **100% Offline**: Funciona sem conexão com internet
- **Sem Cadastro**: Não é necessário criar conta
- **Sem Rastreamento**: Zero cookies de analytics
- **Controle Total**: Você pode exportar e apagar seus dados a qualquer momento

---

## ✨ Funcionalidades

### 💳 Gestão Financeira Completa

- ✅ **Saldo Unificado**: Visão consolidada de todas as contas correntes
- ✅ **Contas de Investimento**: Separadas do saldo unificado, com gráfico próprio
- ✅ **Cartões de Crédito**: Controle de faturas com fechamento e vencimento
- ✅ **Transferências**: Entre contas com categorização automática
- ✅ **Transações Recorrentes**: Parcelas, mensais e anuais

### 📊 Visualizações Inteligentes

- 📈 **Gráfico de Linhas**: Entradas e saídas dos últimos 6 meses
- 💰 **Gráfico Waterfall**: Fluxo de caixa mês a mês
- 🥧 **Gráfico de Categorias**: Despesas por categoria
- 💳 **Gráfico de Cartões**: Acumulado por cartão
- 📊 **Gráfico de Aplicações**: Evolução dos investimentos

### 🎯 Recursos Avançados

- 🔔 **Notificações Push**: Alertas de contas vencendo
- ⚠️ **Alerta de Saldo Negativo**: Aviso visual quando contas ficam no vermelho
- 🔒 **Bloqueio de Saldo Negativo**: Impede transações que zerariam conta
- 💾 **Backup Automático**: Sugestão semanal de backup
- 📄 **Paginação**: Histórico dividido em páginas para performance
- 🎯 **Modo Demonstração**: Carregue dados de exemplo para explorar o app
- 🌐 **Bilíngue**: Português e Inglês
- 💱 **Multi-moeda**: Real (R$) e Dólar ($)

### 🎨 Interface Moderna

- 🌙 **Tema Claro/Escuro**: Alternância com um clique
- 👁️ **Modo Privacidade**: Oculta valores sensíveis
- 📱 **Responsivo**: Funciona em desktop, tablet e mobile
- 👆 **Swipe Gestures**: Deslize para marcar como paga ou excluir (mobile)
- ⌨️ **Acessibilidade**: Navegação por teclado, focus trap em modais

---

## 🛠️ Tecnologias

- **HTML5** semântico
- **CSS3** com variáveis customizadas e Grid/Flexbox
- **JavaScript ES6+** (vanilla, sem frameworks)
- **Chart.js 4.4.0** para gráficos
- **Web Crypto API** para criptografia de backups
- **Service Worker** para PWA e cache offline
- **LocalStorage** para persistência de dados

---

## 📦 Instalação

### Opção 1: Clone o Repositório

```bash
git clone https://github.com/rogerelizar-2026/smartwallet.git
cd smartwallet
Opção 2: Download Direto
Baixe o ZIP do repositório
Extraia em qualquer pasta
Abra index.html no navegador
Opção 3: Deploy no GitHub Pages
Faça fork do repositório
Vá em Settings → Pages
Selecione a branch main
Seu app estará disponível em https://seuusuario.github.io/smartwallet

🚀 Uso

Como WebApp (Recomendado)
Desktop (Chrome, Edge, Brave)
Acesse o site pelo navegador
Clique no ícone de instalação na barra de endereços
Confirme a instalação
Android (Chrome)
Abra o site no Chrome
Toque nos três pontos (⋮)
Selecione "Instalar aplicativo"
iPhone (Safari)
Abra o site no Safari
Toque no botão Compartilhar
Toque em "Adicionar à Tela de Início"
Como Aplicativo Local
Abra index.html diretamente no navegador
Todos os recursos funcionam normalmente

📁 Estrutura de Arquivos

smartwallet/
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos e temas
├── js/
│   └── app.js          # Lógica da aplicação
├── sw.js               # Service Worker (PWA)
├── manifest.json       # Manifesto PWA
├── favicon.svg         # Ícone do app
└── README.md           # Esta documentação

🔐 Segurança e Privacidade

Onde seus dados são armazenados?
Apenas no seu dispositivo, usando localStorage do navegador:
smartwallet_transactions - Transações
smartwallet_accounts - Contas
smartwallet_cards - Cartões de crédito
smartwallet_categories - Categorias personalizadas
smartwallet_settings - Configurações
smartwallet_language - Idioma preferido
smartwallet_currency - Moeda preferida
Como proteger seus dados?
Backup Regular: Menu → Backup (JSON)
Backup Criptografado: Use senha forte ao exportar
Exportação Periódica: Configure backup automático nas configurações
O que NÃO fazemos?
❌ Não enviamos dados para servidores externos
❌ Não usamos cookies de rastreamento
❌ Não coletamos analytics
❌ Não exigimos cadastro

🐛 Reportar Bugs

Encontrou um problema? Abra uma issue no GitHub com:
Descrição do problema
Passos para reproduzir
Comportamento esperado vs. observado
Screenshots (se aplicável)
Versão do navegador e SO
📋 Changelog

v4.4.3 (Atual)
Novidades:
🎯 Splash screen apenas na primeira visita
💬 Quote Modal aparece em retornos/refresh
🔒 Criptografia AES-256-GCM para backups
📊 Gráfico de aplicações usa contas de investment
⚠️ Saldo unificado separa contas correntes de investimento
Correções:
✅ XSS corrigido em renderBillsModal
✅ Atomicidade em saveTransfer com rollback
✅ Recorrência com múltiplas parcelas no mesmo mês
✅ alert() nativo substituído por showToast()
✅ Modal custom de confirmação (showConfirm)
✅ Modal Editar em primeiro plano (modal-front)
✅ Validação explícita em saveInvestment
✅ Funções globais faltantes (exportBackup, toggleDemoMode)
Melhorias:
🎨 UX aprimorada com modais em cascata
🔒 Segurança reforçada com escape de HTML
⚡ Performance otimizada com paginação
♿ Acessibilidade melhorada (focus trap, ESC)

v4.4.2
🎯 Modo Demonstração
📄 Paginação de transações
💰 Gráfico Waterfall
⚠️ Alerta de Saldo Negativo
📈 Contas de Investimento
⚙️ Central de Configurações
🔔 Notificações Push

v4.3.0
🧹 Refatoração completa (10 redundâncias eliminadas)
✅ Validação centralizada
🎯 Event listeners unificados
🌐 Traduções padronizadas
🔒 Segurança aprimorada

🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:
Fork o projeto
Crie uma branch (git checkout -b feature/MinhaFeature)
Commit suas mudanças (git commit -m 'feat: Adiciona MinhaFeature')
Push para a branch (git push origin feature/MinhaFeature)
Abra um Pull Request

☕ Apoie o Projeto

Se o Smart Wallet tem sido útil para você, considere apoiar o desenvolvimento:
💚 Chave PIX: rogerelizar@gmail.com
📧 Feedback: rogerelizar@gmail.com

📜 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.
Uso gratuito para fins pessoais.

🙏 Agradecimentos

"Toda boa dádiva e todo dom perfeito vêm do alto, descendo do Pai das luzes."
— Tiago 1:17
Agradeço a Deus por toda sabedoria, saúde e recursos que me permitiram desenvolver este projeto.
Dedico este trabalho aos meus amados filhos. Que este seja um legado de ensino, organização e sabedoria financeira.
— Com amor e orações,
RogerElizar®

📞 Contato

Email: rogerelizar@gmail.com
GitHub: @rogerelizar-2026
<div align="center">

Smart Wallet © 2026 - Idealizado por RogerElizar™
Feito com 💜 para ajudar você a conquistar sua liberdade financeira.
</div>