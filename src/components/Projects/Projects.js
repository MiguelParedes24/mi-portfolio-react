import React from "react";
import "./Project.css";
import imagenFestival from "../../img/miniaturas/festivalRock.png";
import imagenBlogCafe from "../../img/miniaturas/blogCafe.png";
import imagenStore from "../../img/miniaturas/frontEndStore.png";

function Projects() {
  return (
    <div id="projects">
      <h2>Mis Proyectos</h2>
      <article>
        Aqui podrás ver los proyectos que hice de algunos cursos durante mis
        practicas de programación web, basta con clickearlos y visitarlos.
        También puedes ver mis repositorios de{" "}
        <a href="https://github.com/MiguelParedes24">Github</a>.
      </article>
      <br />
      <div className="contenedor-proyectos">
        <div className="portfolio-proyecto">
          <h2 className="h2-proyecto">Festival de Rock</h2>
          <a href="https://rockdemfestival.netlify.app/">
            <img
              className="vistaPrevia-proyecto"
              src={imagenFestival}
              alt="festival de Rock"
            />
          </a>

          <hr />

          <div className="portfolio-proyecto">
            <h2 className="h2-proyecto">Blog de Cafeteria</h2>
            <a href="https://blogcafe-mp.netlify.app/">
              <img
                className="vistaPrevia-proyecto"
                src={imagenBlogCafe}
                alt="Blog de Cafe"
              />
            </a>
          </div>

          <hr />

          <div className="portfolio-proyecto">
            <h2 className="h2-proyecto">Página de Ventas</h2>
            <a href="https://frontendstore-mp.netlify.app/">
              <img
                className="vistaPrevia-proyecto"
                src={imagenStore}
                alt="Pagina de indumentaria Front End"
              />
            </a>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Projects;
