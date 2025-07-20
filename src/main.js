const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const path = require('path');

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 1280,
    height: 800,
    fullscreen: true,
    autoHideMenuBar: true,
    icon: path.join(__dirname, '../public/icon.ico'),
    title: 'MySingleSiteBrowser',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      webviewTag: true // new 
    }
  });

  win.loadFile(path.join(__dirname, '../public/index.html')); // Replace with your target site

  // Optional: disable right click and unwanted navigation
  win.webContents.on('context-menu', e => e.preventDefault());
  win.webContents.on('will-navigate', (e, url) => {
    if (!url.startsWith('https://google.com')) e.preventDefault();
  });

  // Keyboard shortcuts via IPC
  ipcMain.on('reload', () => win.reload());
  ipcMain.on('toggle-fullscreen', () => win.setFullScreen(!win.isFullScreen()));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

