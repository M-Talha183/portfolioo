import React from 'react';
import Image from 'next/image';
import smiu from "../Assests/smiu.jpg"
import formen from "../Assests/formen.jpg"
import uni from "../Assests/uni.jpg"
import gover from "../Assests/gover.jpg"
const Page = () => {
    return (
        <div className=' w-auto h-auto  md:h-screen bg-black items-center pb-5' >
             <div className="h-auto w-full flex flex-wrap flex-col
            items-center"> 
            <p className="text-white font-bold text-3xl
            md:text-4xl text-center mt-20">My <span className='text-cyan-300'>Education</span></p>
            <div className="w-36 h-1 border-b-4 border-yellow-400 
            mt-2 rounded-2xl md:mt-4 mb-12">
        </div>
        
        
             
        <div className='md:flex items-center gap-10 flex-wrap  justify-center'>
            <div className='flex items-center w-[350px]  lg:w-[500px]  gap-5 bg-slate-600 text-white rounded-lg shadow-2xl  '>
                <div><Image className='h-40 w-36  rounded-lg' src={smiu} alt="" /></div>
                <div>
                    <h3 className='text-xl pt-2 font-bold'>Bachelor of Science in Computer Science</h3>
                    <p className='pt-2 '>Sindh Madressatul Islam University</p>
                    <p className='pt-2'>2023-2027 | Pursuing </p>
                </div>
            </div>
            <div className='flex items-center w-[350px] lg:w-[500px] gap-5 bg-slate-600 text-white rounded-lg shadow-2xl mt-2 '>
                <div><Image className='h-40 w-36 rounded-lg' src={gover} alt="" /></div>
                <div>
                    <h3 className='text-xl pt-2 font-bold'>Artificial Intelligence & Web 3.O</h3>
                    <p className='pt-2 '>Sindh Governor House</p>
                    <p className='pt-2'>2023- | Pursuing </p>
                </div>
            </div>
            <div className='flex items-center w-[350px] lg:w-[500px] gap-5 bg-slate-600 text-white rounded-lg shadow-2xl  mt-2'>
                <div><Image className='h-40 w-36  rounded-lg' src={formen} alt="" /></div>
                <div>
                    <h3 className='text-xl pt-2 font-bold'>HSC Science | Pre -Engineering </h3>
                    <p className='pt-2 '>Government College Formen</p>
                    <p className='pt-2'>2021-2023 | Completed </p>
                </div>
            </div>
            <div className='flex items-center w-[350px] lg:w-[500px] gap-5 bg-slate-600 text-white rounded-lg shadow-2xl mt-2 '>
                <div><Image className='h-40 w-36  rounded-lg' src={uni} alt="" /></div>
                <div>
                    <h3 className='text-xl pt-2 font-bold'>SSC Science </h3>
                    <p className='pt-2 '>Universal Grammar Secondary School</p>
                    <p className='pt-2'>2019-2021 | completed </p>
                </div>
            </div>
            
        </div>
    </div>
    </div>
            
            
    
    );
}

export default Page;
