import React from "react";
import logo from "../assets/logoss.png";

export default function Organization() {
  return (
    <div>
      <div className="text-white p-4 md:p-8 lg:mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-cyan-500 text-sm font-semibold py-1 px-3 rounded-full mb-4">
              Experiences
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              My
              <span className="text-cyan-400"> Experiences</span>
            </h1>
          </div>
          {/* Study First Experience */}
          <div className="bg-gradient-to-r from-white/10 to-cyan-600/20 backdrop-blur-2xl rounded-lg p-6 mt-4 ">
            <div className="mb-4 flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-3 mt-4 text-cyan-400">
                  Study First
                </h2>
                <h2 className="text-xl font-bold mb-3 mt-4">
                  UI/UX & Web Developer Intern
                </h2>
                <h3 className="font-semibold text-lg text-cyan-400 mb-2">
                  Internship (Feb 2025 – May 2025)
                </h3>
                <p className="text-gray-100">
                  I worked as a UI/UX & Web Developer Intern where I was
                  responsible for optimizing user experience and website
                  performance.
                </p>
                <ul className="list-disc pl-5 text-gray-300">
                  <li>
                    Improved UI/UX design for company website to ensure
                    responsiveness across devices.
                  </li>
                  <li>
                    Applied image optimization, CDN integration, and SEO
                    techniques to improve performance and Google indexing.
                  </li>
                  <li>
                    Successfully increased website traffic from 3.2K to 25K+
                    visitors.
                  </li>
                  <li>
                    Built an online exam simulation system with WordPress and
                    automated scoring system.
                  </li>
                  <li>
                    Designed and developed a dynamic scholarship calendar using
                    React, Tailwind CSS, and Supabase.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alterra Experience */}
          <div className="bg-gradient-to-r from-white/10 to-cyan-600/20 backdrop-blur-2xl rounded-lg p-6 mt-4 ">
            <div className="mb-4 flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-3 mt-4 text-cyan-400">
                  Alterra Academy
                </h2>
                <h2 className="text-xl font-bold mb-3 mt-4">
                  Front End Developer
                </h2>
                <h3 className="font-semibold text-lg text-cyan-400 mb-2">
                  Head of Front End Division Capstone Project
                </h3>
                <p className="text-gray-100">
                  I am responsible as the head of the Front End division and
                  here is what I have done.
                </p>
                <ul className="list-disc pl-5 text-gray-300">
                  <li>
                    Organizing the job distribution for each member and
                    preparing boilerplates such as folder structure, global
                    state with Zustand, custom Tailwind, and several other
                    libraries needed to build a website with React JS.
                  </li>
                  <li>
                    Managing GitHub as a collaboration tool with the team,
                    implementing gitflow, branching each feature, resolving
                    conflicts, and making pull requests.
                  </li>
                  <li>Implementing good and responsive UI/UX design.</li>
                  <li>
                    Working on end-user and admin features with their respective
                    functions and ensuring that the built website meets the
                    predetermined key activities and MVP standards.
                  </li>
                </ul>
                <button className="mt-8 px-4 lg:px-6 py-3 bg-gradient-to-r from-sky-600 to-cyan-400 text-white rounded-full font-medium transition-all duration-500 hover:from-sky-700 hover:to-cyan-500 hover:shadow-xl">
                  <a
                    href="https://drive.google.com/file/d/19pTZNXkfKOY2m9_4R-Lnt6vlfjvHVGzH/view?usp=sharing"
                    target="_blank"
                  >
                    Certificate
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Organization Experience */}
          <div className="bg-gradient-to-r from-white/10 to-cyan-600/20 backdrop-blur-2xl rounded-lg p-6 mt-4">
            <div className="mb-4 flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-3 mt-4 text-cyan-400">
                  Organization
                </h2>
                <h2 className="text-xl font-bold mb-3 mt-4">
                  ScreenShot Universitas Negeri Semarang
                </h2>
                <h3 className="font-semibold text-lg text-cyan-400 mb-2">
                  Head of Graphic Design Division
                </h3>
                <p className="text-gray-100">
                  I am responsible as the head of the design division
                </p>
                <ul className="list-disc pl-5 text-gray-300">
                  <li>
                    Implementing regular design exercises using Figma and Canva
                    to develop UI/UX design skills, posters, and social media
                    posts for organization members.
                  </li>
                  <li>
                    Managing the organization's Instagram social media with over
                    600 followers and creating attractive and informative post
                    designs
                  </li>
                  <li>
                    Responsible for developing the organization's website as an
                    information medium for activities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
