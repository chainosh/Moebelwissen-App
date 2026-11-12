/* Möbelwissen – Offline-Speicher der App (nicht der Wissensdatei). Bei App-Änderungen VERSION erhöhen. */
const VERSION = "moebelwissen-app-v1";
const DATEIEN = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png", "./icons/apple-touch-icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === "navigate") {
    // Online: neueste App laden und merken. Offline: gespeicherte App.
    e.respondWith(
      fetch(req)
        .then((res) => { const kopie = res.clone(); caches.open(VERSION).then((c) => c.put("./index.html", kopie)); return res; })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }
  e.respondWith(caches.match(req).then((treffer) => treffer || fetch(req)));
});
