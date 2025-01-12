import React from "react";
import {
  User,
  Mail,
  Music,
  GraduationCap,
  WandSparkles,
  Bot,
  FileJson,
  ComponentIcon,
} from "lucide-react";

import formal from "../assets/agus.webp";
export default function AboutMe() {
  return (
    <div>
      <div className=" text-white p-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between ">
            {/* Image Section */}
            <div className="md:w-1/2 hidden lg:block ">
              <div className=" flex border-2 border-cyan-400 justify-center item-center py-4">
                <img
                  src={formal}
                  alt="Profile"
                  className="object-cover lg:max-w-[400px] "
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 space-y-6">
              <div>
                <h2 className="text-cyan-400 text-lg font-semibold mb-2">
                  Introduction
                </h2>
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-gray-300">
                  I am an active 6th-semester student of Information Systems at
                  Universitas Negeri Semarang with an interest in web
                  development as a full-stack web developer. I possess skills in
                  React JS, Tailwind, Supabase, Javascript, HTML, CSS,
                  Bootstrap, and UI design using Figma. I have high discipline,
                  responsibility, good teamwork skills, adaptability, and a
                  strong interest in learning new things to enhance my knowledge
                  and skills. Currently, I am eager to further develop my
                  abilities in web development.
                </p>
              </div>

              {/* Personal Info */}
              <div className="space-y-4 ">
                <div className="flex items-center space-x-4">
                  <User className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300 w-16">Name</span>
                  <span>:</span>
                  <span>Agus Sutiyanto</span>
                </div>
                <div className="flex items-center space-x-4">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300 w-16">University</span>
                  <span>:</span>
                  <span className="text-cyan-400">
                    Universitas Negeri Semarang
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300 w-16">Email</span>
                  <span>:</span>
                  <span>agussutiyanto07@gmail.com</span>
                </div>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-xl font-semibold mb-4">My Interests</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mb-2">
                      <ComponentIcon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="text-sm">UI/UX</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mb-2">
                      <FileJson className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="text-sm">Web Dev</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mb-2">
                      <WandSparkles className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="text-sm">Design</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mb-2">
                      <Bot className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="text-sm">AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
