// Registers the PWA service worker for Render production
// Place in src/ and import in index.js

export function register() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(`${process.env.PUBLIC_URL}/service-worker.js`)
      .then((registration) => {
        console.log("ServiceWorker registered:", registration);
      })
      .catch((error) => {
        console.error("ServiceWorker registration failed:", error);
      });
  }
}
