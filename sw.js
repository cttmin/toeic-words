/*
  오프라인 파일.
  인터넷이 되면 항상 새 파일을 받아 오고(새 단어 바로 반영),
  안 되면 마지막으로 받아 둔 파일로 엽니다.
*/
const CACHE = "toeic-words-v1";
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
  if (!same && !font) return; // 동기화 같은 다른 주소는 건드리지 않음

  if (font) { // 글꼴: 한 번 받으면 계속 씀
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res;
    })));
    return;
  }
  // 앱 파일: 인터넷 먼저, 안 되면 저장해 둔 것
  e.respondWith(fetch(req, { cache: "no-cache" }).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match("index.html"))));
});
