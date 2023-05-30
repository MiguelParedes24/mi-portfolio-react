import React from "react";
import { ReactComponent as LogoHtml } from "../../assets/html/icons8-html-144.svg";
import { ReactComponent as LogoCss } from "../../assets/css3/icons8-css3-144.svg";
import { ReactComponent as LogoJS } from "../../assets/javascript/icons8-javascript-144.svg";
import { ReactComponent as LogoJava } from "../../assets/java/icons8-logotipo-de-java-coffee-cup-144.svg";
import { ReactComponent as LogoMysql } from "../../assets/mysql/icons8-mysql-144.svg";
import { ReactComponent as LogoPHP } from "../../assets/php/php.svg";
import "./Skills.css";

function Skills() {
  return (
    <div id="skills">
      <h2>Habilidades de Programación</h2>
      <div className="logosLenguajes">
        <LogoHtml />
        <LogoCss />
        <LogoJS />
        <LogoJava />
        <LogoPHP />
        <LogoMysql />
      </div>
    </div>
  );
}

export default Skills;
