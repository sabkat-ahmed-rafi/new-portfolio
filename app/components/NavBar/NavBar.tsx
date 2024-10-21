'use client'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link';
import { motion } from "framer-motion";



const Navbar = () => {
  return (
    <motion.nav initial={{y: -250}} animate={{y: -10}} className='flex justify-center pt-7 md:pt-16 relative z-50 bg-transparent'>
      <section className='flex items-center justify-evenly w-[300px] md:w-[400px] border rounded-[20px] border-slate-300 p-3' >
        <TooltipProvider >
        <motion.div whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}>
        <Tooltip>
    <TooltipTrigger>   
    <Link href={"https://github.com/sabkat-ahmed-rafi"} target="_blank"><FaGithub className='size-7' /></Link>
    </TooltipTrigger>
    <TooltipContent>
      GitHub
    </TooltipContent>
       </Tooltip>
        </motion.div>
        <motion.div whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}>
        <Tooltip>
    <TooltipTrigger>   
    <Link href={"https://www.linkedin.com/in/sabkat-ahmed-rafi/"} target="_blank"><FaLinkedin className='size-7 hover:text-sky-600' /></Link>
    </TooltipTrigger>
    <TooltipContent>
      Linkedin
    </TooltipContent>
       </Tooltip>
        </motion.div>
        <motion.div whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}>
        <Tooltip>
    <TooltipTrigger>   
    <Link href={"https://x.com/SabkatAhmedRafi"} target="_blank"><FaXTwitter className='size-7' /></Link>
    </TooltipTrigger>
    <TooltipContent>
      X
    </TooltipContent>
       </Tooltip>     
        </motion.div>
        <motion.div whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}>
        <Tooltip>
    <TooltipTrigger>   
    <Link href={"mailto:sabkatahmedrafi@gmail.com"} target="_blank" ><AiOutlineMail className='size-7 hover:text-red-600' /></Link>
    </TooltipTrigger>
    <TooltipContent>
      Email
    </TooltipContent>
       </Tooltip>
        </motion.div>
        <motion.div whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}>
  <Tooltip>
    <TooltipTrigger>   
          <Link href={"https://www.facebook.com/sabkatahmedrafi/"} target='_blank' ><FaFacebookSquare  className='size-7 hover:text-blue-700' /></Link>
    </TooltipTrigger>
    <TooltipContent>
      Facebook
    </TooltipContent>
  </Tooltip>
        </motion.div>
       </TooltipProvider>    
      </section>
    </motion.nav>
  )
}

export default Navbar