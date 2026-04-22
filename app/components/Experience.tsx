"use client";

import { motion } from "framer-motion";
import { Apple, PartyPopper, Star } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Teaching Internship",
      location: "Miguel M. Cruz Memorial School",
      date: "Nov 2025 - Mar 2026",
      icon: <Apple size={40} className="text-white" />,
      color: "bg-pink-500",
      description: [
        "Taught and guided students in daily lessons and activities.",
        "Communicated effectively with students and parents.",
        "Developed patience, problem-solving, and strong interpersonal skills."
      ]
    },
    {
      title: "Service Crew",
      location: "Jollibee Mabini 10th Ave",
      date: "Jan 2023 - Dec 2024",
      icon: <PartyPopper size={40} className="text-white" />,
      color: "bg-red-500",
      description: [
        "Hosted kids' parties, entertained guests, and ensured positive experiences.",
        "Assisted customers politely and efficiently at the cashier.",
        "Developed communication and interpersonal skills through teamwork."
      ]
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header - Pinalaki */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-slate-800 italic">My Teaching Journey 🚀</h2>
          <p className="text-2xl md:text-3xl text-slate-600 mt-4 font-medium italic">Where I learned to inspire and grow.</p>
          <div className="h-3 w-40 bg-blue-400 mx-auto mt-6 rounded-full shadow-inner" />
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-10 items-start group"
            >
              {/* Icon Circle - Mas Malaki at Puffy */}
              <div className={`p-8 rounded-[35px] ${exp.color} shadow-[10px_10px_25px_rgba(0,0,0,0.1),inset_-8px_-8px_16px_rgba(0,0,0,0.2),inset_8px_8px_16px_rgba(255,255,255,0.3)] shrink-0 group-hover:scale-110 transition-transform`}>
                {exp.icon}
              </div>

              {/* Content Card - Pinalaki ang Fonts */}
              <div className="bg-white p-12 rounded-[50px] flex-1 w-full border-[10px] border-white shadow-[25px_25px_50px_rgba(0,0,0,0.06),inset_-15px_-15px_30px_rgba(0,0,0,0.02),inset_15px_15px_30px_rgba(255,255,255,1)]">
                <div className="flex justify-between items-start flex-wrap gap-4 mb-8">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">{exp.title}</h3>
                    <p className="text-2xl md:text-3xl text-blue-600 font-black mt-2">{exp.location}</p>
                  </div>
                  <span className="bg-slate-100 px-8 py-3 rounded-full text-xl font-black text-slate-500 shadow-inner">
                    {exp.date}
                  </span>
                </div>
                
                <ul className="space-y-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-6 text-slate-700 items-start">
                      <div className="mt-1">
                        <Star size={32} className="text-yellow-400 fill-yellow-400 shrink-0" />
                      </div>
                      <span className="text-2xl md:text-3xl font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}