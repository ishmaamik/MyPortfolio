"use client"
import AboutMe from "@/components/AboutMe";
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

      <div id="project" className="pb-[100px] ">
        <Projects/>
      </div>

    </div>

  );
}
