import React from 'react'
import {WordRotate} from "@/components/magicui/word-rotate";
import ShimmerButton from "@/components/magicui/shimmer-button";
import ShimmerButton2 from "@/components/magicui/shimmer-button2";



const Intro = () => {
  return (
    <>
        <section className='md:w-[500px] space-y-2 text-center lg:text-left md:mx-auto lg:mt-20 lg:ml-[80px] lg:top-[12rem] lg:left-[5rem] '>
            <h1 className='font-lilita font-extrabold  text-5xl dark:text-white'>Hi, I&apos;m Rafi</h1>
            <h3 className='text-4xl  font-extralight font-serif text-slate-800'>
            <WordRotate
                className="text-4xl  font-extralight font-serif text-slate-800 dark:text-white"
                words={["A Programmer", "A Developer", "A Student"]}
               /></h3>
            <p className='text-slate-700 dark:text-white'>A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
            <div className='md:flex md:flex-row flex-col justify-center lg:justify-start  md:space-x-6 space-x-1 '>
            <a href="/files/Sabkat_Ahmed_Rafi_Resume.pdf" download="Sabkat_Ahmed_Rafi_Resume.pdf" target='_blank'>
            <ShimmerButton className="shadow-2xl mx-auto lg:mx-0 ">
             <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Download Resume
            </span>
            </ShimmerButton>
            </a>
            <a href="https://drive.google.com/file/d/1SJHuo9RgJSV5HN1uamLQ13SLwQnExjk7/view?usp=drive_link" target='_blank'>
            <ShimmerButton2 className="shadow-2xl mx-auto lg:mx-0">
             <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-black dark:from-white dark:to-slate-900/10 lg:text-lg">
             Preview Resume
            </span>
            </ShimmerButton2>
            </a>
            </div>
        </section>
    </>
  )
}

export default Intro