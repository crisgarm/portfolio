import React from "react";
import { useTranslation } from "react-i18next";
import "../stylesheets/Contact.scss";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">{t("contact.title")}</h2>
      <p className="contact__text">{t("contact.text")}</p>
      <ul className="contact__menu">
        <li className="contact__menu-item">
          <a
            href="https://www.linkedin.com/in/crisgarm/"
            className="contact__menu-link"
            target="_blank"
            rel="noreferrer"
            title={t("header.linkedin")}
          >
            <small>crisgarm</small>
            <i className="fab fa-linkedin-in contact__menu-link-icon"></i>
            <span class="sr-only">
              Contacta conmigo en LinkedIn (Abre en una ventana nueva)
            </span>
          </a>
        </li>
        <li className="contact__menu-item">
          <a
            href="https://github.com/crisgarm/"
            className="contact__menu-link"
            target="_blank"
            rel="noreferrer"
            title={t("header.github")}
          >
            <small>crisgarm</small>
            <i className="fab fa-github contact__menu-link-icon"></i>
            <span class="sr-only">
              Sígueme en Github (Abre en una ventana nueva)
            </span>
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
            <span class="sr-only">
              Contacta conmigo a través de mi email (Abre en una ventana nueva)
            </span>
          </a>
        </li>
        <li className="contact__menu-item">
          <a
            href="https://twitter.com/Cris_Gar_Mar"
            className="contact__menu-link"
            target="_blank"
            rel="noreferrer"
            title={t("header.twitter")}
          >
            <small>Cris_Gar_Mar</small>
            <i className="fab fa-twitter contact__menu-link-icon"></i>
            <span class="sr-only">
              Contacta conmigo en Twitter (Abre en una ventana nueva)
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
