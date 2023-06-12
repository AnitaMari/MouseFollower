import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'


//vamos a crear el useEffect para hacer la bolita o una animación
//y useState para activarlo o desactivarlo

function App() { //1. creamos el useState y useEffect
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 }) //6. para guardar la posición. Una buena práctica es inicializarlo con el tipo de dato que vamos a usar siempre, o null si no tienes ese dato
  useEffect(() => {
    console.log("efecto", { enabled }) //en la consola se ve true, false, true...
    
    const handleMove = (event) => { //4. para controlar cuando se hace este efecto
      const { clientX, clientY } = event // (para saber la posición)
      console.log("handleMove", { clientX, clientY }) //te dice la posición del puntero en la pantalla
      setPosition({ x: clientX, y: clientY }) //8. para actualizar la posición
    }

    if (enabled) { //5. solo me suscribo al evento si es true. No se podría meter el useEffect dentro del if
      window.addEventListener("pointermove", handleMove) 
    }
//9. Limpiar el useEffect para que deje de estar activo una vez que le damos al botón de desactivar:
//Cleanup cuando el componente se desmonta y cuando cambian las dependencias, antes de ejecutar 
  return () => {
    console.log("cleanup")
      window.removeEventListener("pointermove", handleMove) //para limpiar la suscripción anterior
 }
 //si pusiera en la consola getEvenListeners(window) me aparecería cuántas veces me suscribo al evento (truco). Usarlo para ver si se limpia bien el evento. Solo en Chromium

  }, [enabled]) //le decimos que se tiene que ejecutar cada vez que se actualice el valor del enabled

  return (
    <main>    
      <h3>Mouse Follower</h3>
      {/* 3. hacer la bolita */}
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        // transform: "translate(0px, 0px)". 7. Abajo:
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />


      {/* 2. con el botón vamos a cambiar el estado. Cada vez que lo hacemos se renderiza el efecto */}
      <button onClick={() => setEnabled(!enabled)}> 
        {enabled ? "Desactivar" : "Activar"} seguir puntero</button>
    </main>
  )
}

export default App
