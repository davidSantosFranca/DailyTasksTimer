const {app, BrowserWindow} = require('electron');

function createWindow()
{
  const win = new BrowserWindow({
    width: 300,
    height: 100,
    transport:true,
    frame:false
  });
  //win.loadURL(`file://${path.join(__dirname,'../build/index.html')}`);
  win.loadURL('http://localhost:3000');
}

app.on('ready', createWindow);