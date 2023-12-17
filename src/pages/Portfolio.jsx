import React from "react";
import SectionHeading from "../components/SectionHeading";
import image from "../assets/Headshot.png";
import image2 from "../assets/hardware.jpg";
export default function Portfolio() {
  return (
    <div className="dark:bg-slate-700">
      <SectionHeading
        headingIndex={"02"}
        heading={"Portfolio"}
        desc={"My Latest Work"}
      />
      <div className="Cards here">
      </div>
    </div>
  );
}
