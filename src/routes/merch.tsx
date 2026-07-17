import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import swordplayLogo from "@/assets/logos/swordplay-logo.png";
import merchImage1 from "@/assets/swordplay_image_gallery/WhatsApp Image 2026-05-11 at 16.26.28.jpeg";
import merchImage2 from "@/assets/swordplay_image_gallery/WhatsApp Image 2026-05-11 at 16.27.38.jpeg";
import merchImage3 from "@/assets/swordplay_image_gallery/WhatsApp Image 2026-05-11 at 16.27.43.jpeg";
import merchImage4 from "@/assets/swordplay_image_gallery/WhatsApp Image 2026-05-11 at 16.27.51.jpeg";
import merchImage5 from "@/assets/swordplay_image_gallery/WhatsApp Image 2026-05-18 at 09.44.43 (2).jpeg";
import merchImage6 from "@/assets/swordplay_image_gallery/WhatsApp Image 2026-05-18 at 09.44.43 (4).jpeg";
import { Instagram } from "lucide-react";

export const Route = createFileRoute("/merch")({ component: Merch });

const merchItems = [
  { id: 1, image: merchImage1, name: "Swordplay Hoodie", category: "Apparel" },
  { id: 2, image: merchImage2, name: "Deptford Collection Tee", category: "Apparel" },
  { id: 3, image: merchImage3, name: "Limited Edition Cap", category: "Accessories" },
  { id: 4, image: merchImage4, name: "Vinyl Record", category: "Music" },
  { id: 5, image: merchImage5, name: "Canvas Print", category: "Art" },
  { id: 6, image: merchImage6, name: "Signature Poster", category: "Art" },
];

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center" aria-label="Swordplay">
          <img src={swordplayLogo} alt="Swordplay" className="h-6 md:h-7 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <a href="/#trailer" className="hover:text-foreground transition">Trailer</a>
          <a href="/#story" className="hover:text-foreground transition">Story</a>
          <a href="/#cast" className="hover:text-foreground transition">Cast</a>
          <a href="/merch" className="hover:text-foreground transition">Merch</a>
          <a href="/music" className="hover:text-foreground transition">Music</a>
        </nav>
        <a href="https://www.instagram.com/swordplayfilm/" target="_blank" rel="noreferrer"
           className="text-xs uppercase tracking-[0.2em] border border-foreground/30 px-4 py-2 hover:bg-foreground hover:text-background transition rounded-full">
          @swordplayfilm
        </a>
      </div>
    </header>
  );
}

function MerchHero() {
  return (
    <section className="relative pt-32 pb-20 md:py-32 px-4 sm:px-6 lg:px-12 border-b border-border/60">
      <div className="max-w-[1600px] mx-auto">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Official Merch</p>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.9] mb-6">
            Swordplay<br/><span className="text-primary">Collection</span>
          </h1>
          <p className="max-w-xl text-base md:text-lg text-foreground/75 mt-6">
            Exclusive merchandise inspired by the film. Limited edition pieces celebrating the streets, the story, and the culture.
          </p>
        </div>
      </div>
    </section>
  );
}

function MerchGrid() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="px-4 sm:px-6 lg:px-12 py-20 md:py-28">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {merchItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card hover:border-primary/60 transition cursor-pointer"
              onClick={() => setSelected(selected === item.id ? null : item.id)}
            >
              <div className="relative aspect-square overflow-hidden bg-background">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              <div className="relative p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2">{item.category}</p>
                    <h3 className="font-display text-2xl md:text-3xl leading-tight">{item.name}</h3>
                  </div>
                </div>
                {selected === item.id && (
                  <div className="mt-4 pt-4 border-t border-border/40">
                    <p className="text-xs text-muted-foreground mb-4">Coming soon</p>
                    <a href="https://www.instagram.com/swordplayfilm/" target="_blank" rel="noreferrer"
                       className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary border-b border-primary pb-1 hover:opacity-75 transition">
                      DM for inquiries →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MerchFooter() {
  return (
    <footer className="px-6 lg:px-12 py-12 border-t border-border/60">
      <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <img src={swordplayLogo} alt="Swordplay" className="h-6 w-auto" />
        <div>© 2026 Femi Wilhelm. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="https://www.instagram.com/swordplayfilm/" target="_blank" rel="noreferrer" className="hover:text-foreground">Instagram</a>
          <a href="https://www.youtube.com/watch?v=jJRNTFBZPOw" target="_blank" rel="noreferrer" className="hover:text-foreground">YouTube</a>
        </div>
      </div>
    </footer>
  );
}

function Merch() {
  return (
    <main className="relative">
      <Nav />
      <MerchHero />
      <MerchGrid />
      <MerchFooter />
    </main>
  );
}
