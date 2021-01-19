import React from "react";
import "../stylesheets/Footer.scss";
import Scroll from "./ScrollToTop";

const Footer = () => {
  return (
    <footer className="footer">
      <small className="footer__text">
        &lt; Desarrollado por Cristina García Martín /&gt;
      </small>
      <Scroll />
    </footer>
  );
};

export default Footer;
