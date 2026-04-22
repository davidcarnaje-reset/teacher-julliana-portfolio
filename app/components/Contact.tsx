"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, UserCheck, Send, Sparkles } from 'lucide-react';

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Mega Font */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="text-6xl md:text-8xl font-black text-slate-800 italic"
          >
            Let's Connect! ✉️
          </motion.h2>
          <p className="text-2xl md:text-3xl text-slate-500 mt-6 font-bold max-w-3xl mx-auto leading-relaxed">
            I'm excited to bring my passion for teaching to your school and inspire young minds!
          </p>
          <div className="h-3 w-48 bg-yellow-400 mx-auto mt-8 rounded-full shadow-inner" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* KALIWA: Contact Info Cards - Pinalaki ang Details */}
          <div className="space-y-8">
            <h3 className="text-4xl font-black text-slate-800 mb-10 flex items-center gap-4 uppercase tracking-tighter">
              Contact Details <Sparkles className="text-yellow-400" />
            </h3>
            
            <motion.div 
              whileHover={{ x: 10 }}
              className="p-10 bg-white rounded-[50px] flex items-center gap-8 shadow-[20px_20px_40px_rgba(0,0,0,0.05),inset_-10px_-10px_20px_rgba(0,0,0,0.02)] border-[8px] border-white"
            >
              <div className="p-8 bg-blue-500 text-white rounded-[30px] shadow-lg shadow-blue-200">
                <Phone size={48} />
              </div>
              <div>
                <p className="text-lg font-black text-slate-400 uppercase tracking-widest mb-1">Phone Number</p>
                <p className="text-3xl md:text-4xl font-black text-slate-800">0968-224-2419</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="p-10 bg-white rounded-[50px] flex items-center gap-8 shadow-[20px_20px_40px_rgba(0,0,0,0.05),inset_-10px_-10px_20px_rgba(0,0,0,0.02)] border-[8px] border-white"
            >
              <div className="p-8 bg-pink-500 text-white rounded-[30px] shadow-lg shadow-pink-200">
                <Mail size={48} />
              </div>
              <div>
                <p className="text-lg font-black text-slate-400 uppercase tracking-widest mb-1">Email Address</p>
                <p className="text-3xl md:text-4xl font-black text-slate-800 break-all">JullianaTrixie@gmail.com</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="p-10 bg-white rounded-[50px] flex items-center gap-8 shadow-[20px_20px_40px_rgba(0,0,0,0.05),inset_-10px_-10px_20px_rgba(0,0,0,0.02)] border-[8px] border-white"
            >
              <div className="p-8 bg-yellow-500 text-white rounded-[30px] shadow-lg shadow-yellow-200">
                <MapPin size={48} />
              </div>
              <div>
                <p className="text-lg font-black text-slate-400 uppercase tracking-widest mb-1">Location</p>
                <p className="text-3xl md:text-4xl font-black text-slate-800 leading-tight">Bulac, Sta. Maria, Bulacan</p>
              </div>
            </motion.div>
          </div>

          {/* KANAN: Character Reference Box - Professional Credibility */}
          <div className="space-y-8 flex flex-col">
            <h3 className="text-4xl font-black text-slate-800 mb-10 flex items-center gap-4 uppercase tracking-tighter">
              Reference <UserCheck className="text-green-500" />
            </h3>
            
            <div className="p-12 bg-white rounded-[60px] border-[12px] border-white shadow-[25px_25px_50px_rgba(0,0,0,0.08),inset_-15px_-15px_30px_rgba(0,0,0,0.02)] flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-6 mb-10">
                <div className="p-6 bg-green-500 text-white rounded-[30px] shadow-lg shadow-green-200 rotate-3">
                  <UserCheck size={56} />
                </div>
                <div>
                  <h4 className="text-4xl font-black text-slate-800">Marty Dy</h4>
                  <p className="text-2xl text-blue-600 font-black italic mt-1">Manager, Jollibee 10th Ave</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <p className="text-2xl md:text-3xl text-slate-600 italic leading-relaxed font-medium">
                  "Julliana's dedication during her time as a Service Crew and Party Host showed her exceptional communication and interpersonal skills."
                </p>
                <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-[30px] border-[4px] border-white shadow-inner">
                  <Phone size={32} className="text-green-500" />
                  <span className="text-3xl font-black text-slate-700 tracking-tighter">0923-741-4232</span>
                </div>
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.button 
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 w-full p-8 bg-slate-800 text-white rounded-[40px] font-black text-3xl shadow-clay shadow-slate-300 flex items-center justify-center gap-4"
            >
              Back to Top 🚀
            </motion.button>
          </div>
        </div>

        {/* Global Credits */}
        <div className="mt-24 pt-12 border-t-8 border-white/50 text-center">
          <p className="text-2xl font-black text-slate-400 uppercase tracking-[0.2em]">
            Designed with 💖 for Teacher Julliana
          </p>
        </div>

      </div>
    </section>
  );
}