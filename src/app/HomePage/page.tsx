import React from 'react';
import Image from 'next/image';
import lin from "../Assests/lin.png"
import fac from "../Assests/fac.jpg"
import insta from "../Assests/insta.jpg"
import git from "../Assests/git.jpg"
import myImg from "../Assests/myImg.png"

const HomePage = () => {
    return (
        <div className='bg-slate-800 h-screen w-full sm:gap-3  lg:gap-44 items-center flex  flex-wrap justify-center pt-16 sm:pt-24 '>
            <div >
                <div className='text-xl sm:text-2xl lg:text-3xl  text-white font-bold '>
                    <h2 className=''>Hi There, </h2>
                    <h2 className='pt-3'> I'm Muhammad Talha</h2>
                    <p className='pt-3 '>I am into <span className='text-amber-700'>frontend development</span></p>
                </div>
                    <div className='pt-3'>
                         <button className='bg-blue-700 w-28 h-10 rounded-2xl text-white font-bold hover:bg-blue-600 '>About Me</button>
                    </div>
                <div className='pt-3'>
                    <ul className='flex sm:mt-2 gap-3  items-center'>
                    <li><a className="" aria-label="LinkedIn" href="" target="_blank"><Image className='w-12 h-12 rounded-full  ' src={lin} alt="Photo description"  /></a></li> 
                    <li><a className="" aria-label="LinkedIn" href="" target="_blank"><Image className='w-16 h-16 rounded-full' src={fac} alt="Photo description"  /></a></li> 
                    <li><a className="" aria-label="LinkedIn" href="" target="_blank"><Image className='w-12 h-12 rounded-full  ' src={insta} alt="Photo description"  /></a></li> 
                    <li><a className="" aria-label="LinkedIn" href="" target="_blank"><Image className='w-12 h-12 rounded-full  ' src={git} alt="Photo description"  /></a></li> 

                    </ul>
                </div>

            </div>
            <div>
                <Image className='w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full ' src={myImg} alt="" />
            </div>

        </div>
    );
}

export default HomePage ;
