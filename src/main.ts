import { app, BrowserWindow } from "electron";
import { join } from "path";

const isDev = process.env.NODE_ENV === "development";

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  isDev
    ? mainWindow.loadURL("http://localhost:3000/index.html")
    : mainWindow.loadFile(join(__dirname, "./index.html"));

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
