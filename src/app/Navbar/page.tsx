// "use client"
// import React, { useState } from 'react';
// import Link from "next/link";

// const Page = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div>
//       <nav className="bg-black bg-opacity-40  fixed w-full z-20 mx-auto h-16 mt-5 text-center text-white">
//         <div className="flex justify-between items-center">
//           <div className="font-bold text-2xl font-serif pt-4 pl-6">
//             <h2>Portfolio</h2>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block pt-3 font-bold text-lg">
//             <ul className="outline-none flex gap-6 pr-10">
//               <li><Link href="/">Home</Link></li>
//               <li><Link href="/About">About</Link></li>
//               <li><Link href="/Skills">Skills</Link></li>
//               <li><Link href="/Projects">Projects</Link></li>
//               <li><Link href="/Education">Education</Link> </li>
//               <li><Link href="/Contact">Contact us</Link></li>

//             </ul>
//           </div>

//           {/* Hamburger Icon for Mobile */}
//           <div className="block md:hidden">
//             <button onClick={toggleMenu} className="text-4xl text-white p-3">&#8801;</button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu Modal */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 z-20 flex flex-col  justify-center">
//           <button onClick={toggleMenu} className="absolute top-5 right-5 text-4xl text-white">&#10006;</button>
//           <ul className="text-center text-white text-2xl space-y-6">
//             <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
//             <li><Link href="/About" onClick={toggleMenu}>About</Link></li>
//             <li><Link href="/Skills" onClick={toggleMenu}>Skills</Link></li>
//             <li><Link href="/Projects" onClick={toggleMenu}>Projects</Link></li>
//             <li><Link href="/Education" onClick={toggleMenu}>Education</Link></li>
//             <li><Link href="/Contact" onClick={toggleMenu}>Contact us</Link></li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Page;
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl shadow-2xl shadow-purple-900/40 border-b border-purple-500/30 rounded-b-xl">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-3xl font-extrabold tracking-widest drop-shadow-md hover:text-purple-400 transition">
          <Link href="/">Talha<span className="text-purple-400">Dev</span></Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium text-lg">
          {["Home", "About", "Skills", "Projects", "Education", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                href={item === "Home" ? "/" : `/${item}`}
                className="relative group"
              >
                <span className="transition-colors duration-300 group-hover:text-purple-400">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white drop-shadow-xl">
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-gradient-to-br from-black via-gray-900 to-black z-40 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out md:hidden shadow-inner shadow-purple-500/20`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <h2 className="text-white text-2xl font-extrabold drop-shadow-md">
            Talha<span className="text-purple-400">Dev</span>
          </h2>
          <button onClick={toggleMenu} className="text-white">
            <X size={32} />
          </button>
        </div>
        <ul className="mt-10 space-y-8 text-center text-white text-2xl font-semibold drop-shadow-md">
          {["Home", "About", "Skills", "Projects", "Education", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                href={item === "Home" ? "/" : `/${item}`}
                onClick={toggleMenu}
                className="hover:text-purple-400 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
