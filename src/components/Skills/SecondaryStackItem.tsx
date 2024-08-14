import { FC } from "react";
import ExportedImage from "next-image-export-optimizer";
import { SecondaryStackItemProps } from "./types";
import { CustomLink } from "../CustomLink";

export const SecondaryStackItem: FC<SecondaryStackItemProps> = ({
  technology,
  link,
  icon,
  altText,
  width,
  height,
}) => {
  return (
    <div className="group flex items-center relative">
      <span className="group-hover:opacity-100 w-max mb-6 transition-opacity text-gray-600 bg-white border border-slate-300 px-1 text-sm rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 mx-auto">
        {technology}
      </span>
      <CustomLink link={link}>
        <ExportedImage width={width} height={height} src={icon} alt={altText} />
      </CustomLink>
    </div>
  );
};
