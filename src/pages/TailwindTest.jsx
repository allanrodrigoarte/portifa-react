export default function BrutalistCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="relative">
        {/* Sombra purple brutalista */}
        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl bg-purple-600 pointer-events-none" />
        <div className="relative bg-white rounded-xl border-4 border-black shadow-2xl p-10 text-center font-mono max-w-xl mx-auto">
          <div className="flex flex-row items-center justify-center gap-2 mb-2 tracking-wider">
            <span className="text-4xl font-bold tracking-widest">ALLAN RODRIGO</span>

          </div>
          <div className="text-xl mb-6 tracking-widest">Creative professional</div>
          <hr className="border-black my-6" />
          <div className="flex justify-center">
            <span className="bg-[#283A69] text-white font-bold text-lg px-4 py-1 rounded mb-3 tracking-wide">
              +12 years in creative design
            </span>
          </div>
          <div className="mb-8">
            <span className="text-green-500 font-mono text-lg mx-2 tracking-wide">[ux/ui]</span>
            <span className="text-pink-500 font-mono text-lg mx-2 tracking-wide">[startups]</span>
            <span className="text-purple-600 font-mono text-lg mx-2 tracking-wide">[web3]</span>
          </div>
          <a
            href="https://bit.ly/AR_Portf_2025"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="
              bg-black text-white font-mono text-lg font-bold py-4 px-10 rounded
              border-2 border-black shadow-[6px_6px_0_0_#7C3AED] tracking-widest
              hover:bg-white hover:text-black transition hover:shadow-none cursor-pointer
              "
              style={{ letterSpacing: "0.08em" }}
            >
              CHECK MY CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
