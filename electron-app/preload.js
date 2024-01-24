/* Este archivo nos sirve para crear un puente para que los dos contextos/procesos se puedan pasar información, es decir, del main a nuestra aplicación. */

/* contextBringe: proporciona un mecanismo seguro para exponer ciertas funciones o objetos del proceso principal a los procesos de renderizado en el entorno de Electron
ipcRenderer: proporciona un mecanismo para la comunicación entre procesos (IPC) en el lado del renderizado. */
const { contextBridge, ipcRenderer } = require('electron')
// ⬇ Podemos nombrar al objeto que queremos exponer electron, electronAPI, api, etc
contextBridge.exposeInMainWorld('electronAPI', {
  onUpdateTheme: (callback) => ipcRenderer.on('update-theme', callback)
})
