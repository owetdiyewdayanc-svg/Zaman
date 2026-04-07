// Zaman App - Service Worker
const cacheName = 'zaman-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './manifest.json',
  './icon.png'
];

// Zaman App gurnalan wagty esasy faýllary ýada (cache) saklaýar
self.addEventListener('install', e => {
  console.log('Zaman App: Gurnalýar...');
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Zaman App: Faýllar ýada saklandy');
      return cache.addAll(assets);
    })
  );
});

// Internet ýok wagty ýazgydan (cache) maglumatlary alýar
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
