
window.electronAPI?.onShortcut?.((key) => {
  switch (key) {
    case 'n':
      window.dispatchEvent(new CustomEvent('new-tab'));
      break;
    case 'j':
      window.dispatchEvent(new CustomEvent('switch-tab', { detail: -1 }));
      break;
    case 'k':
      window.dispatchEvent(new CustomEvent('switch-tab', { detail: 1 }));
      break;
    case 'p':
      window.dispatchEvent(new CustomEvent('toggle-tab-bar'));
      break;
    case 'escape':
      // 🔥 Focus the search bar
      document.getElementById('url-input')?.focus();
      break;
  }
});
