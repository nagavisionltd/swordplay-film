import Link from "next/link";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold mb-8">Shop</h1>
        <p className="text-2xl mb-12">Official Merchandise Coming Soon</p>
        <div className="flex flex-col items-center gap-6">
          <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.2 3.8a3 3 0 000 4.1l2.2 2.1z"/>
            </svg>
          </div>
          <Link href="/" className="bg-accent px-6 py-3 rounded-full text-black font-medium hover:bg-accent/90 transition duration-300">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}