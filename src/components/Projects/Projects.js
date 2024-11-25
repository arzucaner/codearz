import React from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Open Source Library X",
    description: "Contributed to a library for improving API performance.",
    image: "https://via.placeholder.com/300x150", 
    link: "https://github.com/username/repository1",
  },
  {
    title: "E-Commerce Platform",
    description: "Built an e-commerce web application using React and Node.js.",
    image: "https://via.placeholder.com/300x150", 
    link: "https://github.com/username/repository2",
  },
  {
    title: "Portfolio Website",
    description: "This portfolio site showcasing my work.",
    image: "https://via.placeholder.com/300x150", 
    link: "https://github.com/username/repository3",
  },
];

function Projects() {
  return (
    <div className={styles.projects}>
      <h1>My GitHub Projects</h1>
      <div className={styles.projectContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.projectContent}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

