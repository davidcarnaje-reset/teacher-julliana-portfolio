"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
  const photos = [
    { id: 1, src: "/gallery/IMG_2840.JPEG", caption: "Storytelling Time 📖" },
    { id: 2, src: "/gallery/IMG_2858.JPEG", caption: "Demo Teaching Day 🎨" },
    { id: 3, src: "/gallery/IMG_2880.JPEG", caption: "Creative Learning ✨" },
    { id: 4, src: "/gallery/IMG_0809.JPEG", caption: "Teaching Kids 🏫" }, // Note: Make sure .HEIC is supported or convert to .JPG
    { id: 5, src: "/gallery/christmas.JPEG", caption: "Hosting Kids' Party 🎈" },
    { id: 6, src: "/gallery/IMG_2956.JPEG", caption: "Creative Planning 📝" },
  ];

  const [activePhoto, setActivePhoto] = useState(photos[4]); // Set to Christmas as default based on your screenshot

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-black text-slate-800 italic">Joyful Moments 📸</h2>
          <p className="text-2xl md:text-3xl text-slate-600 mt-4 font-bold">
            Capturing growth at Miguel M. Cruz Memorial School.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* KALIWA: BIG FEATURED PHOTO */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activePhoto.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-white rounded-[60px] border-[15px] border-white shadow-[30px_30px_60px_rgba(0,0,0,0.1),inset_-15px_-15px_30px_rgba(0,0,0,0.05)] h-full min-h-[600px] flex flex-col"
              >
                <div className="relative flex-1 rounded-[40px] overflow-hidden bg-slate-100 shadow-inner">
                  <Image 
                    src={activePhoto.src} 
                    fill 
                    className="object-cover" 
                    alt={activePhoto.caption}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="mt-8 text-center">
                  <p className="text-4xl font-black text-pink-500 italic tracking-tighter">
                    {activePhoto.caption}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* KANAN: SELECTION GRID (Updated with Images) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            {photos.map((photo) => (
              <motion.div 
                key={photo.id}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActivePhoto(photo)}
                className={`cursor-pointer p-3 bg-white rounded-[35px] border-[8px] transition-all
                           ${activePhoto.id === photo.id ? 'border-pink-400' : 'border-white shadow-[15px_15px_30px_rgba(0,0,0,0.05)]'}
                `}
              >
                <div className="relative aspect-square rounded-[20px] overflow-hidden bg-slate-200">
                   {/* DITO NATIN NILAGAY YUNG IMAGE PARA SA THUMBNAILS */}
                   <Image 
                      src={photo.src} 
                      fill 
                      className="object-cover" 
                      alt="Thumbnail"
                      sizes="200px"
                   />
                </div>
                <p className="mt-3 text-center text-xs font-black text-slate-500 uppercase tracking-tighter">
                  View Photo
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        <div className="mt-20 text-center">
          <div className="inline-block px-10 py-5 bg-white rounded-[30px] shadow-[10px_10px_20px_rgba(0,0,0,0.05)] text-blue-500 text-2xl font-black italic tracking-tight border-none">
            "Every child is a different kind of flower, making a beautiful garden." 🌸
          </div>
        </div>
      </div>
    </section>
  );
}