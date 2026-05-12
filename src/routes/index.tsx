import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import stillStreet from "@/assets/still-street.jpg";
import stillPortrait from "@/assets/still-portrait.jpg";
import stillEstate from "@/assets/still-estate.jpg";
import stillBlade from "@/assets/still-blade.jpg";
import stillBts from "@/assets/still-bts.jpg";
import stillDuo from "@/assets/still-duo.jpg";
import simonHoward from "@/assets/cast/simon-howard.jpg";
import backroadGee1 from "@/assets/cast/backroad-gee-1.jpg";
import swordplayLogo from "@/assets/logos/swordplay-logo.png";
import { Instagram } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const VIDEO_ID = "jJRNTFBZPOw";
const RELEASE = new Date("2026-06-19T00:00:00Z");

function useCountdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (now === null) return { d: 0, h: 0, m: 0, s: 0, ready: false };
  const diff = Math.max(0, RELEASE.getTime() - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s, ready: true };
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Swordplay">
          <img src={swordplayLogo} alt="Swordplay" className="h-6 md:h-7 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#trailer" className="hover:text-foreground transition">Trailer</a>
          <a href="#story" className="hover:text-foreground transition">Story</a>
          <a href="#cast" className="hover:text-foreground transition">Cast</a>
          <a href="#watch" className="hover:text-foreground transition">Watch</a>
        </nav>
        <a href="https://www.instagram.com/swordplayfilm/" target="_blank" rel="noreferrer"
           className="text-xs uppercase tracking-[0.2em] border border-foreground/30 px-4 py-2 hover:bg-foreground hover:text-background transition rounded-full">
          @swordplayfilm
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const { d, h, m, s, ready } = useCountdown();
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <iframe
          title="Swordplay trailer loop"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1`}
          allow="autoplay; encrypted-media; picture-in-picture"
          frameBorder={0}
          className="absolute top-1/2 left-1/2 w-[177.78vh] h-[100svh] min-w-full min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 h-full flex flex-col justify-between max-w-[1600px] mx-auto px-6 lg:px-12 pt-28 pb-14 md:pb-20">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Coming to Amazon Prime Video — June 19, 2026
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">A Femi Wilhelm Film</p>
          <h1 className="sr-only">Swordplay</h1>
          <img src={swordplayLogo} alt="Swordplay" className="w-full max-w-[900px] h-auto select-none" draggable={false} />
          <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/80">
            Two best friends. One Deptford backstreet. Loyalty, jealousy, and the kind of betrayal Shakespeare wrote about.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={`https://www.youtube.com/watch?v=${VIDEO_ID}`} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-primary/90 transition rounded-full">
              ▶ Watch trailer
            </a>
            <a href="#watch"
               className="inline-flex items-center gap-2 border border-foreground/40 px-6 py-3.5 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-foreground hover:text-background transition rounded-full">
              Where to watch
            </a>
          </div>
        </div>

        {/* Countdown — given its own breathing room */}
        <div className="mt-10 md:mt-16">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Counting down to release</p>
              <div className="flex gap-6 md:gap-10 font-display">
                {[{l:"Days",v:d},{l:"Hrs",v:h},{l:"Min",v:m},{l:"Sec",v:s}].map(({l,v}) => (
                  <div key={l} className="text-center">
                    <div className="text-4xl md:text-6xl tabular-nums leading-none">
                      {ready ? String(v).padStart(2,"0") : "--"}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-3">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground hidden md:block pb-2">
              Scroll ↓
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["June 19 · 2026", "Amazon Prime Video", "Fandango at Home", "A Femi Wilhelm Film", "Buffalo 8 · BondIt Media"];
  return (
    <div className="border-y border-border/60 py-5 overflow-hidden bg-background">
      <div className="flex gap-12 marquee whitespace-nowrap font-display text-2xl md:text-3xl">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12 text-foreground/80">
            {t} <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Bento({ image, span, eyebrow, title, body, href, cta, big = false }: {
  image?: string; span: string; eyebrow?: string; title: string; body?: string; href?: string; cta?: string; big?: boolean;
}) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      {...(href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
      className={`group relative ${span} overflow-hidden rounded-2xl border border-border/60 bg-card min-h-[240px] flex flex-col justify-end p-6 md:p-8 transition hover:border-primary/60`}
    >
      {image && (
        <>
          <img src={image} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
        </>
      )}
      <div className="absolute inset-0 grain opacity-40" />
      <div className="relative">
        {eyebrow && <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">{eyebrow}</p>}
        <h3 className={`font-display ${big ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl"} leading-none mb-3`}>{title}</h3>
        {body && <p className="text-sm text-foreground/75 max-w-md leading-relaxed">{body}</p>}
        {cta && (
          <span className="inline-flex items-center gap-2 mt-4 text-xs uppercase tracking-[0.25em] text-foreground border-b border-primary pb-1">
            {cta} →
          </span>
        )}
      </div>
    </Tag>
  );
}

function BentoGrid() {
  return (
    <section id="story" className="relative px-4 sm:px-6 lg:px-12 py-20 md:py-28">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-end justify-between mb-12 md:mb-16 flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">The Film</p>
            <h2 className="font-display text-5xl md:text-7xl leading-none">An Othello<br/>for the ends.</h2>
          </div>
          <p className="max-w-md text-foreground/70">
            In Deptford, London, best friends Ringo and Kid are pulled into a brutal gang rivalry — a tense story of loyalty, jealousy, and betrayal that ends in devastating downfall.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[200px] md:auto-rows-[240px] gap-3 md:gap-5">
          <Bento span="col-span-2 md:col-span-7 md:row-span-2" image={stillStreet} eyebrow="Synopsis" title="DEPTFORD, after dark." body="Two friends. One rivalry. A code that breaks before the credits roll. Inspired by Shakespeare's Othello, recast on the streets of South East London." big />
          <Bento span="col-span-2 md:col-span-5" image={stillBlade} eyebrow="Genre" title="Crime · Drama" body="A modern British tragedy with the pulse of a thriller." />
          <Bento span="col-span-2 md:col-span-5" image={stillEstate} eyebrow="Setting" title="South London" body="Concrete towers, neon corner shops, the quiet before everything kicks off." />

          <Bento span="col-span-2 md:col-span-5" eyebrow="Director" title="Femi Wilhelm" body="A defiant new voice in British crime drama, translating the bard's tragedies into the language of the ends." />
          <Bento
            span="col-span-2 md:col-span-7"
            image={stillBts}
            eyebrow="Behind the lens"
            title="Made on the block."
            body="Shot on location across South East London with a cast and crew rooted in the world the film depicts."
          />
        </div>
      </div>
    </section>
  );
}

function Trailer() {
  return (
    <section id="trailer" className="relative px-4 sm:px-6 lg:px-12 py-20 md:py-24 border-t border-border/60">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <h2 className="font-display text-5xl md:text-7xl leading-none">Official trailer</h2>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">01:27 · 4K</p>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-black">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&playsinline=1`}
            title="Swordplay Volume One — Official Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function Cast() {
  const cast = [
    { name: "Peter Silva", role: "Ringo", credit: "Lead · Tapped (2026)", img: stillPortrait },
    { name: "Simon Howard", role: "Kid", credit: "Attack the Block", img: simonHoward },
    { name: "BackRoad Gee", role: "Featured", credit: "The Kitchen · UK Rap", img: backroadGee1 },
  ];
  const autoplay = useRef(Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true }));
  return (
    <section id="cast" className="px-4 sm:px-6 lg:px-12 py-20 md:py-28 border-t border-border/60">
      <div className="max-w-[1600px] mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Cast</p>
        <h2 className="font-display text-5xl md:text-7xl leading-none mb-12">The faces of the fall.</h2>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-3 md:-ml-5">
            {cast.map((c, i) => (
              <CarouselItem key={i} className="pl-3 md:pl-5 basis-[80%] sm:basis-1/2 lg:basis-1/3">
                <article className="relative aspect-[3/4] overflow-hidden rounded-2xl group bg-card">
                  <img src={c.img} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">{c.role}</p>
                    <h3 className="font-display text-3xl md:text-4xl">{c.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">{c.credit}</p>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-2 bg-background/80 border-border" />
            <CarouselNext className="right-2 bg-background/80 border-border" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

function PrimeLogo() {
  return (
    <svg viewBox="0 0 200 48" className="h-7 md:h-8 w-auto" aria-label="Amazon Prime Video">
      <text x="0" y="22" fill="currentColor" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="20" letterSpacing="-0.5">prime</text>
      <text x="62" y="22" fill="#1399FF" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="20" letterSpacing="-0.5">video</text>
      <path d="M2 30 Q 60 44 122 30" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M115 26 L 124 30 L 115 34" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FandangoLogo() {
  return (
    <svg viewBox="0 0 220 48" className="h-7 md:h-8 w-auto" aria-label="Fandango at Home">
      <text x="0" y="24" fill="currentColor" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.5">fandango</text>
      <text x="0" y="42" fill="#FF7300" fontFamily="Inter, system-ui, sans-serif" fontWeight="600" fontSize="11" letterSpacing="2">AT HOME</text>
    </svg>
  );
}

function InstaLogo() {
  return (
    <div className="flex items-center gap-3">
      <Instagram className="w-7 h-7" strokeWidth={1.75} />
      <span className="font-display text-2xl">Instagram</span>
    </div>
  );
}

function Watch() {
  const platforms = [
    { logo: <PrimeLogo />, note: "Stream worldwide", href: "https://www.amazon.com/" },
    { logo: <FandangoLogo />, note: "Rent / Buy", href: "https://athome.fandango.com/" },
    { logo: <InstaLogo />, note: "@swordplayfilm — follow for updates", href: "https://www.instagram.com/swordplayfilm/" },
  ];
  return (
    <section id="watch" className="px-4 sm:px-6 lg:px-12 py-20 md:py-28 border-t border-border/60">
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Where to watch</p>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">06.19<br/><span className="text-primary">2026</span></h2>
          <p className="mt-6 max-w-md text-foreground/75">Streaming worldwide on Amazon Prime Video and Fandango at Home. Set a reminder, gather the team, lock the door.</p>
        </div>
        <div className="grid gap-3">
          {platforms.map((p, i) => (
            <a key={i} href={p.href} target="_blank" rel="noreferrer"
               className="flex items-center justify-between gap-4 border border-border/70 hover:border-primary px-6 py-5 group transition bg-card/40 rounded-2xl">
              <div className="min-w-0">
                <div className="text-foreground">{p.logo}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">{p.note}</div>
              </div>
              <span className="text-primary group-hover:translate-x-1 transition shrink-0">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 lg:px-12 py-12 border-t border-border/60">
      <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <img src={swordplayLogo} alt="Swordplay" className="h-6 w-auto" />
        <div>© 2026 Buffalo 8 / BondIt Media Capital. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="https://www.instagram.com/swordplayfilm/" target="_blank" rel="noreferrer" className="hover:text-foreground">Instagram</a>
          <a href={`https://www.youtube.com/watch?v=${VIDEO_ID}`} target="_blank" rel="noreferrer" className="hover:text-foreground">YouTube</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <BentoGrid />
      <Trailer />
      <Cast />
      <Watch />
      <Footer />
    </main>
  );
}
