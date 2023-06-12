import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
//cuando empieza esto hace el effecto, cleanup y effecto para comprobar que funciona bien. Si se ejecutara dos veces es porque hay algo que no está bien.
//el StrictMode solo se usa en desarrollo, no en producción. Es para ayudar al desarrollador, en producción no lo ven. Se puede quitar y no pasa nada.
//con las React Development Tools puedes ver si estás usando el modo desarrollo o producción (icono rojo dcha barra google arriba)
//en components se pueden ver las props, los hooks en la app, etc. Puedes replicar estados, props... manualmente para ver qué pasa (si está en modo desarrollo y no en producción)