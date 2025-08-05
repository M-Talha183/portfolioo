
'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from "../components/ui/moving-border";

import myImg from "../app/Assests/myImg.png"

export default function About() {
  return (
    <section id="about" className="w-full py-16 px-4 bg-[#0a0a0a] text-white">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white py-5">About <span className='text-yellow-500'>Me</span></h2>
        <div className='w-40 h-1 bg-yellow-500 rounded-full mb-5 '></div>
        <div className="text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          👋 Hi, I am <span className="text-yellow-400">Muhammad Talha</span>
        </h1>
        <h3 className="text-lg sm:text-xl md:text-2xl mt-4 text-gray-300">
          CS Student | Frontend Developer | Python & Data Science Enthusiast | Exploring Agentic AI
        </h3>
      </div>

        {/* Image */}
        <div className="w-48 h-48 mt-8 rounded-full overflow-hidden border-4 border-yellow-400">
          <Image
            src={myImg}
            alt="Talha's Profile"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Paragraph */}
        <p className="mt-6 text-base leading-7 text-gray-300">
          I am currently pursuing my <span className="text-yellow-400 font-semibold">Bachelor s in Computer Science</span> at <span className="text-yellow-400 font-semibold">Sindh Madressatul Islam University (SMIU)</span>. Alongside my academic studies, I am also enrolled in the <span className="text-yellow-400 font-semibold">Peoples IT Program (PITP)</span> at <span className="text-yellow-400 font-semibold">NED University</span>, where I have been sharpening my skills in Python programming and data science.
        </p>

        <p className="mt-4 text-base leading-7 text-gray-300">
          🛠️ With a strong interest in clean and user friendly interfaces, I enjoy turning ideas into real, functional web applications using modern frontend tools. I have built everything from portfolio websites to full-stack clones, and I am always looking for the next challenge.
        </p>

        <p className="mt-4 text-base leading-7 text-gray-300">
          📊 Lately, I have been diving into the world of <span className="text-yellow-400 font-semibold">Data Science</span>, and exploring how intelligent systems work—especially through <span className="text-yellow-400 font-semibold">Agentic AI</span>, a field I am genuinely excited about.
        </p>

        <p className="mt-4 text-base leading-7 text-gray-300">
          💡 I believe in continuous learning and love to work on projects that push my creativity and technical thinking.
        </p>

        {/* Centered Button */}
        <div className="mt-6 flex justify-center">
          <Button className="text-lg px-6 py-3">Resume</Button>
        </div>
      </div>
    </section>
  );
}
