import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import WorkExperiece from './components/WorkExperiece'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App(){
  return(
    <div className='overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'></div>
      </div>
      
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <WorkExperiece />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}