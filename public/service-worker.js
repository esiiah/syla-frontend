/* eslint-disable no-restricted-globals */

const CACHE_NAME = "syla-pwa-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/favicon.png",
  "/manifest.json"
];

// Install event: cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event: cleanup old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      )
    )
  );
});

// Fetch event: serve cached assets, bypass /upload requests
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Bypass cache for backend API calls (all /upload requests)
  if (url.pathname.includes("/upload") || url.origin === "https://syla-bankend.onrender.com") {
    event.respondWith(fetch(event.request));
    return;
  }

  // Default caching for other requests
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
