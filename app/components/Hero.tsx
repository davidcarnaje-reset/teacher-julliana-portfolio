"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import { Cat } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20 md:py-24 bg-transparent overflow-visible transition-colors duration-300 dark:bg-[#0f172a]"> 
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-20">
        
        {/* CHIBI FRAME - FIXED INTERACTIVITY */}
        <div className="relative group scale-90 md:scale-100 z-30">
          <motion.div 
            initial={{ scale: 0.9, rotate: -3 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ rotate: 3, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-64 h-64 md:w-[500px] md:h-[500px] flex items-center justify-center overflow-hidden 
                       bg-white dark:bg-slate-800 rounded-[60px] md:rounded-[80px] border-[12px] md:border-[18px] border-white dark:border-slate-700
                       shadow-[20px_20px_40px_rgba(0,0,0,0.1),inset_-15px_-15px_30px_rgba(0,0,0,0.05),inset_15px_15px_30px_rgba(255,255,255,1)]
                       dark:shadow-[20px_20px_40px_rgba(0,0,0,0.3),inset_-15px_-15px_30px_rgba(0,0,0,0.2),inset_15px_15px_30px_rgba(255,255,255,0.05)]"
          >
            <Image 
              src="/julliana-chibi.png" 
              alt="Teacher Julliana Chibi"
              width={450}
              height={450}
              className="object-contain transform scale-105 md:scale-110 drop-shadow-2xl pointer-events-none"
              priority
            />
          </motion.div>
          
          {/* BADGE - CLICKABLE LINK TO SKILLS */}
          <motion.div 
            onClick={() => scrollToSection('skills')}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-yellow-400 px-8 py-4 md:px-12 md:py-6 text-xl md:text-3xl font-black text-yellow-900 rotate-12
                       rounded-[25px] md:rounded-[30px] cursor-pointer z-40
                       shadow-[10px_10px_20px_rgba(0,0,0,0.15),inset_-6px_-6px_12px_rgba(0,0,0,0.1),inset_6px_6px_12px_rgba(255,255,255,0.4)]"
          >
            Ready to Teach ✨
          </motion.div>
        </div>

        {/* TEXT CONTENT */}
        <div className="flex-1 text-center md:text-left space-y-8 md:space-y-12 z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block bg-blue-100 dark:bg-blue-900/30 px-6 py-3 md:px-10 md:py-4 text-blue-600 dark:text-blue-300 font-black text-lg md:text-2xl uppercase tracking-widest
                          rounded-[20px] md:rounded-[25px] shadow-[inset_4px_4px_8px_rgba(255,255,255,1),4px_4px_8px_rgba(0,0,0,0.05)]
                          dark:shadow-[inset_4px_4px_8px_rgba(255,255,255,0.05),4px_4px_8px_rgba(0,0,0,0.2)]"
          >
            Early Childhood Educator
          </motion.div>

          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-6xl font-bold text-slate-700 dark:text-slate-300 italic">Hi! I'm Teacher</h2>
            <h1 className="text-6xl md:text-9xl font-black text-slate-800 dark:text-white leading-none">
              <span className="text-pink-500 relative inline-block">
                Julliana
                <motion.div 
                  className="absolute -top-12 -right-12 md:-top-16 md:-right-16 text-orange-400"
                  animate={{ y: [0, -15, 0], rotate: [15, -15, 15] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <Cat size={60} fill="currentColor" className="drop-shadow-lg" />
                </motion.div>
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-4xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl leading-relaxed mx-auto md:mx-0">
            Dedicated to applying my skills and passion for teaching to promote student learning.
          </p>

          {/* BUTTONS - FIXED CLICKABLE AREA */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-5 md:gap-10 pt-6 relative z-50">
            <motion.button 
              onClick={() => scrollToSection('experience')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-500 px-10 py-5 md:px-16 md:py-8 text-white font-black text-xl md:text-3xl 
                         rounded-[30px] md:rounded-[40px] cursor-pointer
                         shadow-[10px_10px_20px_rgba(236,72,153,0.3),inset_-8px_-8px_16px_rgba(0,0,0,0.2),inset_8px_8px_16px_rgba(255,255,255,0.3)]"
            >
              My Journey
            </motion.button>
            
            <motion.button 
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-slate-800 px-10 py-5 md:px-16 md:py-8 font-black text-xl md:text-3xl text-slate-700 dark:text-white
                         rounded-[30px] md:rounded-[40px] cursor-pointer
                         shadow-[10px_10px_20px_rgba(0,0,0,0.05),inset_-8px_-8px_16px_rgba(0,0,0,0.05),inset_8px_8px_16px_rgba(255,255,255,1)]
                         dark:shadow-[10px_10px_20px_rgba(0,0,0,0.3),inset_-8px_-8px_16px_rgba(0,0,0,0.2),inset_8px_8px_16px_rgba(255,255,255,0.05)]"
            >
              Say Hello! 👋
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
}