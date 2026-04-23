"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, UserCheck, Sparkles, ArrowUp } from 'lucide-react';

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 relative overflow-hidden transition-colors duration-300 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="text-4xl md:text-8xl font-black text-slate-800 dark:text-white italic tracking-tight"
          >
            Let's Connect! ✉️
          </motion.h2>
          <p className="text-xl md:text-3xl text-slate-500 dark:text-slate-400 mt-4 md:mt-6 font-bold max-w-3xl mx-auto leading-relaxed">
            I'm excited to bring my passion for teaching to your school and inspire young minds!
          </p>
          <div className="h-2 md:h-3 w-32 md:w-48 bg-yellow-400 mx-auto mt-6 md:mt-8 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          
          {/* KALIWA: Contact Info Cards - PINATINDI ANG CLAY DEPTH */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl md:text-4xl font-black text-slate-800 dark:text-slate-200 mb-6 md:mb-10 flex items-center gap-4 uppercase tracking-tighter">
              Contact Details <Sparkles className="text-yellow-400 w-6 h-6 md:w-10 md:h-10" />
            </h3>
            
            {/* Contact Cards with Deep Clay Effect */}
            {[
              { icon: Phone, label: "Phone", value: "0968-224-2419", color: "bg-blue-500" },
              { icon: Mail, label: "Email", value: "JullianaTrixie@gmail.com", color: "bg-pink-500" },
              { icon: MapPin, label: "Location", value: "Sta. Maria, Bulacan", color: "bg-yellow-500" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10 }}
                className="p-6 md:p-10 bg-white dark:bg-slate-800 rounded-[40px] md:rounded-[50px] flex items-center gap-5 md:gap-8 
                           border-[8px] md:border-[12px] border-white dark:border-slate-700
                           /* ULTRA CLAY SHADOWS - PINALALAMBOT ANG MUKHA */
                           shadow-[20px_20px_40px_rgba(0,0,0,0.12),inset_-12px_-12px_24px_rgba(0,0,0,0.05),inset_12px_12px_24px_rgba(255,255,255,1)]
                           dark:shadow-[20px_20px_40px_rgba(0,0,0,0.3),inset_-12px_-12px_24px_rgba(0,0,0,0.2),inset_12px_12px_24px_rgba(255,255,255,0.05)]"
              >
                <div className={`p-4 md:p-6 ${item.color} text-white rounded-[20px] md:rounded-[30px] shadow-[5px_5px_15px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(0,0,0,0.2)] shrink-0`}>
                  <item.icon size={32} className="md:w-10 md:h-10" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs md:text-lg font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-xl md:text-4xl font-black text-slate-800 dark:text-white truncate lg:whitespace-normal break-all">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* KANAN: Reference Box - PINATINDI ANG CLAY DEPTH */}
          <div className="space-y-6 md:space-y-8 flex flex-col">
            <h3 className="text-2xl md:text-4xl font-black text-slate-800 dark:text-slate-200 mb-6 md:mb-10 flex items-center gap-4 uppercase tracking-tighter">
              Reference <UserCheck className="text-green-500 w-6 h-6 md:w-10 md:h-10" />
            </h3>
            
            <div className="p-8 md:p-12 bg-white dark:bg-slate-800 rounded-[45px] md:rounded-[60px] border-[10px] md:border-[15px] border-white dark:border-slate-700
                            /* DEEP CLAY SHADOWS */
                            shadow-[25px_25px_50px_rgba(0,0,0,0.15),inset_-15px_-15px_30px_rgba(0,0,0,0.08),inset_15px_15px_30px_rgba(255,255,255,1)]
                            dark:shadow-[25px_25px_50px_rgba(0,0,0,0.35),inset_-15px_-15px_30px_rgba(0,0,0,0.2),inset_15px_15px_30px_rgba(255,255,255,0.05)]
                            flex-1 flex flex-col justify-center transition-colors">
              <div className="flex items-center gap-5 md:gap-6 mb-8">
                <div className="p-4 md:p-6 bg-green-500 text-white rounded-[20px] md:rounded-[30px] shadow-[8px_8px_16px_rgba(0,0,0,0.1),inset_-6px_-6px_12px_rgba(0,0,0,0.2)] rotate-3">
                  <UserCheck size={32} className="md:w-12 md:h-12" />
                </div>
                <div>
                  <h4 className="text-2xl md:text-4xl font-black text-slate-800 dark:text-white">Marty Dy</h4>
                  <p className="text-base md:text-2xl text-blue-600 dark:text-blue-400 font-black italic">Manager, Jollibee</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg md:text-3xl text-slate-600 dark:text-slate-400 italic leading-relaxed font-medium">
                  "Julliana showed exceptional communication skills during her time as a Party Host."
                </p>
                <div className="flex items-center gap-3 p-4 md:p-6 bg-slate-50 dark:bg-slate-900/50 rounded-[25px] border-[4px] border-white dark:border-slate-800 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05)]">
                  <Phone size={24} className="text-green-500 md:w-8 md:h-8" />
                  <span className="text-xl md:text-3xl font-black text-slate-700 dark:text-slate-300 tracking-tighter">0923-741-4232</span>
                </div>
              </div>
            </div>

            {/* Back to Top Button - DEEP CLAY STYLE */}
            <motion.button 
              onClick={scrollToTop}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 w-full p-6 md:p-8 bg-slate-800 dark:bg-pink-600 text-white rounded-[30px] md:rounded-[40px] font-black text-xl md:text-3xl 
                         shadow-[15px_15px_30px_rgba(0,0,0,0.2),inset_-8px_-8px_16px_rgba(0,0,0,0.3),inset_8px_8px_16px_rgba(255,255,255,0.2)] 
                         flex items-center justify-center gap-4 transition-all"
            >
              Back to Top <ArrowUp size={32} />
            </motion.button>
          </div>
        </div>

        {/* Global Credits */}
        <div className="mt-20 md:mt-24 pt-12 border-t-4 md:border-t-8 border-white/20 text-center">
          <p className="text-lg md:text-2xl font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em]">
            Designed with 💖 for Teacher Julliana
          </p>
        </div>

      </div>
    </section>
  );
}