var cacheName = 'disc-pwa';
var filesToCache = [
  '/',
  '/sw.js',
  '/index.html',
  '/style/bootstrap.css',
  '/style/main.css',
  '/images/aviar_146.jpg',
  '/images/aviar_146_2.jpg',
  '/images/aviar_150.jpg',
  '/images/beast_171.jpg',
  '/images/beast_174.jpg',
  '/images/bolt_174.jpg',
  '/images/boss_175.jpg',
  '/images/buzz_177.jpg',
  '/images/cd_175.jpg',
  '/images/d1_166.jpg',
  '/images/dart_167.jpg',
  '/images/dart_167_2.jpg',
  '/images/destroyer_141.jpg',
  '/images/destroyer_166.jpg',
  '/images/destroyer_167.jpg',
  '/images/diamond_151.jpg',
  '/images/envy_173.jpg',
  '/images/escape_170.jpg',
  '/images/escape_173.jpg',
  '/images/firebird_167.jpg',
  '/images/flyer_165.jpg',
  '/images/freedom_173.jpg',
  '/images/getaway_173.jpg',
  '/images/ghost_177.jpg',
  '/images/kaxe_176.jpg',
  '/images/lace_173.jpg',
  '/images/leopard_147.jpg',
  '/images/leopard_175.jpg',
  '/images/leopard_175_2.jpg',
  '/images/magic_174.jpg',
  '/images/mako_182.jpg',
  '/images/mercy_174.jpg',
  '/images/nova_173.jpg',
  '/images/predator_173.jpg',
  '/images/pure_174.jpg',
  '/images/reko.png'
  '/images/reko_175.jpg',
  '/images/roadrunner_171.jpg',
  '/images/roadrunner_172.jpg',
  '/images/shark_150.jpg',
  '/images/sheriff_171.jpg',
  '/images/shryke_167.jpg',
  '/images/shryke_168.jpg',
  '/images/shryke_168_2.jpg',
  '/images/shryke_175.jpg',
  '/images/shryke_175_2.jpg',
  '/images/tern_170.jpg',
  '/images/thunderbird_166.jpg',
  '/images/truth_180.jpg',
  '/images/undertaker_169.jpg',
  '/images/valkyrie_166.jpg',
  '/images/viper_148.jpg',
  '/images/viper_173.jpg',
  '/images/virus_166.jpg',
  '/images/warden_176.jpg',
  '/images/wizard_175.jpg'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});