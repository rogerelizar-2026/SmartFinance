# Changelog

Todas as mudanças notáveis no projeto Smart Wallet serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/spec/v2.0.0.html).

## [Não Lançado]

### Planejado
- Criptografia AES-256-GCM para backups com senha do usuário
- Exportação PDF nativa (via jsPDF)
- Importação de arquivos OFX/QIF
- Sincronização em nuvem (opcional)
- Modo offline-first com IndexedDB
- Gráfico de projeção financeira
- Categorização automática por ML

---

## [4.4.3] - 2026-01-07

### ✨ Adicionado
- **Splash Inteligente**: Tela de splash agora aparece apenas na primeira visita
- **Quote Modal em Retornos**: Ao recarregar a página, apenas o modal de dicas aparece (sem splash)
- **Flag `smartwallet_first_visit`**: Controle de primeira visita via localStorage
- **Logs de Diagnóstico**: Console mostra "Primeira visita" ou "Retorno detectado"

### 🔧 Alterado
- **Fluxo de Inicialização Otimizado**:
  - Primeira visita: Splash → Disclaimer → Quote Modal
  - Retorno/Refresh: Apenas Quote Modal (UX mais suave)
- **Delay do Quote Modal**: Reduzido de 3500ms para 500ms em retornos

### 🐛 Corrigido
- Splash screen não aparecia mais em cada refresh (incômodo resolvido)
- App principal agora aparece imediatamente em retornos

---

## [4.4.2] - 2026-01-06

### ✨ Adicionado
- **Separação de Entidades**: Contas de investimento agora são entidades independentes
- **Gráfico de Aplicações**: Usa contas do tipo `investment` ao invés de entidade separada
- **Menu Aplicações**: Mostra contas de investimento com saldo e histórico
- **Transferência Inteligente**: Categoriza automaticamente baseado no tipo de conta destino

### 🔧 Alterado
- **Saldo Unificado**: Agora inclui APENAS contas correntes (`type: 'checking'`)
- **Contas de Investimento**: Consultadas apenas no gráfico e menu Aplicações
- **Fluxo de Transferência**:
  - Corrente → Investimento: Aparece como despesa + aplicação
  - Investimento → Corrente: Aparece como receita + resgate

### 🐛 Corrigido
- Contas de investimento não apareciam mais no saldo unificado
- Gráfico de aplicações agora reflete corretamente o histórico
- Menu Aplicações mostra saldo atual, total aplicado e resgatado

---

## [4.4.1] - 2026-01-05

### ✨ Adicionado
- **Modal de Confirmação Custom** (`showConfirm`): Substitui `confirm()` nativo
- **`notificationsStatus`**: Indicador visual do status das notificações
- **Botão Demo no Menu Info**: Movido do header para o menu ℹ️
- **Classe CSS `.modal-front`**: z-index 10000 para modais em primeiro plano
- **Animação `confirmSlideIn`**: Transição suave para modal de confirmação
- **Funções Globais Faltantes**: `exportBackup`, `toggleDemoMode`, `enableNotifications`

### 🔧 Alterado
- **UX de Confirmações**: Todas as ações destrutivas agora usam modal custom
- **Botão Demo**: Texto dinâmico ("🎯 Modo Demonstração" / "🔴 Encerrar Demonstração")
- **`setupFocusTrap`**: Usa `.modal-front.active` para foco correto em modais empilhados
- **`saveInvestment`**: Validação explícita com feedback claro por campo

### 🐛 Corrigido
- **BUG #1, #2**: Botão Demo agora existe no menu Info e funciona corretamente
- **BUG #3**: XSS em `renderBillsModal` - `card.name` agora é escapado
- **BUG #5**: `notificationsStatus` agora aparece no modal de configurações
- **BUG #7**: `saveTransfer` com atomicidade e rollback em caso de erro
- **BUG #8**: Recorrência com múltiplas parcelas no mesmo mês - saldo atualizado corretamente
- **BUG #9**: Todos os `alert()` nativos substituídos por `showToast()`
- **BUG #11**: Modal Editar agora fica em primeiro plano ao abrir sobre outros modais
- **BUG #12**: Validação de `saveInvestment` mostra erros específicos por campo

### 🔒 Segurança
- **Escape de HTML**: `card.name` em `renderBillsModal` agora usa `escapeHtml()`
- **Atomicidade**: `saveTransfer` com rollback automático em caso de erro

---

## [4.4.0] - 2026-01-04

### ✨ Adicionado
- **Modo Demonstração**: Carregue dados de exemplo para explorar o app
  - 3 contas (Corrente, Poupança, Investimentos)
  - 2 cartões de crédito (Nubank, Inter)
  - 6 meses de transações históricas
  - Badge "DEMO" pulsante no header
- **Paginação de Transações**: Histórico dividido em páginas (10, 20, 50, 100 itens)
  - Controles de navegação (Anterior/Próxima)
  - Indicador "Mostrando X-Y de Z"
  - Configuração via modal de configurações
- **Gráfico Waterfall**: Fluxo de caixa visual mês a mês
  - Barras verdes (receitas) e vermelhas (despesas) empilhadas
  - Linha azul mostrando saldo acumulado
  - Tooltips com valores formatados
- **Alerta de Saldo Negativo**: Aviso flutuante quando contas ficam no vermelho
  - Toggle nas configurações para ativar/desativar
  - Lista nomes das contas com saldo negativo
  - Botão de fechar
- **Bloqueio de Saldo Negativo**: Impede transações que zerariam conta
  - Toggle nas configurações
  - Validação em `addTransaction`, `updateTransaction`, `saveTransfer`
- **Backup Automático**: Sugestão semanal de backup
  - Toggle nas configurações
  - Verifica último backup via localStorage
  - Toast de lembrete após 7 dias sem backup
