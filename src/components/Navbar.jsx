import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { BsMoonStars, BsSun } from 'react-icons/bs';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "backdrop-blur-[10px] bg-white/10 dark:bg-white/5 shadow-md"
        : "bg-transparent"
    }`}>
      <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
        <Link
          to="hero"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          className='text-lg cursor-pointer font-semibold group transition duration-300'
        >
          <span className="text-purple-600 dark:text-purple-400 group-hover:text-white">&lt;</span>
          <span className="text-black dark:text-white group-hover:text-purple-400">Ahzam</span>
          <span className="text-purple-600 dark:text-purple-400 group-hover:text-white">/</span>
          <span className="text-black dark:text-white group-hover:text-purple-400">Saba</span>
          <span className="text-purple-600 dark:text-purple-400 group-hover:text-white">&gt;</span>
        </Link>
        <ul className='flex space-x-6 text-black dark:text-white font-medium text-sm md:text-base'>
          <li>
            <Link
              to='about'
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass='text-purple-400 font-semibold'
              className='cursor-pointer hover:text-purple-300 transition'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='skills'
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass='text-purple-400 font-semibold'
              className='cursor-pointer hover:text-purple-300 transition'
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-purple-400 font-semibold"
              className="cursor-pointer hover:text-purple-300 transition"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-purple-400 font-semibold"
              className="cursor-pointer hover:text-purple-300 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className='text-black dark:text-white ml-4 text-xl hover:text-purple-400 transition'
        >
          {darkMode ? <BsSun /> : <BsMoonStars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
