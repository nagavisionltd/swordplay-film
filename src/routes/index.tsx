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
import peterSilva from "@/assets/cast/peter-silva.jpg";
import swordplayLogo from "@/assets/logos/swordplay-logo.png";
import merchCap from "@/assets/swordplay_image_gallery/merch/Swordplay-caps.jpg";
import merchTshirtOne from "@/assets/swordplay_image_gallery/merch/Swordplay-tshirt-1.jpg";
import merchTshirtTwo from "@/assets/swordplay_image_gallery/merch/Swordplay-tshirt-2.jpg";
import soundtrackOst from "@/assets/swordplay_image_gallery/soundtrack/IMG-20260703-WA0014(1).jpg";
import { Instagram } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const VIDEO_ID = "jJRNTFBZPOw";

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Swordplay">
          <img src={swordplayLogo} alt="Swordplay" className="h-6 md:h-7 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#story" className="hover:text-foreground transition">Story</a>
          <a href="#cast" className="hover:text-foreground transition">Cast</a>
          <a href="#merch" className="hover:text-foreground transition">Merch</a>
      <a href="#music" className="hover:text-foreground transition">Music</a>
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
          <span>Out now</span>
          <PrimeLogo />
          <span>— streaming worldwide</span>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">A Femi Wilhelm Film</p>
          <h1 className="sr-only">Swordplay</h1>
          <img src={swordplayLogo} alt="Swordplay" className="w-full max-w-[900px] h-auto select-none brightness-0 invert" draggable={false} />
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

        <div className="mt-10 md:mt-16 flex items-end justify-between gap-8">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Scroll ↓
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

function Cast() {
  const cast = [
    { name: "Peter Silva", role: "Ringo", credit: "Lead · Tapped (2026)", img: peterSilva },
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

function Merchandise() {
  const products = [
    {
      name: "Swordplay Snapback",
      description: "Embroidered cap with the film's signature mark.",
      image: merchCap,
      price: "£20",
      details: "One-size-fits-most, structured crown, and a subtle tonal logo finish.",
      sizes: "One size",
      link: "https://www.paypal.com/paypalme/",
    },
    {
      name: "Swordplay T-shirt",
      description: "Heavyweight tee inspired by the streets of the film.",
      image: merchTshirtOne,
      price: "£28",
      details: "Premium cotton tee with a clean front print and a rugged, worn-in feel.",
      sizes: "S · M · L · XL",
      link: "https://www.paypal.com/paypalme/",
    },
    {
      name: "Swordplay Unisex T-shirt",
      description: "A second drop with the raw, monochrome look of the poster art.",
      image: merchTshirtTwo,
      price: "£30",
      details: "Limited-run tee featuring a bold graphic treatment and soft-touch fabric.",
      sizes: "S · M · L · XL",
      link: "https://www.paypal.com/paypalme/",
    },
  ];
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[number] | null>(null);

  useEffect(() => {
    if (!selectedProduct) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProduct(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedProduct]);

  return (
    <section id="merch" className="px-4 sm:px-6 lg:px-12 py-20 md:py-28 border-t border-border/60">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-end justify-between mb-12 md:mb-16 flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Merch</p>
            <h2 className="font-display text-5xl md:text-7xl leading-none">Wear the story.</h2>
          </div>
          <p className="max-w-md text-foreground/70">
            Pick up official pieces inspired by the film's world, from caps to tees and statement pieces for the faithful.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <button
              key={product.name}
              type="button"
              onClick={() => setSelectedProduct(product)}
              className="w-full overflow-hidden rounded-2xl border border-border/60 bg-card text-left transition hover:border-primary/60"
            >
              <img src={product.image} alt={product.name} loading="lazy" className="h-72 w-full object-cover" />
              <div className="p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">Out now</p>
                <h3 className="font-display text-2xl md:text-3xl mb-3">{product.name}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{product.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-4">
                  <span className="text-sm font-semibold text-foreground">{product.price}</span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">View product</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-3 top-3 z-10 rounded-full border border-border/60 bg-background/90 px-3 py-2 text-sm uppercase tracking-[0.25em] text-foreground transition hover:bg-background"
            >
              Close
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="max-h-[85vh] w-full rounded-2xl border border-border/60 object-contain shadow-2xl"
            />
            <div className="mt-5 rounded-2xl border border-border/60 bg-card/90 p-6 text-left shadow-xl">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2">Merch</p>
                  <h3 className="font-display text-3xl md:text-4xl">{selectedProduct.name}</h3>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-foreground">{selectedProduct.price}</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Out now</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">{selectedProduct.details}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <span className="rounded-full border border-border/60 px-3 py-1">{selectedProduct.sizes}</span>
                <span className="rounded-full border border-border/60 px-3 py-1">Limited release</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={selectedProduct.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-primary/90"
                >
                  Buy now
                </a>
                <a
                  href={selectedProduct.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-foreground/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-foreground transition hover:bg-foreground hover:text-background"
                >
                  Add to basket
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function MusicSection() {
  return (
    <section id="music" className="px-4 sm:px-6 lg:px-12 py-20 md:py-28 border-t border-border/60">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-end justify-between mb-12 md:mb-16 flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Music</p>
            <h2 className="font-display text-5xl md:text-7xl leading-none">The original soundtrack.</h2>
          </div>
          <p className="max-w-md text-foreground/70">
            The Swordplay OST brings the film's tension, pulse, and atmosphere into one release.
          </p>
        </div>

        <article className="overflow-hidden rounded-2xl border border-border/60 bg-card lg:grid lg:grid-cols-[1.1fr_0.9fr]">
          <img src={soundtrackOst} alt="Swordplay original soundtrack" loading="lazy" className="h-80 lg:h-full w-full object-cover" />
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">Out now</p>
            <h3 className="font-display text-3xl md:text-4xl mb-4">Swordplay OST</h3>
            <p className="text-foreground/70 leading-relaxed mb-6">
              A modern, gritty soundtrack shaped by the film's South London roots, designed to echo the same tension and emotion on the screen.
            </p>
            <div className="inline-flex w-fit items-center gap-2 border border-foreground/30 px-5 py-3 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-foreground hover:text-background transition rounded-full">
              Listen now
            </div>
          </div>
        </article>
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
        <div>© 2026 Femi Wilhelm. All rights reserved.</div>
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
      <Cast />
      <Merchandise />
      <MusicSection />
      <Watch />
      <Footer />
    </main>
  );
}
