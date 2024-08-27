import { FC, useRef } from "react";
import { useIsIntersecting } from "@/hooks/useIsIntersecting";
import { MainStackItem } from "./MainStackItem";
import { mainStackItems, secondaryStackItems } from "./constants";
import { SecondaryStackItem } from "./SecondaryStackItem";

export const Skills: FC = () => {
  const mySkillsRef = useRef(null);
  const isMySkillsIntersecting = useIsIntersecting(mySkillsRef);

  return (
    <section
      ref={mySkillsRef}
      id="my-skills"
      className={`full-width-child flex items-center py-24 md:py-48 2xl:py-52 bg-gradient-to-l from-slate-600 to-slate-800 transition-opacity ease-in duration-500 ${
        isMySkillsIntersecting ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="custom-container xl:px-12">
        <p className="pb-16 md:pb-20 text-5xl text-accent text-center">My Skills</p>
        <p className="pb-10 text-2xl text-accent text-center md:text-left 2xl:text-center">
          Main stack
        </p>
        <div className="flex flex-col text-center gap-12 md:flex-row md:text-left md:flex-wrap md:gap-20 2xl:justify-center">
          {mainStackItems.map((item, index) => (
            <MainStackItem
              key={index}
              title={item.title}
              technologies={item.technologies}
            />
          ))}
        </div>
        <p className="pt-14 pb-10 text-2xl text-accent text-center md:text-left 2xl:text-center">
          Technologies used in work/personal projects
        </p>
        <div className="flex flex-wrap gap-6 justify-center md:justify-normal 2xl:justify-center">
          {secondaryStackItems.map((item, index) => (
            <SecondaryStackItem
              key={index}
              technology={item.technology}
              link={item.link}
              altText={item.altText}
              icon={item.icon}
              width={item.width}
              height={item.height}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
