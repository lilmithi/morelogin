const { app, BrowserWindow } = require("electron/main");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
  });

  win.loadFile(
    `${path.join(__dirname, "dist", "eekjuice", "browser", "index.html")}`
  );
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
