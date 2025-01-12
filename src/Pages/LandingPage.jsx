import React from "react";
import HeroSections from "../components/HeroSections";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Organization from "../components/Organization";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div>
      <div className=" bg-gray-900 ">
        {/* Glow Effect */}
        <div className="absolute -top-100 left-72 lg:-left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[130px]" />
        <div className="absolute -bottom-40 -right-10 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />

        {/* Give each section an id to target */}
        <div className="">
          <div id="home">
            <HeroSections />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="about-me">
            <AboutMe />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="experiences">
            <Organization />
          </div>
          <div id="footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
