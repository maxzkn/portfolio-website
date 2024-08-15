import { FC } from "react";
import Image from "next/image";
import { ExperienceItemProps } from "./types";

export const ExperienceItem: FC<ExperienceItemProps> = ({
  icon,
  altText,
  title,
  reverseRow,
  institution,
  dates,
  description,
}) => {
  return (
    <div
      className={`flex flex-col items-center z-10 justify-between ${
        reverseRow ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="basis-2/5"></div>
      <div className="basis-1/5 flex justify-center text-center pb-4 md:pb-0">
        <Image
          className="border-2 border-slate-600 rounded-full"
          width={35}
          height={35}
          src={icon}
          alt={altText}
        />
      </div>
      <div
        className={`basis-2/5 text-center flex flex-col gap-3 ${
          reverseRow ? "md:text-right" : "md:text-left"
        }`}
      >
        <p className="text-lg text-slate-300">{title}</p>
        <p className="text-sm text-accent">
          {institution} / {dates}
        </p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
