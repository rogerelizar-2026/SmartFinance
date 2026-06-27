// js/handlers.js
// Fase 1: Centralização de handlers globais
// Mantém compatibilidade com onclick inline existente

import { events } from './core/events.js';

console.log('[Handlers] Registrando handlers globais...');

// ===== TOGGLES =====
window.togglePrivacy = function() {
    events.emit('action:toggle-privacy');
};

window.toggleTheme = function() {
    events.emit('action:toggle-theme');
};

window.toggleMenu = function(e) {
    if (e) e.stopPropagation();
    document.getElementById('mainMenu')?.classList.toggle('active');
    document.getElementById('infoMenu')?.classList.remove('active');
};

window.toggleInfoMenu = function(e) {
    if (e) e.stopPropagation();
    document.getElementById('infoMenu')?.classList.toggle('active');
};

// ===== TYPE SELECTORS =====
window.selectTransactionType = function(t) {
    events.emit('action:select-type', { target: 'new', type: t });
};

window.selectEditType = function(t) {
    events.emit('action:select-type', { target: 'edit', type: t });
};

window.selectNewCategoryType = function(t) {
    events.emit('action:select-type', { target: 'category', type: t });
};

// ===== MODAL OPENERS =====
window.openNewTransactionModal = function() {
    events.emit('action:open-modal', { id: 'newTransactionModal' });
};

window.closeNewTransactionModal = function() {
    events.emit('action:close-modal', { id: 'newTransactionModal' });
};

window.closeEditModal = function() {
    events.emit('action:close-modal', { id: 'editModal' });
};

window.openCategoryManager = function() {
    events.emit('action:open-modal', { id: 'categoryModal' });
};

window.closeCategoryManager = function() {
    events.emit('action:close-modal', { id: 'categoryModal' });
};

window.openExportModal = function() {
    events.emit('action:open-modal', { id: 'exportModal' });
};

window.closeExportModal = function() {
    events.emit('action:close-modal', { id: 'exportModal' });
};

window.openGoalModal = function() {
    events.emit('action:open-modal', { id: 'goalModal' });
};

window.closeGoalModal = function() {
    events.emit('action:close-modal', { id: 'goalModal' });
};

window.openImportCsvModal = function() {
    events.emit('action:open-modal', { id: 'importCsvModal' });
};

window.closeImportCsvModal = function() {
    events.emit('action:close-modal', { id: 'importCsvModal' });
};

window.openImportBackupModal = function() {
    events.emit('action:open-modal', { id: 'importBackupModal' });
};

window.closeImportBackupModal = function() {
    events.emit('action:close-modal', { id: 'importBackupModal' });
};

window.openClearDataModal = function() {
    events.emit('action:open-modal', { id: 'clearDataModal' });
};

window.closeClearDataModal = function() {
    events.emit('action:close-modal', { id: 'clearDataModal' });
};

window.openAccountsModal = function() {
    events.emit('action:open-modal', { id: 'accountsModal' });
};

window.closeAccountsModal = function() {
    events.emit('action:close-modal', { id: 'accountsModal' });
};

window.openNewAccountModal = function() {
    events.emit('action:open-modal', { id: 'newAccountModal' });
};

window.closeNewAccountModal = function() {
    events.emit('action:close-modal', { id: 'newAccountModal' });
};

window.openCreditCardsModal = function() {
    events.emit('action:open-modal', { id: 'creditCardsModal' });
};

window.closeCreditCardsModal = function() {
    events.emit('action:close-modal', { id: 'creditCardsModal' });
};

window.openNewCardModal = function() {
    events.emit('action:open-modal', { id: 'newCardModal' });
};

window.closeNewCardModal = function() {
    events.emit('action:close-modal', { id: 'newCardModal' });
};

window.openInvoiceModal = function(cardId) {
    events.emit('action:open-modal', { id: 'invoiceModal', cardId });
};

window.closeInvoiceModal = function() {
    events.emit('action:close-modal', { id: 'invoiceModal' });
};

window.openBillsModal = function() {
    events.emit('action:open-modal', { id: 'billsModal' });
};

window.closeBillsModal = function() {
    events.emit('action:close-modal', { id: 'billsModal' });
};

window.openInvestmentsModal = function() {
    events.emit('action:open-modal', { id: 'investmentsModal' });
};

window.closeInvestmentsModal = function() {
    events.emit('action:close-modal', { id: 'investmentsModal' });
};

window.openNewInvestmentModal = function() {
    events.emit('action:open-modal', { id: 'newInvestmentModal' });
};

window.closeNewInvestmentModal = function() {
    events.emit('action:close-modal', { id: 'newInvestmentModal' });
};

