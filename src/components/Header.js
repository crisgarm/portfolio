import React from "react";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import "../stylesheets/Header.scss";

const Header = (props) => {
  const handleChange = () => {
    props.handleChange();
  };

  const { t, i18n } = useTranslation(["translation"]);

  return (
    <header className="header">
      <section className="menu">
        <div className="menu__wrapper">
          <label className="menu__switch-label" for="switchmode">
            <input
              id="switchmode"
              name="switchmode"
              className="menu__switch-input"
              type="checkbox"
              onChange={handleChange}
              checked={props.value}
            />
            <span className="menu__switch-slider round">
              <i className="fas fa-sun"></i>
              <i className="fas fa-moon"></i>
            </span>
          </label>
          <div>
            <button
              aria-label={t("header.langES")}
              className="menu__button"
              onClick={() => i18n.changeLanguage("es")}
            >
              ES
            </button>
            <button
              aria-label={t("header.langEN")}
              className="menu__button"
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>
        <Navbar />
      </section>
      <section className="hero">
        <div className="hero__wrapper">
          <span className="hero__wrapper-span">
            &lt;{t("header.small")}/&gt;
          </span>
          <h2 className="hero__wrapper-subtitle">Cristina García Martín</h2>
          <h1 className="hero__wrapper-title">{t("header.title")}</h1>
        </div>
        <ul className="hero__menu">
          <li className="hero__menu-item">
            <a
              href="https://www.linkedin.com/in/crisgarm/"
              className="hero__menu-item-link"
              target="_blank"
              rel="noreferrer"
              title={t("header.linkedin")}
            >
              <i className="fab fa-linkedin-in hero__menu-item-link-icon"></i>
            </a>
          </li>
          <li className="hero__menu-item">
            <a
              href="https://github.com/crisgarm/"
              className="hero__menu-item-link"
              target="_blank"
              rel="noreferrer"
              title={t("header.github")}
            >
              <i className="fab fa-github hero__menu-item-link-icon"></i>
            </a>
          </li>
          <li className="hero__menu-item">
            <a
              href="mailto:crisgarm9@gmail.com"
              className="hero__menu-item-link"
              target="_blank"
              rel="noreferrer"
              title="Email"
            >
              <i className="far fa-envelope hero__menu-item-link-icon"></i>
            </a>
          </li>
          <li className="hero__menu-item">
            <a
              href="https://twitter.com/Cris_Gar_Mar"
              className="hero__menu-item-link"
              target="_blank"
              rel="noreferrer"
              title={t("header.twitter")}
            >
              <i className="fab fa-twitter hero__menu-item-link-icon"></i>
            </a>
          </li>
        </ul>
        <HashLink to="#aboutme" aria-label="Ir a la sección sobre Cristina">
          <i className=" hero__arrow fas fa-angle-double-down"></i>
        </HashLink>
      </section>
    </header>
  );
};

export default Header;
