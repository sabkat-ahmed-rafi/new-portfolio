'use client'
import React from 'react'
import { CiHome } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link';



const Navbar = () => {
  return (
    <nav className='flex justify-center mt-6 md:mt-8'>
      <section className='flex items-center justify-evenly w-[300px] md:w-[400px] border rounded-[20px] border-slate-300 p-3'>
        <TooltipProvider >
        <div>
  <Tooltip>
    <TooltipTrigger>   
          <Link href={"/"} ><CiHome className='size-7' /></Link>
    </TooltipTrigger>
    <TooltipContent>
      Home
    </TooltipContent>
  </Tooltip>
        </div>
        <div>
        <Tooltip>
    <TooltipTrigger>   
    <Link href={"https://github.com/sabkat-ahmed-rafi"} target="_blank"><FaGithub className='size-7' /></Link>
    </TooltipTrigger>
    <TooltipContent>
      GitHub
    </TooltipContent>
       </Tooltip>
        </div>
        <div>
        <Tooltip>
    <TooltipTrigger>   
    <Link href={"https://www.linkedin.com/in/sabkat-ahmed-rafi/"} target="_blank"><FaLinkedin className='size-7' /></Link>
    </TooltipTrigger>
    <TooltipContent>
      Linkedin
    </TooltipContent>
       </Tooltip>
        </div>
        <div>
        <Tooltip>
    <TooltipTrigger>   
    <Link href={"https://x.com/SabkatAhmedRafi"} target="_blank"><FaXTwitter className='size-7' /></Link>
    </TooltipTrigger>
    <TooltipContent>
      X
    </TooltipContent>
       </Tooltip>     
        </div>
        <div>
        <Tooltip>
    <TooltipTrigger>   
    <Link href={"mailto:sabkatahmedrafi@gmail.com"} target="_blank" ><AiOutlineMail className='size-7' /></Link>
    </TooltipTrigger>
    <TooltipContent>
      Email
    </TooltipContent>
       </Tooltip>
        </div>
       </TooltipProvider>    
      </section>
    </nav>
  )
}

export default Navbar