import { FC, useRef } from "react";
import Image from "next/image";
import { useIsIntersecting } from "@/hooks/useIsIntersecting";
import { CustomLink } from "./CustomLink";

export const Posts: FC = () => {
  const myPostsRef = useRef(null);
  const isMyPostsIntersecting = useIsIntersecting(myPostsRef);

  return (
    <section
      ref={myPostsRef}
      id="posts"
      className={`transition-opacity ease-in duration-500 ${
        isMyPostsIntersecting ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="pb-20 text-5xl text-black text-center">Posts on Medium</p>
      <CustomLink
        link="https://medium.com/revel-systems/how-we-use-cube-as-an-api-first-business-intelligence-platform-to-build-real-time-dashboards-6c3cf17899b4"
        classNames="w-80 mx-auto flex flex-col rounded shadow-xl hover:cursor-pointer hover:scale-[1.01] transform transition duration-300 opacity-100 hover:opacity-90"
      >
        <div className="relative w-full h-60">
          <Image
            src="/images/post.webp"
            alt="post-picture"
            fill={true}
            className="object-cover rounded-t"
          />
        </div>
        <div className="p-5">
          <p className="bg-slate-300 bg-opacity-40 rounded w-32 mb-5 text-center">
            Jan 31, 2023
          </p>
          <p className="text-md font-bold">
            How We Use Cube as an API-first Business Intelligence Platform to
            Build Real-Time Dashboards
          </p>
        </div>
      </CustomLink>
    </section>
  );
};