window.closeUpdateInvestmentModal = function() {
    events.emit('action:close-modal', { id: 'updateInvestmentModal' });
};

window.openManualModal = function() {
    events.emit('action:open-modal', { id: 'manualModal' });
};

window.closeManualModal = function() {
    events.emit('action:close-modal', { id: 'manualModal' });
};

window.openTermsModal = function() {
    events.emit('action:open-modal', { id: 'disclaimerModal' });
};

window.openThanksModal = function() {
    events.emit('action:open-modal', { id: 'thanksModal' });
};

window.closeThanksModal = function() {
    events.emit('action:close-modal', { id: 'thanksModal' });
};

// ===== FILE HANDLERS =====
window.handleCsvFileSelect = function(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (!file.name.toLowerCase().endsWith('.csv')) {
        alert('⚠️ Selecione um arquivo .csv');
        event.target.value = '';
        return;
    }
    
    document.getElementById('csvFileName').textContent = 
        `📄 ${file.name} (${(file.size/1024).toFixed(1)} KB)`;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        window._pendingCsvData = e.target.result;
    };
    reader.readAsText(file, 'UTF-8');
};

window.handleBackupFileSelect = function(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (!file.name.toLowerCase().endsWith('.json')) {
        alert('️ Selecione um arquivo .json');
        event.target.value = '';
        return;
    }
    
    if (file.size > 10 * 1024 * 1024) {
        alert('⚠️ Arquivo muito grande (máx 10MB)');
        event.target.value = '';
        return;
    }
    
    document.getElementById('backupFileName').textContent = 
        `💾 ${file.name} (${(file.size/1024).toFixed(1)} KB)`;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            JSON.parse(e.target.result);
            window._pendingBackupData = e.target.result;
            if (window.smartwallet) {
                window.smartwallet.showToast('✅ Arquivo carregado!');
            }
        } catch (error) {
            alert('❌ JSON inválido: ' + error.message);
            event.target.value = '';
            window._pendingBackupData = null;
        }
    };
    reader.readAsText(file, 'UTF-8');
};

// ===== CLEAR DATA =====
window.showClearStep2 = function() {
    document.getElementById('clearStep1').style.display = 'none';
    document.getElementById('clearStep2').style.display = 'block';
    setTimeout(() => document.getElementById('clearConfirmInput')?.focus(), 100);
};

window.checkClearConfirm = function() {
    const input = document.getElementById('clearConfirmInput');
    const btn = document.getElementById('finalClearBtn');
    
    if (input.value.trim().toUpperCase() === 'LIMPAR') {
        input.classList.add('match');
        btn.disabled = false;
        btn.style.opacity = '1';
    } else {
        input.classList.remove('match');
        btn.disabled = true;
        btn.style.opacity = '0.5';
    }
};

// ===== MISC =====
window.copyPixKey = function() {
    const key = document.getElementById('pixKey').textContent;
    navigator.clipboard.writeText(key)
        .then(() => {
            if (window.smartwallet) {
                window.smartwallet.showToast('✅ Chave PIX copiada!');
            }
        })
        .catch(() => {
            if (window.smartwallet) {
                window.smartwallet.showToast('❌ Copie manualmente: ' + key);
            }
        });
};

window.printManual = function() {
    if (window.smartwallet) {
        window.smartwallet.printManual();
    }
};

window.acceptDisclaimer = function() {
    const btn = document.getElementById('acceptDisclaimerBtn');
    if (!btn || !btn.classList.contains('enabled')) return;
    
    localStorage.setItem('smartwallet_disclaimer_accepted', 'true');
    
    const disclaimer = document.getElementById('disclaimerModal');
    if (disclaimer) {
        disclaimer.classList.add('disintegrating');
        setTimeout(() => {
            disclaimer.style.display = 'none';
            disclaimer.classList.remove('active', 'disintegrating');
            setTimeout(() => {
                const splash = document.getElementById('splashScreen');
                if (splash) {
                    splash.classList.add('fade-out');
                    setTimeout(() => {
                        splash.style.display = 'none';
                        const quote = document.getElementById('quoteModal');
                        if (quote) quote.classList.add('active');
                    }, 800);
                }
            }, 3000);
        }, 600);
    }
};

window.startApp = function() {
    const quote = document.getElementById('quoteModal');
    const main = document.getElementById('mainApp');
    const fab = document.getElementById('fabBtn');
    
    if (quote) quote.classList.remove('active');
    if (main) main.style.display = 'block';
    if (fab) fab.style.display = 'flex';
};

console.log('[Handlers] ✅ Todos os handlers registrados');