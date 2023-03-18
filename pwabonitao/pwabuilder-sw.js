var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        'index.html',

        '/css/styles.css',

        '/js/scripts.js',

        './assets/img/portfolio/CAVER.png',
        './assets/img/portfolio/CAVEREMMP-removebg-preview.png',
        './assets/img/portfolio/CAVEREMMP.png',
        './assets/img/portfolio/desing.png',
        './assets/img/portfolio/T.I.png',
        './assets/img/andorid144x144.png',
        './assets/img/android48x48.png',
        './assets/img/android72x72.png',
        './assets/img/android96x96.png',
        './assets/img/android192x192.png'
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});