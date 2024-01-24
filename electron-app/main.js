/* app: módulo que proporcina eventos y métodos relacionados con el ciclo de vida de la aplicación */
const { app, BrowserWindow } = require('electron')
const { setMainMenu } = require('./menu.js')
/* path: Módulo node que proporcina utilidades para trabajar con rutas de archivos y directorios de una manera independiente de la plataforma. */
const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 600,
    maxHeight: 400,
    /* ⬇ Preloads */
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  // Cargar páginas web ➡ window.loadURL('https://andresriveravalle.com')
  mainWindow.loadFile('index.html')

  // ⬇ Cargar menu
  setMainMenu(mainWindow)
}

app.whenReady().then(() => {
  createWindow()
})

/* ⬇ app.on: eventos que se ejecutarán en la aplicación */
app.on('window-all-closed', () => {
  // win32 ➡ windows
  // darwin ➡ macos
  // linux ➡ linux
  /* ⬇ Asegurar que se cierre una ventana */
  if (process.platform !== 'win32') { // macOS
    app.quit()
  }
})
