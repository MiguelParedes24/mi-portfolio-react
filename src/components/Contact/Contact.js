import React from "react";
import Formulario from "../Formulario/Formulario";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <h2>Contactame</h2>
      <p className="parrafoContacto">
        Si te gusta mi trabajo no dudes en ponerte en contacto conmigo: (De
        momento solo via{" "}
        <a href="https://www.linkedin.com/in/miguel-alejandro-paredes-bb6a99224">
          Linkedin
        </a>
        )
      </p>
      <Formulario />
      <br />
    </div>
  );
}

export default Contact;
