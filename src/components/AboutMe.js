import React from "react";
import { useTranslation } from "react-i18next";
import imgAboutme from "../images/cristina-garcia-martin.jpg";
import "../stylesheets/AboutMe.scss";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section className="aboutme" id="aboutme">
      <h2 className="aboutme__title">{t("aboutme.title")}</h2>
      <div className="aboutme__wrapper">
        <div className="aboutme__textWrapper">
          <p className="aboutme__text">
            {t("aboutme.text1")}{" "}
            <span className="aboutme__text-span">{t("aboutme.text2")}</span>{" "}
            {t("aboutme.text3")}{" "}
            <span className="aboutme__text-span">{t("aboutme.text4")}</span>{" "}
            {t("aboutme.text5")}{" "}
            <span className="aboutme__text-span">{t("aboutme.text6")}</span>{" "}
            {t("aboutme.text7")}
          </p>
          <p className="aboutme__text">
            {t("aboutme.text8")}{" "}
            <span className="aboutme__text-span">{t("aboutme.text9")}</span>{" "}
            {t("aboutme.text10")}
          </p>
          <p className="aboutme__text">{t("aboutme.text11")} </p>
        </div>
        <div className="aboutme__imgWrapper">
          <img
            src={imgAboutme}
            className="aboutme__image"
            alt={t("aboutme.img-alt")}
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
