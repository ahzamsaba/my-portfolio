import React from 'react'
import profilePic from '../assets/profile.jpg'
import Tilt from 'react-parallax-tilt'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen py-12 relative overflow-hidden flex items-center justify-center 
                 bg-gray-100 text-black 
                 dark:bg-gradient-to-b dark:from-[#1f0036] dark:via-[#12002a] dark:to-[#0d001e] dark:text-white"
    >
      {/* Grid background */}
      <div className="absolute inset-0 
                      bg-[radial-gradient(#00000011_1px,transparent_1px)] 
                      dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)] 
                      bg-[size:40px_40px] 
                      pointer-events-none" />

      <div className="max-w-screen-xl w-full mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Ahzam Saba</h1>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
            Aspiring Frontend Developer | React & Tailwind Enthusiast
          </p>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0">
            I am learning full-stack development and building modern, responsive web applications. Passionate about frontend technologies, performance, and design systems.
          </p>

          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded shadow-lg transition cursor-pointer"
            >
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-2 border border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white dark:text-purple-400 dark:hover:text-white rounded transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Tilted Image */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          transitionSpeed={1000}
          className="md:w-1/3"
        >
          <div className="rounded-full border-4 border-purple-500 shadow-lg overflow-hidden w-64 h-64 mx-auto">
            <img
              src={profilePic}
              alt="Ahzam Saba"
              className="w-full h-full object-cover"
            />
          </div>
        </Tilt>
      </div>
    </section>
  )
}

export default Hero
