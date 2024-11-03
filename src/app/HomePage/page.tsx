"use client";
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";

import React from 'react';
import Image from 'next/image';
import lin from "../Assests/lin.png"
import fac from "../Assests/fac.jpg"
import insta from "../Assests/insta.jpg"
import github1 from "../Assests/github1.jpg"
import myImg from "../Assests/myImg.png"
import { TypewriterEffect } from "../../components/ui/typewriter-effect";


const TypewriterEffectSmoothDemo = () => {
    const words = [
        {
          text: "I",
        },
        {
          text: "am",
        },
        {
          text: "into",
        },
        {
          text: "Frontend",
        },
        {
          text: "Development.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
    return (
    
      
        <div className =' bg-black sm:gap-3 w-full h-auto   '>
        <LampContainer>
        <motion.h1
            initial={{ opacity: 1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
    
     transition={{
       delay: 0.3,
       duration: 0.8,
       ease: "easeInOut",
     }}
     className="mt-56 md:mt-8 lg:mt-32 bg-slate-50 py-4 bg-clip-text  text-4xl font-medium tracking-tight     flex justify-center items-center sm:gap-3 md:gap-16 lg:gap-44 flex-wrap-reverse  sm:pt-16   text-transparent"
   >
            <div className="">
         
      

                <div className='text-2xl  lg:text-3xl pt-16 sm:pt-32 text-white font-bold '>
                    <h2 className=''>Hi There </h2>
                    <h2 className='pt-3'> I am Muhammad Talha</h2>
                    {/* <p className='pt-3 '>I am into <span className='text-amber-700'>frontend development</span></p> */}
                    <TypewriterEffect words={words} />

                </div>
                    <div className='pt-3'>
                         <button className='bg-blue-700 w-28 h-10 rounded-2xl text-2xl text-white font-bold hover:bg-blue-600 '>About Me</button>
                    </div>
                <div className='pt-3 m grid justify-center'>
                    <ul className='flex sm:mt-2 gap-3  items-center'>
                    <li><a className="" aria-label="LinkedIn" href="https://www.linkedin.com/in/muhammad-talha-4b17522bb/" target="_blank"><Image className='w-12 h-12 rounded-full  ' src={lin} alt="Photo description"  /></a></li> 
                    <li><a className="" aria-label="Facebook" href="https://www.facebook.com/profile.php?id=100095517277602&mibextid=kFxxJD" target="_blank"><Image className='w-16 h-16 rounded-full' src={fac} alt="Photo description"  /></a></li> 
                    <li><a className="" aria-label="" href="" target="_blank"><Image className='w-12 h-12 rounded-full  ' src={insta} alt="Photo description"  /></a></li> 
                    <li><a className="" aria-label="Github" href="https://github.com/Muhammad361738" target="_blank"><Image className='w-12 h-12 rounded-full  ' src={github1} alt="Photo description"  /></a></li> 

                    </ul>
                </div>
               

            </div>
            <div>
                <Image className='w-64   h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full ' src={myImg} alt="" />
               
            </div>
            </motion.h1>
            </LampContainer>

           
        </div>
        
        
    );
}

export default TypewriterEffectSmoothDemo ;
