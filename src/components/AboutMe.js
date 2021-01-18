import React from "react";
import imgAboutme from "../images/cristina-garcia-martin.jpg";
import "../stylesheets/AboutMe.scss";

const AboutMe = () => {
  return (
    <section className="aboutme" id="aboutme">
      <h2 className="aboutme__title">¡Conóceme!</h2>
      <div className="aboutme__wrapper">
        <div className="aboutme__textWrapper">
          <p className="aboutme__text">
            Comunicadora audiovisual reconvertida en front-end developer. Me
            gusta afrontar nuevos retos con optimismo y perspectiva. He
            trabajado en distintos ámbitos, en el sector público y en el
            privado, tanto en agencia como en cliente, fomentando mi capacidad
            de adaptación a diferentes entornos y exigencias. Mi experiencia
            profesional en equipos multidisciplinares me convierte en una
            persona despierta, activa y comprometida.
          </p>
          <p className="aboutme__text">
            Tras mi experiencia mejorando el posicionamiento orgánicos de sitios
            web, descubrí otra forma de comunicación: la programación. Así
            aterricé en Adalab, donde con motivación, actitud y esfuerzo,
            despega mi aventura de aprendizaje como desarrolladora frontend.
          </p>
        </div>
        <div className="aboutme__imgWrapper">
          <img
            src={imgAboutme}
            className="aboutme__image"
            alt="Cristina García"
            title="Cristina García"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
