import { createFileRoute } from "@tanstack/react-router";
import { Music as MusicIcon, Play } from "lucide-react";
import swordplayLogo from "@/assets/logos/swordplay-logo.png";

export const Route = createFileRoute("/music")({ component: MusicPage });

const musicPlatforms = [
  {
    name: "Spotify",
    description: "Stream the official Swordplay soundtrack",
    icon: "🎵",
    url: "https://open.spotify.com",
    color: "bg-[#1DB954]",
  },
  {
    name: "Apple Music",
    description: "Listen on Apple Music",
    icon: "🎶",
    url: "https://music.apple.com",
    color: "bg-foreground",
  },
  {
    name: "YouTube Music",
    description: "Watch and listen on YouTube Music",
    icon: "▶",
    url: "https://music.youtube.com",
    color: "bg-[#FF0000]",
  },
  {
    name: "SoundCloud",
    description: "Exclusive mixes and releases",
    icon: "☁",
    url: "https://soundcloud.com",
    color: "bg-[#FF7700]",
  },
];

const artists = [
  { name: "Femi Wilhelm", role: "Director & Vision", bio: "Sonic palette of South London" },
  { name: "Original Score", role: "Composer", bio: "Authentic grime and UK rap influences" },
  { name: "Featured Artists", role: "Soundtrack", bio: "Voices of the streets" },
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

function MusicHero() {
  return (
    <section className="relative pt-32 pb-20 md:py-32 px-4 sm:px-6 lg:px-12 border-b border-border/60">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-end gap-8">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Original Soundtrack</p>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.9] mb-6">
              The Sound<br/><span className="text-primary">of Deptford</span>
            </h1>
            <p className="max-w-xl text-base md:text-lg text-foreground/75 mt-6">
              Immerse yourself in the grime-infused, street-poetry sonic landscape of Swordplay. The authentic pulse of South London captured in sound.
            </p>
          </div>
          <div className="hidden lg:flex items-center justify-center w-40 h-40 rounded-2xl border border-primary/40 bg-primary/5">
            <MusicIcon className="w-20 h-20 text-primary opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StreamingPlatforms() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-20 md:py-28 border-t border-border/60">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Stream Now</p>
          <h2 className="font-display text-5xl md:text-7xl leading-none">Available Everywhere</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {musicPlatforms.map((platform, i) => (
            <a
              key={i}
              href={platform.url}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card hover:border-primary/60 transition p-8 md:p-10"
            >
              <div className={`absolute inset-0 ${platform.color} opacity-5 group-hover:opacity-10 transition`} />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{platform.icon}</div>
                  <Play className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground">{platform.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudioFeature() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-20 md:py-28 border-t border-border/60">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">The Experience</p>
            <h2 className="font-display text-5xl md:text-7xl leading-none mb-6">Raw. Authentic. Real.</h2>
            <p className="text-foreground/75 text-lg leading-relaxed mb-8">
              Every track in the Swordplay soundtrack pulses with the energy of South London. From grime to UK rap, the music captures the emotional core of the film—loyalty, betrayal, and the cost of choosing sides.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MusicIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Original Compositions</h4>
                  <p className="text-sm text-muted-foreground">Bespoke score created specifically for the film</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MusicIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Street Artists</h4>
                  <p className="text-sm text-muted-foreground">Featuring emerging UK talent and established voices</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MusicIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Cultural Authenticity</h4>
                  <p className="text-sm text-muted-foreground">Rooted in the real sounds of Deptford and beyond</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl border-2 border-primary/30 bg-primary/5 flex items-center justify-center overflow-hidden">
              <MusicIcon className="w-32 h-32 text-primary opacity-30" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full border border-primary/20 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Artists() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-20 md:py-28 border-t border-border/60">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Credits</p>
          <h2 className="font-display text-5xl md:text-7xl leading-none">The Voices Behind It</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {artists.map((artist, i) => (
            <div key={i} className="border border-border/60 rounded-2xl p-8 hover:border-primary/60 transition bg-card">
              <h3 className="font-display text-3xl mb-2">{artist.name}</h3>
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">{artist.role}</p>
              <p className="text-foreground/75">{artist.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MusicFooter() {
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

function MusicPage() {
  return (
    <main className="relative">
      <Nav />
      <MusicHero />
      <StreamingPlatforms />
      <AudioFeature />
      <Artists />
      <MusicFooter />
    </main>
  );
}
