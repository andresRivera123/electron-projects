/* Menu: se utiliza para crear y gestionar menús de aplicaciones. */
const { Menu, dialog } = require('electron')

const setMainMenu = (mainWindow) => {
  /* ⬇ template es un array con el menu y las pestañas que queramos agregar */
  const template = [
    {
      label: 'Opciones',
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    },
    {
      label: 'Themes',
      submenu: [
        {
          label: 'Light',
          click: () => {
            console.log('Select light theme')
            mainWindow.webContents.send('update-theme', 'light')
          }
        },
        {
          label: 'Dark',
          click: () => {
            console.log('Select dark theme')
            mainWindow.webContents.send('update-theme', 'dark')
          }
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Abrir archivo',
      click: () => {
        dialog.showOpenDialog(mainWindow, {
          filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }],
          title: 'Selecciona tu archivo Markdown',
          properties: ['openFile', 'openDirectory']
        })
      }
    }
  ]
  // ⬇ Construimos el menu con el template creado.
  const menu = Menu.buildFromTemplate(template)
  // ⬇ Asignarlo como menu de la aplicación.
  Menu.setApplicationMenu(menu)
}

module.exports = {
  setMainMenu
}
