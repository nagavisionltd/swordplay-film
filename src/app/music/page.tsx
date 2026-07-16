import Link from "next/link";

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 sm:px-12 lg:px-20 py-20 md:py-28">
      <div className="max-w-[1600px] mx-auto">
        <header className="mb-16 md:mb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Soundtrack</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none">
            The Sound of<br/>
            <span className="text-primary">The Fall.</span>
          </h1>
        </header>

        <section className="space-y-12 md:space-y-16">
          {/* Main Theme */}
          <article className="relative group overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Main Theme</p>
                <h2 className="font-display text-3xl md:text-4xl leading-none mb-4">
                  "DEPTFORD DARKNESS"
                </h2>
                <p className="text-foreground/70 max-w-xl leading-relaxed mb-6">
                  Composed by Helmooo. A brooding, atmospheric piece that opens the film — 
                  layering sub-bass pressure with haunting strings and UK drill percussion. 
                  The sound of loyalty fracturing in real time.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Duration: 3:47
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Key: F# Minor
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    140 BPM
                  </span>
                </div>
              </div>
              <div className="md:col-span-5 flex flex-col items-center md:items-start gap-4">
                <div className="w-full aspect-video bg-black/50 rounded-xl border border-border/60 overflow-hidden relative">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/jJRNTFBZPOw?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0"
                    title="Deptford Darkness - Main Theme"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <a
                  href="https://open.spotify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border shadow-sm hover:bg-accent hover:text-accent-foreground bg-primary text-primary-foreground px-6 py-3 group w-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-music w-4 h-4">
                    <path d="M9 18V5l12-2v13"></path>
                    <circle cx="6" cy="18" r="3"></circle>
                    <circle cx="18" cy="16" r="3"></circle>
                  </svg>
                  Pre-Save on Spotify
                </a>
              </div>
            </div>
          </article>

          {/* Tracklist */}
          <article className="overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-8 md:p-12">
            <div className="mb-8 md:mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Tracklist</p>
              <h2 className="font-display text-3xl md:text-4xl leading-none">
                Original Soundtrack — Volume One
              </h2>
            </div>

            <div className="space-y-3">
              {[
                { num: "01", title: "DEPTFORD DARKNESS", artist: "Helmooo", dur: "3:47", featured: true },
                { num: "02", title: "RINGO'S CODE", artist: "BackRoad Gee feat. Helmooo", dur: "2:58" },
                { num: "03", title: "THE ENDS", artist: "Helmooo", dur: "4:12" },
                { num: "04", title: "LOYALTY (Interlude)", artist: "Helmooo", dur: "1:33" },
                { num: "05", title: "JEALOUSY", artist: "MC Lilly Wolfe feat. Helmooo", dur: "3:21" },
                { num: "06", title: "BETRAYAL", artist: "Helmooo", dur: "4:05" },
                { num: "07", title: "THE FALL", artist: "Helmooo", dur: "5:18" },
                { num: "08", title: "CREDITS — OTHELLO'S GHOST", artist: "Helmooo", dur: "2:44" },
              ].map((track) => (
                <div
                  key={track.num}
                  className={`flex items-center justify-between p-4 rounded-xl border border-border/60 transition-all ${track.featured ? 'bg-primary/10 border-primary/30' : 'hover:border-border/30'}`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono tabular-nums w-10 text-right">
                      {track.num}
                    </span>
                    <div>
                      <p className={`font-display text-lg ${track.featured ? 'text-primary' : 'text-foreground'}`}>
                        {track.title}
                      </p>
                      <p className="text-xs text-muted-foreground uppercase tracking-[0.1em]">
                        {track.artist}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono tabular-nums whitespace-nowrap">
                    {track.dur}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Executive Producer: Femi Wilhelm · Music Supervisor: Helmooo
              </p>
              <div className="flex gap-3">
                <a
                  href="https://open.spotify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border shadow-sm hover:bg-accent hover:text-accent-foreground bg-primary text-primary-foreground px-6 py-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-spotify w-4 h-4">
                    <path d="M4 12.69v6.62C4 21.33 5.33 23 8 23h1.35c1.07 0 2.09-.4 2.88-1.07l4.72-4.72C17.87 19.69 19 21.1 19 23h1.35c2.67 0 4-1.67 4-4v-6.62c0-2.33-1.33-3.67-4-4-2.67-.33-4 1-4 2.67V12.7c0 1.67-1.33 2.67-4 2.67-2.67 0-4-1-4-2.67v-.01z"></path>
                  </svg>
                  Pre-Save Album
                </a>
                <a
                  href="https://music.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border shadow-sm hover:bg-accent hover:text-accent-foreground border-border bg-background px-6 py-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-apple w-4 h-4">
                    <path d="M18 21a6 6 0 0 0-12 0"></path>
                    <path d="M12 15v6"></path>
                    <path d="M12 9a4 4 0 0 1 0-8 4.5 4.5 0 0 1 0 8 6 6 0 0 0-12 0 4.5 4.5 0 0 1 0 8 6 6 0 0 0 12 0 4.5 4.5 0 0 1 0-8"></path>
                  </svg>
                  Pre-Order on Apple Music
                </a>
              </div>
            </div>
          </article>

          {/* Credits */}
          <article className="overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Credits</p>
            <h2 className="font-display text-3xl md:text-4xl leading-none mb-8">
              Soundtrack Credits
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Production</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>Composer / Producer: <span className="text-foreground">Helmooo</span></li>
                  <li>Executive Producer: <span className="text-foreground">Femi Wilhelm</span></li>
                  <li>Music Supervisor: <span className="text-foreground">Helmooo</span></li>
                  <li>Mixing & Mastering: <span className="text-foreground">Helmooo</span></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">Featured Artists</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>BackRoad Gee — "Ringo's Code"</li>
                  <li>MC Lilly Wolfe — "Jealousy"</li>
                  <li>Helmooo — Main Theme, Score, Interludes</li>
                </ul>
              </div>
              <div className="md:col-span-2">
                <h3 className="font-semibold text-foreground mb-4">Recorded At</h3>
                <p className="text-sm text-foreground/70">
                  NagaVision Studios, London · Mixed at Helmooo Sound Lab
                </p>
              </div>
              <div className="md:col-span-2">
                <h3 className="font-semibold text-foreground mb-4">Published By</h3>
                <p className="text-sm text-foreground/70">
                  NagaXMusic / Buffalo 8 · BondIt Media Capital
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* Back link */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-border/60">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left w-4 h-4">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to Film
          </Link>
        </div>
      </div>
    </main>
  );
}