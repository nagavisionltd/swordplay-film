'use client';

import Link from "next/link";
import { useEffect, useRef } from 'react';
import FilmHero from "@/components/FilmHero";
import FilmDetails from "@/components/FilmDetails";
import VisualArchive from "@/components/VisualArchive";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
        // Smooth staggered reveal for all glass panels
        gsap.from('.glass-panel', {
            y: 60,
            opacity: 0,
            duration: 1.5,
            stagger: 0.25,
            ease: "power4.out",
            scrollTrigger: {
                trigger: '.glass-panel',
                start: 'top 95%',
            }
        });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#050505] selection:bg-accent selection:text-black">
      {/* Cinematic Navigation Overlay */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-10 flex justify-between items-center pointer-events-none">
        <h2 className="text-white font-black text-xl tracking-[0.2em] mix-blend-difference pointer-events-auto">SWORDPLAY</h2>
        <div className="flex gap-10 pointer-events-auto">
            <a href="#story" className="text-white/30 hover:text-accent font-black text-[10px] tracking-widest uppercase transition-all">Story</a>
            <a href="/music" className="text-white/30 hover:text-accent font-black text-[10px] tracking-widest uppercase transition-all">Music</a>
            <a href="/shop" className="text-white/30 hover:text-accent font-black text-[10px] tracking-widest uppercase transition-all">Shop</a>
            <a href="https://www.instagram.com/swordplayfilm" target="_blank" className="text-white/30 hover:text-accent font-black text-[10px] tracking-widest uppercase transition-all">Instagram</a>
        </div>
      </nav>

      <FilmHero />
      <FilmDetails />
      <VisualArchive />
      
      {/* Shop & Music Section */}
      <section className="relative px-4 sm:px-6 lg:px-12 py-20 md:py-28 border-t border-border/60">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="font-display text-5xl md:text-7xl leading-none mb-12">Shop & Music</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center gap-4">
              <Link href="/shop" className="flex items-center justify-center w-24 h-24 bg-white/10 rounded-full hover:bg-white/20 transition duration-300">
                <svg className="text-whiteh-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.2 3.8a3 3 0 000 4.1l2.2 2.1z"/>
                </svg>
                <span className="mt-2 text-xs font-medium text-white">Shop</span>
              </Link>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Link href="/music" className="flex items-center justify-center w-24 h-24 bg-white/10 rounded-full hover:bg-white/20 transition duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/>
                </svg>
                <span className="mt-2 text-xs font-medium text-white">Music</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-40 border-t border-white/5 px-6 md:px-12 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-20 relative z-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none italic uppercase">
                THE <br/>
                <span className="text-accent">FALL.</span>
            </h2>
            <p className="text-white/20 text-[10px] font-black tracking-[0.5em] uppercase">
              © 2026 FEMI WILHELM. ALL RIGHTS RESERVED.
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-6">
            <p className="text-white/10 text-[10px] font-black tracking-[0.3em] uppercase flex items-center gap-4">
                STORY INFRASTRUCTURE BY <span className="text-white/30 italic">NAGAVISION</span>
            </p>
            <div className="w-20 h-[1px] bg-accent" />
          </div>
        </div>

        {/* Large aesthetic watermark */}
        <div className="absolute -bottom-20 -left-10 text-[20vw] font-black text-white/[0.02] pointer-events-none select-none uppercase italic tracking-tighter">
            SWORDPLAY
        </div>
      </footer>
    </main>
  );
}