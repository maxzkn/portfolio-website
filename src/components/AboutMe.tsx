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
            <p>Programming, sports, music, travelling, reading, video games</p>
          </div>
          <div>
            <p className="font-bold text-accent">Interpersonal skills:</p>
            <p>
              Strong communication skills, leadership, creativity, attention to
              detail, flexibility
            </p>
          </div>
        </div>
        <div>
          <p className="text-indent">Hi,</p>
          <p className="text-indent">
            My name is Max. Over the past three years of experience as a
            Software Engineer, I worked on multiple greenfield projects and
            POCs, participating in every phase. My responsibilities included
            developing the infrastructure, designing the architecture and code,
            selecting appropriate technologies and implementing the solution as
            part of a cross-functional and collaborative Scrum team. I strongly
            believe in product ownership, as I was working within a “You build
            it, you run it” model.
          </p>
          <p className="text-indent">
            I have developed reusable and efficient applications and services
            using various architectural patterns, including microservices,
            microfrontend, clean architecture and event-driven architecture. I
            worked with legacy codebase and monoliths as well.
          </p>
          <p className="text-indent">
            I am a quick learner and dedicated, honest and hard-working software
            engineer who loves to contribute to a purposeful mission and help
            deliver quality software.
          </p>
          <p className="text-indent">
            I love to work in a healthy and friendly environment and as someone
            who has a strong sense of teamwork, I enjoy being a part of an
            innovative and collaborative team who would share the same passion
            for building good products.
          </p>
        </div>
      </div>
    </section>
  );
};
