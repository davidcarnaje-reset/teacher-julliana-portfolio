"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-8 left-0 right-0 z-[100] px-6">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-fit mx-auto clay-card bg-white/90 backdrop-blur-md px-10 py-4 flex gap-10 items-center border-none shadow-2xl"
      >
        {/* Pinalaki ang text at ginawang clickable */}
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-pink-500 font-black text-lg hover:scale-110 transition-all cursor-pointer uppercase">Home</button>
        <button onClick={() => scrollTo('about')} className="text-blue-500 font-black text-lg hover:scale-110 transition-all cursor-pointer uppercase">About</button>
        <button onClick={() => scrollTo('experience')} className="text-yellow-600 font-black text-lg hover:scale-110 transition-all cursor-pointer uppercase">Journey</button>
        <button onClick={() => scrollTo('gallery')} className="text-green-600 font-black text-lg hover:scale-110 transition-all cursor-pointer uppercase">Gallery</button>
        
        <div className="h-8 w-[3px] bg-slate-200 rounded-full mx-2" />
        
        <button onClick={() => scrollTo('contact')} className="clay-button bg-pink-500 text-white px-8 py-3 text-sm font-black uppercase tracking-widest hover:scale-105 active:scale-95">
          Contact
        </button>
      </motion.div>
    </nav>
  );
}