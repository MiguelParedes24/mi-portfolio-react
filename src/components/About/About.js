import React from "react";
import imagen from "../../img/foto-perfil.jpeg";
import "./About.css";

function About() {
  return (
    <div id="about">
      <h2>Sobre Mi</h2>
      <div className="about-contenido">
        <div className="div-foto">
          <img className="fotoPerfil" src={imagen} alt="foto-perfil" />
        </div>
        <article className="sobreMi_articulo">
          Hola Mi nombre es Miguel y aspiro a ser Programador en mi día a día.
          Actualmente me encuentro estudiando la carrera de Analista Programador
          Universitario en la Universidad Nacional de la Patagonia San Juan
          Bosco (UNPSJB) la cual esta localizada en Comodoro Rivadavia (Chubut),
          de donde provengo. Lo que busco es poder ganar experiencia dentro del
          area IT para poder desenvolverme mejor e ir aprendiendo nuevas
          habilidades y obteniendo nuevas herramientas para mi futuro. Podes
          visitar mi linkedin haciendo click{" "}
          <a href="https://www.linkedin.com/in/miguel-alejandro-paredes-bb6a99224">
            aquí
          </a>
          .
          <br />
          <br />
          <a
            className="enlaceCV"
            href="https://drive.google.com/file/d/1HKNqZDrWOtSzqlBAyqM-C0Xi-RuAtckV/view?usp=drive_link"
          >
            Mi CV descargable aquí
          </a>
        </article>
      </div>
      <br />
    </div>
  );
}

export default About;
