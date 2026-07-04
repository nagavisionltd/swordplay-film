import Link from "next/link";

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold mb-8">Music</h1>
        <p className="text-2xl mb-12">Original Soundtrack Coming Soon</p>
        <div className="flex flex-col items-center gap-6">
          <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 0l3-3m-3 3l3 3"/>
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