"use client";
import { motion } from "framer-motion";
import { Star, Palette, Cat, Pencil, Heart, Baby } from "lucide-react";

export default function FloatingIcons() {
  const elements = [
    { Icon: Star, color: "text-yellow-400", top: "10%", left: "5%", size: 50 },
    { Icon: Cat, color: "text-orange-400", top: "25%", right: "10%", size: 60 },
    { Icon: Palette, color: "text-pink-400", top: "45%", left: "5%", size: 45 },
    { Icon: Pencil, color: "text-blue-400", bottom: "20%", right: "8%", size: 55 },
    { Icon: Heart, color: "text-red-400", bottom: "15%", left: "12%", size: 40 },
    { Icon: Baby, color: "text-purple-400", top: "75%", left: "45%", size: 50 },
  ];

  return (
    /* Binago natin ang z-index sa z-50 para nasa taas sila ng sections.
       Ang 'pointer-events-none' ay sobrang importante para ma-click 
       pa rin ang mga buttons sa ilalim ng icons.
    */
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {elements.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.color} opacity-30`}
          style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <item.Icon size={item.size} strokeWidth={2.5} />
        </motion.div>
      ))}
    </div>
  );
}