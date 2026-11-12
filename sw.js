/*
  ?ㅽ봽?쇱씤 ?뚯씪.
  ?명꽣?룹씠 ?섎㈃ ??긽 ???뚯씪??諛쏆븘 ?ㅺ퀬(???⑥뼱 諛붾줈 諛섏쁺),
  ???섎㈃ 留덉?留됱쑝濡?諛쏆븘 ???뚯씪濡??쎈땲??
*/
const CACHE = "toeic-words-v2";
const SHELL = ["./", "index.html", "words.js", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "icons/favicon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const same = url.origin === location.origin;
  const font = url.hostname === "cdn.jsdelivr.net";
  if (!same && !font) return; // ?숆린??媛숈? ?ㅻⅨ 二쇱냼??嫄대뱶由ъ? ?딆쓬

  if (font) { // 湲瑗? ??踰?諛쏆쑝硫?怨꾩냽 ?
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res;
    })));
    return;
  }
  // ???뚯씪: ?명꽣??癒쇱?, ???섎㈃ ??ν빐 ??寃?  e.respondWith(fetch(req, { cache: "no-cache" }).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match("index.html"))));
});
