"use client";
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";
import { Button } from "../../components/ui/moving-border";
import React from 'react';
import Image from 'next/image';
import lin from "../Assests/lin.png"
import fac from "../Assests/fac.jpg"
import insta from "../Assests/insta.jpg"
import github1 from "../Assests/github1.jpg"
import myImg from "../Assests/myImg.png"

import Type from "@/app/Type"


const TypewriterEffectSmoothDemo = () => {
    
    return (
    
      
        <div className =' bg-black overflow-hidden w-full h-screen '>
        <LampContainer>
        <motion.h1
            initial={{ opacity: 1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
    
     transition={{
       delay: 0.3,
       duration: 0.8,
       ease: "easeInOut",
     }}
     className="mt-48  md:mt-8 lg:mt-32  py-4  text-4xl font-medium tracking-tight  flex justify-center items-center sm:gap-3 md:gap-16 lg:gap-44 flex-wrap-reverse  "
   >
            <div className="flex flex-col justify-center items-center md:block ">
         
      

                <div className='overflow-hidden text-2xl w-[350px] sm:w-[360px] md:w[400px] lg:w-[400px] pt-16 md:pt-48 text-white font-bold '>
                    <h2 className=''>Hi There </h2>
                    <h2 className='pt-3'>I am <span ><Type/></span>  </h2>

                </div>
                <div className='pt-3  '>
                    <ul className='flex sm:mt-2 gap-3  items-center'>
                    <li><a className="" aria-label="LinkedIn" href="https://www.linkedin.com/in/muhammad-talha-4b17522bb/" target="_blank"><Image className='w-12 h-12 rounded-full  ' src={lin} alt="Photo description"  /></a></li> 
                    <li><a className="" aria-label="Facebook" href="https://www.facebook.com/profile.php?id=100095517277602&mibextid=kFxxJD" target="_blank"><Image className='w-16 h-16 rounded-full' src={fac} alt="Photo description"  /></a></li> 
                    <li><a className="" aria-label="" href="" target="_blank"><Image className='w-12 h-12 rounded-full  ' src={insta} alt="Photo description"  /></a></li> 
                    <li><a className="" aria-label="Github" href="https://github.com/Muhammad361738" target="_blank"><Image className='w-12 h-12 rounded-full  ' src={github1} alt="Photo description"  /></a></li> 

                    </ul>
                </div>
                <div className='pt-3'> 
                <Button
             borderRadius="1.75rem"
        className="bg-black dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Read Me
      </Button>
      </div>

            </div>
            <div className="md:mt-40">
                <Image className='w-64 h-64  lg:w-80 lg:h-80 rounded-full ' src={myImg} alt="" />
               
            </div>
            </motion.h1>
            </LampContainer>

           
        </div>
        
        
    );
}

export default TypewriterEffectSmoothDemo ;
