import React from "react";
import MiniAccordion from "./MiniAccordion"; // Import MiniAccordion component

const sections = [
  { title: "About Me", content: "about-me" },
  { title: "Projects", content: "projects" },
  { title: "Contact", content: "contact" },
];

const Header = () => {
  return (
    <header className="header">
      <h1>Jan Havlát</h1>
      <h2>Junior - JavaScript React Developer</h2>
      <MiniAccordion sections={sections} />
    </header>
  );
};

export default Header;
