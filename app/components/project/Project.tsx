import React from 'react'
import { ShineBorder } from '../magicui/shine-border'

interface ProjectProps {
  name: string;
  description: string;
  liveLink: string;
  githubLink: string;
}

const Project = (projectProps : ProjectProps) => {
  return (
    <>
            <ShineBorder
              className="relative flex flex-col md:w-[400px] items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl space-y-2 bg-black text-white"
              color={["#FFFFFF", "#090909", "#383B43"]}
            >
             <h1 className='font-extrabold text-xl'>{projectProps.name}</h1>
             <p className='text-center'>{projectProps.description}</p>
             <div className='flex space-x-3 font-semibold'>
             <p className='hover:underline hover:text-blue-700'><a href={projectProps.liveLink} target='_blank'>Live</a></p>
             <p className='hover:underline hover:text-blue-700'><a href={projectProps.githubLink} target='_blank'>GitHub</a></p>
             </div>
            </ShineBorder>
    </>
  )
}

export default Project