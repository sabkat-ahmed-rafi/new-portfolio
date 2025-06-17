import React from 'react'
import Project from './Project';
import SplashCursor from '../SplashCursor/SplashCursor';


const Projects = () => {

  const projectQuantumDoc = {
    name: "QuantumDocs",
    description: "QuantumDoc is a real-time collaborative document editor, similar to Google Docs..",
    liveLink: "https://quantum-docs-frontend.vercel.app",
    githubLink: "https://github.com/sabkat-ahmed-rafi/QuantumDocs"
  }

  return (
    <section 
    className='min-h-screen'
    style={{background: "linear-gradient(to bottom, #000000 0%, #000000 55%, #ffffff 550%)"}}
    >    
      <h1 className='font-extrabold text-white text-6xl text-center py-10'>Projects</h1>
      <section className='flex flex-col justify-center items-center bg-black space-y-5'>
       <div>
         <Project {...projectQuantumDoc} />
       </div>
      </section>
      <SplashCursor />
    </section>
  )
}

export default Projects