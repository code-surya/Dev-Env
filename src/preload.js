// src/preload.js
// (runs in isolated context before page loads)
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  reload: () => ipcRenderer.send('reload'),
  toggleFullscreen: () => ipcRenderer.send('toggle-fullscreen')
});

