"use client"
import AboutMe from "@/components/AboutMe";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import HomePage from "@/components/HomePage";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>

      <div className="flex w-full" id="home">
        <HomePage/>
      </div>

      <div id="about">
        <AboutMe/>
      </div>

      <div id="education" className="pb-[100px] ">
        <Education/>
      </div>

      <div id="project" className="pb-[100px] ">
        <Projects/>
      </div>

      <div id="achievements" className="pb-[100px] ">
        <Achievements/>
      </div>

    </div>

  );
}
