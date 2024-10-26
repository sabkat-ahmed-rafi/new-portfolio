import React from 'react'
import {IconCloud} from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "redux",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "bootstrap",
  "firebase",
  "tailwindcss",
  "reactquery",
  "mongodb",
  "vite",
  "github",
  "vercel",
  "cplusplus",
  "git",
  "github",
  "visualstudiocode",
  "figma",
];

const Skill = () => {
  return (
    <section className='md:mx-[85px] mx-[5px] lg:mt-[150px] mt-10 pb-[100px] '>
      <h1 className='md:text-3xl text-xl font-extrabold visible md:invisible text-slate-700'>Skills</h1>
      <div className='flex md:flex-row flex-col justify-between md:gap-6 items-center'>
      <h1 className='md:text-3xl text-xl font-extrabold invisible md:visible text-slate-700'>Skills</h1>
      <div className='md:w-[500px] flex flex-wrap gap-4'>
        <img src="https://img.shields.io/badge/C%20%2B%2B-8A2BE2?style=flat-square&logo=cplusplus&color=%234c9ffe" alt="cpluplus" />
        <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
        <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
        <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
        <img src="https://img.shields.io/badge/React.js-0081CB?style=flat-square&logo=react&logoColor=61DAFB" alt="React.js" />
        <img src="https://img.shields.io/badge/Next-black?style=flat-square&logo=next.js&logoColor=white" alt="Next JS" />
        <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white" alt="Bootstrap" />
        <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
        <img src="https://img.shields.io/badge/Redux-593D88?style=flat-square&logo=redux&logoColor=white" alt="Redux" />
        <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=flat-square&logo=react%20query&logoColor=white" alt="React Query" />
        <img src="https://img.shields.io/badge/Vite-593D88?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
        <img src="https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
        <img src="https://img.shields.io/badge/Express.js-404D59?style=flat-square&logo=express" alt="ExpressJS" />
        <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
        <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=flat-square&logo=firebase" alt="Firebase" />
        <img src="https://img.shields.io/badge/OOP-8A2BE2?style=flat-square&logo=object&color=%23fd7e14" alt="OOP" />
        <img src="https://img.shields.io/badge/git-8A2BE2?style=flat-square&logo=git&color=black" alt="git" />
      </div>
      <div className='md:visible invisible'>
      <IconCloud iconSlugs={slugs} />
      </div>
      </div>
    </section>
  )
}

export default Skill