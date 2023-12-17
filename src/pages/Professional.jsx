import React from "react";
import Overlay from "../components/Overlay";
import SkillBar from "../components/SkillBar";

export default function Professional() {
  const skillBarStyles = "flex items-center w-full gap-2"
  return (
    <div className="relative dark:bg-stone-500/50 p-4 bg-hardware bg-cover py-20">
      <div className="relative z-10 p-4 flex flex-col items-center justify-center gap-3">
        <p className="dark:text-white font-mono font-black text-3xl sm:text-4xl md:text-5xl">
          <span className="me-2 dark:text-white/50 text-black/50">01</span>Professional
        </p>
        <p className="font-sans font-normal dark:text-white text-xl sm:text-2xl md:text-2xl">
          My Knowledge level in tech stacks
        </p>
      </div>
      <div className="relative z-10 w-full md:w-3/4 md:mx-auto flexflex-col gap-3 md:gap-5">
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
