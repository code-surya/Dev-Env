
 document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'b') {
    window.dispatchEvent(new CustomEvent('new-tab'));
  }

  if (e.altKey && e.key === 'j') {
    window.dispatchEvent(new CustomEvent('switch-tab', { detail: -1 }));
  }

  if (e.altKey && e.key === 'k') {
    window.dispatchEvent(new CustomEvent('switch-tab', { detail: 1 }));
  }

  if (e.ctrlKey && e.key === 'p') {
    window.dispatchEvent(new CustomEvent('toggle-tab-bar'));
  }
});
