import React from "react";
import Project from "./Project";
import "../stylesheets/Projects.scss";

const ProjectList = (props) => {
  const projectList = props.data.map((projectItem) => {
    return (
      <article className="projects__content" key={projectItem.id}>
        <Project projectItem={projectItem} />
      </article>
    );
  });
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Mis proyectos</h2>
      <div className="projects__wrapper">{projectList}</div>
    </section>
  );
};

export default ProjectList;
