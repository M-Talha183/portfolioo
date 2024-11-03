import React from 'react';
import Image from 'next/image';
import myImg from "../Assests/myImg.png"
import { Button } from "../../components/ui/moving-border";


const GridBackgroundDemo = () => {
    return (
      <div className="h-[50rem] w-full dark:bg-black bg-black dark:bg-grid-white/[0.2]  bg-grid-white/[0.2] relative flex items-center justify-center">


        <div className='   '>
              <div className='flex  justify-center items-center text-xl sm:text-2xl md:text-4xl font-bold pt-16 sm:pt-20 text-white'>
                <h1>About <span className='text-yellow-400'>Me</span></h1>
            </div>

            <div className=' flex flex-wrap justify-center items-center mt-5 sm:mt-20 gap-10  md:gap-20 '>
               <div className=' text-center'>
                <Image className='w-52 h-52 sm:72  md:w-64 md:h-80 ml-5  rounded-2xl shadow-lg hover:shadow-2xl ' src={myImg} alt="" />
              </div>
              <div className='text-white flex-wrap w-96'>
                <h3 className='font-bold text-2xl'>I am Talha</h3>
                <p className='text-lg text-amber-500'>frontend Developer</p>
                <p className='font-bold'>
                I am a Frontend based in Karachi Pakistan. I am an Information Technology student undergraduate in SMIU. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using Frontend Technologies. Working for myself to improve my skills. Love to build FullStack clones</p>
                <div className='mt-8 md:mt-16 text-center'>
                    <a  href="https://hackhtonmilestone-1-2.vercel.app/" target="_blank">  
                <Button
             borderRadius="1.75rem"
        className="bg-slate-900 dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Resume
      </Button>
      </a>
                </div>
              </div>
                
            </div>

            
        </div>
        
        </div>
    );
}

export default GridBackgroundDemo;
