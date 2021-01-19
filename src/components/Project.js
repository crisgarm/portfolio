import React from "react";
import "../stylesheets/Projects.scss";

const Project = (props) => {
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
          alt={"Previsualización app " + props.projectItem.title}
          title={"Previsualización app " + props.projectItem.title}
        />
        <p className="projects__content-text">
          {props.projectItem.description}
        </p>
      </div>
      <div className="projects__content-wrapper">
        <h3 className="projects__content-title">{props.projectItem.title}</h3>
        <div>
          <a
            href={props.projectItem.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github projects__content-links"></i>
          </a>
          <a href={props.projectItem.webLink} target="_blank" rel="noreferrer">
            <i className="fas fa-laptop projects__content-links"></i>
          </a>
        </div>
      </div>
      <ul className="projects__content-skills">{projectSkills}</ul>
    </>
  );
};

export default Project;
