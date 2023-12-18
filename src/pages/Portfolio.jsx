import React from "react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import projects from "../components/portfolioData";
export default function Portfolio() {
  return (
    <div className="dark:bg-slate-700 pb-20 md:px-4 py-20">
      <SectionHeading
        headingIndex={"02"}
        heading={"Portfolio"}
        desc={"My Latest Work"}
      />
      <div className="flex flex-col gap-3">
        {
          projects.map(project => (
            <ProjectCard
            key={project.name}
            title={project.name}
            description={project.desc}
            img={project.img}
            stacks={project.stacks}
            live={project.live}
            source={project.source}
            />
          ))
        }
      </div>
    </div>
  );
}
