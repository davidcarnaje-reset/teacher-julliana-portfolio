"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
  const photos = [
    { id: 1, src: "/gallery/IMG_2840.JPEG", caption: "Storytelling Time 📖" },
    { id: 2, src: "/gallery/IMG_2858.JPEG", caption: "Demo Teaching Day 🎨" },
    { id: 3, src: "/gallery/IMG_2880.JPEG", caption: "Creative Learning ✨" },
    { id: 4, src: "/gallery/IMG_0809.JPEG", caption: "Teaching Kids 🏫" }, 
    { id: 5, src: "/gallery/christmas.JPEG", caption: "Hosting Kids' Party 🎈" },
    { id: 6, src: "/gallery/IMG_2956.JPEG", caption: "Creative Planning 📝" },
  ];

  const [activePhoto, setActivePhoto] = useState(photos[4]);

  return (
    <section id="gallery" className="py-16 md:py-24 px-6 relative overflow-hidden transition-colors duration-300 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Responsive Sizes */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-7xl font-black text-slate-800 dark:text-white italic tracking-tight">Joyful Moments 📸</h2>
          <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-400 mt-4 font-bold">
            Capturing growth at Miguel M. Cruz Memorial School.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          
          {/* KALIWA: BIG FEATURED PHOTO - CLAY DEPTH RESTORED */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activePhoto.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-5 md:p-6 bg-white dark:bg-slate-800 rounded-[50px] md:rounded-[60px] border-[12px] md:border-[18px] border-white dark:border-slate-700 
                           /* ITO ANG MATINDING CLAYMOPHISM SHADOWS */
                           shadow-[25px_25px_50px_rgba(0,0,0,0.12),inset_-15px_-15px_30px_rgba(0,0,0,0.05),inset_15px_15px_30px_rgba(255,255,255,1)]
                           dark:shadow-[25px_25px_50px_rgba(0,0,0,0.3),inset_-15px_-15px_30px_rgba(0,0,0,0.2),inset_15px_15px_30px_rgba(255,255,255,0.05)]
                           h-full min-h-[450px] md:min-h-[600px] flex flex-col"
              >
                <div className="relative flex-1 rounded-[35px] md:rounded-[45px] overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-inner">
                  <Image 
                    src={activePhoto.src} 
                    fill 
                    className="object-cover" 
                    alt={activePhoto.caption}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="mt-8 md:mt-10 text-center pb-2">
                  <p className="text-3xl md:text-5xl font-black text-pink-500 italic tracking-tighter drop-shadow-sm">
                    {activePhoto.caption}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* KANAN: SELECTION GRID - THUMBNAIL CLAY RESTORED */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 md:gap-8">
            {photos.map((photo) => (
              <motion.div 
                key={photo.id}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActivePhoto(photo)}
                className={`cursor-pointer p-3 md:p-4 bg-white dark:bg-slate-800 rounded-[30px] md:rounded-[40px] border-[8px] md:border-[12px] transition-all
                           ${activePhoto.id === photo.id 
                             ? 'border-pink-400 shadow-[8px_8px_16px_rgba(236,72,153,0.3),inset_-4px_-4px_8px_rgba(0,0,0,0.1),inset_4px_4px_8px_rgba(255,255,255,0.4)]' 
                             : 'border-white dark:border-slate-700 shadow-[15px_15px_30px_rgba(0,0,0,0.08),inset_-6px_-6px_12px_rgba(0,0,0,0.02),inset_6px_6px_12px_rgba(255,255,255,0.7)] dark:shadow-[15px_15px_30px_rgba(0,0,0,0.3),inset_-6px_-6px_12px_rgba(0,0,0,0.2),inset_6px_6px_12px_rgba(255,255,255,0.05)]'}
                `}
              >
                <div className="relative aspect-square rounded-[18px] md:rounded-[22px] overflow-hidden bg-slate-200 dark:bg-slate-900 shadow-inner">
                   <Image 
                      src={photo.src} 
                      fill 
                      className="object-cover" 
                      alt="Thumbnail"
                      sizes="200px"
                   />
                </div>
                <p className="mt-3 text-center text-xs md:text-sm font-black text-slate-500 dark:text-slate-400 uppercase tracking-tighter">
                  View Photo
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Footer Quote - Deep Clay Style */}
        <div className="mt-20 md:mt-24 text-center">
          <div className="inline-block px-10 py-6 md:px-12 md:py-8 bg-white dark:bg-slate-800 rounded-[30px] md:rounded-[40px] border-none
                          shadow-[10px_10px_20px_rgba(0,0,0,0.05),inset_-8px_-8px_16px_rgba(0,0,0,0.05),inset_8px_8px_16px_rgba(255,255,255,1)]
                          dark:shadow-[10px_10px_20px_rgba(0,0,0,0.3),inset_-8px_-8px_16px_rgba(0,0,0,0.2),inset_8px_8px_16px_rgba(255,255,255,0.05)]
                          text-blue-500 dark:text-blue-400 text-2xl md:text-3xl font-black italic tracking-tight transition-all">
            "Every child is a different kind of flower, making a beautiful garden." 🌸
          </div>
        </div>
      </div>
    </section>
  );
}