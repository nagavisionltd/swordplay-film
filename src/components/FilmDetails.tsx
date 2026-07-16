"use client";

import { motion } from "framer-motion";
import { Users, MapPin, Clapperboard, Music } from "lucide-react";

export default function FilmDetails() {
  return (
    <section className="py-32 px-6 md:px-12 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Synopsis */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "power4.out" }}
            className="md:col-span-2 glass-panel p-12 md:p-20 flex flex-col justify-center border-white/5"
          >
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] mb-8 flex items-center gap-3">
              <Clapperboard size={14} /> THE NARRATIVE
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-[0.9] italic uppercase">
              DEPTFORD. <br/>
              <span className="text-gradient">LOYALTY.</span> <br/>
              BETRAYAL.
            </h2>
            <p className="text-white/40 text-xl md:text-2xl leading-relaxed font-light max-w-2xl">
              Inspired by Shakespeare’s ‘Othello’, Swordplay is a tense story of friendship pulled into a brutal gang rivalry. A cinematic exploration of the devastating downfall triggered by jealousy.
            </p>
          </motion.div>

          {/* Credits Mini-Bento */}
          <div className="grid grid-cols-1 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel p-10 flex flex-col items-center text-center justify-center group hover:bg-white/5 transition-all duration-700 border-white/5"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Users className="text-accent" size={32} />
              </div>
              <h4 className="text-white font-black text-[10px] tracking-[0.3em] mb-3 uppercase opacity-50">Director</h4>
              <p className="text-white font-black text-2xl tracking-tighter uppercase italic">Femi Wilhelm</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-10 flex flex-col items-center text-center justify-center group hover:bg-white/5 transition-all duration-700 border-white/5"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Music className="text-accent" size={32} />
              </div>
              <h4 className="text-white font-black text-[10px] tracking-[0.3em] mb-3 uppercase opacity-50">Original Score</h4>
              <p className="text-white font-black text-2xl tracking-tighter uppercase italic">Helmooo</p>
            </motion.div>
          </div>
        </div>

        {/* Location / Meta Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-panel p-10 flex items-center gap-8 border-white/5"
           >
             <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                <MapPin size={20} className="text-accent" />
             </div>
             <div>
               <h4 className="text-white/20 text-[10px] font-black tracking-widest uppercase mb-1">Setting</h4>
               <p className="text-white font-bold tracking-tight">Deptford, London</p>
             </div>
           </motion.div>

           <div className="md:col-span-3 glass-panel p-10 flex flex-wrap items-center justify-between gap-8 overflow-hidden relative border-white/5">
              <div className="flex gap-16 relative z-10">
                <div>
                  <h4 className="text-white/20 text-[10px] font-black tracking-widest uppercase mb-2">Executive Producers</h4>
                  <p className="text-white font-black tracking-tighter uppercase italic text-xl">Buffalo 8 • Core Productions</p>
                </div>
                <div>
                  <h4 className="text-white/20 text-[10px] font-black tracking-widest uppercase mb-2">Premiere</h4>
                  <p className="text-accent font-black tracking-tighter uppercase italic text-xl">JUNE 19, 2026</p>
                </div>
              </div>
              {/* Massive Aesthetic Text */}
              <div className="absolute right-0 top-0 bottom-0 flex items-center opacity-[0.02] pointer-events-none whitespace-nowrap text-9xl font-black italic select-none uppercase tracking-tighter">
                CINEMATIC VISION
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
