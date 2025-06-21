import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const AboutMe = () => {
  return (
    <>
    <section className='min-h-screen w-full bg-slate-300 flex justify-between items-center'>

      <div className='w-full h-screen flex flex-col justify-center items-center space-y-5'>
          <p className="text-sm md:text-lg lg:text-2xl xl:text-3xl text-gray-700 pl-4 md:px-10 max-w-xl leading-relaxed text-center">
            Hi, I&apos;m <span className="text-[#F7939D] font-semibold">Sabkat Ahmed Rafi</span>, a web developer who specializes in building clean, responsive, and high-performance websites. I love turning complex problems into intuitive digital experiences using modern tools and technologies. <span className='md:flex hidden '>Whether it&apos;s creating seamless UIs or optimizing for speed and accessibility, I focus on writing scalable, maintainable code that brings real value to users and businesses alike.</span>
          </p>
          <div className='md:hidden flex gap-2 pl-4'>
            <Link href={"https://github.com/sabkat-ahmed-rafi"} target="_blank"><FaGithub className='size-7' /></Link>
            <Link href={"https://www.linkedin.com/in/sabkat-ahmed-rafi/"} target="_blank"><FaLinkedin className='size-7 hover:text-sky-600' /></Link>
            <Link href={"https://x.com/SabkatAhmedRafi"} target="_blank"><FaXTwitter className='size-7' /></Link>
            <Link href={"mailto:sabkatahmedrafi@gmail.com"} target="_blank" ><AiOutlineMail className='size-7 hover:text-red-600 transition-colors' /></Link>
            <Link href={"https://www.facebook.com/sabkatahmedrafi/"} target='_blank' ><FaFacebookSquare  className='size-7 hover:text-blue-700 transition-colors' /></Link>
          </div>
      </div>

      <div className='md:flex justify-center items-center hidden'>
        <div className='space-x-4'>
          <Link href={"https://github.com/sabkat-ahmed-rafi"} target="_blank"><FaGithub className='md:size-10 size-7' /></Link>
          <Link href={"https://www.linkedin.com/in/sabkat-ahmed-rafi/"} target="_blank"><FaLinkedin className='md:size-10 size-7 hover:text-sky-600 transition-colors' /></Link>
          <Link href={"https://x.com/SabkatAhmedRafi"} target="_blank"><FaXTwitter className='md:size-10 size-7' /></Link>
          <Link href={"mailto:sabkatahmedrafi@gmail.com"} target="_blank" ><AiOutlineMail className='md:size-10 size-7 hover:text-red-600 transition-colors' /></Link>
          <Link href={"https://www.facebook.com/sabkatahmedrafi/"} target='_blank' ><FaFacebookSquare  className='md:size-10 size-7 hover:text-blue-700 transition-colors' /></Link>
        </div>
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