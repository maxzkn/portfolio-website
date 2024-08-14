import { FC } from "react";
import ExportedImage from "next-image-export-optimizer";

export const ExperienceItem: FC<ExperienceItemProps> = ({
  icon,
  altText,
  classNames,
  title,
  institution,
  dates,
  description,
}) => {
  return (
    <div className={`flex flex-col items-center z-10 justify-between ${classNames}`}>
      <div className="basis-2/5"></div>
      <div className="basis-1/5 flex justify-center text-center pb-4 sm:pb-0">
        <ExportedImage width={45} height={45} src={icon} alt={altText} />
      </div>
      <div className={`basis-2/5 text-center ${classNames.includes("flex-row-reverse") ? "md:text-right" : "md:text-left"}`}>
        <p className="mb-2 font-bold text-gray-800 text-lg">{title}</p>
        <p className="mb-2 text-sm text-accent">
          {institution} / {dates}
        </p>
        <p className="text-sm text-gray-900 text-opacity-100">{description}</p>
      </div>
    </div>
  );
};
