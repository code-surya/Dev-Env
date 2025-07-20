
// Inside each webpage loaded in <webview>
window.addEventListener('keydown', (e) => {
  window.parent.postMessage({ type: 'key', key: e.key, altKey: e.altKey }, '*');
});
