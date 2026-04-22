"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Heart, Star, Download, User } from "lucide-react";
import Image from 'next/image';

export default function About() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-24 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Bold & Cute */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black text-slate-800 italic drop-shadow-md">
            Get to Know Me! 🍎
          </h2>
          <div className="h-3 w-40 bg-yellow-400 mx-auto mt-4 rounded-full shadow-inner" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: The Photo Frame (Mauna sa Mobile) */}
          <div className="flex justify-center items-center relative order-1 lg:order-1">
            {/* Background Star Doodle */}
            <div className="absolute -right-10 top-0 opacity-10 pointer-events-none rotate-45">
               <Star size={120} className="text-yellow-500" />
            </div>

            <motion.div 
              whileHover={{ rotate: 0, scale: 1.03 }}
              className="p-6 -rotate-2 bg-white rounded-[60px] border-[18px] border-white shadow-[30px_30px_60px_rgba(0,0,0,0.1),inset_-15px_-15px_30px_rgba(0,0,0,0.05)] w-full max-w-[480px]"
            >
              <div className="aspect-[4/5] bg-slate-100 rounded-[45px] overflow-hidden relative shadow-inner">
                <Image 
                  src="/teacher-julliana.jpg" 
                  alt="Teacher Julliana Vidania"
                  fill 
                  className="object-cover" 
                  priority
                />
                
                {/* Fixed Star Icon - Bottom Right */}
                <motion.div 
                  className="absolute bottom-6 right-6 text-yellow-400 drop-shadow-lg"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                >
                   <Star size={56} fill="currentColor" />
                </motion.div>
              </div>
              <div className="mt-8 text-center pb-4">
                <p className="text-3xl font-black text-slate-600 italic uppercase tracking-tighter">Educator Life ✨</p>
              </div>
            </motion.div>

            {/* CSPB Pride Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-8 -left-4 bg-green-500 px-8 py-4 text-white text-xl font-black rounded-[25px] shadow-xl -rotate-12"
            >
              CSPB Pride! 🎓
            </motion.div>

            {/* Location Tag */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-8 py-4 flex items-center gap-3 rounded-full shadow-lg border-[4px] border-white">
              <MapPin size={24} className="text-red-500" />
              <span className="text-lg font-black text-slate-600 uppercase">Sta. Maria, Bulacan</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Info (Pangalawa sa Mobile) */}
          <div className="space-y-10 order-2 lg:order-2">
            
            {/* Story Card - Pinalaking Fonts */}
            <div className="p-12 bg-white rounded-[50px] shadow-[20px_20px_40px_rgba(0,0,0,0.05),inset_-15px_-15px_30px_rgba(0,0,0,0.02),inset_15px_15px_30px_rgba(255,255,255,1)] border-[8px] border-white/50">
              <div className="flex items-center gap-4 mb-6">
                <User className="text-pink-500" size={36} />
                <h3 className="text-3xl font-black text-pink-500 uppercase tracking-tighter">The Heart of a Teacher</h3>
              </div>
              <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed font-medium">
                I am a dedicated educator from <strong>Bulac, Sta. Maria, Bulacan</strong>. 
                My goal is to promote student learning, professional growth, and educational excellence.
              </p>
              
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 inline-flex items-center gap-4 bg-pink-500 text-white px-10 py-5 rounded-[30px] font-black text-2xl shadow-[10px_10px_20px_rgba(236,72,153,0.3),inset_-8px_-8px_16px_rgba(0,0,0,0.2)] cursor-pointer"
              >
                <Download size={28} />
                Download CV
              </motion.a>
            </div>

            {/* Education & Values - Grid style */}
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-center gap-6 p-8 bg-white rounded-[40px] shadow-[15px_15px_30px_rgba(0,0,0,0.04)] border-[6px] border-white/50">
                <div className="p-6 bg-blue-500 text-white rounded-3xl shadow-lg shadow-blue-200">
                  <GraduationCap size={44} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-700 leading-tight">Bachelor of Early Childhood Education</p>
                  <p className="text-lg font-black text-blue-600 uppercase mt-1 tracking-wider">CSPB (2022-2026)</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-8 bg-white rounded-[40px] shadow-[15px_15px_30px_rgba(0,0,0,0.04)] border-[6px] border-white/50">
                <div className="p-6 bg-yellow-500 text-white rounded-3xl shadow-lg shadow-yellow-200">
                  <Heart size={44} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-700 leading-tight">Patience, Empathy, and Adaptability</p>
                  <p className="text-lg font-black text-yellow-600 uppercase mt-1 tracking-wider">Core Values</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </motion.section>
  );
}