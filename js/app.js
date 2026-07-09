(function() {
    'use strict';

    // ===== CONSTANTES =====
    const PAYMENT_METHODS = [
        { id: 'pix', name: 'PIX', icon: '⚡' },
        { id: 'debit', name: 'Cart.Débito', icon: '💳' },
        { id: 'auto', name: 'Débito Automático', icon: '🔄' },
        { id: 'scheduled', name: 'Agendamento', icon: '📅' },
        { id: 'transfer', name: 'Transferência', icon: '↔️' }
    ];

    const DEFAULT_CATEGORIES = [
        { id: 'casa', name: 'Casa', color: '#f59e0b', type: 'expense' },
        { id: 'despensa', name: 'Despensa', color: '#10b981', type: 'expense' },
        { id: 'transporte', name: 'Transporte', color: '#f97316', type: 'expense' },
        { id: 'saude', name: 'Saúde', color: '#ef4444', type: 'expense' },
        { id: 'educacao', name: 'Educação', color: '#3b82f6', type: 'expense' },
        { id: 'cuidados_pessoais', name: 'Cuidados Pessoais', color: '#ec4899', type: 'expense' },
        { id: 'servicos', name: 'Serviços', color: '#8b5cf6', type: 'expense' },
        { id: 'lazer', name: 'Lazer', color: '#f43f5e', type: 'expense' },
        { id: 'pets', name: 'Pets', color: '#a855f7', type: 'expense' },
        { id: 'inst_financeira', name: 'Instituição Financeira', color: '#6366f1', type: 'expense' },
        { id: 'docs_juridico', name: 'Documento/Jurídico', color: '#64748b', type: 'expense' },
        { id: 'emprestimo', name: 'Empréstimo', color: '#de076b', type: 'expense' },
        { id: 'doacao_generosidade', name: 'Doação/Generosidade', color: '#84cc16', type: 'expense' },
        { id: 'reserva_aplicacao', name: 'Reserva/Aplicação', color: '#06b6d4', type: 'expense' },
        { id: 'salario', name: 'Salário', color: '#22c55e', type: 'income' },
        { id: 'vale_alimentacao', name: 'Vale Alimentação', color: '#eab308', type: 'income' },
        { id: 'auxilios', name: 'Auxílios', color: '#14b8a6', type: 'income' },
        { id: 'beneficios', name: 'Benefícios', color: '#0ea5e9', type: 'income' },
        { id: 'restituicao', name: 'Restituição', color: '#d946ef', type: 'income' },
        { id: 'freelance', name: 'Freelance', color: '#f59e0b', type: 'income' },
        { id: 'rendimentos', name: 'Rendimentos', color: '#8b5cf6', type: 'income' },
        { id: 'resgate', name: 'Resgate (invest/reserva)', color: '#6366f1', type: 'income' }
    ];

    const FINANCIAL_QUOTES = [
        { text: "Não se trata de quanto dinheiro você ganha, mas de quanto dinheiro você guarda.", author: "Robert Kiyosaki" },
        { text: "O hábito de poupar é em si mesmo uma educação.", author: "T.T. Munger" },
        { text: "O dinheiro não é bom nem mau; é como uma faca.", author: "Sabedoria Financeira" },
        { text: "Riqueza verdadeira não é ter muito, é depender de pouco.", author: "Sabedoria Financeira" },
        { text: "Riqueza é a capacidade de viver completamente a vida.", author: "Henry David Thoreau" },
        { text: "Não economize o que resta depois de gastar; gaste o que resta depois de poupar.", author: "Warren Buffett" },
        { text: "O melhor investimento que você pode fazer é em si mesmo.", author: "Warren Buffett" },
        { text: "A riqueza não consiste em ter grandes posses, mas em ter poucas necessidades.", author: "Epicteto" },
        { text: "Cuidado com pequenos gastos; um pequeno vazamento afundará um grande navio.", author: "Benjamin Franklin" },
        { text: "Pague a si mesmo primeiro.", author: "George Samuel Clason" },
        { text: "Finanças não são sobre matemática, são sobre comportamento.", author: "Morgan Housel" },
        { text: "Investir em conhecimento paga os melhores juros.", author: "Benjamin Franklin" },
        { text: "A educação financeira é a base da liberdade financeira.", author: "Robert Kiyosaki" },
        { text: "A paciência é a virtude dos investidores bem-sucedidos.", author: "Peter Lynch" },
        { text: "Quem compra o que não precisa, rouba a si mesmo.", author: "Provérbio Popular" }
    ];

    const manualHTML = '<div class="manual-cover"><h1>📘 Manual do Usuário</h1><h2>Smart Wallet Brasil</h2><p>Controle Financeiro Pessoal Inteligente</p><p class="version">Versão 4.4.3 - 2026</p><p class="author">Idealizado por RogerElizar™</p></div><div class="manual-quote"><p>"Toda boa dádiva e todo dom perfeito vêm do alto, descendo do Pai das luzes."</p><div class="quote-author">— Tiago 1:17</div></div><h2>🎯 Bem-vindo ao Smart Wallet!</h2><p>Parabéns por dar o primeiro passo rumo à sua <strong>liberdade financeira</strong>!</p><h2>🆕 Novidades v4.4.3</h2><ul><li><strong>Modo Demonstração:</strong> Carregue dados de exemplo para conhecer o app</li><li><strong>Paginação:</strong> Histórico dividido em páginas para melhor performance</li><li><strong>Gráfico Waterfall:</strong> Fluxo de caixa visual mês a mês</li><li><strong>Alerta de Saldo Negativo:</strong> Aviso quando contas ficam no vermelho</li><li><strong>Backup Automático:</strong> Sugestão semanal de backup</li><li><strong>Notificações Push:</strong> Alertas de contas a vencer</li><li><strong>Contas de Investimento:</strong> Separadas do saldo unificado</li><li><strong>Splash Inteligente:</strong> Apenas na primeira visita</li></ul><h2>📱 Instalação como WebApp</h2><ol><li>Acesse o site pelo navegador</li><li>Procure o ícone de instalação</li><li>Confirme a instalação</li></ol><div class="manual-blessing"><h3>🙏 É Isso! 💰</h3><div class="manual-quote"><p>Que Deus abençoe sua jornada financeira.</p><div class="quote-author">Com amor e orações,<br>RogerElizar®</div></div></div>';

    // ===== TRADUÇÕES v4.4.3 =====
    const TRANSLATIONS = {
        'pt-BR': {
            appTitle: 'Smart Wallet',
            appSubtitle: 'Suas finanças sob seu domínio!',
            unifiedBalance: 'Saldo Unificado',
            income_singular: 'Receita',
            income_plural: 'Receitas',
            expense_singular: 'Despesa',
            expense_plural: 'Despesas',
            creditCardTotal: 'Acumulado C.Crédito',
            months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            languageChanged: 'Idioma alterado!',
            currencyChanged: 'Moeda alterada!',
            noTransactions: 'Nenhuma transação encontrada',
            backupExported: 'Exportado com sucesso!',
            allowPopups: 'Por favor, permita popups.',
            monthlyStatement: 'Extrato do Mês',
            period: 'Período',
            date: 'Data',
            description: 'Descrição',
            category: 'Categoria',
            type: 'Tipo',
            payment: 'Pagamento',
            status: 'Status',
            value: 'Valor',
            account: 'Conta',
            completed: 'Concluído',
            pending: 'Pendente',
            incomeGroup: '💰 Receitas',
            expenseGroup: '💸 Despesas',
            allCards: 'Todos Cartões',
            allCategories: 'Todas as categorias',
            allAccounts: 'Todas as contas',
            selectCategory: 'Selecione uma categoria',
            selectAccount: 'Selecione a conta',
            selectPayment: 'Selecione a forma de pagamento',
            invalidAmount: 'Valor inválido',
            selectDate: 'Selecione uma data',
            minInstallments: 'Mínimo de 2 parcelas',
            recurringCreated: 'transações recorrentes criadas!',
            transactionAdded: 'Transação adicionada!',
            transactionUpdated: 'Transação atualizada!',
            transactionDeleted: 'Transação excluída!',
            fillAllFields: 'Preencha todos os campos',
            transactionNotFound: 'Transação não encontrada',
            cardUpdated: 'Cartão atualizado!',
            cardCreated: 'Cartão cadastrado!',
            cardRemoved: 'Cartão removido!',
            informName: 'Informe o nome',
            closed: 'Fechada',
            overdue: 'Vencida há',
            dueToday: 'Vence hoje!',
            inDays: 'Em {days} dias',
            days: 'dias',
            limit: 'Limite Total',
            minimum: 'Mínimo (15%)',
            available: 'Disponível',
            purchases: 'Compras',
            noPurchases: 'Nenhuma compra neste período.',
            payInvoice: 'Pagar Fatura',
            confirmPayment: 'Pagar fatura de',
            paymentRegistered: 'Pagamento registrado!',
            emptyInvoice: 'Fatura sem valor',
            close: 'Fechar',
            total: 'TOTAL',
            invoice: 'Fatura',
            invoicePeriod: 'Período da Fatura',
            dueDate: 'Vencimento',
            invoiceTotal: 'Total da Fatura',
            printPDF: 'Imprimir / PDF',
            demoLoaded: 'Dados de demonstração carregados!',
            demoCleared: 'Modo demonstração encerrado!',
            confirmDemoLoad: 'Carregar dados de demonstração? Seus dados atuais serão substituídos.',
            confirmDemoClear: 'Encerrar modo demonstração e limpar todos os dados?',
            pageOf: 'Página {current} de {total}',
            showingItems: 'Mostrando {from}-{to} de {total}',
            previous: 'Anterior',
            next: 'Próxima',
            itemsPerPage: 'Itens por página',
            allItems: 'Todos',
            negativeBalanceAlert: 'Atenção: {count} conta(s) com saldo negativo!',
            negativeBalanceBlocked: '❌ Saldo insuficiente! Transação bloqueada.',
            settingsSaved: 'Configurações salvas!',
            autoBackupSuggested: '💾 Faça um backup dos seus dados!',
            lastBackup: 'Último backup: {date}',
            neverBackedUp: 'Nunca realizado',
            notificationsEnabled: 'Notificações ativadas!',
            notificationsDenied: 'Notificações negadas pelo navegador',
            notificationsNotSupported: 'Seu navegador não suporta notificações',
            notificationTitle: 'Smart Wallet - Contas a Vencer',
            notificationBody: 'Você tem {count} conta(s) vencendo em 3 dias'
        },
        'en-US': {
            appTitle: 'Smart Wallet',
            appSubtitle: 'Your finances under your control!',
            unifiedBalance: 'Unified Balance',
            income_singular: 'Income',
            income_plural: 'Income',
            expense_singular: 'Expense',
            expense_plural: 'Expenses',
            creditCardTotal: 'Credit Card Total',
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            languageChanged: 'Language changed!',
            currencyChanged: 'Currency changed!',
            noTransactions: 'No transactions found',
            backupExported: 'Exported successfully!',
            allowPopups: 'Please allow popups.',
            monthlyStatement: 'Monthly Statement',
            period: 'Period',
            date: 'Date',
            description: 'Description',
            category: 'Category',
            type: 'Type',
            payment: 'Payment',
            status: 'Status',
            value: 'Value',
            account: 'Account',
            completed: 'Completed',
            pending: 'Pending',
            incomeGroup: '💰 Income',
            expenseGroup: '💸 Expenses',
            allCards: 'All Cards',
            allCategories: 'All categories',
            allAccounts: 'All accounts',
            selectCategory: 'Select a category',
            selectAccount: 'Select account',
            selectPayment: 'Select payment method',
            invalidAmount: 'Invalid amount',
            selectDate: 'Select a date',
            minInstallments: 'Minimum 2 installments',
            recurringCreated: 'recurring transactions created!',
            transactionAdded: 'Transaction added!',
            transactionUpdated: 'Transaction updated!',
            transactionDeleted: 'Transaction deleted!',
            fillAllFields: 'Fill all fields',
            transactionNotFound: 'Transaction not found',
            cardUpdated: 'Card updated!',
            cardCreated: 'Card created!',
            cardRemoved: 'Card removed!',
            informName: 'Enter the name',
            closed: 'Closed',
            overdue: 'Overdue',
            dueToday: 'Due today!',
            inDays: 'In {days} days',
            days: 'days',
            limit: 'Total Limit',
            minimum: 'Minimum (15%)',
            available: 'Available',
            purchases: 'Purchases',
            noPurchases: 'No purchases in this period.',
            payInvoice: 'Pay Invoice',
            confirmPayment: 'Pay invoice of',
            paymentRegistered: 'Payment registered!',
            emptyInvoice: 'Empty invoice',
            close: 'Close',
            total: 'TOTAL',
            invoice: 'Invoice',
            invoicePeriod: 'Invoice Period',
            dueDate: 'Due Date',
            invoiceTotal: 'Invoice Total',
            printPDF: 'Print / PDF',
            demoLoaded: 'Demo data loaded!',
            demoCleared: 'Demo mode ended!',
            confirmDemoLoad: 'Load demo data? Your current data will be replaced.',
            confirmDemoClear: 'End demo mode and clear all data?',
            pageOf: 'Page {current} of {total}',
            showingItems: 'Showing {from}-{to} of {total}',
            previous: 'Previous',
            next: 'Next',
            itemsPerPage: 'Items per page',
            allItems: 'All',
            negativeBalanceAlert: 'Warning: {count} account(s) with negative balance!',
            negativeBalanceBlocked: '❌ Insufficient balance! Transaction blocked.',
            settingsSaved: 'Settings saved!',
            autoBackupSuggested: '💾 Backup your data!',
            lastBackup: 'Last backup: {date}',
            neverBackedUp: 'Never done',
            notificationsEnabled: 'Notifications enabled!',
            notificationsDenied: 'Notifications denied by browser',
            notificationsNotSupported: 'Your browser does not support notifications',
            notificationTitle: 'Smart Wallet - Bills Due',
            notificationBody: 'You have {count} bill(s) due in 3 days'
        }
    };

    const CURRENCIES = {
        'BRL': { symbol: 'R$', code: 'BRL', locale: 'pt-BR', name: 'Real Brasileiro' },
        'USD': { symbol: '$', code: 'USD', locale: 'en-US', name: 'US Dollar' }
    };

    // ===== HELPER: SALVAR ARQUIVO COM SELETOR =====
    async function saveFileWithPicker(blob, suggestedName, mimeType) {
        if (window.showSaveFilePicker) {
            try {
                const ext = suggestedName.split('.').pop().toLowerCase();
                const acceptMap = {
                    'csv': { 'text/csv': ['.csv'] },
                    'json': { 'application/json': ['.json'] },
                    'pdf': { 'application/pdf': ['.pdf'] }
                };
                const handle = await window.showSaveFilePicker({
                    suggestedName: suggestedName,
                    types: [{
                        description: ext.toUpperCase() + ' File',
                        accept: acceptMap[ext] || { [mimeType]: ['.' + ext] }
                    }]
                });
                const writable = await handle.createWritable();
                await writable.write(blob);
                await writable.close();
                return 'saved';
            } catch (err) {
                if (err.name === 'AbortError') return 'cancelled';
                console.warn('File System Access API falhou:', err);
            }
        }
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = suggestedName;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);
        return 'downloaded';
    }

    // ===== CLASSE PRINCIPAL =====
    class SmartWallet {
        constructor() {
            this.currentMonth = new Date();
            this.currentMonth.setDate(1);
            this.currentMonth.setHours(0, 0, 0, 0);
            this.transactions = [];
            this.categories = [];
            this.accounts = [];
            this.cards = [];
            this.cardModalMonth = new Date();
            this.cardModalMonth.setDate(1);
            this.currentTransactionType = 'expense';
            this.currentEditType = 'expense';
            this.currentEditId = null;
            this.darkMode = true;
            this.privacyOn = false;
            this.charts = {};
            this.searchTimeout = null;
            this.toastT = null;
            this._cache = {};
            this.currentInvoiceCardId = null;
            this.currentInvoiceOffset = 0;
            this.sortColumn = 'date';
            this.sortDirection = 'desc';
            this.swipeInitialized = false;
            this.isSaving = false;
            this.currentPage = 1;
            this.pageSize = 20;
            this.demoMode = false;
            this.settings = {
                alertNegativeBalance: true,
                blockNegativeBalance: false,
                autoBackupEnabled: false,
                notifyBills: false,
                pageSize: 20
            };
            this.loadData();
            this.loadSettings();
            this.init();
        }

        // ===== CARREGAMENTO E SALVAMENTO =====
        loadData() {
            try {
                const t = localStorage.getItem('smartwallet_transactions');
                if (t) this.transactions = JSON.parse(t);
                const c = localStorage.getItem('smartwallet_categories');
                if (c) this.categories = JSON.parse(c);
                else this.categories = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
                const a = localStorage.getItem('smartwallet_accounts');
                if (a) this.accounts = JSON.parse(a);
                const cd = localStorage.getItem('smartwallet_cards');
                if (cd) this.cards = JSON.parse(cd);
                const dm = localStorage.getItem('smartwallet_dark');
                if (dm !== null) this.darkMode = dm === 'true';
                const pv = localStorage.getItem('smartwallet_privacy');
                if (pv !== null) this.privacyOn = pv === 'true';
                const demo = localStorage.getItem('smartwallet_demo');
                if (demo !== null) this.demoMode = demo === 'true';
            } catch (e) {
                console.error('[SmartWallet] Erro ao carregar:', e);
            }
        }

        saveTransactions() {
            try { localStorage.setItem('smartwallet_transactions', JSON.stringify(this.transactions)); } catch(e) {}
        }
        saveCategories() {
            try { localStorage.setItem('smartwallet_categories', JSON.stringify(this.categories)); } catch(e) {}
        }
        saveAccounts() {
            try { localStorage.setItem('smartwallet_accounts', JSON.stringify(this.accounts)); } catch(e) {}
        }
        saveCards() {
            try { localStorage.setItem('smartwallet_cards', JSON.stringify(this.cards)); } catch(e) {}
        }

        clearCache() {
            this._cache = {};
        }

        // ===== CONFIGURAÇÕES =====
        loadSettings() {
            try {
                const saved = localStorage.getItem('smartwallet_settings');
                if (saved) {
                    this.settings = { ...this.settings, ...JSON.parse(saved) };
                    this.pageSize = this.settings.pageSize || 20;
                }
            } catch (e) {}
        }

        saveSettings() {
            try {
                localStorage.setItem('smartwallet_settings', JSON.stringify(this.settings));
            } catch (e) {}
        }

        // ===== MÉTODOS CENTRALIZADOS =====
        getMonths(type = 'full') {
            const lang = this.getLanguage();
            const translations = TRANSLATIONS[lang] || TRANSLATIONS['pt-BR'];
            return type === 'short' ? translations.monthsShort : translations.months;
        }

        validateForm(fields) {
            for (const field of fields) {
                const element = document.getElementById(field.id);
                if (!element) continue;
                const value = element.value?.trim();
                if (field.required && !value) {
                    this.showToast('❌ ' + field.label);
                    element.focus();
                    return false;
                }
                if (field.type === 'number' && value) {
                    const num = parseFloat(value);
                    if (isNaN(num)) {
                        this.showToast('❌ ' + field.label + ' inválido');
                        element.focus();
                        return false;
                    }
                    if (field.min !== undefined && num < field.min) {
                        this.showToast('❌ ' + field.label + ' muito baixo');
                        element.focus();
                        return false;
                    }
                    if (field.max !== undefined && num > field.max) {
                        this.showToast('❌ ' + field.label + ' muito alto');
                        element.focus();
                        return false;
                    }
                }
            }
            return true;
        }

        // ===== IDIOMA E MOEDA =====
        t(key, params = {}) {
            const lang = this.getLanguage();
            let text = (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS['pt-BR'][key] || key;
            if (typeof text !== 'string') return key;
            Object.keys(params).forEach(param => {
                text = text.replace(new RegExp('\\{' + param + '\\}', 'g'), params[param]);
            });
            return text;
        }

        tCount(keyBase, count) {
            const suffix = count === 1 ? '_singular' : '_plural';
            return this.t(keyBase + suffix);
        }

        getLanguage() {
            return localStorage.getItem('smartwallet_language') || 'pt-BR';
        }

        setLanguage(lang) {
            localStorage.setItem('smartwallet_language', lang);
            document.documentElement.lang = lang;
            this.applyLanguage();
            this.showToast(this.t('languageChanged'));
        }

        applyLanguage() {
            const titleEl = document.querySelector('.header-title');
            if (titleEl) titleEl.textContent = this.t('appTitle');
            const subtitleEl = document.querySelector('.header-subtitle');
            if (subtitleEl) subtitleEl.textContent = this.t('appSubtitle');
            this.updateMonthDisplay();
            this.populateCardFilter();
            this.clearCache();
            this.render();
            this.updateCharts();
        }

        getCurrency() {
            return localStorage.getItem('smartwallet_currency') || 'BRL';
        }

        setCurrency(currency) {
            if (!CURRENCIES[currency]) return;
            localStorage.setItem('smartwallet_currency', currency);
            this.applyCurrency();
            this.showToast(this.t('currencyChanged'));
        }

        applyCurrency() {
            this.clearCache();
            this.render();
            this.updateCharts();
            this.updateCurrencySelectorVisibility();
        }

        updateCurrencySelectorVisibility() {
            const lang = this.getLanguage();
            const currencyItem = document.getElementById('currencyMenuItem');
            if (currencyItem) {
                currencyItem.style.display = lang === 'en-US' ? 'flex' : 'none';
            }
        }

        formatCurrency(value) {
            const currency = this.getCurrency();
            const data = CURRENCIES[currency];
            return new Intl.NumberFormat(data.locale, {
                style: 'currency',
                currency: data.code,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                notation: 'standard'
            }).format(value || 0);
        }
        // ===== INICIALIZAÇÃO =====
        init() {
            console.log('✅ Smart Wallet v4.4.3 inicializado');
            this.applyTheme();
            this.applyPrivacy();
            this.applyDemoBadge();
            this.setupEventListeners();
            this.setupFocusTrap();
            this.setDefaultDate();
            this.updateMonthDisplay();
            this.populateCategorySelects();
            this.populatePaymentMethodSelects();
            this.populateAccountSelects();
            this.populateCardFilter();
            this.restoreFilters();
            this.render();
            this.initCharts();
            this.updateAlertBadge();
            this.applyLanguage();
            this.applyCurrency();
            this.checkVersionUpdate();
            this.checkAutoBackup();
            this.checkNegativeBalance();
            if (window.innerWidth <= 640 && !this.swipeInitialized) {
                this.initSwipeGestures();
                this.swipeInitialized = true;
            }
        }

        applyDemoBadge() {
            const badge = document.getElementById('demoBadge');
            const infoDemoBtn = document.getElementById('infoDemoBtn');
            const infoDemoText = document.getElementById('infoDemoText');
            
            if (badge) {
                badge.style.display = this.demoMode ? 'inline-block' : 'none';
            }
            
            if (infoDemoBtn && infoDemoText) {
                if (this.demoMode) {
                    infoDemoText.textContent = '🔴 Encerrar Demonstração';
                    infoDemoBtn.classList.add('demo-active');
                } else {
                    infoDemoText.textContent = '🎯 Modo Demonstração';
                    infoDemoBtn.classList.remove('demo-active');
                }
            }
        }

        // ===== EVENT LISTENERS =====
        setupEventListeners() {
            const self = this;

            const search = document.getElementById('searchFilter');
            if (search) {
                search.addEventListener('input', () => {
                    clearTimeout(self.searchTimeout);
                    self.searchTimeout = setTimeout(() => {
                        self.currentPage = 1;
                        self.clearCache();
                        self.render();
                        self.clearDashboardHighlight();
                    }, 300);
                });
            }

            const filterIds = ['typeFilter', 'categoryFilter', 'statusFilter', 'accountFilter', 'cardFilter'];
            filterIds.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.addEventListener('change', () => {
                        if (id === 'typeFilter') {
                            self.filterCategoriesByType('categoryFilter', el.value);
                        }
                        self.currentPage = 1;
                        self.clearCache();
                        self.render();
                        self.saveFilters();
                        self.clearDashboardHighlight();
                    });
                }
            });

            const recurringCheckbox = document.getElementById('recurring');
            if (recurringCheckbox) {
                recurringCheckbox.addEventListener('change', function() {
                    const options = document.getElementById('recurringOptions');
                    if (options) options.style.display = this.checked ? 'block' : 'none';
                });
            }

            const editRecurringCheckbox = document.getElementById('editRecurring');
            if (editRecurringCheckbox) {
                editRecurringCheckbox.addEventListener('change', function() {
                    const options = document.getElementById('editRecurringOptions');
                    if (options) options.style.display = this.checked ? 'block' : 'none';
                });
            }

            const prevMonthBtn = document.getElementById('prevMonthBtn');
            const nextMonthBtn = document.getElementById('nextMonthBtn');
            if (prevMonthBtn) prevMonthBtn.addEventListener('click', () => self.changeMonth(-1));
            if (nextMonthBtn) nextMonthBtn.addEventListener('click', () => self.changeMonth(1));

            const alertBtn = document.getElementById('alertBtn');
            if (alertBtn) alertBtn.addEventListener('click', () => openBillsModal());

            const goalBtn = document.getElementById('goalBtn');
            if (goalBtn) goalBtn.addEventListener('click', () => openGoalModal());

            const privacyBtn = document.getElementById('privacyBtn');
            if (privacyBtn) privacyBtn.addEventListener('click', () => togglePrivacy());

            const themeBtn = document.getElementById('themeBtn');
            if (themeBtn) themeBtn.addEventListener('click', () => toggleTheme());

            const infoBtn = document.getElementById('infoBtn');
            if (infoBtn) infoBtn.addEventListener('click', (e) => toggleInfoMenu(e));

            const menuBtn = document.getElementById('menuBtn');
            if (menuBtn) menuBtn.addEventListener('click', (e) => toggleMenu(e));

            const fabBtn = document.getElementById('fabBtn');
            if (fabBtn) fabBtn.addEventListener('click', () => toggleFab());

            document.querySelectorAll('.fab-action').forEach(btn => {
                const action = btn.dataset.action;
                if (action) {
                    btn.addEventListener('click', () => {
                        if (typeof window[action] === 'function') window[action]();
                    });
                }
            });

            document.querySelectorAll('.card.clickable').forEach(card => {
                const action = card.dataset.action;
                if (action) {
                    card.addEventListener('click', () => {
                        if (action === 'dashboard-accounts') dashboardAction('accounts');
                        else if (action === 'dashboard-income') dashboardAction('income');
                        else if (action === 'dashboard-expense') dashboardAction('expense');
                        else if (action === 'dashboard-cards') dashboardAction('cards');
                    });
                }
            });

            document.querySelectorAll('th[data-sort]').forEach(th => {
                th.addEventListener('click', () => {
                    sortTransactions(th.dataset.sort);
                });
            });

            const prevPageBtn = document.getElementById('prevPageBtn');
            const nextPageBtn = document.getElementById('nextPageBtn');
            const pageSizeSelect = document.getElementById('pageSizeSelect');
            if (prevPageBtn) prevPageBtn.addEventListener('click', () => self.changePage(-1));
            if (nextPageBtn) nextPageBtn.addEventListener('click', () => self.changePage(1));
            if (pageSizeSelect) {
                pageSizeSelect.value = this.pageSize.toString();
                pageSizeSelect.addEventListener('change', (e) => {
                    self.pageSize = parseInt(e.target.value);
                    self.settings.pageSize = self.pageSize;
                    self.saveSettings();
                    self.currentPage = 1;
                    self.render();
                });
            }

            const loadDemoFromEmptyBtn = document.getElementById('loadDemoFromEmptyBtn');
            if (loadDemoFromEmptyBtn) loadDemoFromEmptyBtn.addEventListener('click', () => self.loadDemoData());

            const closeNegativeAlertBtn = document.getElementById('closeNegativeAlertBtn');
            if (closeNegativeAlertBtn) {
                closeNegativeAlertBtn.addEventListener('click', () => {
                    const alert = document.getElementById('negativeBalanceAlert');
                    if (alert) alert.style.display = 'none';
                });
            }

            document.querySelectorAll('[data-close-modal]').forEach(btn => {
                btn.addEventListener('click', () => {
                    const modalId = btn.dataset.closeModal;
                    closeModal(modalId);
                });
            });

            document.querySelectorAll('.info-item[data-action], .dropdown-item[data-action]').forEach(item => {
                item.addEventListener('click', () => {
                    const action = item.dataset.action;
                    if (typeof window[action] === 'function') window[action]();
                });
            });

            document.querySelectorAll('#transactionForm .type-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    selectTransactionType(btn.dataset.type);
                });
            });

            document.querySelectorAll('#editForm .type-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    selectEditType(btn.dataset.type);
                });
            });

            const transactionForm = document.getElementById('transactionForm');
            if (transactionForm) {
                transactionForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    self.addTransaction();
                });
            }

            const editForm = document.getElementById('editForm');
            if (editForm) {
                editForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    self.updateTransaction();
                });
            }

            const transferForm = document.getElementById('transferForm');
            if (transferForm) {
                transferForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    self.saveTransfer();
                });
            }

            const accountForm = document.getElementById('accountForm');
            if (accountForm) {
                accountForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    self.saveAccount();
                });
            }

            const cardForm = document.getElementById('cardForm');
            if (cardForm) {
                cardForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    self.saveCard();
                });
            }

            const updateInvestmentForm = document.getElementById('updateInvestmentForm');
            if (updateInvestmentForm) {
                updateInvestmentForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    self.updateInvestmentValue();
                });
            }

            const deleteFromEditBtn = document.getElementById('deleteFromEditBtn');
            if (deleteFromEditBtn) deleteFromEditBtn.addEventListener('click', () => self.deleteFromEdit());

            const exportCsvBtn = document.getElementById('exportCsvBtn');
            if (exportCsvBtn) exportCsvBtn.addEventListener('click', () => self.exportCSV());

            const printExtratoBtn = document.getElementById('printExtratoBtn');
            if (printExtratoBtn) printExtratoBtn.addEventListener('click', () => self.printExtratoPDF());

            const importCsvBtn = document.getElementById('importCsvBtn');
            if (importCsvBtn) importCsvBtn.addEventListener('click', () => self.importCSV());

            const importBackupBtn = document.getElementById('importBackupBtn');
            if (importBackupBtn) importBackupBtn.addEventListener('click', () => self.importBackup());

            const newAccountBtn = document.getElementById('newAccountBtn');
            if (newAccountBtn) newAccountBtn.addEventListener('click', () => openNewAccountModal());

            const newCardBtn = document.getElementById('newCardBtn');
            if (newCardBtn) newCardBtn.addEventListener('click', () => openNewCardModal());

            const newInvestmentBtn = document.getElementById('newInvestmentBtn');
            if (newInvestmentBtn) newInvestmentBtn.addEventListener('click', () => openNewInvestmentModal());

            const printManualBtn = document.getElementById('printManualBtn');
            if (printManualBtn) printManualBtn.addEventListener('click', () => self.printManual());

            const copyPixKeyBtn = document.getElementById('copyPixKeyBtn');
            if (copyPixKeyBtn) copyPixKeyBtn.addEventListener('click', () => copyPixKey());

            const printManualFromWhatsNewBtn = document.getElementById('printManualFromWhatsNewBtn');
            if (printManualFromWhatsNewBtn) printManualFromWhatsNewBtn.addEventListener('click', () => printManualFromWhatsNew());

            const openManualFromWhatsNewBtn = document.getElementById('openManualFromWhatsNewBtn');
            if (openManualFromWhatsNewBtn) openManualFromWhatsNewBtn.addEventListener('click', () => openManualFromWhatsNew());

            const prevCardMonthBtn = document.getElementById('prevCardMonthBtn');
            const nextCardMonthBtn = document.getElementById('nextCardMonthBtn');
            const cardMonthTodayBtn = document.getElementById('cardMonthTodayBtn');
            if (prevCardMonthBtn) prevCardMonthBtn.addEventListener('click', () => changeCardMonth(-1));
            if (nextCardMonthBtn) nextCardMonthBtn.addEventListener('click', () => changeCardMonth(1));
            if (cardMonthTodayBtn) cardMonthTodayBtn.addEventListener('click', () => changeCardMonthToToday());

            const prevInvoiceBtn = document.getElementById('prevInvoiceBtn');
            const nextInvoiceBtn = document.getElementById('nextInvoiceBtn');
            if (prevInvoiceBtn) prevInvoiceBtn.addEventListener('click', () => self.navigateInvoice(-1));
            if (nextInvoiceBtn) nextInvoiceBtn.addEventListener('click', () => self.navigateInvoice(1));

            const showClearStep2Btn = document.getElementById('showClearStep2Btn');
            if (showClearStep2Btn) showClearStep2Btn.addEventListener('click', () => showClearStep2());

            const clearConfirmInput = document.getElementById('clearConfirmInput');
            if (clearConfirmInput) clearConfirmInput.addEventListener('input', () => checkClearConfirm());

            const finalClearBtn = document.getElementById('finalClearBtn');
            if (finalClearBtn) finalClearBtn.addEventListener('click', () => self.clearAllData());

            const acceptDisclaimerBtn = document.getElementById('acceptDisclaimerBtn');
            if (acceptDisclaimerBtn) acceptDisclaimerBtn.addEventListener('click', () => acceptDisclaimer());

            const startAppBtn = document.getElementById('startAppBtn');
            if (startAppBtn) startAppBtn.addEventListener('click', () => startApp());

            const csvFileInput = document.getElementById('csvFileInput');
            if (csvFileInput) csvFileInput.addEventListener('change', (e) => handleCsvFileSelect(e));

            const backupFileInput = document.getElementById('backupFileInput');
            if (backupFileInput) backupFileInput.addEventListener('change', (e) => handleBackupFileSelect(e));

            const saveSettingsBtn = document.getElementById('saveSettingsBtn');
            if (saveSettingsBtn) saveSettingsBtn.addEventListener('click', () => self.saveSettingsFromModal());

            const doBackupNowBtn = document.getElementById('doBackupNowBtn');
            if (doBackupNowBtn) doBackupNowBtn.addEventListener('click', () => self.exportBackup());

            const requestNotificationsBtn = document.getElementById('requestNotificationsBtn');
            if (requestNotificationsBtn) requestNotificationsBtn.addEventListener('click', () => self.requestNotifications());

            const settingsPageSize = document.getElementById('settingsPageSize');
            if (settingsPageSize) {
                settingsPageSize.value = this.settings.pageSize.toString();
                settingsPageSize.addEventListener('change', (e) => {
                    self.settings.pageSize = parseInt(e.target.value);
                    self.pageSize = self.settings.pageSize;
                    self.currentPage = 1;
                    self.render();
                });
            }
        }

        // ===== FOCUS TRAP =====
        setupFocusTrap() {
            document.addEventListener('keydown', (e) => {
                const activeModal = document.querySelector('.modal-front.active');
                if (!activeModal) return;

                if (e.key === 'Escape') {
                    e.preventDefault();
                    const closeBtn = activeModal.querySelector('.modal-close');
                    if (closeBtn) closeBtn.click();
                    return;
                }

                if (e.key === 'Tab') {
                    const focusable = activeModal.querySelectorAll(
                        'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
                    );
                    if (focusable.length === 0) return;
                    const first = focusable[0];
                    const last = focusable[focusable.length - 1];
                    if (e.shiftKey) {
                        if (document.activeElement === first) {
                            e.preventDefault();
                            last.focus();
                        }
                    } else {
                        if (document.activeElement === last) {
                            e.preventDefault();
                            first.focus();
                        }
                    }
                }
            });
        }

        // ===== FILTROS =====
        saveFilters() {
            const filters = {
                type: document.getElementById('typeFilter')?.value || '',
                category: document.getElementById('categoryFilter')?.value || '',
                status: document.getElementById('statusFilter')?.value || '',
                account: document.getElementById('accountFilter')?.value || '',
                card: document.getElementById('cardFilter')?.value || '',
                search: document.getElementById('searchFilter')?.value || ''
            };
            try { localStorage.setItem('smartwallet_filters', JSON.stringify(filters)); } catch(e) {}
        }

        restoreFilters() {
            try {
                const filters = JSON.parse(localStorage.getItem('smartwallet_filters') || '{}');
                if (filters.type) document.getElementById('typeFilter').value = filters.type;
                if (filters.status) document.getElementById('statusFilter').value = filters.status;
                if (filters.account) document.getElementById('accountFilter').value = filters.account;
                if (filters.card) document.getElementById('cardFilter').value = filters.card;
                if (filters.search) document.getElementById('searchFilter').value = filters.search;
                setTimeout(() => {
                    if (filters.category) document.getElementById('categoryFilter').value = filters.category;
                }, 100);
            } catch(e) {}
        }

        clearDashboardHighlight() {
            document.querySelectorAll('.card.clickable').forEach(c => c.classList.remove('active-filter'));
        }

        setDefaultDate() {
            const el = document.getElementById('date');
            if (el) el.value = new Date().toISOString().split('T')[0];
        }

        changeMonth(delta) {
            this.currentMonth.setMonth(this.currentMonth.getMonth() + delta);
            this.updateMonthDisplay();
            this.clearCache();
            this.clearDashboardHighlight();
            this.currentPage = 1;
            this.render();
            this.updateCharts();
        }

        updateMonthDisplay() {
            const months = this.getMonths();
            const el = document.getElementById('currentMonth');
            if (el && months) {
                el.textContent = months[this.currentMonth.getMonth()] + ' ' + this.currentMonth.getFullYear();
            }
        }

        formatMonthYear(date) {
            if (!date) date = this.currentMonth;
            return String(date.getMonth() + 1).padStart(2, '0') + '-' + date.getFullYear();
        }

        generateTimestamp() {
            const now = new Date();
            return 'SmartWallet-' + now.getFullYear() +
                String(now.getMonth() + 1).padStart(2, '0') +
                String(now.getDate()).padStart(2, '0') +
                String(now.getHours()).padStart(2, '0') +
                String(now.getMinutes()).padStart(2, '0') +
                String(now.getSeconds()).padStart(2, '0');
        }

        // ===== PAGINAÇÃO =====
        changePage(delta) {
            const filtered = this.getFilteredTransactions();
            const totalPages = this.pageSize > 0 ? Math.ceil(filtered.length / this.pageSize) : 1;
            this.currentPage = Math.max(1, Math.min(totalPages, this.currentPage + delta));
            this.render();
        }

        renderPagination(totalItems) {
            const controls = document.getElementById('paginationControls');
            const prevBtn = document.getElementById('prevPageBtn');
            const nextBtn = document.getElementById('nextPageBtn');
            const info = document.getElementById('paginationInfo');
            
            if (!controls || !prevBtn || !nextBtn || !info) return;
            
            if (this.pageSize === 0 || totalItems === 0) {
                controls.style.display = 'none';
                return;
            }
            
            const totalPages = Math.ceil(totalItems / this.pageSize);
            if (totalPages <= 1) {
                controls.style.display = 'none';
                return;
            }
            
            controls.style.display = 'flex';
            const from = (this.currentPage - 1) * this.pageSize + 1;
            const to = Math.min(this.currentPage * this.pageSize, totalItems);
            
            info.textContent = this.t('showingItems', { from, to, total: totalItems }) + 
                ' • ' + this.t('pageOf', { current: this.currentPage, total: totalPages });
            
            prevBtn.disabled = this.currentPage === 1;
            nextBtn.disabled = this.currentPage === totalPages;
            prevBtn.textContent = '← ' + this.t('previous');
            nextBtn.textContent = this.t('next') + ' →';
        }

        // ===== SALDO NEGATIVO =====
        checkNegativeBalance() {
            if (!this.settings.alertNegativeBalance) {
                const alert = document.getElementById('negativeBalanceAlert');
                if (alert) alert.style.display = 'none';
                return;
            }
            
            const negativeAccounts = this.accounts.filter(a => 
                a.type === 'checking' && (parseFloat(a.balance) || 0) < 0
            );
            
            const alert = document.getElementById('negativeBalanceAlert');
            const message = document.getElementById('negativeBalanceMessage');
            
            if (negativeAccounts.length > 0 && alert && message) {
                const names = negativeAccounts.map(a => a.name).join(', ');
                message.textContent = this.t('negativeBalanceAlert', { count: negativeAccounts.length }) + ' (' + names + ')';
                alert.style.display = 'block';
            } else if (alert) {
                alert.style.display = 'none';
            }
        }

        // ===== BACKUP AUTOMÁTICO =====
        checkAutoBackup() {
            if (!this.settings.autoBackupEnabled) return;
            
            const lastBackup = localStorage.getItem('smartwallet_last_backup');
            const now = Date.now();
            const weekMs = 7 * 24 * 60 * 60 * 1000;
            
            if (!lastBackup || (now - parseInt(lastBackup)) > weekMs) {
                if (this.transactions.length > 10) {
                    setTimeout(() => {
                        this.showToast(this.t('autoBackupSuggested'));
                    }, 3000);
                }
            }
        }

        // ===== MODO DEMONSTRAÇÃO =====
        async toggleDemoMode() {
            if (this.demoMode) {
                const confirmed = await showConfirm(
                    '⚠️ Encerrar Demonstração?',
                    'Encerrar modo demonstração e limpar todos os dados?<br><br>Esta ação não pode ser desfeita.'
                );
                
                if (confirmed) {
                    this.clearAllData(true);
                    this.demoMode = false;
                    localStorage.setItem('smartwallet_demo', 'false');
                    this.applyDemoBadge();
                    this.showToast(this.t('demoCleared'));
                }
            } else {
                const confirmed = await showConfirm(
                    '🎯 Carregar Demonstração?',
                    'Carregar dados de exemplo?<br><br>Seus dados atuais serão substituídos pelos dados de demonstração.<br><br>Recomendamos fazer backup antes de continuar.'
                );
                
                if (confirmed) {
                    this.loadDemoData();
                }
            }
        }

        loadDemoData() {
            this.accounts = [
                { id: 'acc1', name: 'Conta Corrente Principal', type: 'checking', balance: 3500, color: '#6366f1' },
                { id: 'acc2', name: 'Poupança', type: 'checking', balance: 8200, color: '#10b981' },
                { id: 'acc3', name: 'Investimentos', type: 'investment', balance: 39000, color: '#f59e0b' }
            ];
            
            this.cards = [
                { id: 'card1', name: 'Nubank', brand: 'Mastercard', last4: '4532', closingDay: 15, dueDay: 22, limit: 5000, color: '#8b5cf6' },
                { id: 'card2', name: 'Inter', brand: 'Visa', last4: '8821', closingDay: 20, dueDay: 27, limit: 3000, color: '#f97316' }
            ];
            
            this.transactions = [];
            const today = new Date();
            
            for (let m = 0; m < 6; m++) {
                const month = new Date(today.getFullYear(), today.getMonth() - m, 1);
                
                this.transactions.push({
                    id: this.generateUniqueId() + '_sal_' + m,
                    date: new Date(month.getFullYear(), month.getMonth(), 5).toISOString().split('T')[0],
                    amount: 5000,
                    category: 'salario',
                    description: 'Salário Mensal',
                    statusOk: true,
                    paymentMethod: 'pix',
                    accountId: 'acc1'
                });
                
                this.transactions.push({
                    id: this.generateUniqueId() + '_alg_' + m,
                    date: new Date(month.getFullYear(), month.getMonth(), 10).toISOString().split('T')[0],
                    amount: -1500,
                    category: 'casa',
                    description: 'Aluguel Apartamento',
                    statusOk: true,
                    paymentMethod: 'auto',
                    accountId: 'acc1'
                });
                
                for (let d = 0; d < 4; d++) {
                    this.transactions.push({
                        id: this.generateUniqueId() + '_sup_' + m + '_' + d,
                        date: new Date(month.getFullYear(), month.getMonth(), 3 + d * 7).toISOString().split('T')[0],
                        amount: -(200 + Math.floor(Math.random() * 300)),
                        category: 'despensa',
                        description: 'Supermercado - Compra ' + (d + 1),
                        statusOk: true,
                        paymentMethod: 'card:card1',
                        accountId: 'acc1'
                    });
                }
                
                this.transactions.push({
                    id: this.generateUniqueId() + '_trans_' + m,
                    date: new Date(month.getFullYear(), month.getMonth(), 15).toISOString().split('T')[0],
                    amount: -350,
                    category: 'transporte',
                    description: 'Combustível + Uber',
                    statusOk: true,
                    paymentMethod: 'debit',
                    accountId: 'acc1'
                });
                
                this.transactions.push({
                    id: this.generateUniqueId() + '_laz_' + m,
                    date: new Date(month.getFullYear(), month.getMonth(), 20).toISOString().split('T')[0],
                    amount: -400,
                    category: 'lazer',
                    description: 'Cinema + Restaurante',
                    statusOk: true,
                    paymentMethod: 'card:card2',
                    accountId: 'acc1'
                });
                
                // Aplicação mensal para conta de investimento
                this.transactions.push({
                    id: this.generateUniqueId() + '_inv_' + m,
                    date: new Date(month.getFullYear(), month.getMonth(), 25).toISOString().split('T')[0],
                    amount: -1000,
                    category: 'reserva_aplicacao',
                    description: 'Aporte mensal investimentos',
                    statusOk: true,
                    paymentMethod: 'transfer',
                    accountId: 'acc1'
                });
            }
            
            this.demoMode = true;
            localStorage.setItem('smartwallet_demo', 'true');
            
            this.clearCache();
            this.saveTransactions();
            this.saveAccounts();
            this.saveCards();
            
            this.applyDemoBadge();
            this.populateCategorySelects();
            this.populatePaymentMethodSelects();
            this.populateAccountSelects();
            this.populateCardFilter();
            this.render();
            this.updateCharts();
            this.updateAlertBadge();
            this.checkNegativeBalance();
            
            this.showToast(this.t('demoLoaded'));
        }

        // ===== NOTIFICAÇÕES =====
        requestNotifications() {
            if (!('Notification' in window)) {
                this.showToast(this.t('notificationsNotSupported'));
                return;
            }
            
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    this.settings.notifyBills = true;
                    this.saveSettings();
                    this.updateSettingsUI();
                    this.showToast(this.t('notificationsEnabled'));
                    
                    new Notification('Smart Wallet', {
                        body: 'Notificações ativadas com sucesso!',
                        icon: 'favicon.svg'
                    });
                } else {
                    this.showToast(this.t('notificationsDenied'));
                }
            });
        }

        // ===== SALVAR CONFIGURAÇÕES DO MODAL =====
        saveSettingsFromModal() {
            this.settings.alertNegativeBalance = document.getElementById('alertNegativeBalance').checked;
            this.settings.blockNegativeBalance = document.getElementById('blockNegativeBalance').checked;
            this.settings.autoBackupEnabled = document.getElementById('autoBackupEnabled').checked;
            this.settings.notifyBills = document.getElementById('notifyBills').checked;
            this.settings.pageSize = parseInt(document.getElementById('settingsPageSize').value);
            
            this.pageSize = this.settings.pageSize;
            this.currentPage = 1;
            
            this.saveSettings();
            this.checkNegativeBalance();
            this.render();
            
            closeModal('settingsModal');
            this.showToast(this.t('settingsSaved'));
        }

        updateSettingsUI() {
            const alertNeg = document.getElementById('alertNegativeBalance');
            const blockNeg = document.getElementById('blockNegativeBalance');
            const autoBackup = document.getElementById('autoBackupEnabled');
            const notifyBills = document.getElementById('notifyBills');
            const pageSize = document.getElementById('settingsPageSize');
            const lastBackupDate = document.getElementById('lastBackupDate');
            const notificationsStatus = document.getElementById('notificationsStatus');
            
            if (alertNeg) alertNeg.checked = this.settings.alertNegativeBalance;
            if (blockNeg) blockNeg.checked = this.settings.blockNegativeBalance;
            if (autoBackup) autoBackup.checked = this.settings.autoBackupEnabled;
            if (notifyBills) {
                notifyBills.checked = this.settings.notifyBills;
                notifyBills.disabled = !('Notification' in window) || Notification.permission !== 'granted';
            }
            if (pageSize) pageSize.value = this.settings.pageSize.toString();
            
            if (lastBackupDate) {
                const lastBackup = localStorage.getItem('smartwallet_last_backup');
                if (lastBackup) {
                    const date = new Date(parseInt(lastBackup));
                    lastBackupDate.textContent = this.t('lastBackup', { date: date.toLocaleString(this.getLanguage()) });
                } else {
                    lastBackupDate.textContent = this.t('neverBackedUp');
                }
            }
            
            if (notificationsStatus) {
                if (!('Notification' in window)) {
                    notificationsStatus.textContent = '❌ Não suportado';
                } else if (Notification.permission === 'granted') {
                    notificationsStatus.textContent = '✅ Ativado';
                } else if (Notification.permission === 'denied') {
                    notificationsStatus.textContent = '❌ Bloqueado';
                } else {
                    notificationsStatus.textContent = '⏳ Pendente';
                }
            }
        }

        // ===== GRÁFICO WATERFALL =====
        renderWaterfallChart() {
            const canvas = document.getElementById('waterfallChart');
            if (!canvas) return;
            
            const months = this.getMonths('short');
            const labels = [];
            const incomeData = [];
            const expenseData = [];
            const balanceData = [];
            
            let runningBalance = 0;
            
            for (let i = -5; i <= 0; i++) {
                const d = new Date(this.currentMonth);
                d.setMonth(d.getMonth() + i);
                labels.push(months[d.getMonth()] + '/' + d.getFullYear());
                
                const mt = this.getMonthTransactions(d);
                let inc = 0, exp = 0;
                mt.forEach(t => {
                    if (t.amount > 0) inc += t.amount;
                    else exp += Math.abs(t.amount);
                });
                
                incomeData.push(inc);
                expenseData.push(exp);
                runningBalance += (inc - exp);
                balanceData.push(runningBalance);
            }
            
            const colors = this.getChartColors();
            
            if (this.charts.waterfall) {
                this.charts.waterfall.destroy();
            }
            
            this.charts.waterfall = new Chart(canvas.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Receitas',
                            data: incomeData,
                            backgroundColor: 'rgba(16, 185, 129, 0.7)',
                            borderColor: '#10b981',
                            borderWidth: 1,
                            stack: 'stack1'
                        },
                        {
                            label: 'Despesas',
                            data: expenseData.map(v => -v),
                            backgroundColor: 'rgba(239, 68, 68, 0.7)',
                            borderColor: '#ef4444',
                            borderWidth: 1,
                            stack: 'stack1'
                        },
                        {
                            label: 'Saldo Acumulado',
                            data: balanceData,
                            type: 'line',
                            borderColor: '#6366f1',
                            backgroundColor: 'rgba(99, 102, 241, 0.1)',
                            borderWidth: 3,
                            fill: true,
                            tension: 0.4,
                            yAxisID: 'y1'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: { color: colors.text }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = context.dataset.label || '';
                                    if (label) label += ': ';
                                    const value = Math.abs(context.parsed.y);
                                    label += smartwallet.formatCurrency(value);
                                    return label;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            stacked: true,
                            ticks: { color: colors.textSecondary },
                            grid: { color: colors.grid }
                        },
                        y1: {
                            position: 'right',
                            ticks: { color: colors.textSecondary },
                            grid: { display: false }
                        },
                        x: {
                            stacked: true,
                            ticks: { color: colors.textSecondary },
                            grid: { color: colors.grid }
                        }
                    }
                }
            });
        }
        // ===== TRANSAÇÕES DO MÊS =====
        getMonthTransactions(date) {
            if (!date) date = this.currentMonth;
            if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
                date = new Date();
                date.setDate(1);
                date.setHours(0, 0, 0, 0);
                this.currentMonth = date;
            }
            const key = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0');
            if (!this._cache.monthTransactions) this._cache.monthTransactions = {};
            if (this._cache.monthTransactions[key]) return this._cache.monthTransactions[key];
            const m = date.getMonth(), y = date.getFullYear();
            const result = this.transactions.filter(t => {
                const d = new Date(t.date + 'T12:00:00');
                return d.getMonth() === m && d.getFullYear() === y;
            });
            this._cache.monthTransactions[key] = result;
            return result;
        }

        getCardTransactions(cardId, date) {
            if (!date) date = this.currentMonth;
            const m = date.getMonth(), y = date.getFullYear();
            return this.transactions.filter(t => {
                if (t.paymentMethod !== 'card:' + cardId || t.amount >= 0) return false;
                const d = new Date(t.date + 'T12:00:00');
                return d.getMonth() === m && d.getFullYear() === y;
            });
        }

        getCardTransactionsForPeriod(cardId, startDate, closingDate) {
            const start = new Date(startDate); start.setHours(0, 0, 0, 0);
            const end = new Date(closingDate); end.setHours(23, 59, 59, 999);
            return this.transactions.filter(t => {
                if (t.paymentMethod !== 'card:' + cardId) return false;
                if (t.amount >= 0) return false;
                const tDate = new Date(t.date + 'T12:00:00');
                return tDate >= start && tDate <= end;
            });
        }

        // ===== POPULAR SELECTS =====
        populateCategorySelects() {
            const self = this;
            ['category', 'editCategory', 'categoryFilter'].forEach((id, i) => {
                const sel = document.getElementById(id);
                if (!sel) return;
                const val = sel.value;
                sel.innerHTML = i === 2
                    ? '<option value="">' + self.t('allCategories') + '</option>'
                    : '<option value="">' + self.t('selectCategory') + '</option>';
                self.categories.forEach(cat => {
                    const opt = document.createElement('option');
                    opt.value = cat.id;
                    opt.textContent = cat.name;
                    opt.dataset.type = cat.type;
                    sel.appendChild(opt);
                });
                sel.value = val;
            });
            this.filterCategoriesByType('category', this.currentTransactionType);
            const typeFilter = document.getElementById('typeFilter');
            if (typeFilter) this.filterCategoriesByType('categoryFilter', typeFilter.value);
        }

        populatePaymentMethodSelects() {
            const self = this;
            ['paymentMethod', 'editPaymentMethod'].forEach(id => {
                const sel = document.getElementById(id);
                if (!sel) return;
                const currentVal = sel.value;
                sel.innerHTML = '<option value="">' + self.t('selectPayment') + '</option>';
                const group = document.createElement('optgroup');
                group.label = '💰 Formas de Pagamento';
                PAYMENT_METHODS.forEach(pm => {
                    const opt = document.createElement('option');
                    opt.value = pm.id;
                    opt.textContent = pm.icon + ' ' + pm.name;
                    group.appendChild(opt);
                });
                sel.appendChild(group);
                if (self.cards.length > 0) {
                    const cardGroup = document.createElement('optgroup');
                    cardGroup.label = '💳 Cartões de Crédito';
                    self.cards.forEach(card => {
                        const opt = document.createElement('option');
                        opt.value = 'card:' + card.id;
                        opt.textContent = '💳 ' + card.name + ' •••• ' + (card.last4 || '****');
                        cardGroup.appendChild(opt);
                    });
                    sel.appendChild(cardGroup);
                }
                sel.value = currentVal;
            });
        }

        populateAccountSelects() {
            const self = this;
            ['transactionAccount', 'editTransactionAccount', 'accountFilter', 'transferFrom', 'transferTo'].forEach(id => {
                const sel = document.getElementById(id);
                if (!sel) return;
                const val = sel.value;
                const isFilter = id === 'accountFilter';
                sel.innerHTML = isFilter
                    ? '<option value="">' + self.t('allAccounts') + '</option>'
                    : '<option value="">' + self.t('selectAccount') + '</option>';
                self.accounts.forEach(acc => {
                    const opt = document.createElement('option');
                    opt.value = acc.id;
                    opt.textContent = (acc.type === 'checking' ? '💳 ' : '📈 ') + acc.name;
                    sel.appendChild(opt);
                });
                sel.value = val;
            });
        }

        populateCardFilter() {
            const sel = document.getElementById('cardFilter');
            if (!sel) return;
            const val = sel.value;
            sel.innerHTML = '<option value="">' + this.t('allCards') + '</option>';
            this.cards.forEach(card => {
                const opt = document.createElement('option');
                opt.value = 'card:' + card.id;
                opt.textContent = '💳 ' + card.name;
                sel.appendChild(opt);
            });
            sel.value = val;
        }

        filterCategoriesByType(selectId, type) {
            const sel = document.getElementById(selectId);
            if (!sel) return;
            sel.querySelectorAll('option').forEach(opt => {
                if (opt.value === '') opt.style.display = 'block';
                else opt.style.display = (!type || opt.dataset.type === type) ? 'block' : 'none';
            });
            const currentVal = sel.value;
            if (currentVal) {
                const currentOpt = sel.querySelector('option[value="' + currentVal + '"]');
                if (currentOpt && currentOpt.style.display === 'none') sel.value = '';
            }
        }

        // ===== GETTERS =====
        getCategoryById(id) {
            if (!id) return { id: 'unknown', name: 'Sem categoria', color: '#6b7280', type: 'expense' };
            for (let i = 0; i < this.categories.length; i++) {
                if (this.categories[i].id === id) return this.categories[i];
            }
            return { id: 'unknown', name: 'Sem categoria', color: '#6b7280', type: 'expense' };
        }

        findCategoryByName(name) {
            if (!name) return null;
            const lower = name.toLowerCase();
            for (let i = 0; i < this.categories.length; i++) {
                if (this.categories[i].name.toLowerCase() === lower) return this.categories[i];
            }
            return null;
        }

        getCardById(id) {
            if (!id) return null;
            for (let i = 0; i < this.cards.length; i++) {
                if (this.cards[i].id === id) return this.cards[i];
            }
            return null;
        }

        getAccountById(id) {
            if (!id) return null;
            for (let i = 0; i < this.accounts.length; i++) {
                if (this.accounts[i].id === id) return this.accounts[i];
            }
            return null;
        }

        getPaymentMethodName(method) {
            if (!method) return '-';
            if (method.indexOf('card:') === 0) {
                const card = this.getCardById(method.replace('card:', ''));
                return card ? '💳 ' + card.name : 'Cartão removido';
            }
            for (let i = 0; i < PAYMENT_METHODS.length; i++) {
                if (PAYMENT_METHODS[i].id === method) return PAYMENT_METHODS[i].icon + ' ' + PAYMENT_METHODS[i].name;
            }
            return method;
        }

        formatDate(d) {
            if (!d) return '';
            return new Date(d + 'T12:00:00').toLocaleDateString(this.getLanguage());
        }

        escapeHtml(t) {
            if (t === null || t === undefined) return '';
            const div = document.createElement('div');
            div.textContent = String(t);
            return div.innerHTML;
        }

        showToast(msg) {
            const t = document.getElementById('toast');
            if (!t) return;
            t.textContent = msg;
            t.classList.add('active');
            clearTimeout(this.toastT);
            this.toastT = setTimeout(() => t.classList.remove('active'), 3000);
        }

        // ===== DASHBOARD =====
        updateDashboard() {
            if (!this.currentMonth || !(this.currentMonth instanceof Date) || isNaN(this.currentMonth.getTime())) {
                this.currentMonth = new Date();
                this.currentMonth.setDate(1);
                this.currentMonth.setHours(0, 0, 0, 0);
            }
            const mt = this.getMonthTransactions();
            let inc = 0, exp = 0;
            mt.forEach(t => { if (t.amount > 0) inc += t.amount; else exp += t.amount; });

            // CORREÇÃO v4.4.3: Saldo unificado = APENAS contas correntes (checking)
            // Contas de investimento são separadas e consultadas apenas no menu Aplicações
            let unifiedBalance = 0;
            this.accounts.forEach(a => {
                if (a.type === 'checking') unifiedBalance += (parseFloat(a.balance) || 0);
            });

            let creditCardTotal = 0;
            const self = this;
            this.cards.forEach(card => {
                const cardTrans = self.getCardTransactions(card.id);
                cardTrans.forEach(t => { creditCardTotal += Math.abs(t.amount); });
            });

            const balEl = document.getElementById('totalBalance');
            if (balEl) {
                balEl.textContent = this.formatCurrency(unifiedBalance);
                balEl.className = 'card-value privacy-value ' + (unifiedBalance >= 0 ? 'positive' : 'negative');
            }
            const incEl = document.getElementById('totalIncome');
            if (incEl) incEl.textContent = this.formatCurrency(inc);
            const expEl = document.getElementById('totalExpenses');
            if (expEl) expEl.textContent = this.formatCurrency(Math.abs(exp));
            const goalEl = document.getElementById('goalProgress');
            if (goalEl) {
                goalEl.textContent = this.formatCurrency(creditCardTotal);
                goalEl.className = 'card-value privacy-value negative';
            }
        }

        // ===== RENDERIZAÇÃO =====
        render() {
            this.updateDashboard();
            const tbody = document.getElementById('transactionsTable');
            const empty = document.getElementById('emptyState');
            if (!tbody) return;

            const filtered = this.getFilteredTransactions();
            if (!filtered.length) {
                tbody.innerHTML = '';
                if (empty) empty.style.display = 'block';
                this.renderPagination(0);
                return;
            }
            if (empty) empty.style.display = 'none';

            const sorted = filtered.slice().sort((a, b) => this.compareTransactions(a, b));
            
            let paginated = sorted;
            if (this.pageSize > 0) {
                const start = (this.currentPage - 1) * this.pageSize;
                const end = start + this.pageSize;
                paginated = sorted.slice(start, end);
            }

            const incomeGroup = paginated.filter(t => t.amount > 0);
            const expenseGroup = paginated.filter(t => t.amount < 0);

            let totalIncome = 0, totalExpense = 0;
            incomeGroup.forEach(t => totalIncome += t.amount);
            expenseGroup.forEach(t => totalExpense += t.amount);

            const fragment = document.createDocumentFragment();
            const isMobile = window.innerWidth <= 640;
            const self = this;

            if (incomeGroup.length > 0) {
                const incomeLabel = document.createElement('tr');
                incomeLabel.innerHTML = '<td colspan="' + (isMobile ? 1 : 7) + '" class="transactions-group-label income"><span>' + this.t('incomeGroup') + ' (' + incomeGroup.length + ')</span><span class="group-total">+ ' + this.formatCurrency(totalIncome) + '</span></td>';
                fragment.appendChild(incomeLabel);
                incomeGroup.forEach(t => {
                    fragment.appendChild(self.createTransactionRow(t, isMobile));
                });
            }

            if (expenseGroup.length > 0) {
                const expenseLabel = document.createElement('tr');
                expenseLabel.innerHTML = '<td colspan="' + (isMobile ? 1 : 7) + '" class="transactions-group-label expense"><span>' + this.t('expenseGroup') + ' (' + expenseGroup.length + ')</span><span class="group-total">- ' + this.formatCurrency(Math.abs(totalExpense)) + '</span></td>';
                fragment.appendChild(expenseLabel);
                expenseGroup.forEach(t => {
                    fragment.appendChild(self.createTransactionRow(t, isMobile));
                });
            }

            tbody.innerHTML = '';
            tbody.appendChild(fragment);
            this.updateSortIndicators();
            this.renderPagination(filtered.length);
        }

        createTransactionRow(t, isMobile) {
            const cat = this.getCategoryById(t.category);
            const acc = this.getAccountById(t.accountId);
            const cls = t.amount >= 0 ? 'positive' : 'negative';
            const statusClass = t.statusOk ? 'status-done' : 'status-pending';
            const statusText = t.statusOk ? this.t('completed') : this.t('pending');
            const paymentName = this.getPaymentMethodName(t.paymentMethod);

            let recurrenceHtml = '-';
            if (t.recurrence) {
                if (t.recurrence.type === 'installment') recurrenceHtml = '<span class="recurrence-badge">📅 ' + (t.recurrence.current || 1) + '/' + (t.recurrence.total || 1) + '</span>';
                else if (t.recurrence.type === 'monthly') recurrenceHtml = '<span class="recurrence-badge">🔁 Mensal</span>';
                else if (t.recurrence.type === 'yearly') recurrenceHtml = '<span class="recurrence-badge">📅 Anual</span>';
            }

            const tr = document.createElement('tr');
            tr.className = 'transaction-row';
            tr.dataset.id = t.id;
            tr.onclick = function() { smartwallet.editTransaction(t.id); };

            let rowHtml = '';
            if (isMobile) {
                rowHtml += '<div class="swipe-actions"><div class="swipe-action complete">✓ Paga</div><div class="swipe-action delete">🗑️ Excluir</div></div>';
            }
            rowHtml += '<td data-label="Data">' + this.formatDate(t.date) + '</td>' +
                '<td data-label="Descrição">' + this.escapeHtml(t.description || '-') + '</td>' +
                '<td data-label="Categoria"><span class="category-badge" style="background:' + cat.color + '">' + this.escapeHtml(cat.name) + '</span></td>' +
                '<td data-label="Conta">' + (acc ? '<span class="account-badge">' + this.escapeHtml(acc.name) + '</span>' : '-') + '</td>' +
                '<td data-label="Pagamento"><span class="payment-badge">' + paymentName + '</span></td>' +
                '<td data-label="Status"><span class="status-badge ' + statusClass + '">' + statusText + '</span></td>' +
                '<td data-label="Valor" class="amount ' + cls + ' privacy-value">' + this.formatCurrency(t.amount) + '</td>';

            tr.innerHTML = rowHtml;
            return tr;
        }

        updateSortIndicators() {
            document.querySelectorAll('th[data-sort]').forEach(th => {
                th.classList.remove('sort-asc', 'sort-desc');
                if (th.dataset.sort === this.sortColumn) {
                    th.classList.add(this.sortDirection === 'asc' ? 'sort-asc' : 'sort-desc');
                }
            });
        }

        compareTransactions(a, b) {
            const col = this.sortColumn;
            const dir = this.sortDirection === 'asc' ? 1 : -1;
            let va, vb;

            switch(col) {
                case 'date':
                    va = new Date(a.date).getTime();
                    vb = new Date(b.date).getTime();
                    break;
                case 'description':
                    va = (a.description || '').toLowerCase();
                    vb = (b.description || '').toLowerCase();
                    break;
                case 'category':
                    va = this.getCategoryById(a.category).name.toLowerCase();
                    vb = this.getCategoryById(b.category).name.toLowerCase();
                    break;
                case 'account':
                    const accA = this.getAccountById(a.accountId);
                    const accB = this.getAccountById(b.accountId);
                    va = (accA ? accA.name : '').toLowerCase();
                    vb = (accB ? accB.name : '').toLowerCase();
                    break;
                case 'payment':
                    va = this.getPaymentMethodName(a.paymentMethod).toLowerCase();
                    vb = this.getPaymentMethodName(b.paymentMethod).toLowerCase();
                    break;
                case 'status':
                    va = a.statusOk ? 1 : 0;
                    vb = b.statusOk ? 1 : 0;
                    break;
                case 'amount':
                    va = a.amount;
                    vb = b.amount;
                    break;
                default:
                    va = a.id;
                    vb = b.id;
            }

            if (va < vb) return -1 * dir;
            if (va > vb) return 1 * dir;
            return 0;
        }

        getFilteredTransactions() {
            const search = (document.getElementById('searchFilter')?.value || '').toLowerCase();
            const catFilter = document.getElementById('categoryFilter')?.value || '';
            const typeFilter = document.getElementById('typeFilter')?.value || '';
            const statusFilter = document.getElementById('statusFilter')?.value || '';
            const accountFilter = document.getElementById('accountFilter')?.value || '';
            const cardFilter = document.getElementById('cardFilter')?.value || '';
            const self = this;

            return this.getMonthTransactions().filter(t => {
                const cat = self.getCategoryById(t.category);
                const matchSearch = !search || (t.description || '').toLowerCase().indexOf(search) !== -1 || cat.name.toLowerCase().indexOf(search) !== -1;
                const matchCat = !catFilter || t.category === catFilter;
                const matchType = !typeFilter || (typeFilter === 'income' ? t.amount > 0 : t.amount < 0);
                const matchStatus = !statusFilter || (statusFilter === 'done' ? t.statusOk : !t.statusOk);
                const matchAccount = !accountFilter || t.accountId === accountFilter;
                const matchCard = !cardFilter || t.paymentMethod === cardFilter;
                return matchSearch && matchCat && matchType && matchStatus && matchAccount && matchCard;
            });
        }

        generateUniqueId() {
            if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
            return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
        }

        // ===== SALDO DA CONTA =====
        updateAccountBalance(accountId, amount) {
            if (!accountId) return;
            const acc = this.getAccountById(accountId);
            if (!acc) return;
            
            const newBalance = (parseFloat(acc.balance) || 0) + amount;
            if (this.settings.blockNegativeBalance && newBalance < 0 && amount < 0) {
                this.showToast(this.t('negativeBalanceBlocked'));
                return false;
            }
            
            acc.balance = newBalance;
            this.saveAccounts();
            return true;
        }
        // ===== ADICIONAR TRANSAÇÃO =====
        addTransaction() {
            const fields = [
                { id: 'date', label: this.t('selectDate'), required: true },
                { id: 'amount', label: this.t('invalidAmount'), required: true, type: 'number', min: 0.01 },
                { id: 'category', label: this.t('selectCategory'), required: true },
                { id: 'paymentMethod', label: this.t('selectPayment'), required: true },
                { id: 'transactionAccount', label: this.t('selectAccount'), required: true }
            ];

            if (!this.validateForm(fields)) return;

            const date = document.getElementById('date').value;
            const amount = parseFloat(document.getElementById('amount').value);
            const category = document.getElementById('category').value;
            const description = document.getElementById('description').value;
            const statusOk = document.getElementById('statusOk').checked;
            const paymentMethod = document.getElementById('paymentMethod').value;
            const accountId = document.getElementById('transactionAccount').value;
            const isRecurring = document.getElementById('recurring').checked;
            const signedAmount = this.currentTransactionType === 'expense' ? -Math.abs(amount) : Math.abs(amount);

            // Verificar saldo negativo antes de adicionar
            if (this.settings.blockNegativeBalance && signedAmount < 0) {
                const acc = this.getAccountById(accountId);
                if (acc) {
                    const newBalance = (parseFloat(acc.balance) || 0) + signedAmount;
                    if (newBalance < 0) {
                        this.showToast(this.t('negativeBalanceBlocked'));
                        return;
                    }
                }
            }

            if (isRecurring) {
                const recurrenceType = document.getElementById('recurrenceType').value;
                const recurrenceCount = parseInt(document.getElementById('recurrenceCount').value);
                if (recurrenceCount < 2) { 
                    this.showToast('❌ ' + this.t('minInstallments')); 
                    return; 
                }
                const startDate = new Date(date + 'T12:00:00');
                const recurrenceGroupId = this.generateUniqueId();
                let createdCount = 0;
                
                for (let i = 0; i < recurrenceCount; i++) {
                    const transDate = new Date(startDate);
                    if (recurrenceType === 'monthly' || recurrenceType === 'installment') {
                        transDate.setMonth(startDate.getMonth() + i);
                        const lastDay = new Date(transDate.getFullYear(), transDate.getMonth() + 1, 0).getDate();
                        transDate.setDate(startDate.getDate() > lastDay ? lastDay : startDate.getDate());
                    } else if (recurrenceType === 'yearly') {
                        transDate.setFullYear(startDate.getFullYear() + i);
                        const lastDay = new Date(transDate.getFullYear(), transDate.getMonth() + 1, 0).getDate();
                        transDate.setDate(startDate.getDate() > lastDay ? lastDay : startDate.getDate());
                    }
                    let transDescription = description;
                    if (recurrenceType === 'installment') {
                        transDescription = description + ' - Parcela ' + (i + 1) + '/' + recurrenceCount;
                    }
                    const uniqueId = this.generateUniqueId() + '_' + i;
                    this.transactions.push({
                        id: uniqueId, 
                        date: transDate.toISOString().split('T')[0], 
                        amount: signedAmount,
                        category: category, 
                        description: transDescription, 
                        statusOk: statusOk,
                        paymentMethod: paymentMethod, 
                        accountId: accountId,
                        recurrence: { 
                            groupId: recurrenceGroupId, 
                            type: recurrenceType, 
                            total: recurrenceCount, 
                            current: i + 1 
                        }
                    });
                    createdCount++;
                }
                
                // CORREÇÃO v4.4.3: Atualizar saldo de TODAS as parcelas no mês atual
                const currentMonth = this.currentMonth.getMonth();
                const currentYear = this.currentMonth.getFullYear();
                const monthTrans = this.transactions.filter(t => {
                    if (t.accountId !== accountId) return false;
                    if (!t.recurrence || t.recurrence.groupId !== recurrenceGroupId) return false;
                    const d = new Date(t.date);
                    return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
                });
                
                if (monthTrans.length > 0) {
                    let monthTotal = 0;
                    monthTrans.forEach(t => monthTotal += t.amount);
                    this.updateAccountBalance(accountId, monthTotal);
                }
                
                this.clearCache(); 
                this.saveTransactions(); 
                this.render(); 
                this.updateCharts(); 
                this.updateAlertBadge();
                this.showToast('✅ ' + createdCount + ' ' + this.t('recurringCreated'));
                closeModal('newTransactionModal'); 
                this.clearForm();
                this.checkNegativeBalance();
                return;
            }

            const transaction = {
                id: this.generateUniqueId(), 
                date: date, 
                amount: signedAmount,
                category: category, 
                description: description, 
                statusOk: statusOk,
                paymentMethod: paymentMethod, 
                accountId: accountId
            };
            this.transactions.push(transaction);
            const success = this.updateAccountBalance(accountId, signedAmount);
            if (!success) {
                this.transactions.pop();
                return;
            }
            this.clearCache(); 
            this.saveTransactions(); 
            this.render(); 
            this.updateCharts(); 
            this.updateAlertBadge();
            this.showToast('✅ ' + this.t('transactionAdded'));
            closeModal('newTransactionModal'); 
            this.clearForm();
            this.checkNegativeBalance();
        }

        clearForm() {
            const form = document.getElementById('transactionForm');
            if (form) form.reset();
            this.setDefaultDate();
            this.currentTransactionType = 'expense';
            document.querySelectorAll('#transactionForm .type-btn').forEach(b => {
                b.classList.toggle('active', b.getAttribute('data-type') === 'expense');
            });
            this.filterCategoriesByType('category', 'expense');
            const recurringOptions = document.getElementById('recurringOptions');
            if (recurringOptions) recurringOptions.style.display = 'none';
        }

        editTransaction(id) {
            const t = this.transactions.find(x => x.id === id);
            if (!t) return;
            this.currentEditId = id;
            this.currentEditType = t.amount > 0 ? 'income' : 'expense';
            document.getElementById('editId').value = t.id;
            document.getElementById('editDate').value = t.date;
            document.getElementById('editAmount').value = Math.abs(t.amount);
            document.getElementById('editCategory').value = t.category || '';
            document.getElementById('editPaymentMethod').value = t.paymentMethod || '';
            document.getElementById('editTransactionAccount').value = t.accountId || '';
            document.getElementById('editDescription').value = t.description || '';
            document.getElementById('editStatusOk').checked = !!t.statusOk;
            
            if (t.recurrence) {
                document.getElementById('editRecurring').checked = true;
                document.getElementById('editRecurringOptions').style.display = 'block';
                document.getElementById('editRecurrenceType').value = t.recurrence.type;
                document.getElementById('editRecurrenceCount').value = t.recurrence.total;
            } else {
                document.getElementById('editRecurring').checked = false;
                document.getElementById('editRecurringOptions').style.display = 'none';
            }
            
            document.querySelectorAll('#editForm .type-btn').forEach(b => {
                b.classList.toggle('active', b.getAttribute('data-type') === this.currentEditType);
            });
            this.filterCategoriesByType('editCategory', this.currentEditType);
            openModal('editModal');
        }

        updateTransaction() {
            const fields = [
                { id: 'editDate', label: this.t('selectDate'), required: true },
                { id: 'editAmount', label: this.t('invalidAmount'), required: true, type: 'number', min: 0.01 },
                { id: 'editCategory', label: this.t('selectCategory'), required: true },
                { id: 'editPaymentMethod', label: this.t('selectPayment'), required: true },
                { id: 'editTransactionAccount', label: this.t('selectAccount'), required: true }
            ];

            if (!this.validateForm(fields)) return;

            const id = document.getElementById('editId').value;
            const date = document.getElementById('editDate').value;
            const amount = parseFloat(document.getElementById('editAmount').value);
            const category = document.getElementById('editCategory').value;
            const paymentMethod = document.getElementById('editPaymentMethod').value;
            const accountId = document.getElementById('editTransactionAccount').value;

            let idx = -1;
            for (let i = 0; i < this.transactions.length; i++) {
                if (String(this.transactions[i].id) === String(id)) { 
                    idx = i; 
                    break; 
                }
            }
            if (idx === -1) { 
                this.showToast('❌ ' + this.t('transactionNotFound')); 
                return; 
            }

            const oldTransaction = this.transactions[idx];
            const oldAmount = oldTransaction.amount;
            const oldAccountId = oldTransaction.accountId;
            const newAmount = this.currentEditType === 'expense' ? -Math.abs(amount) : Math.abs(amount);

            if (oldAccountId) this.updateAccountBalance(oldAccountId, -oldAmount);

            // Verificar saldo negativo
            if (this.settings.blockNegativeBalance && newAmount < 0) {
                const acc = this.getAccountById(accountId);
                if (acc) {
                    const newBalance = (parseFloat(acc.balance) || 0) + newAmount;
                    if (newBalance < 0) {
                        if (oldAccountId) this.updateAccountBalance(oldAccountId, oldAmount);
                        this.showToast(this.t('negativeBalanceBlocked'));
                        return;
                    }
                }
            }

            const isRecurring = document.getElementById('editRecurring').checked;
            let recurrenceData = null;
            if (isRecurring) {
                const recurrenceType = document.getElementById('editRecurrenceType').value;
                const recurrenceCount = parseInt(document.getElementById('editRecurrenceCount').value);
                recurrenceData = { 
                    type: recurrenceType, 
                    total: recurrenceCount, 
                    current: oldTransaction.recurrence ? oldTransaction.recurrence.current : 1 
                };
            }

            this.transactions[idx] = {
                id: oldTransaction.id, 
                date: date, 
                amount: newAmount,
                category: category, 
                description: document.getElementById('editDescription').value,
                statusOk: document.getElementById('editStatusOk').checked,
                paymentMethod: paymentMethod, 
                accountId: accountId,
                recurrence: recurrenceData
            };

            this.updateAccountBalance(accountId, newAmount);
            this.clearCache(); 
            this.saveTransactions(); 
            this.render();
            this.updateCharts(); 
            this.updateAlertBadge();
            closeModal('editModal');
            this.showToast('✅ ' + this.t('transactionUpdated'));
            this.checkNegativeBalance();
        }

        deleteFromEdit() {
            if (!this.currentEditId) return;
            if (!confirm('Excluir esta transação?')) return;
            const t = this.transactions.find(x => x.id === this.currentEditId);
            if (t && t.accountId) this.updateAccountBalance(t.accountId, -t.amount);
            this.transactions = this.transactions.filter(x => x.id !== this.currentEditId);
            this.clearCache(); 
            this.saveTransactions(); 
            this.render();
            this.updateCharts(); 
            this.updateAlertBadge();
            closeModal('editModal');
            this.showToast('✅ ' + this.t('transactionDeleted'));
            this.checkNegativeBalance();
        }

        deleteTransaction(id) {
            if (!confirm('Excluir esta transação?')) return;
            const t = this.transactions.find(x => x.id === id);
            if (t && t.accountId) this.updateAccountBalance(t.accountId, -t.amount);
            this.transactions = this.transactions.filter(x => x.id !== id);
            this.clearCache(); 
            this.saveTransactions(); 
            this.render();
            this.updateCharts(); 
            this.updateAlertBadge();
            this.showToast('✅ ' + this.t('transactionDeleted'));
            this.checkNegativeBalance();
        }

        // ===== TEMA E PRIVACIDADE =====
        applyTheme() {
            document.body.classList.toggle('light', !this.darkMode);
            const btn = document.getElementById('themeBtn');
            if (btn) {
                btn.innerHTML = this.darkMode
                    ? '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
                    : '<svg class="icon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
            }
            if (Object.keys(this.charts).length > 0) {
                try { 
                    this.updateChartsTheme(); 
                } catch (e) { 
                    console.warn('[SmartWallet] Erro tema:', e); 
                }
            }
        }

        applyPrivacy() {
            document.body.classList.toggle('privacy-on', this.privacyOn);
            const btn = document.getElementById('privacyBtn');
            if (btn) {
                btn.innerHTML = this.privacyOn
                    ? '<svg class="icon" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>'
                    : '<svg class="icon" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
                btn.classList.toggle('active', this.privacyOn);
            }
        }

        // ===== GRÁFICOS =====
        getChartColors() {
            const isLight = document.body.classList.contains('light');
            return {
                text: isLight ? '#1e293b' : '#e2e8f0',
                grid: isLight ? '#e5e7eb' : '#334155',
                textSecondary: isLight ? '#64748b' : '#94a3b8'
            };
        }

        initCharts() {
            if (typeof Chart === 'undefined') { 
                console.error('[SmartWallet] Chart.js não carregado!'); 
                return; 
            }
            const colors = this.getChartColors();
            const lineOpts = {
                responsive: true, 
                maintainAspectRatio: false,
                plugins: { 
                    legend: { 
                        position: 'top', 
                        labels: { color: colors.text } 
                    } 
                },
                scales: {
                    y: { 
                        beginAtZero: true, 
                        ticks: { color: colors.textSecondary }, 
                        grid: { color: colors.grid } 
                    },
                    x: { 
                        ticks: { color: colors.textSecondary }, 
                        grid: { color: colors.grid } 
                    }
                }
            };
            try {
                this.charts.line = new Chart(document.getElementById('lineChart').getContext('2d'), {
                    type: 'line',
                    data: { 
                        labels: [], 
                        datasets: [
                            { 
                                label: this.t('income_plural'), 
                                data: [], 
                                borderColor: '#10b981', 
                                backgroundColor: 'rgba(16,185,129,0.1)', 
                                tension: 0.4 
                            },
                            { 
                                label: this.t('expense_plural'), 
                                data: [], 
                                borderColor: '#ef4444', 
                                backgroundColor: 'rgba(239,68,68,0.1)', 
                                tension: 0.4 
                            }
                        ]
                    },
                    options: lineOpts
                });
            } catch (e) { 
                console.error('[SmartWallet] Erro line:', e); 
            }
            try {
                this.charts.pie = new Chart(document.getElementById('pieChart').getContext('2d'), {
                    type: 'bar',
                    data: { 
                        labels: [], 
                        datasets: [{ data: [], backgroundColor: [] }] 
                    },
                    options: {
                        indexAxis: 'y', 
                        responsive: true, 
                        maintainAspectRatio: false,
                        plugins: { 
                            legend: { display: false } 
                        },
                        scales: {
                            x: { 
                                beginAtZero: true, 
                                ticks: { color: colors.textSecondary }, 
                                grid: { color: colors.grid } 
                            },
                            y: { 
                                ticks: { color: colors.textSecondary }, 
                                grid: { color: colors.grid } 
                            }
                        },
                        barPercentage: 0.3, 
                        categoryPercentage: 0.5
                    }
                });
            } catch (e) { 
                console.error('[SmartWallet] Erro pie:', e); 
            }
            try {
                this.charts.cards = new Chart(document.getElementById('cardsChart').getContext('2d'), {
                    type: 'line',
                    data: { 
                        labels: [], 
                        datasets: [] 
                    },
                    options: {
                        responsive: true, 
                        maintainAspectRatio: false,
                        plugins: { 
                            legend: { 
                                position: 'top', 
                                labels: { color: colors.text } 
                            } 
                        },
                        scales: {
                            y: { 
                                beginAtZero: true, 
                                ticks: { color: colors.textSecondary }, 
                                grid: { color: colors.grid } 
                            },
                            x: { 
                                ticks: { color: colors.textSecondary }, 
                                grid: { color: colors.grid } 
                            }
                        }
                    }
                });
            } catch (e) { 
                console.error('[SmartWallet] Erro cards:', e); 
            }
            this.updateCharts();
        }

        updateChartsTheme() {
            const colors = this.getChartColors();
            const self = this;
            Object.keys(this.charts).forEach(key => {
                const chart = self.charts[key];
                if (!chart || !chart.options) return;
                try {
                    if (chart.options.scales?.y?.ticks) chart.options.scales.y.ticks.color = colors.textSecondary;
                    if (chart.options.scales?.y?.grid) chart.options.scales.y.grid.color = colors.grid;
                    if (chart.options.scales?.x?.ticks) chart.options.scales.x.ticks.color = colors.textSecondary;
                    if (chart.options.scales?.x?.grid) chart.options.scales.x.grid.color = colors.grid;
                    if (chart.options.plugins?.legend?.labels) chart.options.plugins.legend.labels.color = colors.text;
                    chart.update('none');
                } catch (e) { 
                    console.warn('[SmartWallet] Erro tema gráfico:', e); 
                }
            });
        }

        updateCharts() {
            const self = this;
            const monthsShort = this.getMonths('short');
            const lLabels = [], lInc = [], lExp = [];
            for (let i = -2; i <= 3; i++) {
                const d = new Date(this.currentMonth);
                d.setMonth(d.getMonth() + i);
                lLabels.push(monthsShort[d.getMonth()] + '/' + d.getFullYear());
                const mt = this.getMonthTransactions(d);
                let inc = 0, exp = 0;
                mt.forEach(t => { 
                    if (t.amount > 0) inc += t.amount; 
                    else exp += t.amount; 
                });
                lInc.push(inc);
                lExp.push(Math.abs(exp));
            }
            if (this.charts.line) {
                this.charts.line.data.labels = lLabels;
                this.charts.line.data.datasets[0].data = lInc;
                this.charts.line.data.datasets[1].data = lExp;
                this.charts.line.update();
            }
            const exps = {};
            this.getMonthTransactions().forEach(t => {
                if (t.amount < 0) {
                    const c = self.getCategoryById(t.category);
                    if (!exps[c.name]) exps[c.name] = { t: 0, color: c.color };
                    exps[c.name].t += Math.abs(t.amount);
                }
            });
            if (this.charts.pie) {
                this.charts.pie.data.labels = Object.keys(exps);
                this.charts.pie.data.datasets[0].data = Object.keys(exps).map(k => exps[k].t);
                this.charts.pie.data.datasets[0].backgroundColor = Object.keys(exps).map(k => exps[k].color);
                this.charts.pie.update();
            }
            if (this.charts.cards) {
                const cardLabels = [];
                const cardDatasets = [];
                for (let i = -2; i <= 3; i++) {
                    const d = new Date(this.currentMonth);
                    d.setMonth(d.getMonth() + i);
                    cardLabels.push(monthsShort[d.getMonth()] + '/' + d.getFullYear());
                }
                this.cards.forEach(card => {
                    const data = [];
                    for (let i = -2; i <= 3; i++) {
                        const d = new Date(self.currentMonth);
                        d.setMonth(d.getMonth() + i);
                        const cardTrans = self.getCardTransactions(card.id, d);
                        let total = 0;
                        cardTrans.forEach(t => total += Math.abs(t.amount));
                        data.push(total);
                    }
                    cardDatasets.push({
                        label: card.name, 
                        data: data,
                        borderColor: card.color, 
                        backgroundColor: card.color + '20',
                        tension: 0.4, 
                        fill: false
                    });
                });
                this.charts.cards.data.labels = cardLabels;
                this.charts.cards.data.datasets = cardDatasets;
                this.charts.cards.update();
            }
            this.updateInvestmentChart();
            this.renderWaterfallChart();
        }

        // ===== ALERTAS =====
        updateAlertBadge() {
            const today = new Date(); 
            today.setHours(0, 0, 0, 0);
            const in3Days = new Date(today); 
            in3Days.setDate(in3Days.getDate() + 3);
            const tomorrow = new Date(today); 
            tomorrow.setDate(tomorrow.getDate() + 1);
            const bills = this.transactions.filter(t => {
                if (t.statusOk || t.amount >= 0) return false;
                const tDate = new Date(t.date + 'T12:00:00');
                return tDate <= in3Days;
            });
            let closingAlertsCount = 0;
            this.cards.forEach(card => {
                const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
                const closingDay = Math.min(card.closingDay, lastDayOfMonth);
                const closingDate = new Date(today.getFullYear(), today.getMonth(), closingDay);
                closingDate.setHours(0, 0, 0, 0);
                if (closingDate.getTime() === tomorrow.getTime()) closingAlertsCount++;
            });
            const totalAlerts = bills.length + closingAlertsCount;
            const badge = document.getElementById('alertBadge');
            const btn = document.getElementById('alertBtn');
            if (badge && btn) {
                if (totalAlerts > 0) {
                    badge.textContent = totalAlerts;
                    badge.classList.add('visible');
                    btn.classList.add('has-alerts');
                } else {
                    badge.classList.remove('visible');
                    btn.classList.remove('has-alerts');
                }
            }
            
            // Notificações push
            if (this.settings.notifyBills && bills.length > 0 && Notification.permission === 'granted') {
                const notifKey = 'smartwallet_notif_' + today.toISOString().split('T')[0];
                if (!localStorage.getItem(notifKey)) {
                    new Notification(this.t('notificationTitle'), {
                        body: this.t('notificationBody', { count: bills.length }),
                        icon: 'favicon.svg'
                    });
                    localStorage.setItem(notifKey, 'true');
                }
            }
        }

        // ===== FATURA DE CARTÃO =====
        getInvoicePeriod(card, referenceDate) {
            const refDate = referenceDate || this.cardModalMonth || new Date();
            const year = refDate.getFullYear();
            const month = refDate.getMonth();
            const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
            const closingDay = Math.min(card.closingDay, lastDayOfMonth);
            let closingDate = new Date(year, month, closingDay);
            const previousClosingDate = new Date(closingDate);
            previousClosingDate.setMonth(previousClosingDate.getMonth() - 1);
            previousClosingDate.setDate(previousClosingDate.getDate() + 1);
            const today = new Date(); 
            today.setHours(0, 0, 0, 0);
            const isClosed = closingDate < today;
            let dueDate = new Date(closingDate);
            if (isClosed) dueDate.setMonth(dueDate.getMonth() + 1);
            dueDate.setDate(card.dueDay);
            return { 
                startDate: previousClosingDate, 
                closingDate: closingDate, 
                dueDate: dueDate, 
                isClosed: isClosed 
            };
        }

        calculateInvoiceTotal(purchases) {
            let total = 0;
            purchases.forEach(p => total += Math.abs(p.amount));
            return total;
        }

        renderCreditCardsList() {
            const container = document.getElementById('creditCardsList');
            if (!container) return;
            this.updateCardMonthLabel();
            if (!this.cards.length) {
                container.innerHTML = '<div style="text-align:center; padding:40px 20px; color:var(--text-secondary);"><div style="font-size:3rem; margin-bottom:12px; opacity:0.5;">💳</div><h3>Nenhum cartão cadastrado</h3></div>';
                return;
            }
            const self = this;
            const refDate = this.cardModalMonth;
            let html = '<div class="credit-cards-grid">';
            this.cards.forEach(card => {
                const period = self.getInvoicePeriod(card, refDate);
                const purchases = self.getCardTransactionsForPeriod(card.id, period.startDate, period.closingDate);
                const total = self.calculateInvoiceTotal(purchases);
                const available = card.limit - total;
                const usedPct = Math.min(100, (total / card.limit) * 100);
                html += '<div class="credit-card-visual" style="background:linear-gradient(135deg, ' + card.color + ' 0%, ' + self.adjustColor(card.color, -30) + ' 100%);" data-card-id="' + card.id + '">';
                html += '<div class="cc-actions"><button class="cc-action-btn edit-card-btn" data-card-id="' + card.id + '">✏️</button><button class="cc-action-btn delete-card-btn" data-card-id="' + card.id + '">🗑️</button></div>';
                html += '<div class="cc-header"><div class="cc-brand">' + self.escapeHtml(card.brand) + '</div><div class="cc-chip"></div></div>';
                html += '<div class="cc-name">' + self.escapeHtml(card.name) + '</div>';
                html += '<div class="cc-number">•••• •••• •••• ' + self.escapeHtml(card.last4 || '****') + '</div>';
                html += '<div class="cc-footer"><div><div class="cc-label">Fatura Atual</div><div class="cc-value">' + self.formatCurrency(total) + '</div></div><div style="text-align:right;"><div class="cc-label">Disponível</div><div class="cc-value">' + self.formatCurrency(available) + '</div></div></div>';
                html += '<div style="position:absolute; bottom:0; left:0; right:0; height:4px; background:rgba(0,0,0,0.3);"><div style="height:100%; width:' + usedPct + '%; background:' + (usedPct > 80 ? '#ef4444' : usedPct > 50 ? '#f59e0b' : '#10b981') + ';"></div></div>';
                html += '</div>';
            });
            html += '</div>';
            container.innerHTML = html;

            container.querySelectorAll('.credit-card-visual').forEach(cardEl => {
                cardEl.addEventListener('click', () => {
                    const cardId = cardEl.dataset.cardId;
                    openInvoiceModal(cardId);
                });
            });
            container.querySelectorAll('.edit-card-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    self.editCard(btn.dataset.cardId);
                });
            });
            container.querySelectorAll('.delete-card-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    self.deleteCard(btn.dataset.cardId);
                });
            });
        }

        updateCardMonthLabel() {
            const months = this.getMonths();
            const label = document.getElementById('cardMonthLabel');
            if (label) label.textContent = months[this.cardModalMonth.getMonth()] + ' ' + this.cardModalMonth.getFullYear();
        }

        adjustColor(color, amount) {
            const hex = color.replace('#', '');
            const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount));
            const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount));
            const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount));
            return '#' + r.toString(16).padStart(2,'0') + g.toString(16).padStart(2,'0') + b.toString(16).padStart(2,'0');
        }

        saveCard() {
            const fields = [
                { id: 'cardName', label: this.t('informName'), required: true }
            ];
            if (!this.validateForm(fields)) return;

            const id = document.getElementById('cardEditId').value;
            const name = document.getElementById('cardName').value.trim();
            const brand = document.getElementById('cardBrand').value;
            const last4 = document.getElementById('cardLast4').value.trim();
            const closingDay = parseInt(document.getElementById('cardClosingDay').value);
            const dueDay = parseInt(document.getElementById('cardDueDay').value);
            const limit = parseFloat(document.getElementById('cardLimit').value);
            const color = document.getElementById('cardColor').value;

            if (id) {
                for (let i = 0; i < this.cards.length; i++) {
                    if (this.cards[i].id === id) { 
                        this.cards[i] = { id, name, brand, last4, closingDay, dueDay, limit, color }; 
                        break; 
                    }
                }
            } else {
                this.cards.push({ 
                    id: this.generateUniqueId(), 
                    name, brand, last4, closingDay, dueDay, limit, color 
                });
            }
            this.clearCache(); 
            this.saveCards(); 
            this.populatePaymentMethodSelects(); 
            this.renderCreditCardsList();
            closeModal('newCardModal');
            this.showToast('✅ ' + (id ? this.t('cardUpdated') : this.t('cardCreated')));
        }

        deleteCard(id) {
            if (!confirm('Excluir este cartão?')) return;
            this.cards = this.cards.filter(c => c.id !== id);
            this.clearCache(); 
            this.saveCards(); 
            this.populatePaymentMethodSelects(); 
            this.renderCreditCardsList();
            this.showToast('✅ ' + this.t('cardRemoved'));
        }

        editCard(id) {
            const card = this.getCardById(id); 
            if (!card) return;
            document.getElementById('cardEditId').value = card.id;
            document.getElementById('cardName').value = card.name;
            document.getElementById('cardBrand').value = card.brand;
            document.getElementById('cardLast4').value = card.last4 || '';
            document.getElementById('cardClosingDay').value = card.closingDay;
            document.getElementById('cardDueDay').value = card.dueDay;
            document.getElementById('cardLimit').value = card.limit;
            document.getElementById('cardColor').value = card.color;
            document.getElementById('newCardTitle').textContent = 'Editar Cartão';
            openModal('newCardModal');
        }

        openInvoice(cardId, offset = 0) {
            const card = this.getCardById(cardId);
            if (!card) return;
            this.currentInvoiceCardId = cardId;
            this.currentInvoiceOffset = offset;
            const refDate = new Date(this.cardModalMonth);
            refDate.setMonth(refDate.getMonth() + offset);
            const period = this.getInvoicePeriod(card, refDate);
            const purchases = this.getCardTransactionsForPeriod(card.id, period.startDate, period.closingDate);
            const total = this.calculateInvoiceTotal(purchases);
            const minimum = total * 0.15;
            const available = card.limit - total;
            const self = this;
            document.getElementById('invoiceTitle').textContent = this.t('invoice') + ' - ' + card.name;
            const today = new Date(); 
            today.setHours(0, 0, 0, 0);
            const daysUntilDue = Math.ceil((period.dueDate - today) / (1000 * 60 * 60 * 24));
            let dueClass = '';
            let dueText = this.formatDate(period.dueDate.toISOString().split('T')[0]);
            if (daysUntilDue < 0) { 
                dueClass = 'overdue'; 
                dueText += ' (' + this.t('overdue') + ' ' + Math.abs(daysUntilDue) + ' ' + this.t('days') + ')'; 
            } else if (daysUntilDue === 0) { 
                dueClass = 'overdue'; 
                dueText += ' (' + this.t('dueToday') + ')'; 
            } else if (daysUntilDue <= 3) { 
                dueText += ' (' + this.t('inDays', {days: daysUntilDue}) + ')'; 
            }
            if (period.isClosed) dueText += ' ✓ ' + this.t('closed');
            let html = '<div class="invoice-period-display">';
            html += '<div class="invoice-period-info"><div class="invoice-period-label">📅 ' + this.t('invoicePeriod') + '</div>';
            html += '<div class="invoice-period-value">' + this.formatDate(period.startDate.toISOString().split('T')[0]) + ' até ' + this.formatDate(period.closingDate.toISOString().split('T')[0]) + '</div></div>';
            html += '<div class="invoice-due-info"><div class="invoice-due-label">💳 ' + this.t('dueDate') + '</div>';
            html += '<div class="invoice-due-value ' + dueClass + '">' + dueText + '</div></div></div>';
            html += '<div style="background:var(--input-bg); border-radius:14px; padding:16px; margin-bottom:16px;">';
            html += '<div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--border-color);"><span style="color:var(--text-secondary);">' + this.t('limit') + '</span><span style="font-weight:600;">' + this.formatCurrency(card.limit) + '</span></div>';
            html += '<div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--border-color);"><span style="color:var(--text-secondary);">' + this.t('invoiceTotal') + '</span><span style="font-weight:600; color:var(--danger-color);">' + this.formatCurrency(total) + '</span></div>';
            html += '<div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--border-color);"><span style="color:var(--text-secondary);">' + this.t('minimum') + '</span><span style="font-weight:600;">' + this.formatCurrency(minimum) + '</span></div>';
            html += '<div style="display:flex; justify-content:space-between; padding:12px 0 0 0; margin-top:4px; border-top:2px solid var(--border-color); font-weight:700;"><span>' + this.t('available') + '</span><span style="color:var(--success-color);">' + this.formatCurrency(available) + '</span></div></div>';
            html += '<div style="display:flex; justify-content:space-between; margin-bottom:12px; flex-wrap:wrap; gap:10px;">';
            html += '<h3 style="font-size:1.1rem;">' + this.t('purchases') + ' (' + purchases.length + ')</h3>';
            html += '<div style="display:flex; gap:8px;">';
            html += '<button class="btn btn-secondary btn-small" id="exportInvoiceCsvBtn">📥 CSV</button>';
            html += '<button class="btn btn-secondary btn-small" id="printInvoicePdfBtn">🖨️ PDF</button></div></div>';
            html += '<div>';
            if (purchases.length === 0) {
                html += '<p style="text-align:center; padding:20px; color:var(--text-secondary);">' + this.t('noPurchases') + '</p>';
            } else {
                purchases.sort((a,b) => new Date(a.date) - new Date(b.date)).forEach(p => {
                    const cat = self.getCategoryById(p.category);
                    html += '<div style="background:var(--input-bg); border-radius:12px; padding:12px 16px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center; gap:12px;">';
                    html += '<div style="flex:1;"><div style="font-weight:600;">' + self.escapeHtml(p.description) + '</div>';
                    html += '<div style="font-size:0.8rem; color:var(--text-secondary); display:flex; gap:10px;"><span>' + self.formatDate(p.date) + '</span><span style="color:' + cat.color + ';">● ' + self.escapeHtml(cat.name) + '</span></div></div>';
                    html += '<div style="font-weight:700;">' + self.formatCurrency(Math.abs(p.amount)) + '</div>';
                    html += '<button class="btn btn-danger btn-small delete-invoice-item" data-id="' + p.id + '">🗑️</button></div>';
                });
            }
            html += '</div>';
            html += '<div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:20px;">';
            html += '<button class="btn btn-success" id="payInvoiceBtn">💰 ' + this.t('payInvoice') + '</button>';
            html += '<button class="btn btn-secondary" data-close-modal="invoiceModal">' + this.t('close') + '</button></div>';
            document.getElementById('invoiceContent').innerHTML = html;
            openModal('invoiceModal');

            document.getElementById('exportInvoiceCsvBtn').addEventListener('click', () => self.exportInvoiceCSV(cardId));
            document.getElementById('printInvoicePdfBtn').addEventListener('click', () => self.printInvoicePDF(cardId));
            document.getElementById('payInvoiceBtn').addEventListener('click', () => self.payInvoice(cardId));
            document.querySelectorAll('.delete-invoice-item').forEach(btn => {
                btn.addEventListener('click', () => {
                    self.deleteTransaction(btn.dataset.id);
                    self.openInvoice(cardId, offset);
                });
            });
        }

        navigateInvoice(direction) {
            if (!this.currentInvoiceCardId) return;
            this.currentInvoiceOffset += direction;
            this.openInvoice(this.currentInvoiceCardId, this.currentInvoiceOffset);
        }

        payInvoice(cardId) {
            const card = this.getCardById(cardId);
            if (!card) return;
            const period = this.getInvoicePeriod(card);
            const purchases = this.getCardTransactionsForPeriod(card.id, period.startDate, period.closingDate);
            const total = this.calculateInvoiceTotal(purchases);
            if (total <= 0) { 
                this.showToast('❌ ' + this.t('emptyInvoice')); 
                return; 
            }
            if (!confirm(this.t('confirmPayment') + ' ' + this.formatCurrency(total) + '?')) return;
            this.transactions.push({
                id: this.generateUniqueId(), 
                date: new Date().toISOString().split('T')[0],
                amount: -total, 
                category: 'servicos', 
                description: 'Pagamento Fatura ' + card.name,
                statusOk: false, 
                paymentMethod: 'pix', 
                accountId: ''
            });
            this.clearCache(); 
            this.saveTransactions(); 
            this.render(); 
            this.updateCharts(); 
            this.updateAlertBadge();
            this.showToast('✅ ' + this.t('paymentRegistered'));
        }

        exportInvoiceCSV(cardId) {
            const card = this.getCardById(cardId);
            if (!card) return;
            const period = this.getInvoicePeriod(card);
            const purchases = this.getCardTransactionsForPeriod(card.id, period.startDate, period.closingDate);
            const self = this;
            let csv = '\ufeff' + this.t('invoice') + ' - ' + card.name + '\n';
            csv += this.t('invoicePeriod') + ': ' + this.formatDate(period.startDate.toISOString().split('T')[0]) + ' a ' + this.formatDate(period.closingDate.toISOString().split('T')[0]) + '\n';
            csv += this.t('dueDate') + ': ' + this.formatDate(period.dueDate.toISOString().split('T')[0]) + '\n\n';
            csv += this.t('date') + ';' + this.t('description') + ';' + this.t('category') + ';' + this.t('value') + '\n';
            purchases.forEach(p => {
                const cat = self.getCategoryById(p.category);
                csv += p.date + ';"' + (p.description || '').replace(/"/g,'""') + '";"' + cat.name + '";' + Math.abs(p.amount).toFixed(2) + '\n';
            });
            const total = this.calculateInvoiceTotal(purchases);
            csv += '\n' + this.t('invoiceTotal') + ';;;' + total.toFixed(2) + '\n';
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const fileName = this.generateTimestamp() + '_fatura_' + card.name.replace(/\s+/g,'_') + '.csv';
            saveFileWithPicker(blob, fileName, 'text/csv').then(result => {
                if (result === 'saved' || result === 'downloaded') {
                    this.showToast('✅ ' + this.t('backupExported'));
                }
            }).catch(e => this.showToast('❌ ' + e.message));
        }

        printInvoicePDF(cardId) {
            const card = this.getCardById(cardId);
            if (!card) return;
            const period = this.getInvoicePeriod(card);
            const purchases = this.getCardTransactionsForPeriod(card.id, period.startDate, period.closingDate);
            const total = this.calculateInvoiceTotal(purchases);
            const self = this;
            const printWindow = window.open('', '_blank');
            if (!printWindow) { 
                this.showToast('⚠️ ' + this.t('allowPopups')); 
                return; 
            }
            const rows = purchases.sort((a,b) => new Date(a.date) - new Date(b.date)).map(p => {
                const cat = self.getCategoryById(p.category);
                return '<tr><td>' + self.formatDate(p.date) + '</td><td>' + self.escapeHtml(p.description) + '</td><td>' + self.escapeHtml(cat.name) + '</td><td style="text-align:right;">' + self.formatCurrency(Math.abs(p.amount)) + '</td></tr>';
            }).join('');
            const fileName = this.generateTimestamp() + '_fatura_' + card.name.replace(/\s+/g,'_') + '.pdf';
            printWindow.document.write('<!DOCTYPE html><html><head><title>' + fileName + '</title><style>body{font-family:Arial,sans-serif;padding:40px;max-width:800px;margin:0 auto;}.header{border-bottom:3px solid #6366f1;padding-bottom:20px;margin-bottom:30px;}.header h1{color:#6366f1;margin:0 0 5px 0;}table{width:100%;border-collapse:collapse;}th,td{padding:10px;text-align:left;border-bottom:1px solid #e5e7eb;}th{background:#f1f5f9;}.total{font-weight:700;font-size:1.2rem;}.footer{margin-top:40px;padding-top:20px;border-top:2px solid #6366f1;font-size:0.85rem;color:#64748b;text-align:center;}@media print{body{padding:20px;}}</style></head><body>');
            printWindow.document.write('<div class="header"><h1>Fatura - ' + this.escapeHtml(card.name) + '</h1><div style="color:#64748b;">' + this.escapeHtml(card.brand) + ' •••• ' + this.escapeHtml(card.last4 || '****') + '</div></div>');
            printWindow.document.write('<p><strong>Período:</strong> ' + this.formatDate(period.startDate.toISOString().split('T')[0]) + ' a ' + this.formatDate(period.closingDate.toISOString().split('T')[0]) + '</p>');
            printWindow.document.write('<p><strong>Vencimento:</strong> ' + this.formatDate(period.dueDate.toISOString().split('T')[0]) + '</p>');
            printWindow.document.write('<table><thead><tr><th>Data</th><th>Descrição</th><th>Categoria</th><th>Valor</th></tr></thead><tbody>' + rows + '</tbody>');
            printWindow.document.write('<tfoot><tr class="total"><td colspan="3" style="text-align:right;">' + this.t('total') + ':</td><td>' + this.formatCurrency(total) + '</td></tr></tfoot></table>');
            printWindow.document.write('<div class="footer">Smart Wallet • Gerado em ' + new Date().toLocaleString(this.getLanguage()) + '<br>Idealizado por RogerElizar™</div>');
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.document.title = fileName;
            setTimeout(() => { 
                printWindow.focus(); 
                printWindow.print(); 
            }, 300);
        }
