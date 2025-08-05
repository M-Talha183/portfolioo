
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
    { name: "skills", href: "#skills" },

  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-black/70 to-gray-900/70 backdrop-blur-md border-b border-purple-500/30 shadow-[0_8px_30px_rgb(168,85,247,0.2)] transition duration-500">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with fade-in-down */}
        <Link
          href="/"
          className="text-white text-3xl font-black tracking-wide hover:text-purple-400 transition-all duration-300 animate-fade-in-down"
        >
          Talha<span className="text-purple-400">Dev</span>
        </Link>

        {/* Desktop Nav with bounce */}
        <ul className="hidden md:flex space-x-8 text-white font-medium text-lg">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className="group relative inline-block overflow-hidden animate-bounce-slow hover:animate-pop"
              >
                <span className="group-hover:text-purple-400 transition-all duration-300">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-500"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon with float */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white animate-float">
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Drawer with slide-in-left */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black/90 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "animate-slide-in-left" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-purple-500/20">
          <h2 className="text-white text-2xl font-extrabold animate-fade-in-down">
            Talha<span className="text-purple-400">Dev</span>
          </h2>
          <button onClick={() => setIsMenuOpen(false)} className="text-white">
            <X size={30} />
          </button>
        </div>

        {/* Mobile Nav Items */}
{/* Mobile Nav Items */}
<ul className="mt-10 space-y-6 text-center text-white text-2xl font-semibold bg-black/80 backdrop-blur-md py-6 mx-6 rounded-xl shadow-lg">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-purple-400 transition-all duration-300 animate-pop"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
