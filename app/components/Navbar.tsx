"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Journey", id: "experience" },
    { name: "Toolkit", id: "skills" },
    { name: "Gallery", id: "gallery" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-2 md:px-6 md:py-4 transition-all">
      {/* MAIN NAVBAR - GLASS CLAYMORPHISM */}
      <div className="max-w-7xl mx-auto flex justify-between items-center 
                      bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl
                      px-5 py-3 md:px-8 md:py-4 rounded-[25px] md:rounded-[35px] 
                      border-[4px] md:border-[6px] border-white/40 dark:border-slate-700/50
                      /* CLAY SHADOWS */
                      shadow-[0_10px_30px_rgba(0,0,0,0.1),inset_-6px_-6px_12px_rgba(0,0,0,0.05),inset_6px_6px_12px_rgba(255,255,255,0.6)]
                      dark:shadow-[0_10px_30px_rgba(0,0,0,0.4),inset_-6px_-6px_12px_rgba(0,0,0,0.2),inset_6px_6px_12px_rgba(255,255,255,0.05)]
                      transition-all duration-300">
        
        <div className="text-xl md:text-2xl font-black text-slate-800 dark:text-white tracking-tighter italic">
          TEACHER <span className="text-pink-500">JULLIANA</span>
        </div>

        <div className="flex items-center gap-2 md:gap-8">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-lg font-black text-slate-600 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CONTACT BUTTON - CLAY STYLE */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-pink-500 text-white px-8 py-3 rounded-full font-black 
                       border-[4px] border-pink-400/50
                       shadow-[4px_4px_10px_rgba(236,72,153,0.3),inset_-4px_-4px_8px_rgba(0,0,0,0.2),inset_4px_4px_8px_rgba(255,255,255,0.3)]
                       hover:scale-105 active:scale-95 transition-all"
          >
            CONTACT
          </button>

          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setDark(!dark)}
            className="p-2 md:p-3 bg-white/50 dark:bg-slate-800 rounded-full text-slate-800 dark:text-yellow-400 
                       shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border border-white/20 transition-all hover:scale-110"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-slate-100 dark:bg-slate-800 rounded-2xl text-slate-800 dark:text-white 
                         shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(255,255,255,0.8)] dark:shadow-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN - GLASS CLAYMORPHISM */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="md:hidden mt-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl 
                       rounded-[35px] p-8 shadow-2xl flex flex-col gap-5 
                       border-[6px] border-white/40 dark:border-slate-800
                       shadow-[20px_20px_40px_rgba(0,0,0,0.1),inset_-8px_-8px_16px_rgba(0,0,0,0.05),inset_8px_8px_16px_rgba(255,255,255,0.6)]
                       dark:shadow-[20px_20px_40px_rgba(0,0,0,0.4),inset_-8px_-8px_16px_rgba(0,0,0,0.2),inset_8px_8px_16px_rgba(255,255,255,0.05)]"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-2xl font-black text-slate-700 dark:text-slate-200 text-left border-b-2 border-slate-100/50 dark:border-slate-800 pb-2"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-pink-500 text-white p-5 rounded-[25px] font-black text-2xl 
                         border-[5px] border-pink-400/50
                         shadow-[10px_10px_20px_rgba(236,72,153,0.3),inset_-6px_-6px_12px_rgba(0,0,0,0.2),inset_6px_6px_12px_rgba(255,255,255,0.3)]
                         active:scale-95 transition-all"
            >
              CONTACT ME ✉️
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}