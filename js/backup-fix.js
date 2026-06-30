/**
 * FIX: Importação de Backup
 * Este arquivo contém as funções corrigidas para importar backup
 * Adicione este código no js/app.js para substituir as funções quebradas
 */

// ===== FUNÇÃO CORRIGIDA: handleBackupFileSelect =====
window.handleBackupFileSelect = function(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Validar extensão
    if (!file.name.toLowerCase().endsWith('.json')) {
        alert('⚠️ Selecione um arquivo .json válido');
        event.target.value = '';
        return;
    }
    
    // Atualizar label do arquivo
    const label = document.getElementById('backupFileName');
    if (label) {
        label.textContent = '✅ ' + file.name + ' (' + (file.size / 1024).toFixed(2) + ' KB)';
    }
    
    // Ler o arquivo
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            // Tentar fazer parse do JSON
            const jsonData = JSON.parse(e.target.result);
            // Salvar nos dados pendentes
            window._pendingBackupData = jsonData;
            console.log('✅ Arquivo de backup carregado:', jsonData);
        } catch (err) {
            alert('❌ Erro ao ler arquivo JSON:\n' + err.message);
            event.target.value = '';
            document.getElementById('backupFileName').textContent = 'Clique para selecionar';
            window._pendingBackupData = null;
        }
    };
    reader.onerror = function() {
        alert('❌ Erro ao ler o arquivo');
        window._pendingBackupData = null;
    };
    reader.readAsText(file);
};

// ===== FUNÇÃO CORRIGIDA: importBackup (para substituir no MyWallet class) =====
function importBackupCorrected() {
    if (!window._pendingBackupData) {
        this.showToast('⚠️ Selecione um arquivo de backup');
        return;
    }
    
    try {
        const backup = window._pendingBackupData;
        
        // Validar estrutura básica
        if (!backup || typeof backup !== 'object') {
            this.showToast('❌ Arquivo de backup inválido');
            return;
        }
        
        // Restaurar dados
        if (backup.transactions && Array.isArray(backup.transactions)) {
            this.transactions = backup.transactions;
            this.saveTransactions();
        }
        
        if (backup.categories && Array.isArray(backup.categories)) {
            this.categories = backup.categories;
            this.saveCategories();
        }
        
        if (backup.accounts && Array.isArray(backup.accounts)) {
            this.accounts = backup.accounts;
            this.saveAccounts();
        }
        
        if (backup.cards && Array.isArray(backup.cards)) {
            this.cards = backup.cards;
            this.saveCards();
        }
        
        if (backup.investments && Array.isArray(backup.investments)) {
            this.investments = backup.investments;
            this.saveInvestments();
        }
        
        // Limpar cache e atualizar
        this.clearCache();
        this.populateCategorySelects();
        this.populatePaymentMethodSelects();
        this.populateAccountSelects();
        this.render();
        this.updateCharts();
        this.updateAlertBadge();
        
        // Fechar modal e limpar
        closeImportBackupModal();
        window._pendingBackupData = null;
        document.getElementById('backupFileInput').value = '';
        document.getElementById('backupFileName').textContent = 'Clique para selecionar';
        
        this.showToast('✅ Backup restaurado com sucesso!');
    } catch (err) {
        console.error('[MyWallet] Erro ao restaurar backup:', err);
        this.showToast('❌ Erro ao restaurar: ' + err.message);
    }
}

// ===== FUNÇÃO CORRIGIDA: handleCsvFileSelect =====
window.handleCsvFileSelect = function(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Validar extensão
    if (!file.name.toLowerCase().endsWith('.csv')) {
        alert('⚠️ Selecione um arquivo .csv válido');
        event.target.value = '';
        return;
    }
    
    // Atualizar label
    const label = document.getElementById('csvFileName');
    if (label) {
        label.textContent = '✅ ' + file.name + ' (' + (file.size / 1024).toFixed(2) + ' KB)';
    }
    
    // Ler o arquivo
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            window._pendingCsvData = e.target.result;
            console.log('✅ Arquivo CSV carregado');
        } catch (err) {
            alert('❌ Erro ao ler arquivo CSV:\n' + err.message);
            event.target.value = '';
            document.getElementById('csvFileName').textContent = 'Clique para selecionar';
            window._pendingCsvData = null;
        }
    };
    reader.onerror = function() {
        alert('❌ Erro ao ler o arquivo');
        window._pendingCsvData = null;
    };
    reader.readAsText(file);
};

console.log('✅ Backup Fix carregado - execute após carregar app.js');
