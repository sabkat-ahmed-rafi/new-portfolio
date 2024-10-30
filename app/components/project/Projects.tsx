import React from 'react'
import {ShineBorder} from "@/components/magicui/shine-border";


const Projects = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-between items-center gap-6 md:mx-[85px] mx-[5px] lg:mt-[150px] pb-[100px]'>
    <h1 className='md:text-3xl text-xl font-extrabold  text-slate-700'>Projects</h1>
    <ShineBorder
      className="relative flex flex-col md:w-[400px] items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl space-y-2"
      color={["#FFFFFF", "#090909", "#383B43"]}
    >
     <h1 className='font-extrabold text-xl'>MediMarketHub</h1>
     <p className='text-center'>MediMarketHub is a Multi-Vendor E-commerce Platform for Medicines and Healthcare Products which is built with MERN stack.</p>
     <div className='flex space-x-3 font-semibold'>
     <p className='hover:underline hover:text-blue-700'><a href="https://zesty-florentine-44a022.netlify.app/" target='_blank'>Live</a></p>
     <p className='hover:underline hover:text-blue-700'><a href="https://github.com/sabkat-ahmed-rafi/MediMarketHub-Frontend" target='_blank'>GitHub</a></p>
     </div>
    </ShineBorder>
    <ShineBorder
      className="relative flex flex-col md:w-[400px] items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl space-y-2"
      color={["#FFFFFF", "#090909", "#383B43"]}
    >
     <h1 className='font-extrabold text-xl'>CareerCove</h1>
     <p className='text-center'>CareerCove is a Job Marketplace where user can post and apply for a jobs.</p>
     <div className='flex space-x-3 font-semibold'>
     <p className='hover:underline hover:text-blue-700'><a href="https://sparkly-scone-67107e.netlify.app/" target='_blank'>Live</a></p>
     <p className='hover:underline hover:text-blue-700'><a href="https://github.com/sabkat-ahmed-rafi/CareerCove-Frontend" target='_blank'>GitHub</a></p>
     </div>
    </ShineBorder>
    </section>
  )
}

export default Projects