import React from "react";
import "../stylesheets/Footer.scss";
import Scroll from "./ScrollToTop";

const Footer = () => {
  return (
    <footer className="footer">
      <small>&copy; 2021 Cristina García Martín</small>
      <Scroll />
    </footer>
  );
};

export default Footer;
