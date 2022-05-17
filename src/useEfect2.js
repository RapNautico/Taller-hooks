import React, { useEffect, useState } from "react";

function ShowWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Creamos una función para actualizar el estado con el clientWidth
    const updateWidth = () => {
      const width = document.body.clientWidth
      console.log(`updateWidth con ${width}`)
      setWidth(width)
    }
    // Actualizaremos el width al montar el componente
    updateWidth()
    // Nos suscribimos al evento resize() de window
    window.addEventListener("resize", updateWidth)
  })

  return (
    <div>
      <span>Width es de {width}px</span>
    </div>
  )
}

export default ShowWindowWidth;