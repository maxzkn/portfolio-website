import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import defaultTheme from "tailwindcss/defaultTheme";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useIsIntersecting } from "@/hooks/useIsIntersecting";
import emailLogo from "images/email.svg";
import linkedinIcon from "images/linkedin.png";
import githubIcon from "images/github.svg";
import { DownloadCVButton } from "./DownloadCVButton";
import { CustomLink } from "../CustomLink";

export const Header: FC = () => {
  // Track when the component is mounted on the client-side, since SSR doesn't have access to "window" object
  const [isMounted, setIsMounted] = useState(false);

  const isMobile = useMediaQuery(`(max-width: ${defaultTheme.screens.lg})`);
  const isLandscape = useMediaQuery("(orientation: landscape)");
  const isMobileLandscape = isMobile && isLandscape;

  const headerRef = useRef(null);
  const isHeaderIntersecting = useIsIntersecting(headerRef);

  // useEffect will trigger only when the component is mounted on the client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="flex flex-col items-center justify-center h-screen">
      {isMounted && !isMobile && !isMobileLandscape && (
        <div className="custom-container absolute top-16 text-right">
          <DownloadCVButton />
        </div>
      )}
      <div
        ref={headerRef}
        className={`flex lg:flex-row-reverse ${isMobileLandscape ? "mb-10 flex-row-reverse" : "flex-col"} ${isMobile ? "mb-8" : ""} items-center justify-center gap-8 lg:gap-16 transition transform duration-500 ${isHeaderIntersecting ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
      >
        <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] rounded-full before:absolute before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%] before:bg-[conic-gradient(transparent,transparent,#00e187)] before:animate-spin-slow overflow-hidden">
          <div className="absolute flex justify-center items-center top-[2px] left-[2px] bottom-[2px] right-[2px]">
            <Image
              src="/images/me.jpg"
              priority
              alt="my-picture"
              fill
              className="rounded-full aspect-square object-cover object-center"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-3xl md:text-4xl lg:text-6xl text-accent rounded-xl">
            Maksim Zykin
          </p>
          <p className="text-md md:text-xl text-accent">Software Engineer</p>
          <p className="text-md md:text-xl text-accent">London, UK</p>
          <div className="flex items-center gap-3">
            <CustomLink link="https://www.linkedin.com/in/maksimzykin/">
              <Image
                src={linkedinIcon}
                alt="linkedin-logo"
                width={24}
                className="icon-hover"
              />
            </CustomLink>
            <CustomLink link="mailto: maks.zyk@gmail.com">
              <Image
                src={emailLogo}
                alt="email-logo"
                width={36}
                className="icon-hover"
              />
            </CustomLink>
            <CustomLink link="https://github.com/maxzkn">
              <Image
                src={githubIcon}
                alt="github-logo"
                width={25}
                className="icon-hover"
              />
            </CustomLink>
          </div>
        </div>
      </div>
      {isMounted && (isMobile || isMobileLandscape) ? (
        <DownloadCVButton />
      ) : null}
    </header>
  );
};
