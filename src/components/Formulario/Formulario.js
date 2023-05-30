import React from "react";
import "./Formulario.css";

function Formulario() {
  return (
    <div>
      <form action="">
        <input
          name="nombre"
          type="text"
          placeholder="Nombre [Requerido]"
          maxlength="30"
          pattern="[a-zA-Z0-9]+"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Correo electrónico [Requerido]"
          required
        />
        <textarea
          name="consulta"
          placeholder="Aquí tu mensaje..."
          rows="6"
          required
        ></textarea>
        <button id="enviar" name="enviar" type="submit" className="btn">
          ENVIAR
        </button>
      </form>
    </div>
  );
}

export default Formulario;
