import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import "../stylesheets/Header.scss";

const Navbar = () => {
  const { t } = useTranslation();

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
            alt={t("header.menu-aboutme-alt")}
            title={t("header.menu-aboutme-alt")}
            onClick={handleClickBurguerButton}
          >
            {t("header.menu-aboutme")}
          </HashLink>
        </li>
        <li className="header__list-item">
          <HashLink
            to="#projects"
            className="header__list-item-link"
            alt={t("header.menu-projects-alt")}
            title={t("header.menu-projects-alt")}
            onClick={handleClickBurguerButton}
          >
            {t("header.menu-projects")}
          </HashLink>
        </li>
        <li className="header__list-item">
          <HashLink
            to="#contact"
            className="header__list-item-link"
            alt={t("header.menu-contact-alt")}
            title={t("header.menu-contact-alt")}
            onClick={handleClickBurguerButton}
          >
            {t("header.menu-contact")}
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
