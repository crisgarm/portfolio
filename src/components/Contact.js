import React from "react";
import "../stylesheets/Contact.scss";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">¿Hablamos?</h2>
      <p className="contact__text">
        Si quieres hablar sobre desarrollo web, darme feedback sobre mis
        proyectos o simplemente decir hola 😄, puedes escribirme un email o
        contactarme a través de LinkedIn, Github o Twitter. Además, estoy
        buscando mi primera oportunidad laboral como desarrolladora frontend,
        así que si crees que mi perfil puede encajar con lo que buscas, no dudes
        en ponerte en contacto conmigo. ¡Gracias y hasta pronto!
      </p>
      <ul className="contact__menu">
        <li className="contact__menu-item">
          <a
            href="https://www.linkedin.com/in/crisgarm/"
            className="contact__menu-link"
            target="_blank"
            rel="noreferrer"
            title="Ir a LinkedIn"
          >
            <small>crisgarm</small>
            <i className="fab fa-linkedin-in contact__menu-link-icon"></i>
          </a>
        </li>
        <li className="contact__menu-item">
          <a
            href="https://github.com/crisgarm/"
            className="contact__menu-link"
            target="_blank"
            rel="noreferrer"
            title="Ir a Github"
          >
            <small>crisgarm</small>
            <i className="fab fa-github contact__menu-link-icon"></i>
          </a>
        </li>
        <li className="contact__menu-item">
          <a
            href="mailto:crisgarm9@gmail.com"
            className="contact__menu-link"
            target="_blank"
            rel="noreferrer"
            title="Email"
          >
            <small>crisgarm9@gmail.com</small>
            <i className="far fa-envelope contact__menu-link-icon"></i>
          </a>
        </li>
        <li className="contact__menu-item">
          <a
            href="https://twitter.com/Cris_Gar_Mar"
            className="contact__menu-link"
            target="_blank"
            rel="noreferrer"
            title="Ir a Twitter"
          >
            <small>Cris_Gar_Mar</small>
            <i className="fab fa-twitter contact__menu-link-icon"></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
