"use client";

import { motion } from "framer-motion";
import { Apple, PartyPopper, Star } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Teaching Internship",
      location: "Miguel M. Cruz Memorial School",
      date: "Nov 2025 - Mar 2026",
      icon: <Apple size={32} className="text-white md:w-10 md:h-10" />,
      color: "bg-pink-500",
      description: [
        "Taught and guided students in daily lessons and activities.",
        "Communicated effectively with students and parents.",
        "Developed patience, problem-solving, and interpersonal skills."
      ]
    },
    {
      title: "Service Crew",
      location: "Jollibee Mabini 10th Ave",
      date: "Jan 2023 - Dec 2024",
      icon: <PartyPopper size={32} className="text-white md:w-10 md:h-10" />,
      color: "bg-red-500",
      description: [
        "Hosted kids' parties and ensured positive experiences.",
        "Assisted customers politely and efficiently at the cashier.",
        "Developed teamwork and communication skills."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 px-6 relative overflow-hidden transition-colors duration-300 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header - Responsive Scaling */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-7xl font-black text-slate-800 dark:text-white italic tracking-tight">My Journey 🚀</h2>
          <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-400 mt-4 font-medium italic">Where I learned to inspire and grow.</p>
          <div className="h-2 md:h-3 w-32 md:w-40 bg-blue-400 mx-auto mt-6 rounded-full shadow-inner" />
        </div>

        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start group"
            >
              {/* Icon Circle - Deep Claymorphism */}
              <div className={`p-6 md:p-8 rounded-[30px] md:rounded-[35px] ${exp.color} shrink-0 group-hover:scale-110 transition-transform
                               shadow-[15px_15px_30px_rgba(0,0,0,0.1),inset_-8px_-8px_16px_rgba(0,0,0,0.2),inset_8px_8px_16px_rgba(255,255,255,0.3)]`}>
                {exp.icon}
              </div>

              {/* Content Card - Deep Claymorphism & Responsive Font */}
              <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[40px] md:rounded-[50px] flex-1 w-full border-[8px] md:border-[12px] border-white dark:border-slate-700
                               /* CLAY SHADOWS */
                               shadow-[20px_20px_40px_rgba(0,0,0,0.08),inset_-12px_-12px_24px_rgba(0,0,0,0.02),inset_12px_12px_24px_rgba(255,255,255,1)]
                               dark:shadow-[20px_20px_40px_rgba(0,0,0,0.3),inset_-12px_-12px_24px_rgba(0,0,0,0.2),inset_12px_12px_24px_rgba(255,255,255,0.05)]">
                
                <div className="flex justify-between items-start flex-wrap gap-4 mb-6 md:mb-8">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white tracking-tight">{exp.title}</h3>
                    <p className="text-xl md:text-3xl text-blue-600 dark:text-blue-400 font-black mt-1 md:mt-2">{exp.location}</p>
                  </div>
                  <span className="bg-slate-100 dark:bg-slate-900 px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-xl font-black text-slate-500 dark:text-slate-400 shadow-inner">
                    {exp.date}
                  </span>
                </div>
                
                <ul className="space-y-4 md:space-y-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-4 md:gap-6 text-slate-700 dark:text-slate-300 items-start">
                      <div className="mt-1 shrink-0">
                        <Star size={24} className="text-yellow-400 fill-yellow-400 md:w-8 md:h-8" />
                      </div>
                      <span className="text-lg md:text-3xl font-medium leading-snug">{item}</span>
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