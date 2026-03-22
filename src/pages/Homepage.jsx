import { Helmet } from "react-helmet-async";
import Header from "../components/home/Header";
import HeroSection from "../components/home/HeroSection";
import FeaturedCases from "../components/home/FeaturedCases";
import ChooseYourPath from "../components/home/ChooseYourPath";
import AboutPreview from "../components/home/AboutPreview";
import SelectedWork from "../components/home/SelectedWork";
import CredibilityStrip from "../components/home/CredibilityStrip";
import HomeGrid from "../components/HomeGrid";
import Footer from "../components/home/Footer";

export default function Homepage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      <Helmet>
        <title>Allan Rodrigo | Senior Product Designer</title>
        <meta
          name="description"
          content="Senior Product Designer portfolio by Allan Rodrigo. UX/UI, branding, Web3, product systems and digital experiences designed and built with strategy."
        />
      </Helmet>

      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 12% 0%, rgba(124,58,237,0.16), transparent 60%), radial-gradient(1100px 700px at 85% 10%, rgba(37,99,235,0.14), transparent 55%), linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0))",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.35), rgba(0,0,0,1))",
        }}
      />

      <Header />

      <main className="relative z-10">
        <HeroSection />
        <FeaturedCases />
        <ChooseYourPath />
        <AboutPreview />

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/50">
                Panorama
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Areas of expertise
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/60">
              A quick view of the design territories I navigate across product,
              branding, Web3, motion and visual storytelling.
            </p>
          </div>

          <HomeGrid />
        </section>

        <SelectedWork />
        <CredibilityStrip />
      </main>

      <Footer />
    </div>
  );
}