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
        <div tabindex="0">
          <i
            className="aboutme__skills-icon icon-html fab fa-html5"
            title="Html5"
          ></i>
          <span className="sr-only">Html5</span>
        </div>
        <div tabindex="0">
          <i
            className="aboutme__skills-icon icon-css fab fa-css3-alt"
            title="Css3"
          >
            <span className="sr-only">Css3</span>
          </i>
        </div>
        <div tabindex="0">
          <i
            className="aboutme__skills-icon icon-sass fab fa-sass"
            title="Sass"
          >
            <span className="sr-only">Sass</span>
          </i>
        </div>
        <div tabindex="0">
          <i
            className="aboutme__skills-icon icon-js fab fa-js"
            title="JavaScript"
          >
            <span className="sr-only">JavaScript</span>
          </i>
        </div>
        <div tabindex="0">
          <i
            className="aboutme__skills-icon icon-react fab fa-react"
            title="React"
          >
            <span className="sr-only">React</span>
          </i>
        </div>
        <div tabindex="0">
          <i
            className="aboutme__skills-icon icon-git fab fa-git-alt"
            title="Git"
          >
            <span className="sr-only">Git</span>
          </i>
        </div>
        <div tabindex="0">
          <i
            className="aboutme__skills-icon icon-gulp fab fa-gulp"
            title="Gulp"
          >
            <span className="sr-only">Gulp</span>
          </i>
        </div>
        <div tabindex="0">
          <i
            className="aboutme__skills-icon icon-angular fab fa-angular"
            title="Angular"
          >
            <span className="sr-only">Angular</span>
          </i>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
