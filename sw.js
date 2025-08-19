self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("pwa-cache-v1").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./F1.png",
        "./F2.png",
        "./F3.png",
        "./logo.png",
        "https://liwanweb.github.io/First.liwan/",
        "https://liwanweb.github.io/Snd.liwan/",
        "https://liwanweb.github.io/Third.liwan/"
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

