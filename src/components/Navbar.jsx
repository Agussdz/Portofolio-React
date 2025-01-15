import { useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <nav className="fixed top-0 z-20 w-screen">
        <div className="relative z-20 bg-transparent backdrop-blur-2xl">
          <div className="px-6 lg:container md:px-12 lg:mx-auto lg:px-6 lg:py-4">
            <div className="flex items-center justify-between">
              <div className="relative z-20">
                <a href="#home" onClick={() => handleTabClick("home")}>
                  <h1 className="text-2xl text-white font-bold">
                    Portofolio<span className="text-cyan-400">Profile</span>
                  </h1>
                </a>
              </div>

              <div className="flex items-center justify-end">
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  className="peer"
                  hidden
                />
                <label
                  htmlFor="hamburger"
                  className="peer-checked:hamburger relative z-20 -mr-6 block cursor-pointer p-6 lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-6 rounded bg-white transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-[2px] w-6 rounded bg-white transition duration-300"
                  ></div>
                </label>

                <div className="fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] transition duration-300 peer-checked:translate-x-0 lg:static lg:w-auto lg:translate-x-0">
                  <div className="flex h-full flex-col justify-between lg:flex-row lg:items-center">
                    <ul className="space-y-8 px-6 pt-20 text-white md:px-12 lg:flex lg:space-x-12 lg:space-y-0 lg:pt-0">
                      <li>
                        <a
                          href="#home"
                          onClick={() => handleTabClick("home")}
                          className={`group relative before:absolute before:inset-x-0 before:bottom-[-10px] before:h-1 before:origin-right before:scale-x-0 before:bg-cyan-400 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100 ${
                            activeTab === "home"
                              ? "before:origin-left before:scale-x-100"
                              : ""
                          }`}
                        >
                          <span
                            className={`relative ${
                              activeTab === "home"
                                ? "text-cyan-400"
                                : "text-white"
                            }`}
                          >
                            Home
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#about-me"
                          onClick={() => handleTabClick("about-me")}
                          className={`group relative before:absolute before:inset-x-0 before:bottom-[-10px] before:h-1 before:origin-right before:scale-x-0 before:bg-cyan-400 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100 ${
                            activeTab === "about-me"
                              ? "before:origin-left before:scale-x-100"
                              : ""
                          }`}
                        >
                          <span
                            className={`relative ${
                              activeTab === "about-me"
                                ? "text-cyan-400"
                                : "text-white"
                            }`}
                          >
                            About Me
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#projects"
                          onClick={() => handleTabClick("projects")}
                          className={`group relative before:absolute before:inset-x-0 before:bottom-[-10px] before:h-1 before:origin-right before:scale-x-0 before:bg-cyan-400 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100 ${
                            activeTab === "projects"
                              ? "before:origin-left before:scale-x-100"
                              : ""
                          }`}
                        >
                          <span
                            className={`relative ${
                              activeTab === "projects"
                                ? "text-cyan-400"
                                : "text-white"
                            }`}
                          >
                            Portfolio
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#experiences"
                          onClick={() => handleTabClick("experiences")}
                          className={`group relative before:absolute before:inset-x-0 before:bottom-[-10px] before:h-1 before:origin-right before:scale-x-0 before:bg-cyan-400 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100 ${
                            activeTab === "experiences"
                              ? "before:origin-left before:scale-x-100"
                              : ""
                          }`}
                        >
                          <span
                            className={`relative ${
                              activeTab === "experiences"
                                ? "text-cyan-400"
                                : "text-white"
                            }`}
                          >
                            Experiences
                          </span>
                        </a>
                      </li>
                    </ul>

                    <div className="px-6 py-8 md:px-12 md:py-16 lg:py-0 lg:pl-6 lg:pr-0">
                      <a
                        href="#get-started"
                        className="block rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 px-6 py-3 text-center text-white hover:from-sky-700 hover:to-cyan-500"
                      >
                        Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
