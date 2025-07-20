const { globalShortcut } = require('electron');

function registerShortcuts(win) {
  globalShortcut.register('Ctrl+R', () => {
    win.reload();
  });

  globalShortcut.register('F11', () => {
    win.setFullScreen(!win.isFullScreen());
  });

  globalShortcut.register('Ctrl+W', () => {
    win.close();
  });

  // Add more global keybindings here if needed
}

module.exports = { registerShortcuts };

