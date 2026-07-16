import Link from "next/link";

export default function ShopPage() {
  const merch = [
    {
      id: "hoodie",
      name: "THE FALL HOODIE",
      desc: "Heavyweight 480gsm cotton. Front: Swordplay logo. Back: \"An Othello for the ends.\" Embroidered chest hit.",
      price: "£85",
      colors: ["Charcoal", "Obsidian"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      featured: true,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
    },
    {
      id: "tee",
      name: "DEPTFORD TEE",
      desc: "220gsm premium cotton. Screen-printed tonal logo. Relaxed boxy fit. Garment-dyed for lived-in feel.",
      price: "£35",
      colors: ["Black", "White", "Slate"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      featured: false,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
    },
    {
      id: "cap",
      name: "ENDS CAP",
      desc: "Structured 6-panel. 3D embroidered swordplay icon. Adjustable leather strap. Tonal stitching.",
      price: "£40",
      colors: ["Black", "Charcoal"],
      sizes: ["OS"],
      featured: false,
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=800&fit=crop",
    },
    {
      id: "vinyl",
      name: "SOUNDTRACK VINYL",
      desc: "Limited 180g black vinyl. Gatefold sleeve with film stills. Includes digital download code. 500 copies.",
      price: "£35",
      colors: ["Black Vinyl"],
      sizes: ["Standard"],
      featured: true,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop",
    },
    {
      id: "poster",
      name: "KEY ART POSTER",
      desc: "A2 (420mm × 594mm). Museum-grade matte 200gsm. Signed edition by Femi Wilhelm (first 100).",
      price: "£25",
      colors: ["Standard", "Signed Edition"],
      sizes: ["A2"],
      featured: false,
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=800&fit=crop",
    },
    {
      id: "bundle",
      name: "THE FALL BUNDLE",
      desc: "Hoodie + Vinyl + Poster + Cap. Exclusive bundle pricing. Includes signed art card.",
      price: "£175",
      colors: ["Charcoal/Obsidian"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      featured: true,
      image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&h=800&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 sm:px-12 lg:px-20 py-20 md:py-28">
      <div className="max-w-[1600px] mx-auto">
        <header className="mb-16 md:mb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Merchandise</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none">
            Official<br/>
            <span className="text-primary">Merch.</span>
          </h1>
        </header>

        <section className="space-y-8 md:space-y-12">
          {merch.map((item) => (
            <article
              key={item.id}
              className={`relative group overflow-hidden rounded-2xl border border-border/60 bg-card/40 transition-all duration-500 ${
                item.featured ? 'border-primary/30 bg-primary/5' : 'hover:border-border/30'
              }`}
            >
              {item.featured && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-primary text-primary-foreground rounded-full">
                    Featured
                  </span>
                </div>
              )}
              <div className="grid md:grid-cols-12 gap-0">
                {/* Image */}
                <div className="md:col-span-5 relative aspect-square md:aspect-auto min-h-[400px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-background/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{item.name}</p>
                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight mb-4">
                      {item.name}
                    </h2>
                    <p className="text-foreground/70 leading-relaxed mb-6 max-w-lg">
                      {item.desc}
                    </p>

                    {/* Options */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-2">
                          Color
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {item.colors.map((color) => (
                            <button
                              key={color}
                              className="px-4 py-2 text-xs uppercase tracking-[0.1em] border border-border/60 hover:border-primary hover:text-primary transition-colors rounded-sm bg-background/50"
                            >
                              {color}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-2">
                          Size
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {item.sizes.map((size) => (
                            <button
                              key={size}
                              className="w-10 h-10 text-xs uppercase tracking-[0.1em] border border-border/60 hover:border-primary hover:text-primary transition-colors rounded-sm bg-background/50 flex items-center justify-center"
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border/60">
                    <span className="font-display text-2xl md:text-3xl text-foreground">
                      {item.price}
                    </span>
                    <button
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border shadow-sm hover:bg-accent hover:text-accent-foreground bg-primary text-primary-foreground px-6 py-3"
                    >
                      Add to Cart
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart w-4 h-4">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Shipping info */}
        <section className="mt-20 md:mt-28 pt-12 border-t border-border/60">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-truck mx-auto mb-4 text-primary">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h1"></path>
                <path d="M15 18H9"></path>
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14"></path>
                <circle cx="17" cy="18" r="2"></circle>
                <circle cx="5" cy="18" r="2"></circle>
              </svg>
              <h3 className="font-semibold text-lg mb-2">Worldwide Shipping</h3>
              <p className="text-sm text-foreground/70">Free UK shipping on orders over £100</p>
            </div>
            <div className="p-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-rotate-ccw mx-auto mb-4 text-primary">
                <path d="M3 7v6h6"></path>
                <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"></path>
              </svg>
              <h3 className="font-semibold text-lg mb-2">30-Day Returns</h3>
              <p className="text-sm text-foreground/70">Unworn items with tags attached</p>
            </div>
            <div className="p-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield-check mx-auto mb-4 text-primary">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <h3 className="font-semibold text-lg mb-2">Secure Checkout</h3>
              <p className="text-sm text-foreground/70">SSL encrypted payment processing</p>
            </div>
          </div>
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