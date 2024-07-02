import React from "react";
import ProjectCard from "./Project.card";
import picture1 from "./assets/companyImage.png";
import picture2 from "./assets/travelImage.png";
import picture3 from "./assets/shopImage.png";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        <ProjectCard
          heading="Transport Company"
          urlPic={picture1}
          description="Final project from Engeto acamedy. Course focused on React.js, which I successfuly graduated and obtained a cerfitivation."
          pageUrl="https://effulgent-kelpie-821d50.netlify.app/"
          gitHubUrl="https://github.com/Jahhav/EngetoProject-TravelCompany.git"
        />
        <ProjectCard
          heading="Travel Agency"
          urlPic={picture2}
          description="Modern site design for a fictive travel agency company."
          pageUrl="https://fanciful-paletas-18c989.netlify.app/"
          gitHubUrl="https://github.com/Jahhav/TRVL-web-site.git"
        />
        <ProjectCard
          heading="Clothing e-shop"
          urlPic={picture3}
          description="E-shop with all the standard functions."
          pageUrl="https://ephemeral-pixie-1ada71.netlify.app/"
          gitHubUrl="https://github.com/Jahhav/crwn-clothing-v2.git"
        />
      </div>
    </section>
  );
};

export default Projects;
