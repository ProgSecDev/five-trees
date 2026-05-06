export function scrollToHash(hash) {
  if (!hash) return;
  // Small delay lets the page render before scrolling
  setTimeout(() => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
}