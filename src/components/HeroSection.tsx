import { ArrowRight } from "lucide-react";
import heroKitty from "@/assets/hero-kitty.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden pt-16">
      <div className="container grid md:grid-cols-2 items-center gap-8">
        <div className="z-10">
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tight text-secondary">
            BRIGHT<span className="font-extrabold text-secondary-foreground">KITTY</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-secondary max-w-md leading-relaxed opacity-90">
            We craft immersive web experiences that transcend expectations — with a purr.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-10 py-4 font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            REACH OUT <ArrowRight size={16} />
          </a>
        </div>
        <div className="relative flex justify-center md:justify-end">
          <img
            src={heroKitty}
            alt="BrightKitty Engineer Mascot"
            className="w-[400px] md:w-[500px] drop-shadow-2xl"
          />
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-secondary">
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
