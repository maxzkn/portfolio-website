import { FC, useRef } from "react";
import { useIsIntersecting } from "@/hooks/useIsIntersecting";

export const AboutMe: FC = () => {
  const aboutMeRef = useRef(null);
  const isAboutMeIntersecting = useIsIntersecting(aboutMeRef);

  return (
    <section
      ref={aboutMeRef}
      id="about-me"
      className={`transition-opacity ease-in duration-500 ${
        isAboutMeIntersecting ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="pb-20 text-5xl text-accent text-center">About me</p>
      <div className="flex lg:mx-14 flex-col-reverse lg:flex-row gap-12 md:gap-16 lg:gap-24 m-auto">
        <div className="flex flex-col gap-8 min-w-72">
          <div>
            <p className="font-bold text-accent">Non-technical languages:</p>
            <p>English, Lithuanian, Russian</p>
          </div>
          <div>
            <p className="font-bold text-accent">Interests:</p>
            <p>Sports, music, travelling, video games</p>
          </div>
          <div>
            <p className="font-bold text-accent">Interpersonal skills:</p>
            <p>Strong communication skills, leadership, attention to detail, flexibility</p>
          </div>
        </div>
        <p>
          Hi,
          <br />
          <br />
          My name is Max. Over the past three years of experience as a Software
          Engineer, I have developed robust infrastructure, designed
          architecture and code, and implemented solutions as part of a Scrum
          team. I am a quick learner and dedicated, honest and hard-working
          software engineer who likes to contribute to a purposeful mission and
          help deliver quality software. I love to work in a healthy and
          friendly environment and as someone who has a strong sense of
          teamwork, I enjoy being a part of an innovative and collaborative team
          who would share the same passion for building good products.
        </p>
      </div>
    </section>
  );
};
