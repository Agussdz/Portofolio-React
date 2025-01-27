import React, { useState } from "react";
import webspk from "../assets/webspk.png";
import greenhero from "../assets/Greenhero.webp";
import capstone from "../assets/capstone.webp";
import codeku from "../assets/codeku.webp";
import cemil from "../assets/cemil.webp";
import gotham from "../assets/gotham.webp";
import finzo from "../assets/finzo.webp";
import pildek from "../assets/pildek.webp";
import mental from "../assets/poster-mental.jpg";
import aredu from "../assets/Aredu.jpg";
import member from "../assets/Member.jpg";
import kartini from "../assets/Kartini.jpg";
import banner from "../assets/banner.jpg";
import standbanner from "../assets/standbanner.jpg";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const websiteProjects = [
    {
      image: capstone,
      title: "Agreenery : Agriculture Website",
      description:
        "Developing an Agriculture-Themed Website for a Capstone Project with Backend Integration and AI Features",
      technology:
        "React, Vite, Tailwind, Zustand, JWT Decode, Lucide-react, Javascript, Gemini API, Sweetalert, Flowbite",
    },
    {
      image: greenhero,
      title: "GreenHero : Green Website",
      description:
        "Developing an Eco-Friendly Agriculture Website with Generative AI Features to Analyze Plant Diseases and Treatments",
      technology:
        "React, Vite, Tailwind, Supabase, Javascript, Gemini API, Sweetalert, Preline",
    },
    {
      image: webspk,
      title: "Credit Eligibility Classification Using KNN with Python Flask",
      description:
        "DSS Course Project: Developing a Credit Approval Decision Support System Using KNN and Python Flask",
      technology: "Flask, Python, KNN, HTML, CSS, Bootstrap, Python, etc.",
    },
    {
      image: aredu,
      title: "Augmented Reality Course Landing Page",
      description:
        "Developing a landing page for Augmented Reality course using React Js And Tailwind CSS",
      technology: "React, Tawilwind, Vite, React Router, HTML",
    },
  ];

  const uxProjects = [
    {
      image: codeku,
      title: "Codeku : Fun Programming Learning App",
      description:
        "Final Project for Human-Computer Interaction Course: Gamified Application for Learning Programming Languages.",
      technology: "Figma",
    },
    {
      image: cemil,
      title: "Snack Shop System",
      description:
        "Final Project for Information Systems Analysis and Design: Storage, Stock, Supplier, and Cashier Management System for a Snack Shop",
      technology: "Figma",
    },
    {
      image: gotham,
      title: "Gotham School : Online School Platform",
      description:
        "Final Project for Software Engineering Course: New Student Admission Platform (PPDB)",
      technology: "Figma",
    },
  ];

  const graphicDesign = [
    {
      image: finzo,
      title: "Logo Juara 1 Computer Science Sport & Art Competition (CSS) 2023",
      description:
        "Desain logo fintech pada perlombaan CSS Hima Ilkom Unnes 2023",
      technology: "Figma, Photoshop",
    },
    {
      image: pildek,
      title: "Poster Juara 1 Piala Dekan FMIPA 2023",
      description:
        "Desain poster pada perlombaan desain grafis piala dekan FMIPA 2023 dengan tema space",
      technology: "Canva, Figma",
    },
    {
      image: mental,
      title: "Mental Health Digital Poster",
      description:
        "Poster Digital untuk perlombaan CSS 2024 dengan tema mental health",
      technology: "Canva",
    },
    {
      image: member,
      title: "Get To Know Our Member (Screenshot) Instagram Post Design",
      description:
        "Social media post design for introducing the member of Screenshot and its division",
      technology: "Canva",
    },
    {
      image: kartini,
      title:
        "Instagram Post Design for Celebrating Eid al-Fitr and Kartini Day",
      description:
        "Social media post design for Eid al-Fitr and Kartini Day using Canva",
      technology: "Canva",
    },
    {
      image: banner,
      title: "Banner Design for Warung Bakso Mbak Anisa",
      description:
        "Designing a banner to display the menu of Warung Bakso Mbak Anisa",
      technology: "Canva",
    },
    {
      image: standbanner,
      title: "Stand Banner Design for Open Recruitment Screenshot",
      description:
        "Designing stand banner for Open Recruitment Screenshot and explain each division",
      technology: "Canva",
    },
  ];

  // Combine all projects into a single array
  const allProjects = [...websiteProjects, ...uxProjects, ...graphicDesign];

  const projectsToDisplay =
    activeCategory === "website"
      ? websiteProjects
      : activeCategory === "ux"
      ? uxProjects
      : activeCategory === "design"
      ? graphicDesign
      : allProjects; // Default to show all projects

  return (
    <div>
      <div className="text-white p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-cyan-500 text-sm font-semibold py-1 px-3 rounded-full mb-4">
              Projects
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              This is <span className="text-cyan-400">My Website & UI/UX</span>{" "}
              Projects
            </h1>

            {/* Buttons for toggling between categories */}
            <div className="mb-6 space-x-4 mt-10">
              <button
                className={`px-6 py-2 rounded-full hover:bg-cyan-400 text-cyan-400 hover:text-white ${
                  activeCategory === "all"
                    ? "bg-cyan-400 text-white"
                    : "bg-transparent border border-cyan-400"
                }`}
                onClick={() => setActiveCategory("all")}
              >
                All
              </button>
              <button
                className={`px-6 py-2  rounded-full hover:bg-cyan-400 text-cyan-400 hover:text-white ${
                  activeCategory === "website"
                    ? "bg-cyan-400 text-white"
                    : "bg-transparent border border-cyan-400"
                }`}
                onClick={() => setActiveCategory("website")}
              >
                Website
              </button>
              <button
                className={`px-6 py-2 rounded-full hover:bg-cyan-400 text-cyan-400 hover:text-white ${
                  activeCategory === "ux"
                    ? "bg-cyan-400 text-white"
                    : "bg-transparent border border-cyan-400"
                }`}
                onClick={() => setActiveCategory("ux")}
              >
                UI/UX
              </button>
              <button
                className={`px-6 py-2 rounded-full hover:bg-cyan-400 text-cyan-400 hover:text-white ${
                  activeCategory === "design"
                    ? "bg-cyan-400 text-white"
                    : "bg-transparent border border-cyan-400"
                }`}
                onClick={() => setActiveCategory("design")}
              >
                Design
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsToDisplay.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-white/10 to-cyan-600/20 backdrop-blur-2xl rounded-lg p-6 transform transition-transform duration-300 hover:scale-105"
              >
                <div className="mb-4 flex-col">
                  <img
                    className="w-full min-h-[200px] max-h-[210px]"
                    src={project.image}
                    alt=""
                  />
                  <h2 className="text-xl font-semibold mb-3 mt-4">
                    {project.title}
                  </h2>
                  <p className="text-gray-400">{project.description}</p>
                  <h2 className="text-lg font-semibold mt-2">Technology :</h2>
                  <h2 className="text-md font-medium mt-2 text-cyan-400">
                    {project.technology}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
