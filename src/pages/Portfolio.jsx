import React from "react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
export default function Portfolio() {
  return (
    <div className="dark:bg-slate-700">
      <SectionHeading
        headingIndex={"02"}
        heading={"Portfolio"}
        desc={"My Latest Work"}
      />
      <div className="Cards here">
        <ProjectCard img={'../assets/hardware.jpg'}/>
      </div>
    </div>
  );
}
