const CACHE_NAME = 'belote';
const ASSETS = [
  'index.html',
  'manifest.json',
  // Ajoute ici tes icônes si tu en as, ex: 'icon-192.png'
];

// Installation : on met les fichiers en cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Interception : on sert les fichiers depuis le cache si on est hors-ligne
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});