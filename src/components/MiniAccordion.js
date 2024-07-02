import React, { useState } from "react";
import { Link } from "react-scroll";

const MiniAccordion = ({ sections }) => {
  return (
    <ul className="mini-accordion">
      {sections.map((section, index) => (
        <li key={index}>
          <Link
            className="accordion-button"
            to={section.content}
            smooth={true}
            duration={500}
          >
            {section.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MiniAccordion;

//dodelat scroller
