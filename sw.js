const CACHE_NAME = 'smartwallet-v4.4.4';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/js/app.js',
    '/favicon.svg',
    '/manifest.json',
    'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Cache aberto');
                return cache.addAll(urlsToCache);
            })
            .catch((err) => {
                console.warn('[SW] Falha ao cachear alguns recursos:', err);
            })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[SW] Removendo cache antigo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    const requestUrl = new URL(event.request.url);
    
    // Ignora extensões de navegador e URLs não-http(s)
    if (!requestUrl.protocol.startsWith('http')) {
        return;
    }
    
    // NOVO: Estratégia Cache First para CDNs externas (Chart.js, Google Fonts)
    // Isso deixa o app muito mais rápido!
    if (requestUrl.origin !== location.origin) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) return cachedResponse;
                return fetch(event.request).then((networkResponse) => {
                    if (networkResponse.status === 200) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseClone);
                        });
                    }
                    return networkResponse;
                });
            })
        );
        return;
    }
    
    // Estratégia: Network First com fallback para Cache (seus arquivos locais)
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                if (response.status === 200) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return response;
            })
            .catch(() => {
                return caches.match(event.request).then((response) => {
                    return response || new Response('Offline', {
                        status: 503,
                        statusText: 'Service Unavailable'
                    });
                });
            })
    );
});

// Sincronização em background (quando disponível)
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-backup') {
        console.log('[SW] Sync de backup em background');
    }
});

// Notificações push (quando disponível)
self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'Smart Wallet';
    const options = {
        body: data.body || 'Nova notificação',
        icon: '/favicon.svg',
        badge: '/favicon.svg',
        vibrate: [200, 100, 200]
    };
    event.waitUntil(self.registration.showNotification(title, options));
});
