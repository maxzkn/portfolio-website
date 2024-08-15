import { FC, useRef } from "react";
import { useIsIntersecting } from "@/hooks/useIsIntersecting";

export const Footer: FC = () => {
  const myFooterRef = useRef(null);
  const isFooterIntersecting = useIsIntersecting(myFooterRef);

  return (
    <footer
      ref={myFooterRef}
      className={`pb-10 text-center transition-opacity ease-in duration-500 ${
        isFooterIntersecting ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="text-accent">Maksim Zykin</p>
      <p className="">&copy; 2024 | Built with Next.js, TypeScript & Tailwind CSS</p>
    </footer>
  );
};
