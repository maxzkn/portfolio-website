import { FC } from "react";
import { CustomLink } from "../CustomLink";

export const DownloadCV: FC = () => {
  return (
    <button
      role="button"
      className="text-white border border-slate-300 focus:outline-none rounded-md hover:bg-slate-200 hover:text-black transform transition duration-500 md:mr-5"
    >
      <CustomLink link="/Maksim_Zykin_CV.pdf">
        <p className="py-2 px-5">Download CV</p>
      </CustomLink>
    </button>
  );
};
