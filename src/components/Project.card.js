import React from "react";

const ProjectCard = ({ heading, description, urlPic, pageUrl, gitHubUrl }) => {
  return (
    <div className="project-card">
      <div className="project-card-wrapper">
        <a href={pageUrl} className="pic-contain" target="_blank">
          <img src={urlPic} />
        </a>
        <div className="description-div">
          <h2>{heading}</h2>
          <p>{description}</p>
          <a href={gitHubUrl} target="_blank">
            <button className="modern-button">GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
