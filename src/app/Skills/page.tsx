import React from 'react';
import Image from 'next/image';
import html from "../Assests/html.jpg"
import css from "../Assests/css.jpg"
import javascript from "../Assests/javascript.jpg"
import node from "../Assests/node.jpg"
import c from "../Assests/c.jpg"
import java from "../Assests/java.jpg"
import git1 from "../Assests/git1.jpg"
import github1 from "../Assests/github1.jpg"
import react from "../Assests/react.jpg"
import next from "../Assests/next.jpg"
import tailwind from "../Assests/tailwind.jpg"
import ts from "../Assests/ts.jpg"

const GridBackgroundDemo = () => {
    return (
     <div className=" w-full h-auto dark:bg-black bg-black dark:bg-dot-white/[0.2] bg-dot-white/[0.2]  relative flex items-center justify-center">

             <div className=" flex flex-wrap flex-col items-center text-center p-10 ">
               <div className="h-auto w-full flex flex-wrap flex-col
               items-center"> 
                 <p className="text-white font-bold text-3xl
                   md:text-4xl text-center mt-10">Skills</p>
                   <div className="w-36 h-1 border-b-4 border-yellow-400 
                   mt-2 rounded-2xl md:mt-4 mb-12">
        </div>
            <div className="w-[300px] sm:w-[600px] lg:w-[900px]  rounded-lg p-5 pt-10 h-auto flex flex-wrap justify-around">
              <div className="w-44 flex flex-col items-center  bg-slate-900 rounded-lg mb-5">
                        <Image className="w-28 h-24 rounded-lg mt-5 " src={html} alt="" />

                <p className="text-xl font-bold text-white">HTML5</p>
                
              </div>
              <div className="w-44 flex flex-col items-center  bg-slate-900 rounded-lg mb-5
                      p-2">
                        <Image className="w-28 h-24 rounded-lg mt-5 " src={css} alt="" />

                <p className="text-xl font-bold text-white">CSS3 </p>
                
              </div>
              <div className="w-44  flex flex-col items-center bg-slate-900 rounded-lg mb-5
                   p-2">
                        <Image className="w-28 h-24 rounded-lg mt-5 " src={javascript} alt="" />

                <p className="text-xl font-bold text-white">JAVASCRIPT</p>
                
              </div>
              <div className="w-44  flex flex-col items-center bg-slate-900 rounded-lg mb-5
                   p-2">
                        <Image className="w-28 h-24 rounded-lg  mt-3" src={node} alt="" />

                <p className="text-xl font-bold text-white">NODE JS</p>
               
              </div>
              <div className="w-44  flex flex-col items-center bg-slate-900 rounded-lg mb-5
                   p-2">
                        <Image className="w-28 h-24 rounded-lg  mt-3" src={tailwind} alt="" />

                <p className="text-xl font-bold text-white">TAILWIND CSS</p>
               
              </div>
              <div className="w-44  flex flex-col items-center bg-slate-900 rounded-lg mb-5
                   p-2">
                        <Image className="w-28 h-24 rounded-lg  mt-3" src={ts} alt="" />

                <p className="text-xl font-bold text-white">TYPESCRIPT</p>
               
              </div>
              <div className="w-44  flex flex-col items-center bg-slate-900 rounded-lg mb-5
                   p-2">
                        <Image className="w-28 h-24 rounded-lg  mt-3" src={react} alt="" />

                <p className="text-xl font-bold text-white">REACT JS</p>
               
              </div>
              <div className="w-44  flex flex-col items-center bg-slate-900 rounded-lg mb-5
                   p-2">
                        <Image className="w-28 h-24 rounded-lg  mt-3" src={next} alt="" />

                <p className="text-xl font-bold text-white">NEXT JS</p>
               
              </div>
              <div className="w-44  flex flex-col items-center bg-slate-900 rounded-lg mb-5
                   p-2">
                        <Image className="w-28 h-24 rounded-lg  mt-3" src={git1} alt="" />

                <p className="text-xl font-bold text-white">GIT</p>
               
              </div>
              <div className="w-44  flex flex-col items-center bg-slate-900 rounded-lg mb-5
                   p-2">
                        <Image className="w-28 h-24 rounded-lg  mt-3" src={github1} alt="" />

                <p className="text-xl font-bold text-white">GITHUB</p>
               
              </div>
              <div className="w-44  flex flex-col items-center bg-slate-900 rounded-lg mb-5
                   p-2">
                        <Image className="w-28 h-24 rounded-lg  mt-3" src={c} alt="" />

                <p className="text-xl font-bold text-white">C</p>
               
              </div>
              <div className="w-44  flex flex-col items-center bg-slate-900 rounded-lg mb-5
                   p-2">
                        <Image className="w-28 h-24 rounded-lg  mt-3" src={java} alt="" />

                <p className="text-xl font-bold text-white">JAVA</p>
               
              </div>


            </div>

    </div>
    </div>
    </div>
     
        
    );
}

export default GridBackgroundDemo;
