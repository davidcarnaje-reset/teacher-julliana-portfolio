"use client";
import { motion } from "framer-motion";
import { Star, Palette, Cat, Pencil, Heart, Baby } from "lucide-react";

export default function FloatingIcons() {
  const elements = [
    { Icon: Star, color: "text-yellow-400", top: "10%", left: "5%", size: 30, mdSize: 50 },
    { Icon: Cat, color: "text-orange-400", top: "20%", right: "8%", size: 35, mdSize: 60 },
    { Icon: Palette, color: "text-pink-400", top: "45%", left: "4%", size: 25, mdSize: 45 },
    { Icon: Pencil, color: "text-blue-400", bottom: "15%", right: "6%", size: 30, mdSize: 55 },
    { Icon: Heart, color: "text-red-400", bottom: "10%", left: "10%", size: 25, mdSize: 40 },
    { Icon: Baby, color: "text-purple-400", top: "80%", left: "40%", size: 30, mdSize: 50 },
  ];

  return (
    /* Naka-fixed ito sa buong screen. 
       Ginamit natin ang 'dark:opacity-20' para hindi masyadong agaw-atensyon sa dark mode.
    */
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {elements.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.color} opacity-20 md:opacity-30 dark:opacity-20 
                     transition-colors duration-300`}
          style={{ 
            top: item.top, 
            left: item.left, 
            right: item.right, 
            bottom: item.bottom 
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Responsive sizes: small on mobile, big on desktop */}
          <div className="block md:hidden">
            <item.Icon size={item.size} strokeWidth={2.5} className="drop-shadow-sm" />
          </div>
          <div className="hidden md:block">
            <item.Icon size={item.mdSize} strokeWidth={2.5} className="drop-shadow-lg" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}