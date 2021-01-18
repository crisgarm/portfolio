import React, { useEffect, useState } from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme-color");
    if (currentThemeColor === "light") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, []);

  const handleChange = () => {
    if (isLight) {
      localStorage.setItem("theme-color", "dark");
      setIsLight(false);
    } else {
      localStorage.setItem("theme-color", "light");
      setIsLight(true);
    }
  };

  return (
    <div className={`app ${isLight ? "theme-light" : "theme-dark"}`}>
      <Header value={isLight} handleChange={handleChange} />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
