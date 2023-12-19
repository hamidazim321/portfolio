import React from "react";
import Overlay from "../components/Overlay";
import SkillBar from "../components/SkillBar";
import SectionHeading from "../components/SectionHeading";

export default function Professional() {
  const skillBarStyles = "flex items-center w-full gap-2"
  return (
    <div id="professional" className="relative dark:bg-stone-500/50 px-4 bg-hardware bg-cover bg-fixed py-20">
      <SectionHeading 
      headingIndex={'01'} 
      heading={'Professional'}
      desc={'My Knowledge level in tech stacks'}
      />
      <div className="relative z-10 w-full md:w-3/4 md:mx-auto flex flex-col gap-y-3 md:gap-y-8">
        <SkillBar 
        className={skillBarStyles}
        tech={'React'} 
        level={'80'}
        barStyles={`h-2 bg-green-500`}
        />
        <SkillBar 
        className={skillBarStyles}
        tech={'JavaScript'} 
        level={'95'}
        barStyles={`h-2 bg-green-500`}
        />
        <SkillBar 
        className={skillBarStyles}
        tech={'CSS3'} 
        level={'80'}
        barStyles={`h-2 bg-green-500`}
        />
        <SkillBar 
        className={skillBarStyles}
        tech={'Python'} 
        level={'70'}
        barStyles={`h-2 bg-green-500`}
        />
        <SkillBar 
        className={skillBarStyles}
        tech={'Ruby'} 
        level={'70'}
        barStyles={`h-2 bg-green-500`}
        />
      </div>
      <Overlay lightColor={'white/50'} darkColor={'slate-600/75'} />
    </div>
  );
}
