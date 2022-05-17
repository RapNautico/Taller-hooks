import React, { useState } from 'react';
 
function Ejemplo() {
    const [nombre, setNombre] = useState("");

 return (
    <form>
      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        value={nombre}
        id="nombre"
        onChange={(e) => setNombre(e.target.value)}
      />
      <button type="submit">Enviar</button>

      <section>{nombre}</section>
    </form>
 );
}
 
export default Ejemplo;