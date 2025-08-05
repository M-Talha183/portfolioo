
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import clsx from "clsx";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  X,
  ArrowDownCircle,
} from "lucide-react";
import { Button } from "../components/ui/moving-border";
import myImg from "../app/Assests/myImg.png";
import TypewriterEffect from "../components/ui/Type";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress bar
  useEffect(() => {
    const updateScroll = () => {
      const scroll = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((scroll / height) * 100);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div
      className={clsx(
        "relative w-full py-40   md:h-[700px] overflow-hidden",
        "bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0f0f0f] text-white"
      )}
    >
      {/* Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-1 bg-purple-500 z-50 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col-reverse md:flex-row justify-center py-5 items-center md:items-start  gap-12 px-6 sm:px-10">
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-400 leading-snug">
            Hi There 👋
          </h1>

          <motion.h2
            className="mt-4 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-yellow-400 to-purple-500 bg-clip-text text-transparent tracking-tight leading-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            I am Muhammad Talha
          </motion.h2>

          <div className="mt-4 text-lg md:text-xl font-medium text-gray-300">
            <TypewriterEffect />
          </div>

          {/* Social Icons */}
           <div className="mt-6 flex gap-6 justify-center md:justify-start">
             <Link href="https://github.com/M-Talha183" target="_blank">
               <Github className="text-white text-3xl hover:text-amber-500 transition hover:scale-110" />
             </Link>
             <Link href="https://www.linkedin.com/in/muhammad-talha-4b17522bb/" target="_blank">
               <Linkedin className="text-white text-3xl hover:text-blue-500 transition hover:scale-110" />
             </Link>
             <Link href="https://www.facebook.com/profile.php?id=100095517277602" target="_blank">
               <Facebook className="text-white text-3xl hover:text-blue-400 transition hover:scale-110" />
             </Link>
             <Link href="https://www.instagram.com" target="_blank">
               <Instagram className="text-white text-3xl hover:text-pink-400 transition hover:scale-110" />
             </Link>
           </div>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} className="mt-7 inline-block">
            <Button
              borderRadius="1.75rem"
              className="bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-md px-6 py-2"
              onClick={() => setIsModalOpen(true)}
            >
              Read Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.25}
            scale={1.05}
            transitionSpeed={1500}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className="rounded-full"
          >
            <div className="w-64  h-64 lg:w-80 lg:h-80 overflow-hidden border-4 border-purple-500 shadow-2xl rounded-full bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]">
              <Image
                src={myImg}
                alt="Talha"
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </Tilt>
        </motion.div>
      </div>

      {/* Smooth Scroll Button */}
      <a
        href="#about"
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-purple-400 animate-bounce hover:text-purple-300 transition"
      >
        <ArrowDownCircle size={34} />
      </a>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-black/40 backdrop-blur-lg text-white rounded-xl p-6 max-w-md w-full shadow-2xl border border-white/20"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-300 hover:text-white transition"
            >
              <X size={24} />
            </button>
            <h3 className="text-xl font-bold mb-4 text-purple-300">About Me</h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              I am a passionate{" "}
              <span className="text-amber-400 font-medium">Frontend Developer</span> and aspiring{" "}
              <span className="text-cyan-400 font-medium">Data Scientist</span>. I am currently pursuing my{" "}
              <span className="text-purple-400 font-medium">BS in Computer Science</span> while actively exploring{" "}
              <span className="text-green-400 font-medium">Agentic AI</span>, Machine Learning, and Full Stack Web Development.
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
