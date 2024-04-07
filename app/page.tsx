import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa';

const navigation = [
  { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
];

export default function Home() {
  return (
      <div
          className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
          <nav className="my-16 animate-fade-in">
              <ul className="flex items-center justify-center gap-4">
                  {navigation.map((item) => (
                      <Link
                          key={item.href}
                          href={item.href}
                          className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                      >
                          {item.name}
                      </Link>
                  ))}
              </ul>
          </nav>
          <div
              className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
          <Particles
              className="absolute inset-0 -z-10 animate-fade-in"
              quantity={100}
          />
          <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
              laura sudupe
          </h1>

          <div
              className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
          <div className="my-16 text-center animate-fade-in">
              <h2 className="text-sm text-zinc-500 ">
                 Hi! I'm Laura, and this is my portfolio. Find more about me here!
              </h2>
          </div>
          {/* Icons section */}
          <div className="flex gap-4 mt-4">
              <a href="https://www.linkedin.com/in/lsudupe001/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="text-zinc-500 hover:text-zinc-300">
                  <FaLinkedin size={30}/>
              </a>
              <a href="http://github.com/lsudupe" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                 className="text-zinc-500 hover:text-zinc-300">
                  <FaGithub size={30}/>
              </a>
              <a href="mailto:lsudupe@gmail.com" aria-label="Email" className="text-zinc-500 hover:text-zinc-300">
                  <FaEnvelope size={30}/>
              </a>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="CV"
                 className="text-zinc-500 hover:text-zinc-300">
                  <FaFilePdf size={30}/>
              </a>
          </div>
      </div>

  );

}
