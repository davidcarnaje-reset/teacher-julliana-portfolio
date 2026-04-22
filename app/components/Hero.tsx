"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import { Cat } from "lucide-react";

export default function Hero() {
  // Function para sa Smooth Scroll papunta sa iba't ibang journey ni Julliana
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-transparent overflow-hidden"> 
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24 relative z-10">
        
        {/* Chibi Image - Big Claymorphic Frame */}
        <div className="relative group">
          <motion.div 
            initial={{ scale: 0.9, rotate: -3 }}
            animate={{ scale: 1, rotate: 0 }}
            className="w-72 h-72 md:w-[500px] md:h-[500px] flex items-center justify-center overflow-hidden transition-transform hover:rotate-3 duration-500 
                       bg-white border-[16px] border-white/50 rounded-[80px] 
                       shadow-[30px_30px_60px_rgba(0,0,0,0.1),inset_-20px_-20px_40px_rgba(0,0,0,0.05),inset_20px_20px_40px_rgba(255,255,255,0.9)]"
          >
            <Image 
              src="/julliana-chibi.png" 
              alt="Teacher Julliana Chibi"
              width={450}
              height={450}
              className="object-contain transform scale-110"
              priority
            />
          </motion.div>
          
          {/* Badge: Link to Skills/Toolkit Section */}
          <motion.div 
            onClick={() => scrollToSection('skills')}
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="absolute -bottom-10 -right-10 bg-yellow-400 px-12 py-6 text-3xl font-black text-yellow-900 rotate-12
                       rounded-[30px] shadow-[10px_10px_20px_rgba(0,0,0,0.15),inset_-8px_-8px_16px_rgba(0,0,0,0.1),inset_8px_8px_16px_rgba(255,255,255,0.3)]
                       hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Ready to Teach ✨
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-12">
          
          {/* Degree Title from CSPB */}
          <div className="inline-block bg-blue-100 px-10 py-4 text-blue-600 font-black text-2xl uppercase tracking-widest
                          rounded-[25px] shadow-[5px_5px_10px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(0,0,0,0.05),inset_4px_4px_8px_rgba(255,255,255,0.7)]">
            Early Childhood Educator
          </div>

          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-700 italic drop-shadow-[2px_2px_0_rgba(255,255,255,0.8)]">
              Hi! I'm Teacher
            </h2>
            <h1 className="text-8xl md:text-9xl font-black text-slate-800 leading-none flex items-center justify-center md:justify-start gap-4 flex-wrap">
              <motion.span 
                className="text-pink-500 relative inline-block drop-shadow-sm"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                Julliana
                
                {/* Floating Cat Icon */}
                <motion.div 
                  className="absolute -top-16 -right-16 text-orange-400"
                  animate={{ y: [0, -15, 0], rotate: [20, -20, 20] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                >
                  <Cat size={80} fill="currentColor" className="drop-shadow-lg" />
                </motion.div>
              </motion.span>
            </h1>
          </div>
          
          <p className="text-3xl md:text-4xl text-slate-600 font-medium max-w-2xl leading-relaxed">
            Dedicated to applying my skills and passion for teaching to promote student learning and educational excellence.
          </p>

          {/* Nav Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-10 pt-10">
            {/* Link to Experience Section */}
            <button 
              onClick={() => scrollToSection('experience')}
              className="bg-pink-500 hover:bg-pink-600 px-16 py-8 text-white font-black text-3xl 
                         rounded-[40px] shadow-[15px_15px_30px_rgba(0,0,0,0.1),inset_-12px_-12px_24px_rgba(0,0,0,0.15),inset_12px_12px_24px_rgba(255,255,255,0.3)]
                         hover:scale-110 active:scale-95 transition-all"
            >
              Explore My Journey
            </button>
            
            {/* Link to Contact Section */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white px-16 py-8 font-black text-3xl text-slate-700 
                         rounded-[40px] shadow-[10px_10px_20px_rgba(0,0,0,0.05),inset_-8px_-8px_16px_rgba(0,0,0,0.05),inset_8px_8px_16px_rgba(255,255,255,0.8)]
                         hover:scale-110 active:scale-95 transition-all"
            >
              Say Hello! 👋
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}