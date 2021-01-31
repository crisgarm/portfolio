import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "../stylesheets/Header.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickBurguerButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="header__nav">
      <ul className={`header__list ${isOpen ? "active" : ""}`}>
        <li className="header__list-item ">
          <HashLink
            to="#aboutme"
            className="header__list-item-link"
            alt="Ir a la sección sobre Cristina"
            title="Ir a la sección sobre Cristina"
            onClick={handleClickBurguerButton}
          >
            Sobre mí
          </HashLink>
        </li>
        <li className="header__list-item">
          <HashLink
            to="#projects"
            className="header__list-item-link"
            alt="Ir a la sección de proyectos"
            title="Ir a la sección de proyectos"
            onClick={handleClickBurguerButton}
          >
            Proyectos
          </HashLink>
        </li>
        <li className="header__list-item">
          <HashLink
            to="#contact"
            className="header__list-item-link"
            alt="Ir a la sección de contacto"
            title="Ir a la sección de contacto"
            onClick={handleClickBurguerButton}
          >
            Contacto
          </HashLink>
        </li>
      </ul>
      <div onClick={handleClickBurguerButton} className="header__burguer">
        <div className={`header__burguer-1 ${isOpen ? "change" : ""}`}></div>
        <div className={`header__burguer-2 ${isOpen ? "change" : ""}`}></div>
        <div className={`header__burguer-3 ${isOpen ? "change" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
