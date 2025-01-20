import { Wallet, Plus, FileDown, HandCoins } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      name: "React Js",
      image:
        "https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-840x1024-vhmauxp6.png",
      description:
        "I have basic React skills in website development, understanding the use of event handling, React hooks, API integration, etc",
    },
    {
      name: "Laravel",
      image: "https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png",
      description:
        "I have basic Laravel skills in website development, including understanding MVC architecture, routing, database migrations, and basic CRUD with filament",
    },
    {
      name: "Supabase",
      image:
        "https://cdn.prod.website-files.com/655b60964be1a1b36c746790/655b60964be1a1b36c746d41_646dfce3b9c4849f6e401bff_supabase-logo-icon_1.png",
      description:
        "I use Supabase as the backend, with an understanding of using tables, Supabase auth, and buckets for storing data.",
    },
    {
      name: "Tailwind",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
      description:
        "I use Tailwind CSS for creating responsive layouts and designing websites with a clean, user-focused interface",
    },
    {
      name: "Git & Github",
      image:
        "https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/github-512.png",
      description:
        "I have an understanding of using GitHub for team collaboration, including Git flow, branching, push, fork, and pull requests ",
    },
    {
      name: "HTML",
      image:
        "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png",
      description:
        "Understanding of using HTML, including div, display, lists, input, padding, margin, buttons, etc ",
    },
    {
      name: "CSS",
      image: "https://img.icons8.com/?size=512&id=21278&format=png",
      description:
        "I have fundamental skills in CSS and have build web layouts and designs.",
    },
    {
      name: "Javascript",
      image:
        "https://static.vecteezy.com/system/resources/previews/027/127/560/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
      description:
        "I have fundamental skills in JavaScript to create dynamic websites.",
    },
    {
      name: "Bootstrap",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
      description:
        "I have a strong foundation in JavaScript and have used it in several web development projects.",
    },
    {
      name: "Figma",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
      description:
        " I have understanding of using Bootstrap as a framework to efficiently build websites",
    },
    {
      name: "Photoshop",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png",
      description:
        "I have design skills in Photoshop, such as creating mockups and performing image manipulation",
    },
    {
      name: "Canva",
      image:
        "https://i.pinimg.com/originals/74/6d/77/746d77ef9b49afd5ec2306d39592d01e.png",
      description:
        "I have a strong foundation of using canva for graphic design",
    },
  ];

  return (
    <div id="skills" className="text-white p-4 md:p-8 lg:mb-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-cyan-500 text-sm font-semibold py-1 px-3 rounded-full mb-4">
            Technology
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-cyan-400">My Recent</span> Skills
          </h1>
        </div>
        <div className="absolute -top-300 -left-10 lg:left-96 w-96 h-96 bg-cyan-500/20 rounded-full blur-[70px]" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-white/10 to-cyan-600/20 backdrop-blur-2xl rounded-lg p-6 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-4 flex items-center justify-center flex-col">
                <img
                  className="max-w-[120px] h-[70px]"
                  src={skill.image}
                  alt={skill.name}
                />
                <h2 className="text-xl font-semibold mb-3 mt-4">
                  {skill.name}
                </h2>
                <p className="text-gray-200">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
