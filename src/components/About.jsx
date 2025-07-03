import React from 'react'

const About = () => {
  return (
    <section
      id='about'
      className='py-20 bg-[#0d001e] text-white'
    >
      <div className='max-w-3xl mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6 border-b-2 inline-block border-purple-500 pb-2'>
          About Me
        </h2>
        <p className='text-gray-300 text-lg leading-relaxed'>
          Hello! I'm <span className="text-purple-400 font-semibold">Ahzam Saba</span>,
          an aspiring frontend developer with a strong passion for crafting beautiful
          and user-friendly web interfaces.
        </p>

        <p className='mt-4 text-gray-400'>
          I'm currently exploring ReactJS, TailwindCSS, and other modern tools to build
          elegant, scalable web applications. I enjoy turning ideas into reality through
          code, and I'm constantly learning to improve my skills and stay updated with
          the latest technologies.
        </p>

        <p className='mt-4 text-gray-500 italic text-sm'>
          “Great web experiences come from the smallest design decisions.”
        </p>
      </div>
    </section>
  )
}

export default About