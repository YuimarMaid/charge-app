self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("charge-app-v3").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./title.png",
        "./icon-192.png",
        "./icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

