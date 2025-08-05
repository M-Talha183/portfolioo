
"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

const educationData = [
  {
    degree: "Bachelor in Computer Science",
    institution: "Sindh Madressatul Islam University",
    duration: "2023 - Present",
    description:
      "Core subjects include Web Development, Data Science, AI, OOP, DSA, and Software Engineering.",
    transcriptLink: "/certificates/smiu.jpg",
  },
  {
    degree: "Certificate (Data Science)",
    institution: "People's IT Program (PITP), NED University",
    duration: "2025",
    description:
      "Data Science libraries like NumPy, Pandas, Seaborn, Matplotlib, and Scikit-learn. Building hands-on AI-based projects.",
    certificateLink: "/certificates/data.jpg",
  },
  {
    degree: "Certificate (Python)",
    institution: "People's IT Program (PITP), NED University",
    duration: "2025",
    description:
      "Enrolled in PITP where I am learning Python with Streamlit and Advanced Topics in Object-Oriented Programming.",
    certificateLink: "/certificates/python.jpg",
  },
    {
    degree: "Agentic AI ",
    institution: "Governor Sindh Initiative for. Artificial Intelligence, Web 3.0",
    duration: "2024 - Present",
    description:
      "Enrolled in GIAIC where I am learning Agentic AI in Open Ai SDK python first Library for Making Agents",
    certificateLink: "/certificates/python.jpg",
  },
  {
    degree: "Intermediate in Pre-Engineering",
    institution: "Government Degree College",
    duration: "2021 - 2023",
    description:
      "Studied Physics, Chemistry, and Mathematics with strong academic performance.",
    certificateLink: "/certificates/iter.jpg",
  },
  {
    degree: "Matriculation (Science)",
    institution: "Universal Grammer School",
    duration: "2019 - 2021",
    description:
      "Focused on general science subjects with distinction in Computer Science.",
    certificateLink: "/certificates/metric.jpg",
  },
];

export default function EducationSection() {
  return (
    <div  className="bg-[#111827] py-24 px-4 md:px-10" id="education">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        🎓 Education Timeline
      </h2>

      <div className="relative border-l-4 border-yellow-400 pl-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="relative mb-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-30px] top-0 bg-[#111827] border-2 border-yellow-400 text-yellow-400 rounded-full p-2">
              <GraduationCap className="h-6 w-6" />
            </div>

            {/* Content Card */}
            <div className="bg-[#1f2937] rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              <p className="text-sm text-gray-400">
                {edu.institution} ({edu.duration})
              </p>
              <p className="mt-3 text-gray-300">{edu.description}</p>

              <div className="mt-4 flex gap-4 flex-wrap">
                {edu.certificateLink && (
                  <Link
                    href={edu.certificateLink}
                    target="_blank"
                    className="text-sm bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-400 transition"
                  >
                    View Certificate
                  </Link>
                )}

                {edu.transcriptLink && (
                  <Link
                    href={edu.transcriptLink}
                    target="_blank"
                    className="text-sm bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
                  >
                    View Transcript
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
