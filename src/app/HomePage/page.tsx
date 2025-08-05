

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { Github, Linkedin, Facebook, Instagram, X } from "lucide-react";
// import { Button } from "../../components/ui/moving-border";
// import myImg from "../Assests/myImg.png";
// import Tilt from 'react-parallax-tilt';

// import TypewriterEffect from "@/app/HomePage/Type";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div className="relative w-full h-screen bg-[#0f0f0f] overflow-hidden text-white">

//       {/* Layout Container */}
//       <div className="relative z-10 container mx-auto h-full flex flex-col-reverse md:flex-row justify-center items-center gap-12 px-4">

//         {/* Text Side */}
//         <div className="text-center md:text-left max-w-xl">
//           <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700]">
//             Hi There 👋
//           </h1>

//           {/* Name with professional gradient */}
//           <motion.h2
//   className="mt-2 text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#00C2CB] via-[#FFD700] to-[#6E44FF] bg-clip-text text-transparent"
//   initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
//   whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
//   transition={{ duration: 0.8, ease: "easeOut" }}
// >
//   I am Muhammad Talha
// </motion.h2>

//           {/* Typing Roles */}
//           <div className="mt-4 text-xl font-semibold text-gray-300">
//             <TypewriterEffect />
//           </div>

//           {/* Social Icons */}
//           <div className="mt-6 flex gap-4 justify-center md:justify-start text-white">
//             <a href="https://www.linkedin.com/in/muhammad-talha-4b17522bb/" target="_blank">
//               <Linkedin className="hover:text-[#0077B5]" size={28} />
//             </a>
//             <a href="https://github.com/Muhammad361738" target="_blank">
//               <Github className="hover:text-gray-400" size={28} />
//             </a>
//             <a href="https://www.facebook.com/profile.php?id=100095517277602&mibextid=kFxxJD" target="_blank">
//               <Facebook className="hover:text-[#1877F2]" size={28} />
//             </a>
//             <a href="#" target="_blank">
//               <Instagram className="hover:text-pink-400" size={28} />
//             </a>
//           </div>

//           {/* Read Me Button */}
//           <div className="mt-6">
//             <Button
//               borderRadius="1.75rem"
//               className="bg-[#1e1e1e] text-white border-[#444]"
//               onClick={() => setIsModalOpen(true)}
//             >
//               Read Me
//             </Button>
//           </div>
//         </div>

//         {/* Clean Image Section */}
//         <div>
//           <Tilt
//   glareEnable={true}
//   glareMaxOpacity={0.2}
//   scale={1.04}
//   transitionSpeed={1500}
//   tiltMaxAngleX={12}
//   tiltMaxAngleY={12}
//   className="rounded-full"
// >
//   <div className="w-64 h-64 lg:w-80 lg:h-80 overflow-hidden border-4 border-[#6E44FF] shadow-2xl rounded-full">
//     <Image
//       src={myImg}
//       alt="Talha"
//       className="object-cover w-full h-full"
//       priority
//     />
//   </div>
// </Tilt>

//         </div>
//       </div>

//       {/* Modal for Read Me */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm px-4">
//           <div className="relative bg-[#1a1a1a] text-white rounded-xl p-6 max-w-md w-full shadow-lg border border-gray-700">
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
//             >
//               <X size={24} />
//             </button>
//             <h3 className="text-xl font-semibold mb-4">About Me</h3>
//             <p className="text-sm text-slate-300 leading-relaxed">
//               I'm a passionate <span className="text-amber-400">Frontend Developer</span> and aspiring <span className="text-cyan-400">Data Scientist</span>. I’m currently pursuing my <span className="text-purple-400">BS in Computer Science</span> while actively exploring <span className="text-green-400">Agentic AI</span>, Machine Learning, and Full Stack Web Development.
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeroSection;
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Github, Linkedin, Facebook, Instagram, X } from "lucide-react";
import { Button } from "../../components/ui/moving-border";
import myImg from "../Assests/myImg.png";
import TypewriterEffect from "@/app/HomePage/Type";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-full h-screen bg-[#0f0f0f] overflow-hidden text-white">
      <div className="relative z-10 container mx-auto h-full flex flex-col-reverse md:flex-row justify-center items-center gap-12 px-4">

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700]">
            Hi There 👋
          </h1>

          {/* 3D Gradient Name */}
          <motion.h2
            className="mt-2 text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#00C2CB] via-[#FFD700] to-[#6E44FF] bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.85, rotateX: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            I’m Muhammad Talha
          </motion.h2>

          {/* Typing Roles */}
          <div className="mt-4 text-xl font-semibold text-gray-300">
            <TypewriterEffect />
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex gap-4 justify-center md:justify-start text-white">
            <a href="https://www.linkedin.com/in/muhammad-talha-4b17522bb/" target="_blank">
              <Linkedin className="hover:text-[#0077B5]" size={28} />
            </a>
            <a href="https://github.com/Muhammad361738" target="_blank">
              <Github className="hover:text-gray-400" size={28} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100095517277602&mibextid=kFxxJD" target="_blank">
              <Facebook className="hover:text-[#1877F2]" size={28} />
            </a>
            <a href="#" target="_blank">
              <Instagram className="hover:text-pink-400" size={28} />
            </a>
          </div>

          {/* Read Me Button */}
          <motion.div whileHover={{ scale: 1.05, y: -2 }} className="mt-6 inline-block">
            <Button
              borderRadius="1.75rem"
              className="bg-[#1e1e1e] text-white border-[#444]"
              onClick={() => setIsModalOpen(true)}
            >
              Read Me
            </Button>
          </motion.div>
        </div>

        {/* Profile Image with 3D Tilt */}
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.2}
          scale={1.04}
          transitionSpeed={1500}
          tiltMaxAngleX={12}
          tiltMaxAngleY={12}
          className="rounded-full"
        >
          <div className="w-64 h-64 lg:w-80 lg:h-80 overflow-hidden border-4 border-[#6E44FF] shadow-2xl rounded-full">
            <Image
              src={myImg}
              alt="Talha"
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </Tilt>
      </div>

      {/* Modal Popup for Read Me */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm px-4">
          <div className="relative bg-[#1a1a1a] text-white rounded-xl p-6 max-w-md w-full shadow-lg border border-gray-700">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
            >
              <X size={24} />
            </button>
            <h3 className="text-xl font-semibold mb-4">About Me</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              I'm a passionate <span className="text-amber-400">Frontend Developer</span> and aspiring <span className="text-cyan-400">Data Scientist</span>. I’m currently pursuing my <span className="text-purple-400">BS in Computer Science</span> while actively exploring <span className="text-green-400">Agentic AI</span>, Machine Learning, and Full Stack Web Development.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
