import React from "react";

const Contact = () => {
  return (
    <section className="contact-footer" id="contact">
      <h2>Follow For More Info</h2>
      <ul>
        <li>
          <a
            href="https://incandescent-caramel-5596c0.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            CV
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Jahhav"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jan-havlat"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
