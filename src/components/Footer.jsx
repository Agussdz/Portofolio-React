// src/components/Footer.jsx
import React from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  Github,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Agussdz" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/agus-sutiyanto-624455265/",
    },
    { icon: Instagram, href: "https://www.instagram.com/agussdz_/" },
  ];

  const contactInfo = [
    { icon: Phone, text: "081242762991" },
    { icon: Mail, text: "agussutiyanto3107@gmail.com" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
            <p className="max-w-md font-semibold">
              Agus Sutiyanto,{" "}
              <span className="text-cyan-400">Front End & UI/UX</span>
            </p>
            <p>Universitas Negeri Semarang</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg flex items-start space-x-3"
              >
                <div className="bg-gray-700 p-2 rounded-full">
                  <info.icon className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">
                    {index === 0 ? "Contact Me" : "Email Me"}
                  </p>
                  <p className="text-white">{info.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 Agus Sutiyanto. All rights reserved.
          </p>
          <nav className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
