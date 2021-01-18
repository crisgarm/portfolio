import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../stylesheets/Header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list-item">
            <Link
              to="#aboutme"
              className="header__list-item-link"
              alt="Ir a la sección sobre Cristina"
              title="Ir a la sección sobre Cristina"
            >
              Sobre mi
            </Link>
          </li>
          <li className="header__list-item">
            <Link
              to="#projects"
              className="header__list-item-link"
              alt="Ir a la sección de proyectos"
              title="Ir a la sección de proyectos"
            >
              Proyectos
            </Link>
          </li>
          <li className="header__list-item">
            <Link
              to="#contact"
              className="header__list-item-link"
              alt="Ir a la sección de contacto"
              title="Ir a la sección de contacto"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <section className="hero">
        <div className="hero__wrapper">
          <span className="hero__wrapper-span">&lt;Hola Mundo/&gt;</span>
          <h1 className="hero__wrapper-title">Cristina García Martín</h1>
          <h2 className="hero__wrapper-subtitle">Frontend developer</h2>
        </div>
        <ul className="hero__menu">
          <li className="hero__menu-item">
            <a
              href="https://www.linkedin.com/in/crisgarm/"
              className="hero__menu-item-link"
              target="_blank"
              rel="noreferrer"
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
            >
              <i className="fab fa-twitter hero__menu-item-link-icon"></i>
            </a>
          </li>
        </ul>
        <i className=" hero__arrow fas fa-angle-double-down"></i>
      </section>
    </header>
  );
};

export default Header;
