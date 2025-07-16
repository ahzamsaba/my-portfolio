import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiVite } from 'react-icons/si'
import {motion} from 'framer-motion'

const SkillCard = ({ title, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y:50}}
    whileInView={{opacity: 1, y: 0}}
    whileHover={{
      scale: 1.03, 
      y: -8,
      transition: {type: "tween", duration: 0.2, ease:'easeOut'}
    }}
    transition={{type: "spring",stiffness: 100,damping: 12, delay}}
    viewport={{once: true, amount: 0.3}}
    className='bg-gray-100 dark:bg-[#1a1035] rounded-xl shadow-lg p-6'
  >
    <h3 className='text-xl font-semibold text-purple-500 mb-4'>{title}</h3>
    <div className='grid grid-cols-3 gap-4 text-black dark:text-white text-center text-sm'>
      {skills.map(({ icon: Icon, label }) => (
        <div key={label} className='flex flex-col items-center'>
          <Icon size={28} className="text-purple-400 mb-1" />
          {label}
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const frontend = [
    { icon: FaHtml5, label: "HTML" },
    { icon: FaCss3Alt, label: "CSS" },
    { icon: SiJavascript, label: "JavaScript" },
    { icon: FaReact, label: "ReactJS" },
    { icon: SiTailwindcss, label: "Tailwind" },
    { icon: SiVite, label: "Vite" },
  ];

  const backend = [
    { icon: FaNodeJs, label: "NodeJS" },
    { icon: SiExpress, label: "ExpressJS" },
    { icon: SiMongodb, label: "MongoDB" },
  ];

  const tools = [
    { icon: FaGitAlt, label: "Git" },
    { icon: SiJavascript, label: "VS Code" },
    { icon: SiVite, label: "Vite CLI" },
  ];

  return (
    <section
      id='skills'
      className='py-20 bg-white dark:bg-[#0d001e] text-black dark:text-white transition-colors duration-500'
    >
      <motion.div
        initial={{opacity: 0, y:40}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        viewport={{once: true}}
        className='max-w-6xl mx-auto px-4 text-center'
      >
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 border-b-2 border-purple-500 inline-block pb-2'>
          Skills
        </h2>

        <div className='grid md:grid-cols-3 gap-8'>
          <SkillCard className='hover:-translate-y-2' title="Frontend" skills={frontend} delay={0.2} />
          <SkillCard title="Backend" skills={backend} delay={0.4} />
          <SkillCard title="Tools & Others" skills={tools} delay={0.6} />
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
