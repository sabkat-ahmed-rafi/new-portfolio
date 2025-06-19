import React from 'react'



const Skill = () => {
  return (
    <section
    className="min-h-screen bg-repeat text-white bg-black">
      <h1 className='md:text-6xl text-xl font-extrabold text-center py-10'>Skills</h1>
<div className="flex justify-center items-center flex-wrap gap-1">
    {[
  "https://img.shields.io/badge/C++-F7939D?style=for-the-badge&logo=cplusplus&logoColor=white",
  "https://img.shields.io/badge/HTML5-F7939D?style=for-the-badge&logo=html5&logoColor=white",
  "https://img.shields.io/badge/CSS3-F7939D?style=for-the-badge&logo=css3&logoColor=white",
  "https://img.shields.io/badge/JavaScript-F7939D?style=for-the-badge&logo=javascript&logoColor=white",
  "https://img.shields.io/badge/TypeScript-F7939D?style=for-the-badge&logo=typescript&logoColor=white",
  "https://img.shields.io/badge/React.js-F7939D?style=for-the-badge&logo=react&logoColor=white",
  "https://img.shields.io/badge/Next.js-F7939D?style=for-the-badge&logo=next.js&logoColor=white",
  "https://img.shields.io/badge/Bootstrap-F7939D?style=for-the-badge&logo=bootstrap&logoColor=white",
  "https://img.shields.io/badge/Tailwind_CSS-F7939D?style=for-the-badge&logo=tailwind-css&logoColor=white",
  "https://img.shields.io/badge/Redux-F7939D?style=for-the-badge&logo=redux&logoColor=white",
  "https://img.shields.io/badge/React_Query-F7939D?style=for-the-badge&logo=react-query&logoColor=white",
  "https://img.shields.io/badge/Vite-F7939D?style=for-the-badge&logo=vite&logoColor=white",
  "https://img.shields.io/badge/Node.js-F7939D?style=for-the-badge&logo=node.js&logoColor=white",
  "https://img.shields.io/badge/Express.js-F7939D?style=for-the-badge&logo=express&logoColor=white",
  "https://img.shields.io/badge/MongoDB-F7939D?style=for-the-badge&logo=mongodb&logoColor=white",
  "https://img.shields.io/badge/Firebase-F7939D?style=for-the-badge&logo=firebase&logoColor=white",
  "https://img.shields.io/badge/OOP-F7939D?style=for-the-badge&logo=code&logoColor=white",
  "https://img.shields.io/badge/Git-F7939D?style=for-the-badge&logo=git&logoColor=white"
    ].map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt="skill"
        className="h-10 md:max-w-[250px] object-contain"
      />
    ))}
  </div>
    </section>
  )
}

export default Skill