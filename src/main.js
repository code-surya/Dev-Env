
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    fullscreen: true,
    autoHideMenuBar: true,
    icon: path.join(__dirname, '../public/icon.ico'),
    title: 'WQ Browser',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webviewTag: true,
    },
  });

  mainWindow.loadFile(path.join(__dirname, '../public/index.html'));

  mainWindow.webContents.setIgnoreMenuShortcuts(false); // ← this allows us to receive key events

  // 💡 Global shortcut forwarding via before-input-event
  mainWindow.webContents.on('before-input-event', (event, input) => {
    const key = input.key.toLowerCase();
    if (key === 'escape') {
        event.preventDefault();
        mainWindow.webContents.send('shortcut', 'escape');
    }

    if (input.alt) {
      const key = input.key.toLowerCase();
      if (['n', 'j', 'k', 'p'].includes(key)) {
        event.preventDefault();
        mainWindow.webContents.send('shortcut', key);
      }
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
