import React from "react";
import profile from "./assets/[removal.ai]_2545570f-b104-4207-8acf-a00cf2c25f42-profilovka_PAB6CX.png";

const Introduction = () => {
  return (
    <section className="introduction" id="about-me">
      <div className="column">
        <div className="profile-container">
          <img src={profile} alt="Profile" className="profile-pic" />
        </div>
      </div>
      <div className="column column2">
        <div className="intro-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm Jan Havlát, a passionate junior React developer with
            experience in building dynamic and responsive web applications. I
            love to work with React and I am always eager to learn new
            technologies.
          </p>
        </div>
        <div className="intro-text short-desc">
          <p>
            I'm increasingly drawn to web development, which I pursue in my
            spare time, particularly focusing on JavaScript and React. I'm
            continuing my education and am motivated to transition into software
            development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
