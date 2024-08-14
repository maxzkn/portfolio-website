import { FC, useRef } from "react";
import { useIsIntersecting } from "@/hooks/useIsIntersecting";
import { ExperienceItem } from "./ExperienceItem";
import { ExperienceItemContainer } from "./ExperienceItemContainer";
import { educationItems, workExperienceItems } from "./constants";

export const Experience: FC = () => {
  const myExperienceRef = useRef(null);
  const myEducationRef = useRef(null);

  const isMyExperienceIntersecting = useIsIntersecting(myExperienceRef);
  const isMyEducationIntersecting = useIsIntersecting(myEducationRef);

  return (
    <section
      ref={myExperienceRef}
      id="my-experience"
      className={`transition-opacity ease-in duration-500 ${
        isMyExperienceIntersecting ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="pb-20 text-5xl text-black text-center">My Experience</p>
      <p className="p-2 text-xl text-black bg-slate-300 bg-opacity-40 rounded w-60 text-center m-auto">
        Work experience
      </p>
      <ExperienceItemContainer>
        {workExperienceItems.map((item, index) => (
          <ExperienceItem
            key={index}
            icon={item.icon}
            altText={item.altText}
            classNames={item.classNames}
            title={item.title}
            institution={item.institution}
            dates={item.dates}
            description={item.description}
          />
        ))}
      </ExperienceItemContainer>
      <div
        ref={myEducationRef}
        className={`transition-opacity ease-in duration-500 ${
          isMyEducationIntersecting ? "opacity-100" : "opacity-0"
        }`}
      >
        <p
          ref={myEducationRef}
          className="p-2 text-xl text-black bg-slate-300 bg-opacity-40 rounded w-60 text-center m-auto"
        >
          Education
        </p>
        <ExperienceItemContainer>
          {educationItems.map((item, index) => (
            <ExperienceItem
              key={index}
              icon={item.icon}
              altText={item.altText}
              classNames={item.classNames}
              title={item.title}
              institution={item.institution}
              dates={item.dates}
              description={item.description}
            />
          ))}
        </ExperienceItemContainer>
      </div>
    </section>
  );
};
