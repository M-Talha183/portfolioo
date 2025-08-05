"use client";
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt,FaChartBar,   FaDatabase,FaBolt,  FaStream,          } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiNumpy, SiPandas, SiScikitlearn, } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: 90 },
  { name: "CSS", icon: <FaCss3Alt />, level: 85 },
  { name: "JavaScript", icon: <FaJs />, level: 80 },
  { name: "React.js", icon: <FaReact />, level: 75 },
  { name: "Next.js", icon: <SiNextdotjs />, level: 75 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
  { name: "Git", icon: <FaGitAlt />, level: 70 },
  { name: "Python", icon: <FaPython />, level: 85 },
  { name: "NumPy", icon: <SiNumpy />, level: 80 },
  { name: "Pandas", icon: <SiPandas />, level: 80 },
  { name: "Matplotlib", icon: <FaChartBar />, level: 70 },  
  { name: "Seaborn", icon: <FaDatabase />, level: 70 },
  { name: "Scikit-learn", icon: <SiScikitlearn />, level: 65 },
  { name: "FastAPI", icon: <FaBolt />, level: 65 },
  { name: "Streamlit", icon: <FaStream />, level: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-4">⚒️ My Skills</h2>
      <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
        I specialize in frontend development using modern technologies and have strong hands-on experience with Python and its data science libraries.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center space-x-4 mb-2">
              <span className="text-3xl text-yellow-400">{skill.icon}</span>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
            <div className="w-full bg-gray-700 h-2 rounded-full">
              <div
                className="bg-yellow-400 h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">{skill.level}% Proficient</p>
          </div>
        ))}
      </div>
    </section>
  );
}
