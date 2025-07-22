"use client";

import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";
import agus from "../assets/agus.webp";
export default function HeroSections() {
  return (
    <div className="relative px-6 py-12  container mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row gap-12 items-center mx-auto mt-20">
        {/* Left Content */}
        <div className="space-y-6 flex-1">
          <div className="space-y-2">
            <h2 className="text-gray-300 text-xl">Hello, im Agus Sutiyanto</h2>
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white">
              Front-End Developer & UI/UX Designer
            </h1>
            <div className="flex items-center gap-2 text-xl md:text-2xl pt-5">
              <p className="text-gray-300">
                I'm an undergraduate student in <br />
                <span className="text-cyan-400">
                  Information Systems degree
                </span>
              </p>
            </div>
          </div>

          <p className="text-gray-400 max-w-lg">
            Passionate about crafting intuitive and visually engaging digital
            experiences. I specialize in UI/UX design and front-end web
            development, with a strong foundation in graphic design and
            user-centered thinking.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Agussdz"
              target="_blank"
              className="w-10 h-10 rounded-full border border-cyan-400/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>

            <a
              href="mailto:agussutiyanto07@gmail.com"
              className="w-10 h-10 rounded-full border border-cyan-400/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/agus-sutiyanto-624455265/"
              target="_blank"
              className="w-10 h-10 rounded-full border border-cyan-400/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <div className="flex gap-3 item-center">
            <button className="px-4 lg:px-6 py-3 bg-gradient-to-r from-sky-600 to-cyan-400 text-white rounded-full font-medium transition-all duration-500 hover:from-sky-700 hover:to-cyan-500  hover:shadow-xl">
              <a
                href="https://drive.google.com/file/d/1_9v4Nwwpnt87SERBFy2oeekbER4QBawo/view?usp=sharing"
                target="_blank"
              >
                View CV
              </a>
            </button>

            <button className="px-4 lg:px-6 py-3 border border-white text-white rounded-full font-medium flex item-center hover:border-cyan-400 hover:text-cyan-400">
              <a href="#projects">Visit Portofolio</a>

              <span className="hidden lg:inline-block pl-3">
                <ArrowRight />
              </span>
            </button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex justify-center md:justify-end flex-1">
          <div className="relative w-64 h-72 md:w-96 md:h-auto">
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl " />
            <div className="relative w-full h-full  overflow-hidden ">
              <img
                src={agus}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
