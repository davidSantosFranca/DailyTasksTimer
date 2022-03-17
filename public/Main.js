const path = require('path');
const {app, BrowserWindow} = require('electron');

function createWindow()
{
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    transport:true,
    frame:false
  });
  //win.loadURL(`file://${path.join(__dirname,'../build/index.html')}`);
  win.loadURL('http://localhost:3000');
}

app.on('ready', createWindow);