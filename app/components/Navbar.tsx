"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
      setIsOpen(false); // Close menu on mobile after clicking
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/80 backdrop-blur-md px-8 py-4 rounded-[30px] shadow-clay border-none">
        
        {/* Logo Text */}
        <div className="text-2xl font-black text-slate-800 tracking-tighter italic">
          TEACHER <span className="text-pink-500">JULLIANA</span>
        </div>

        {/* Desktop Menu - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-lg font-black text-slate-600 hover:text-pink-500 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-pink-500 text-white px-6 py-2 rounded-full font-black shadow-clay-pink hover:scale-105 transition-all"
          >
            CONTACT
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 bg-slate-100 rounded-2xl text-slate-800 shadow-inner"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 bg-white rounded-[40px] p-8 shadow-2xl border-none flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-2xl font-black text-slate-700 text-left border-b-4 border-slate-50 pb-2"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-pink-500 text-white p-6 rounded-[25px] font-black text-2xl shadow-clay-pink"
            >
              CONTACT ME ✉️
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}