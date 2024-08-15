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
      className={`full-width-child bg-accent transition-opacity ease-in duration-500 ${
        isMySkillsIntersecting ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-5 py-32">
        <p className="pb-20 text-5xl text-center text-white">My Skills</p>
        <p className="pb-10 text-2xl text-white text-center md:text-left">
          Main stack
        </p>
        <div className="flex flex-col text-center gap-12 md:flex-row md:text-left md:flex-wrap md:gap-20">
          {mainStackItems.map((item, index) => (
            <MainStackItem
              key={index}
              title={item.title}
              technologies={item.technologies}
            />
          ))}
        </div>
        <p className="pt-14 pb-10 text-2xl text-white text-center md:text-left">
          Technologies used in work/personal projects
        </p>
        <div className="flex flex-wrap gap-6">
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
