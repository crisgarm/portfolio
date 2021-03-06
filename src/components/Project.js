import React from "react";
import { useTranslation } from "react-i18next";
import "../stylesheets/Projects.scss";

const Project = (props) => {
  const { t } = useTranslation();

  const projectSkills = props.projectItem.skills.map((skill, index) => {
    return (
      <li className="projects__content-skills-item" key={index}>
        {skill}
      </li>
    );
  });
  return (
    <>
      <div className="projects__content-imgWrapper">
        <img
          src={props.projectItem.image}
          className="projects__content-img"
          alt={
            "Imagen de previsualización del proyecto " + props.projectItem.title
          }
          title={"Previsualización app " + props.projectItem.title}
        />
        <p className="projects__content-text">
          {t(props.projectItem.description)}
        </p>
      </div>
      <div className="projects__content-wrapper">
        <h3 className="projects__content-title">{props.projectItem.title}</h3>
        <div>
          <a
            href={props.projectItem.githubLink}
            target="_blank"
            rel="noreferrer"
            title={t(props.projectItem.githubAlt)}
          >
            <i className="fab fa-github projects__content-links"></i>
            <span className="sr-only">
              Ver el repositorio en Github (Abre en una ventana nueva)
            </span>
          </a>
          <a
            href={props.projectItem.webLink}
            target="_blank"
            rel="noreferrer"
            title={t(props.projectItem.webAlt)}
          >
            <i className="fas fa-laptop projects__content-links"></i>
            <span className="sr-only">
              Ver una demo de la aplicación (Abre en una ventana nueva)
            </span>
          </a>
        </div>
      </div>
      <ul className="projects__content-skills">{projectSkills}</ul>
    </>
  );
};

export default Project;
