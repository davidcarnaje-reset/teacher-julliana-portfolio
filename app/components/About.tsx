"use client";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Heart, Star, Download, User } from "lucide-react";
import Image from 'next/image';

export default function About() {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-16 md:py-24 px-6 relative overflow-hidden transition-colors duration-300 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Puffy Style */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-7xl font-black text-slate-800 dark:text-white italic tracking-tight drop-shadow-sm">
            Get to Know Me! 🍎
          </h2>
          <div className="h-3 md:h-4 w-32 md:w-40 bg-yellow-400 mx-auto mt-4 rounded-full shadow-[inset_0_4px_8px_rgba(0,0,0,0.2)]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* PHOTO FRAME - MEGA CLAY DEPTH */}
          <div className="flex justify-center items-center relative order-1">
            <motion.div 
              whileHover={{ rotate: 0, scale: 1.03 }}
              className="p-5 md:p-7 -rotate-2 bg-white dark:bg-slate-800 rounded-[50px] md:rounded-[70px] border-[15px] md:border-[25px] border-white dark:border-slate-700 
                         /* PINAKAMATAPANG NA CLAY SHADOWS */
                         shadow-[30px_30px_60px_rgba(0,0,0,0.15),inset_-15px_-15px_30px_rgba(0,0,0,0.05),inset_15px_15px_40px_rgba(255,255,255,1)]
                         dark:shadow-[30px_30px_60px_rgba(0,0,0,0.4),inset_-15px_-15px_30px_rgba(0,0,0,0.2),inset_15px_15px_40px_rgba(255,255,255,0.05)]
                         w-full max-w-[320px] md:max-w-[480px] z-10"
            >
              <div className="aspect-[4/5] bg-slate-100 dark:bg-slate-900 rounded-[35px] md:rounded-[45px] overflow-hidden relative shadow-[inset_10px_10px_20px_rgba(0,0,0,0.1)]">
                <Image 
                  src="/teacher-julliana.jpg" 
                  alt="Teacher Julliana Vidania"
                  fill 
                  className="object-cover" 
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                <motion.div 
                  className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-yellow-400 drop-shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                >
                   <Star size={45} className="md:w-16 md:h-16" fill="currentColor" />
                </motion.div>
              </div>
              <div className="mt-6 md:mt-8 text-center pb-2 md:pb-4">
                <p className="text-xl md:text-3xl font-black text-slate-600 dark:text-slate-400 italic uppercase tracking-tighter">Educator Life ✨</p>
              </div>
            </motion.div>

            {/* CSPB Pride Badge - Clay Style */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-6 -left-2 md:-top-10 md:-left-6 bg-green-500 px-6 py-3 md:px-10 md:py-5 text-white text-base md:text-xl font-black rounded-[25px] md:rounded-[30px] 
                         shadow-[15px_15px_30px_rgba(0,0,0,0.15),inset_-8px_-8px_16px_rgba(0,0,0,0.2),inset_8px_8px_16px_rgba(255,255,255,0.4)] -rotate-12 z-20"
            >
              CSPB Pride! 🎓
            </motion.div>

            {/* Location Tag - Clay Pill */}
            <div className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 px-6 py-3 md:px-10 md:py-5 flex items-center gap-3 rounded-full 
                            shadow-[10px_10px_25px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(0,0,0,0.05),inset_4px_4px_8px_rgba(255,255,255,1)] 
                            dark:shadow-[10px_10px_25px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(0,0,0,0.2),inset_4px_4px_8px_rgba(255,255,255,0.05)]
                            border-[4px] border-white dark:border-slate-700 z-30 whitespace-nowrap">
              <MapPin size={22} className="text-red-500 md:w-7 md:h-7" />
              <span className="text-sm md:text-xl font-black text-slate-600 dark:text-slate-300 uppercase tracking-tight">Sta. Maria, Bulacan</span>
            </div>
          </div>

          {/* RIGHT COLUMN - MEGA CLAY CARDS */}
          <div className="space-y-10 md:space-y-12 order-2">
            
            {/* Story Card */}
            <div className="p-8 md:p-14 bg-white dark:bg-slate-800 rounded-[45px] md:rounded-[60px] border-[12px] md:border-[20px] border-white dark:border-slate-700
                            shadow-[25px_25px_50px_rgba(0,0,0,0.1),inset_-15px_-15px_30px_rgba(0,0,0,0.05),inset_15px_15px_30px_rgba(255,255,255,1)]
                            dark:shadow-[25px_25px_50px_rgba(0,0,0,0.3),inset_-15px_-15px_30px_rgba(0,0,0,0.2),inset_15px_15px_30px_rgba(255,255,255,0.05)]">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <User className="text-pink-500 w-8 h-8 md:w-11 md:h-11" />
                <h3 className="text-2xl md:text-4xl font-black text-pink-500 uppercase tracking-tighter">The Heart of a Teacher</h3>
              </div>
              <p className="text-xl md:text-3xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                I am a dedicated educator from <strong>Bulac</strong>. 
                My goal is to promote student learning and educational excellence.
              </p>
              
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 inline-flex items-center gap-4 bg-pink-500 text-white px-8 py-5 md:px-12 md:py-6 rounded-[30px] md:rounded-[35px] font-black text-xl md:text-3xl 
                           shadow-[10px_10px_20px_rgba(236,72,153,0.3),inset_-8px_-8px_16px_rgba(0,0,0,0.2),inset_8px_8px_16px_rgba(255,255,255,0.4)] cursor-pointer"
              >
                <Download size={30} />
                Download CV
              </motion.a>
            </div>

            {/* Sub-cards - Grid Style with Clay Depth */}
            <div className="grid grid-cols-1 gap-6 md:gap-8">
              {/* Education */}
              <div className="flex items-center gap-5 md:gap-8 p-6 md:p-10 bg-white dark:bg-slate-800 rounded-[35px] md:rounded-[50px] border-[8px] md:border-[12px] border-white dark:border-slate-700
                              shadow-[15px_15px_30px_rgba(0,0,0,0.08),inset_-8px_-8px_16px_rgba(0,0,0,0.02),inset_8px_8px_16px_rgba(255,255,255,1)]
                              dark:shadow-[15px_15px_30px_rgba(0,0,0,0.3),inset_-8px_-8px_16px_rgba(0,0,0,0.2),inset_8px_8px_16px_rgba(255,255,255,0.05)]">
                <div className="p-5 md:p-7 bg-blue-500 text-white rounded-[25px] md:rounded-[35px] shadow-lg shadow-blue-200/50">
                  <GraduationCap size={40} className="md:w-14 md:h-14" />
                </div>
                <div>
                  <p className="text-xl md:text-3xl font-black text-slate-700 dark:text-slate-200 leading-tight">BECEd Graduate</p>
                  <p className="text-sm md:text-xl font-black text-blue-600 dark:text-blue-400 uppercase mt-1">CSPB (2022-2026)</p>
                </div>
              </div>

              {/* Core Values */}
              <div className="flex items-center gap-5 md:gap-8 p-6 md:p-10 bg-white dark:bg-slate-800 rounded-[35px] md:rounded-[50px] border-[8px] md:border-[12px] border-white dark:border-slate-700
                              shadow-[15px_15px_30px_rgba(0,0,0,0.08),inset_-8px_-8px_16px_rgba(0,0,0,0.02),inset_8px_8px_16px_rgba(255,255,255,1)]
                              dark:shadow-[15px_15px_30px_rgba(0,0,0,0.3),inset_-8px_-8px_16px_rgba(0,0,0,0.2),inset_8px_8px_16px_rgba(255,255,255,0.05)]">
                <div className="p-5 md:p-7 bg-yellow-500 text-white rounded-[25px] md:rounded-[35px] shadow-lg shadow-yellow-200/50">
                  <Heart size={40} className="md:w-14 md:h-14" />
                </div>
                <div>
                  <p className="text-xl md:text-3xl font-black text-slate-700 dark:text-slate-200 leading-tight">Patience & Empathy</p>
                  <p className="text-sm md:text-xl font-black text-yellow-600 dark:text-yellow-500 uppercase mt-1">Core Values</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}