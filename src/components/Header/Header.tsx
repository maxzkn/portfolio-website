import { FC, useEffect, useRef, useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import defaultTheme from "tailwindcss/defaultTheme";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useIsIntersecting } from "@/hooks/useIsIntersecting";
import emailLogo from "images/email.svg";
import linkedinLogo from "images/linkedin.png";
import githubLogo from "images/github.svg";
import { DownloadCV } from "./DownloadCV";
import { CustomLink } from "../CustomLink";

export const Header: FC = () => {
  // Track when the component is mounted on the client-side, since SSR doesn't have access to "window" object
  const [isMounted, setIsMounted] = useState(false);

  const isMobile = useMediaQuery(`(max-width: ${defaultTheme.screens.md})`);

  const headerRef = useRef(null);
  const isHeaderIntersecting = useIsIntersecting(headerRef);

  // useEffect will trigger only when the component is mounted on the client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="w-screen max-w-none mx-auto px-0 mb-20 left-[calc(-50vw+50%)] flex items-center justify-center h-screen relative bg-fixed bg-center bg-no-repeat bg-cover bg-[url('/images/hero.png')]">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-sky-700"></div>
      {isMounted && !isMobile && (
        <div className="container mx-auto absolute top-16 text-right">
          <DownloadCV />
        </div>
      )}
      <div
        ref={headerRef}
        className={`absolute flex flex-col [@media(max-height:570px)]:flex-row items-center justify-center gap-7 transition transform duration-500 ${
          isHeaderIntersecting ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <ExportedImage
          src="/images/me.jpg"
          priority
          alt="my-picture"
          height={200}
          width={200}
          className="border-2 border-slate-300 rounded-full aspect-square object-cover object-center"
        />
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-3xl [@media(max-height:450px)]:text-2xl text-white p-5 bg-sky-300 bg-opacity-20 rounded-xl">
            Maksim Zykin
          </p>
          <p className="text-xl [@media(max-height:450px)]:text-lg text-white">
            Software Engineer
          </p>
          <p className="text-xl [@media(max-height:450px)]:text-lg text-white">
            London, UK
          </p>
          <div className="flex items-center gap-3">
            <CustomLink link="https://www.linkedin.com/in/maksimzykin/">
              <ExportedImage
                src={linkedinLogo}
                alt="linkedin-logo"
                width={25}
              />
            </CustomLink>
            <CustomLink link="mailto: maks.zyk@gmail.com">
              <ExportedImage src={emailLogo} alt="email-logo" width={37} />
            </CustomLink>
            <CustomLink link="https://github.com/maxzkn">
              <ExportedImage src={githubLogo} alt="github-logo" width={26} />
            </CustomLink>
          </div>
        </div>
        {isMounted && isMobile && <DownloadCV />}
      </div>
    </header>
  );
};
