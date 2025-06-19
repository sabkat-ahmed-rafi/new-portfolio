import React from 'react'

const AboutMe = () => {
  return (
    <>
    <section className='min-h-screen w-full bg-slate-300 flex justify-between'>
      <div className='w-full h-screen flex justify-center items-center'>
          <p className="text-sm md:text-lg lg:text-2xl xl:text-3xl text-gray-700 pl-4 md:px-10 max-w-xl leading-relaxed text-center">
  Hi, I’m <span className="text-[#F7939D] font-semibold">Sabkat Ahmed Rafi</span>, a web developer who specializes in building clean, responsive, and high-performance websites. I love turning complex problems into intuitive digital experiences using modern tools and technologies. Whether it's creating seamless UIs or optimizing for speed and accessibility, I focus on writing scalable, maintainable code that brings real value to users and businesses alike.
          </p>
      </div>
      <div className='w-full h-screen flex justify-center items-center'> 
        <img
         className='object-cover select-none pointer-events-none w-[80%] h-[90%] rounded-3xl border-4' 
         src="/images/rafi.jpg" 
         alt="sabkat ahmed rafi" 
         onContextMenu={(e) => e.preventDefault()}
         />
      </div>
    </section>
    </>
  )
}

export default AboutMe