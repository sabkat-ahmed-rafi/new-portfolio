import React from 'react'
import {ShineBorder} from "@/components/magicui/shine-border";


const Projects = () => {
  return (
    <section className='flex flex-row justify-center items-center gap-6 pb-[100px]'>
    <h1 className='md:text-3xl text-xl font-extrabold  text-slate-700'>Projects</h1>
    <ShineBorder
      className="relative flex flex-col w-[400px] items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#FFFFFF", "#090909", "#383B43"]}
    >
     <img className="" src="/images/favicon.png" alt="" />
    </ShineBorder>
    <ShineBorder
      className="relative flex flex-col w-[400px] items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#FFFFFF", "#090909", "#383B43"]}
    >
     <img className="" src="/images/favicon.png" alt="" />
    </ShineBorder>
    </section>
  )
}

export default Projects