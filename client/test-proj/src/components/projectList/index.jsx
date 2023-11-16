import React from 'react';

const ProjectList = ({ projects }) => {
  const projectList = projects.map((project) => (
    <li key={project.id}>
      <h2>{project.title}</h2>
      <p>{project.text}</p>
    </li>
  ));

  return (
    <div>
      <h1>Projects</h1>
      <ul>{projectList}</ul>
    </div>
  );
};

export default ProjectList;