- **Notificações Push**: Alertas de contas vencendo
  - Integração com Notification API
  - Uma notificação por dia (controle via localStorage)
  - Status visual no modal de configurações
- **Central de Configurações**: Modal unificado para preferências
  - Saldo negativo (alerta + bloqueio)
  - Backup automático
  - Notificações
  - Paginação
- **Indicadores Visuais de Ordenação**: Headers de coluna ordenada destacados
  - Background primário quando ativo
  - Seta ▲/▼ indicando direção

### 🔧 Alterado
- **Arquitetura de Estado**: Adicionadas propriedades `currentPage`, `pageSize`, `demoMode`, `settings`
- **Método `render()`**: Suporte a paginação e agrupamento por tipo
- **Método `updateDashboard()`**: Cálculo de saldo unificado com verificação de tipo de conta
- **Traduções**: Adicionadas 25+ novas chaves para funcionalidades v4.4.0
- **CSS**: Adicionados estilos para paginação, badge demo, alerta negativo, modal configurações

### 🐛 Corrigido
- Ordenação por coluna agora destaca visualmente a coluna ativa
- Paginação funciona corretamente com filtros aplicados
- Badge DEMO aparece/desaparece conforme estado

---

## [4.3.0] - 2025-12-20

### ✨ Adicionado
- **Refatoração Completa**: 10 redundâncias eliminadas
- **Validação Centralizada**: Método `validateForm()` reutilizável
- **Event Listeners Unificados**: Sistema `data-action` para botões
- **Traduções Padronizadas**: Objeto `TRANSLATIONS` com suporte a parâmetros
- **Helper `saveFileWithPicker()`**: File System Access API com fallback

### 🔧 Alterado
- **Estrutura de Código**: Classe `SmartWallet` com métodos organizados
- **Cache**: Sistema `_cache` para otimização de consultas
- **IDs Únicos**: `generateUniqueId()` com `crypto.randomUUID()` + fallback

### 🐛 Corrigido
- Duplicação de código em métodos de salvamento
- Inconsistências em formatação de datas
- Problemas de escape em HTML dinâmico

---

## [4.2.0] - 2025-12-10

### ✨ Adicionado
- **Contas de Investimento**: Tipo `investment` separado de `checking`
- **Gráfico de Aplicações**: Evolução dos investimentos ao longo do tempo
- **Menu Aplicações**: Gerenciamento de investimentos
- **Transferências**: Entre contas com categorização automática
- **Swipe Gestures**: Mobile - deslize para marcar como paga ou excluir

### 🔧 Alterado
- **Dashboard**: Adicionado card "Acumulado C.Crédito"
- **Filtros**: Adicionado filtro por conta e por cartão

---

## [4.1.0] - 2025-11-25

### ✨ Adicionado
- **Cartões de Crédito**: Controle de faturas com fechamento e vencimento
- **Fatura Visual**: Cartão 3D com chip dourado
- **Navegação de Faturas**: Anterior/Próximo mês
- **Pagamento de Fatura**: Cria transação de serviço automaticamente
- **Exportação de Fatura**: CSV e PDF

### 🔧 Alterado
- **Método de Pagamento**: Adicionado grupo "Cartões de Crédito" nos selects
- **Cálculo de Saldo**: Inclui acumulado de cartões

---

## [4.0.0] - 2025-11-10

### ✨ Adicionado
- **PWA Completa**: Service Worker + Manifest
- **Tema Claro/Escuro**: Alternância com persistência
- **Modo Privacidade**: Oculta valores sensíveis
- **Transações Recorrentes**: Parcelas, mensais e anuais
- **Gráficos Chart.js**: Linhas, barras e pizza
- **Importação/Exportação**: CSV e JSON

### 🔧 Alterado
- **Arquitetura**: Migração para classe ES6
- **Storage**: LocalStorage como backend principal
- **UI**: Design glassmorphism moderno

### 🚨 Breaking Changes
- Estrutura de dados incompatível com versões 3.x
- Necessário fazer backup antes de atualizar

---

## [3.0.0] - 2025-10-01

### ✨ Adicionado
- Versão inicial pública
- Dashboard com 4 cards
- CRUD de transações
- Filtros básicos
- Categorias personalizáveis

---

## Convenções de Versionamento

### Tipos de Mudanças

- **✨ Adicionado**: Novas funcionalidades
- **🔧 Alterado**: Mudanças em funcionalidades existentes
- **⚠️ Depreciado**: Funcionalidades que serão removidas
- **🗑️ Removido**: Funcionalidades removidas
- **🐛 Corrigido**: Correções de bugs
- **🔒 Segurança**: Correções de vulnerabilidades
- **🚨 Breaking Changes**: Mudanças incompatíveis com versões anteriores

### Política de Versionamento

- **MAJOR** (X.0.0): Mudanças incompatíveis na API
- **MINOR** (0.X.0): Adição de funcionalidades (compatível)
- **PATCH** (0.0.X): Correções de bugs (compatível)

---

## Contribuindo

Para contribuir com o projeto:

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Convenções de Commit

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Mudanças na documentação
- `style:` Formatação, ponto e vírgula, etc.
- `refactor:` Refatoração de código
- `perf:` Melhorias de performance
- `test:` Adição ou correção de testes
- `chore:` Atualizações de build, dependências, etc.

---

## Contato

- **Email:** rogerelizar@gmail.com
- **GitHub:** [@rogerelizar-2026](https://github.com/rogerelizar-2026)
- **Chave PIX:** rogerelizar@gmail.com

---

<div align="center">

**Smart Wallet © 2026 - Idealizado por RogerElizar™**

> "Toda boa dádiva e todo dom perfeito vêm do alto, descendo do Pai das luzes."  
> — Tiago 1:17

</div>