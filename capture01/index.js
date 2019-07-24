const { app, BrowserWindow, BrowserView, ipcMain } = require('electron');
function createWindow () {
  // 创建浏览器窗口
  let win = new BrowserWindow({ 
    width: 800, 
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
   });

  // 然后加载 app 的 index.html.
  win.loadFile('index.html');
}

app.on('ready', createWindow);
