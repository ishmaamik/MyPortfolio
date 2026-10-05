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

      <div className="flex" id="home">
        <HomePage/>
      </div>

      <div id="about">
        <AboutMe/>
      </div>

      <div id="skills">
        <Skills/>
      </div>

      <div id="education">
        <Education/>
      </div>

      <div id="project">
        <Projects/>
      </div>

      <div id="achievements">
        <Achievements/>
      </div>

    </div>

  );
}
