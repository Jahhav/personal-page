import React from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Element } from "react-scroll"; // Correct import

const App = () => (
  <div className="app">
    <Header />
    <Element name="about-me">
      <Introduction />
    </Element>
    <Element name="projects">
      <Projects />
    </Element>
    <Element name="contact">
      <Contact />
    </Element>
  </div>
);

export default App;
