"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Brain, Heart, Hand, Sparkles } from 'lucide-react';

export default function Skills() {
  const skills = [
    { 
      name: "Active Listening", 
      icon: <Users className="w-10 h-10 md:w-14 md:h-14" />, 
      color: "bg-blue-400", 
      desc: "Student Engagement" 
    },
    { 
      name: "Lesson Planning", 
      icon: <BookOpen className="w-10 h-10 md:w-14 md:h-14" />, 
      color: "bg-green-400", 
      desc: "Creative Activities" 
    },
    { 
      name: "Patience & Empathy", 
      icon: <Heart className="w-10 h-10 md:w-14 md:h-14" />, 
      color: "bg-pink-400", 
      desc: "With Young Learners" 
    },
    { 
      name: "Problem Solving", 
      icon: <Brain className="w-10 h-10 md:w-14 md:h-14" />, 
      color: "bg-purple-400", 
      desc: "Quick Thinking" 
    },
    { 
      name: "Adaptability", 
      icon: <Sparkles className="w-10 h-10 md:w-14 md:h-14" />, 
      color: "bg-yellow-400", 
      desc: "Learning Styles" 
    },
    { 
      name: "Positive Guidance", 
      icon: <Hand className="w-10 h-10 md:w-14 md:h-14" />, 
      color: "bg-orange-400", 
      desc: "Classroom Management" 
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-6 relative overflow-hidden transition-colors duration-300 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Responsive Font Sizes */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="text-4xl md:text-7xl font-black text-slate-800 dark:text-white italic tracking-tight"
          >
            Teacher's Toolkit 🎒
          </motion.h2>
          <p className="text-xl md:text-3xl text-slate-500 dark:text-slate-400 mt-4 font-bold">
            The special "superpowers" I bring to the classroom.
          </p>
          <div className="h-2 md:h-3 w-32 md:w-48 bg-pink-400 mx-auto mt-6 rounded-full shadow-inner" />
        </div>

        {/* Stickers Grid - Adjusted gap for mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center cursor-pointer"
            >
              {/* BIG CLAY STICKER - Responsive Sizes */}
              <div className={`w-36 h-36 md:w-56 md:h-56 rounded-[40px] md:rounded-[60px] flex items-center justify-center mb-6 md:mb-8 ${skill.color}
                              shadow-[15px_15px_30px_rgba(0,0,0,0.1),inset_-8px_-8px_16px_rgba(0,0,0,0.2),inset_8px_8px_16px_rgba(255,255,255,0.3)]
                              border-[8px] md:border-[12px] border-white/50 dark:border-white/20 transition-all duration-300`}>
                <div className="text-white drop-shadow-lg">
                  {skill.icon}
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-2xl md:text-4xl font-black text-slate-800 dark:text-white leading-tight tracking-tighter">
                  {skill.name}
                </h4>
                <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 font-black uppercase mt-2 tracking-widest bg-slate-100 dark:bg-slate-800 px-4 py-1 rounded-full inline-block shadow-inner transition-colors">
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}