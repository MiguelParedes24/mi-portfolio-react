import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="contenedor-nav">
      <h1 className="logo">MP</h1>
      <nav className="navegacion">
        <a className="link-nav" href="#about">
          Acerca De
        </a>
        <a className="link-nav" href="#skills">
          Habilidades
        </a>
        <a className="link-nav" href="#projects">
          Proyectos
        </a>
        <a className="link-nav" href="#contact">
          Contacto
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
