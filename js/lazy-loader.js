// js/lazy-loader.js
// Gerenciador de carregamento sob demanda

console.log('[LazyLoader] Inicializando...');

export class LazyLoader {
    constructor() {
        this.loadedModules = new Set();
        this.promises = new Map();
    }

    // ===== LAZY LOAD DE SCRIPTS EXTERNOS =====
    async loadScript(url, globalVar) {
        // Se já carregou, retorna a promise existente
        if (this.promises.has(url)) {
            return this.promises.get(url);
        }

        // Se a variável global já existe, retorna sucesso
        if (globalVar && window[globalVar]) {
            return Promise.resolve(window[globalVar]);
        }

        const promise = new Promise((resolve, reject) => {
            // Verifica se script já está no DOM
            const existing = document.querySelector(`script[src="${url}"]`);
            if (existing) {
                existing.addEventListener('load', () => resolve(window[globalVar]));
                existing.addEventListener('error', reject);
                return;
            }

            const script = document.createElement('script');
            script.src = url;
            script.crossOrigin = 'anonymous';
            script.onload = () => {
                console.log(`[LazyLoader] ✅ ${url} carregado`);
                resolve(window[globalVar]);
            };
            script.onerror = () => {
                console.error(`[LazyLoader]  Falha ao carregar ${url}`);
                reject(new Error(`Falha ao carregar ${url}`));
            };
            document.head.appendChild(script);
        });

        this.promises.set(url, promise);
        return promise;
    }

    // ===== LAZY LOAD DE CHART.JS =====
    async loadChartJs() {
        if (this.loadedModules.has('chartjs')) {
            return window.Chart;
        }

        const Chart = await this.loadScript(
            'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
            'Chart'
        );

        this.loadedModules.add('chartjs');
        return Chart;
    }

    // ===== LAZY LOAD DE MÓDULOS INTERNOS =====
    async loadModule(moduleName, loaderFn) {
        if (this.loadedModules.has(moduleName)) {
            return true;
        }

        try {
            await loaderFn();
            this.loadedModules.add(moduleName);
            console.log(`[LazyLoader] ✅ Módulo "${moduleName}" carregado`);
            return true;
        } catch (err) {
            console.error(`[LazyLoader] ❌ Erro ao carregar "${moduleName}":`, err);
            return false;
        }
    }

    // ===== INTERSECTION OBSERVER PARA GRÁFICOS =====
    observeCharts(containerSelector, callback) {
        if (!('IntersectionObserver' in window)) {
            // Fallback: carrega imediatamente
            callback();
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.1 });

        const container = document.querySelector(containerSelector);
        if (container) {
            observer.observe(container);
        }
    }

    // ===== VERIFICA SE MÓDULO ESTÁ CARREGADO =====
    isLoaded(moduleName) {
        return this.loadedModules.has(moduleName);
    }

    // ===== LIMPA CACHE (para testes) =====
    clearCache() {
        this.loadedModules.clear();
        this.promises.clear();
    }
}

export const lazyLoader = new LazyLoader();
