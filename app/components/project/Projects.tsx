import React from 'react'
import {ShineBorder} from "@/components/magicui/shine-border";


const Projects = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-between items-center gap-6 md:mx-[85px] mx-[5px] lg:mt-[150px] pb-[100px]'>
    <h1 className='md:text-3xl text-xl font-extrabold  text-slate-700'>Projects</h1>
    <ShineBorder
      className="relative flex flex-col md:w-[400px] items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#FFFFFF", "#090909", "#383B43"]}
    >
     <h1 className='font-semibold text-xl'>MediMarketHub</h1>
     <img className="" src="/images/favicon.png" alt="" />
    </ShineBorder>
    <ShineBorder
      className="relative flex flex-col md:w-[400px] items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#FFFFFF", "#090909", "#383B43"]}
    >
     <h1 className='font-semibold text-xl'>CareerCove</h1>
     <img className="" src="/images/favicon.png" alt="" />
    </ShineBorder>
    </section>
  )
}

export default Projects