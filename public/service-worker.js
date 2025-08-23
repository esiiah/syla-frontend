/* eslint-disable no-restricted-globals */

// Simple service worker for CRA PWA
// Caches static assets, bypasses /upload requests

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
  if (event.request.url.includes("/upload")) {
    return; // do not cache upload requests
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
