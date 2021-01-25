import React from "react";
import imgAboutme from "../images/cristina-garcia-martin.jpg";
import "../stylesheets/AboutMe.scss";

const AboutMe = () => {
  return (
    <section className="aboutme" id="aboutme">
      <h2 className="aboutme__title">Sobre mí</h2>
      <div className="aboutme__wrapper">
        <div className="aboutme__textWrapper">
          <p className="aboutme__text">
            Comunicadora audiovisual reconvertida en{" "}
            <span className="aboutme__text-span">desarrolladora frontend.</span>{" "}
            Me gusta afrontar nuevos retos con optimismo y perspectiva. He
            trabajado en distintos ámbitos, en el sector público y en el
            privado, tanto en agencia como en cliente, fomentando mi{" "}
            <span className="aboutme__text-span">capacidad de adaptación</span>{" "}
            a diferentes entornos y exigencias. Mi experiencia profesional en
            equipos multidisciplinares me convierte en una persona{" "}
            <span className="aboutme__text-span">
              despierta, activa y comprometida.
            </span>
          </p>
          <p className="aboutme__text">
            Tras mi experiencia mejorando el posicionamiento orgánico de sitios
            web, encontré otra forma de comunicación: la{" "}
            <span className="aboutme__text-span">programación.</span> Así
            aterricé en Adalab, donde he descubierto un mundo apasionante lleno
            de oportunidades que me motiva a mejorar día a día.
          </p>
        </div>
        <div className="aboutme__imgWrapper">
          <img
            src={imgAboutme}
            className="aboutme__image"
            alt="Foto de Cristina García"
            title="Cristina García"
          />
        </div>
      </div>
      <div className="aboutme__skills">
        <i className="aboutme__skills-icon icon-html fab fa-html5"></i>
        <i className="aboutme__skills-icon icon-css fab fa-css3-alt"></i>
        <i className="aboutme__skills-icon icon-sass fab fa-sass"></i>
        <i className="aboutme__skills-icon icon-js fab fa-js"></i>
        <i className="aboutme__skills-icon icon-react fab fa-react"></i>
        <i className="aboutme__skills-icon icon-git fab fa-git-alt"></i>
        <i className="aboutme__skills-icon icon-gulp fab fa-gulp"></i>
        <i className="aboutme__skills-icon icon-node fab fa-node"></i>
      </div>
    </section>
  );
};

export default AboutMe;
