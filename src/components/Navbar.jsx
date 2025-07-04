import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const navLinks = [
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? "backdrop-blur-[10px] bg-white/10 dark:bg-white/5 shadow-md"
        : "bg-transparent"
    }`}>
      <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
        {/* <div className='text-lg md:text-xl font-bold text-white'>
          <span className="text-purple-600 dark:text-purple-400">&lt;</span>
          <span className="text-black dark:text-white">Ahzam</span>
          <span className="text-purple-600 dark:text-purple-400">/</span>
          <span className="text-black dark:text-white">Saba</span>
          <span className="text-purple-600 dark:text-purple-400">&gt;</span>
        </div> */}

        <Link
          to="hero"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          className='text-black dark:text-white text-lg md:text-xl cursor-pointer font-bold group transition duration-300'
        >
          <span className="text-purple-600 dark:text-purple-400 group-hover:text-white">&lt;</span>
          <span className="text-black dark:text-white group-hover:text-purple-400">Ahzam</span>
          <span className="text-purple-600 dark:text-purple-400 group-hover:text-white">/</span>
          <span className="text-black dark:text-white group-hover:text-purple-400">Saba</span>
          <span className="text-purple-600 dark:text-purple-400 group-hover:text-white">&gt;</span>
        </Link>

        <div className='hidden md:flex space-x-6 text-black dark:text-white font-medium text-sm md:text-base'>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass='text-purple-400 font-semibold'
              className='cursor-pointer hover:text-purple-300 transition'
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className='flex items-center space-x-4'>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className='text-black dark:text-white text-xl hover:text-purple-400 transition'
          >
            {darkMode ? <BsSun /> : <BsMoonStars />}
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className='md:hidden text-white text-2xl'
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Sidebar opens from right */}
      <div className={`fixed top-0 right-0 h-fit max-h-[350px] w-64 bg-white/10 dark:bg-white/5 backdrop-blur-lg z-50 transition-transform duration-300 ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className='flex justify-end p-4'>
          <button
            onClick={() => setMenuOpen(false)}
            className='text-white text-2xl'
          >
            <HiX />
          </button>
        </div>
        <div className='flex flex-col items-start space-y-6 px-6 pb-6 text-white font-medium text-lg'>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              activeClass='text-purple-400 font-semibold'
              className='cursor-pointer hover:text-purple-300 transition w-full'
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
