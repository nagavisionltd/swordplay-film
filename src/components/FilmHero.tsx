"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import { useRef } from "react";

export default function FilmHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Backdrop with Parallax */}
      <motion.div 
        style={{ y }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/assets/poster_main.webp" 
          alt="Swordplay Scene" 
          className="w-full h-full object-cover grayscale brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
      </motion.div>

      {/* Title & CTA */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ letterSpacing: "1em", opacity: 0 }}
          animate={{ letterSpacing: "0.4em", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-10"
        >
          <span className="text-accent font-black uppercase text-xs md:text-sm tracking-[0.6em]">
            A FILM BY FEMI WILHELM
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hero-text text-white mb-10 drop-shadow-2xl"
        >
          SWORDPLAY
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col items-center gap-10"
        >
          <p className="text-white/40 max-w-2xl text-xl md:text-2xl font-light tracking-tight italic leading-relaxed">
            "A tense story of loyalty, jealousy, and betrayal leading to a devastating downfall."
          </p>
          
          <button className="group relative px-16 py-6 bg-white text-black font-black rounded-full overflow-hidden hover:scale-105 transition-all active:scale-95 text-xs tracking-[0.2em] uppercase shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,0,128,0.3)]">
            <span className="relative z-10 flex items-center gap-3">
              <Play size={18} fill="black" />
              Watch Trailer
            </span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
        </motion.div>
      </div>

      {/* Release Date Ribbon */}
      <motion.div 
        initial={{ x: "100%", rotate: 0 }}
        animate={{ x: 0, rotate: -2 }}
        transition={{ delay: 2, duration: 1, type: "spring" }}
        className="absolute top-20 right-0 bg-accent text-white px-10 py-3 font-black tracking-widest text-[10px] origin-right shadow-2xl z-20"
      >
        OUT JUNE 19TH ON AMAZON PRIME
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
