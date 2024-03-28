import React from "react";
import ProjectCard from "./ProjectCard";
import {motion} from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "E-commerce Application",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "E-commerce Application",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    gitUrl: "/",
    previewUrl: "/",
  },
];

function ProjectsSection() {
  return (
    <section className="relative z-10">
      <h1 className="font-bold mb-4 mt-8 md:mb-12 flex justify-center text-white text-4xl sm:text-4xl md:text-4xl lg:text-5xl">
        <span className="text-transparent px-1 py-1 bg-clip-text bg-gradient-to-r from-purple-500 via-white to-purple-500">
          My Projects
        </span>
      </h1>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => {
          return (
            <li key={project.id}>
              <ProjectCard
                key={project.id}
                title={project.title}
                imgUrl={project.image}
                desc={project.description}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ProjectsSection;
