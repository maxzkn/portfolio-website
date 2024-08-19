import { FC } from "react";
import { CustomLink } from "../CustomLink";

export const DownloadCVButton: FC = () => {
  return (
    <button
      role="button"
      className="text-accent border border-accent focus:outline-none rounded-md hover:bg-accent hover:text-black transform transition duration-500 lg:mr-5"
    >
      <CustomLink link="/Maksim_Zykin_CV.pdf">
        <p className="py-2 px-5">Download CV</p>
      </CustomLink>
    </button>
  );
};
