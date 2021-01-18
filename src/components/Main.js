import React from "react";
import AboutMe from "./AboutMe";
import ProjectList from "./ProjectList";
import Contact from "./Contact";
import "../stylesheets/Main.scss";

const Main = () => {
  return (
    <main>
      <AboutMe />
      <ProjectList />
      <Contact />
    </main>
  );
};

export default Main;
