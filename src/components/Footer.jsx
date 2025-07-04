import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaTwitter
} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className='bg-gray-100 dark:bg-[#0f0e1a] py-8 border-t border-purple-600 dark:border-purple-700 text-gray-800 dark:text-white transition-colors duration-500'>
      <div className='max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
        {/* Logo */}
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

        {/* Social Links */}
        <div className='flex space-x-6 text-xl'>
          <a
            href="https://github.com/ahzamsaba"
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-purple-600 dark:hover:text-purple-400 transition'
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ahzam-saba-667044283/"
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-purple-600 dark:hover:text-purple-400 transition'
          >
            <FaLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=devilasghar2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.facebook.com/ahzamasghar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/AhzamSaba"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <p className='text-sm text-gray-600 dark:text-gray-400 text-center md:text-right'>
          © {new Date().getFullYear()} Ahzam Saba. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
