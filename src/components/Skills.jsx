import React from 'react'
import {FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt} from 'react-icons/fa'
import {SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiVite} from 'react-icons/si'

const SkillCard = ({title, skills}) => (
  <div className='bg-[#1a1035] rounded-xl shadow-lg p-6 hover:-translate-y-2 transition-all duration-300'>
    <h3 className='text-xl font-semibold text-purple-400 mb-4'>{title}</h3>
    <div className='grid grid-cols-3 gap-4 text-white text-center text-sm'>
      {skills.map(({icon: Icon, label}) => (
        <div key={label} className='flex flex-col items-center'>
          <Icon size={28} className="text-purple-300 mb-1" />
          {label}
        </div>
      ))}
    </div>
  </div>
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
      className='py-20 bg-[#12002a] text-white'
    >
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 border-b-2 border-purple-500 inline-block'>
          Skills
        </h2>

        <div className='grid md:grid-cols-3 gap-8'>
          <SkillCard title="Frontend" skills={frontend} />
          <SkillCard title="Backend" skills={backend} />
          <SkillCard title="Tools & Others" skills={tools} />
        </div>
      </div>
    </section>
  )

}

export default Skills