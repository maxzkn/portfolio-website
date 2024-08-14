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
    <main className="container mx-auto px-5">
      <Header />
      <AboutMe />
      <Divider />
      <Experience />
      <Skills />
      <Posts />
      <Divider />
      <ScrollToTopButton />
      <Footer />
    </main>
  );
}
