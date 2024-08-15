"use client";

import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { Header } from "@/components/Header/Header";
import { AboutMe } from "@/components/AboutMe";
import { Experience } from "@/components/Experience/Experience";
import { Divider } from "@/components/Divider";
import { Skills } from "@/components/Skills/Skills";
import { Posts } from "@/components/Posts";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="custom-container overflow-hidden sm:overflow-visible">
      <Header />
      <Divider classNames="pt-2.5" />
      <AboutMe />
      <Divider />
      <Experience />
      <Skills />
      <Posts />
      <Divider classNames="pb-6" />
      <ScrollToTopButton />
      <Footer />
    </main>
  );
}
