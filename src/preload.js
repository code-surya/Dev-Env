
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getTabs: () => ipcRenderer.invoke('get-tabs'),
  onShortcut: (callback) => ipcRenderer.on('shortcut', (_, key) => callback(key)),
});
