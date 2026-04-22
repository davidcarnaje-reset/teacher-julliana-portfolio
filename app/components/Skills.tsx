"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Brain, Heart, Hand, Sparkles } from 'lucide-react';

export default function Skills() {
  const skills = [
    { 
      name: "Active Listening", 
      icon: <Users size={56} />, 
      color: "bg-blue-400", 
      desc: "Student Engagement" 
    },
    { 
      name: "Lesson Planning", 
      icon: <BookOpen size={56} />, 
      color: "bg-green-400", 
      desc: "Creative Activities" 
    },
    { 
      name: "Patience & Empathy", 
      icon: <Heart size={56} />, 
      color: "bg-pink-400", 
      desc: "With Young Learners" 
    },
    { 
      name: "Problem Solving", 
      icon: <Brain size={56} />, 
      color: "bg-purple-400", 
      desc: "Quick Thinking" 
    },
    { 
      name: "Adaptability", 
      icon: <Sparkles size={56} />, 
      color: "bg-yellow-400", 
      desc: "Learning Styles" 
    },
    { 
      name: "Positive Guidance", 
      icon: <Hand size={56} />, 
      color: "bg-orange-400", 
      desc: "Classroom Management" 
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Pinalaki ang Fonts */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="text-6xl md:text-7xl font-black text-slate-800 italic"
          >
            Teacher's Toolkit 🎒
          </motion.h2>
          <p className="text-2xl md:text-3xl text-slate-500 mt-4 font-bold">
            The special "superpowers" I bring to the classroom.
          </p>
          <div className="h-3 w-48 bg-pink-400 mx-auto mt-6 rounded-full shadow-inner" />
        </div>

        {/* Stickers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
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
              {/* BIG CLAY STICKER */}
              <div className={`w-48 h-48 md:w-56 md:h-56 rounded-[60px] flex items-center justify-center mb-8 ${skill.color}
                              shadow-[20px_20px_40px_rgba(0,0,0,0.1),inset_-12px_-12px_24px_rgba(0,0,0,0.2),inset_12px_12px_24px_rgba(255,255,255,0.3)]
                              border-[12px] border-white/50 transition-all duration-300`}>
                <div className="text-white drop-shadow-lg">
                  {skill.icon}
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight tracking-tighter">
                  {skill.name}
                </h4>
                <p className="text-lg md:text-xl text-slate-500 font-black uppercase mt-2 tracking-widest bg-slate-100 px-4 py-1 rounded-full inline-block shadow-inner">
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