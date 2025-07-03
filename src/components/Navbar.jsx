import React, {useEffect, useState} from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    };

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "backdrop-blur-[10px] bg-white/10 shadow-md"
        : "bg-transparent"
    }`}>
      <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
        <Link 
          to="hero"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          className='text-lg md:text-xl font-bold group cursor-pointer'
        >
          <span className='text-purple-400 group-hover:text-white transition'>
            &lt;
          </span>
          <span className='text-white group-hover:text-purple-400 transition'>
            Ahzam
          </span>
          <span className='text-purple-400 group-hover:text-white transition'>
            /
          </span>
          <span className='text-white group-hover:text-purple-400 transition'>
            Saba
          </span>
          <span className='text-purple-400 group-hover:text-white transition'>
            &gt;
          </span>
        </Link>
        <ul className='flex space-x-6 text-white font-medium text-sm md:text-base'>
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
      </div>
    </nav>
  );
}

export default Navbar