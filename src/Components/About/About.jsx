import React from 'react';
import { Github, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const About = () => {
  return (
    <div className="mx-auto p-6 bg-[#1E3A5A] text-white">
      <h2 className="text-4xl font-bold text-white mb-16 text-center">
          About <span className="text-[#FF6500]">Me</span>
        </h2>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column */}
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-md rounded-lg overflow-hidden mb-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1664303077137-69bdde5f58a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              // src='../public/raviranjan.jpg'
              alt="Profile image"
              className="w-auto h-2/5 rounded-lg bg-[#1E3E62]"
            />
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-gray-300">Available for Work</span>
            <div className="w-2 h-2 rounded-full bg-[#FF6500]"></div>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/r_ranjan._/"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-300 hover:text-[#FF6500] transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://x.com/R_ranjan_"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-300 hover:text-[#FF6500] transition-colors duration-300"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ranjan-ravii/"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-300 hover:text-[#FF6500] transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Ranjan-Ravii"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-300 hover:text-[#FF6500] transition-colors duration-300"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center text-center gap-6">
  <div className="flex flex-col items-center">
    <h1 className="text-4xl md:text-5xl font-semibold mb-4">
       <span className="text-[#FF6500]">Ravi Ranjan</span>
    </h1>
    <p className="w-3/4 text-l font-mono text-gray-300 text-justify">
    I'm a third-year undergraduate student pursuing  B.Tech in 𝗔𝗿𝘁𝗶𝗳𝗶𝗰𝗶𝗮𝗹 𝗜𝗻𝘁𝗲𝗹𝗹𝗶𝗴𝗲𝗻𝗰𝗲 𝗮𝗻𝗱 𝗠𝗮𝗰𝗵𝗶𝗻𝗲 𝗟𝗲𝗮𝗿𝗻𝗶𝗻𝗴 (𝗔𝗜𝗠𝗟) from Guru Gobind Singh Indraprastha University (𝗚𝗚𝗦𝗜𝗣𝗨), I am a 𝗳𝗿𝗼𝗻𝘁𝗲𝗻𝗱 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 proficient in 𝗛𝗧𝗠𝗟, 𝗖𝗦𝗦, 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁, with libraries like 𝗥𝗲𝗮𝗰𝘁 and  Tailwind. Currently expanding my knowledge in Full Stack Development and exploring 𝗗𝗮𝘁𝗮 𝗦𝘁𝗿𝘂𝗰𝘁𝘂𝗿𝗲𝘀 𝗮𝗻𝗱 𝗔𝗹𝗴𝗼𝗿𝗶𝘁𝗵𝗺𝘀 (𝗗𝗦𝗔) along with my academics focusing on core Subjects, practical applications and continuous learning.
    </p>
  </div>

  <button
    className="px-6 py-3 rounded inline-flex items-center gap-2 bg-[#FF6500] text-white hover:bg-[#1E3E62] transition-colors duration-300"
    onClick={() => window.open("https://drive.google.com/file/d/18jmLg2TyDej7yvs1M8KgqqOfDNxO1Uv0/view?usp=sharing", "_blank")}
  >
    Download CV
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  </button>
</div>

      </div>
    </div>
  );
};

export default About;