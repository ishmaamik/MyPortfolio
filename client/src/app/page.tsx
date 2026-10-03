"use client"
import AboutMe from "@/components/AboutMe";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import HomePage from "@/components/HomePage";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="">

      <div className="flex scroll-mt-16" id="home">
        <HomePage/>
      </div>

      <div id="about" className="scroll-mt-16">
        <AboutMe/>
      </div>

      <div id="skills" className="scroll-mt-16">
        <Skills/>
      </div>

      <div id="education" className="scroll-mt-16">
        <Education/>
      </div>

      <div id="project" className="scroll-mt-16">
        <Projects/>
      </div>

      <div id="achievements" className="scroll-mt-16">
        <Achievements/>
      </div>

    </div>

  );
}
