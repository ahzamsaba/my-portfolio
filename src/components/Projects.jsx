import React, { useState } from 'react'
import { projects } from '../data/projectData'

const Projects = () => {
  const [selected, setSelected] = useState(null)

  return (
    <section
      id='projects'
      className='py-20 bg-white dark:bg-[#0f0e1a] text-black dark:text-white transition-colors duration-500'
    >
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>
          <span className='border-b-4 border-purple-500 pb-1'>Projects</span>
        </h2>
        <p className='text-center text-gray-600 dark:text-gray-300 mb-12'>
          A showcase of my work and what I’ve built using various technologies.
        </p>

        <div className='grid md:grid-cols-3 gap-6'>
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelected(proj)}
              className='bg-gray-100 dark:bg-[#1a1929] rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-purple-500/30 transition'
            >
              <img
                src={proj.image}
                alt={proj.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-bold mb-2'>{proj.title}</h3>
                <p className='text-gray-600 dark:text-gray-400 text-sm'>
                  {proj.description.slice(0, 80)}...
                </p>
                <div className='flex flex-wrap gap-2 mt-3'>
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className='bg-purple-800 text-white text-xs px-2 py-1 rounded'
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div
            className='fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50'
            onClick={() => setSelected(null)}
          >
            <div
              className='bg-white dark:bg-[#121020] text-black dark:text-white rounded-lg p-6 max-w-3xl w-full mx-4'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='flex justify-end mb-2'>
                <button
                  className='text-black dark:text-white text-xl font-bold hover:text-red-400 active:text-red-500'
                  onClick={() => setSelected(null)}
                >
                  &times;
                </button>
              </div>
              <img
                src={selected.image}
                alt={selected.title}
                className='w-full h-64 object-cover rounded'
              />
              <h3 className='text-2xl font-bold mt-4'>{selected.title}</h3>
              <p className='text-gray-700 dark:text-gray-300 mt-2'>{selected.description}</p>
              <div className='flex flex-wrap gap-2 mt-4'>
                {selected.tech.map((t, i) => (
                  <span
                    key={i}
                    className='bg-purple-800 text-white text-xs px-2 py-1 rounded'
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className='mt-6 flex gap-4'>
                <a
                  href={selected.code}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-4 py-2 rounded bg-gray-700 text-white hover:bg-purple-500 transition'
                >
                  View Code
                </a>
                <a
                  href={selected.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-500 transition'
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
