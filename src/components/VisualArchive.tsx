"use client";

import { motion } from "framer-motion";

const scenes = [
  { src: "/assets/bts1.jpg", label: "Production Still #01" },
  { src: "/assets/bts2.jpg", label: "Behind the Scenes" },
  { src: "/assets/director.jpg", label: "Director's Vision" },
];

export default function VisualArchive() {
  return (
    <section className="py-32 bg-[#050505] overflow-hidden">
      <div className="px-6 md:px-12 mb-20 flex flex-col md:flex-row items-baseline justify-between gap-6">
        <div>
            <span className="text-accent font-black tracking-[0.2em] uppercase text-xs mb-4 block">Visual Archive</span>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8]">
            THE <span className="text-gradient">STILLS</span>
            </h2>
        </div>
        <p className="text-white/20 font-black text-[10px] tracking-[0.3em] uppercase italic">Deptford London • Shot on Alexa 35</p>
      </div>

      <div className="flex overflow-x-auto gap-10 px-6 md:px-12 pb-20 no-scrollbar scroll-smooth">
        {scenes.map((scene, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 1, ease: "power4.out" }}
            viewport={{ once: true }}
            className="min-w-[320px] md:min-w-[700px] h-[450px] md:h-[650px] relative rounded-[48px] overflow-hidden group shrink-0 glass-panel p-2 border-white/5"
          >
            <div className="w-full h-full overflow-hidden rounded-[40px] relative">
                <img 
                src={scene.src} 
                alt={scene.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms] ease-out grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <span className="text-accent text-[10px] font-black tracking-widest uppercase mb-3 block">
                        Swordplay : Vol 1
                    </span>
                    <p className="text-white font-black text-3xl tracking-tighter uppercase italic">{scene.label}</p>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
