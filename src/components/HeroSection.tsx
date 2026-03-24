import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroKitty from "@/assets/hero-kitty.png";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden pt-10 md:pt-16"
    >
      {/* Animated gradient overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.6),transparent_60%)] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.5),transparent_50%)] pointer-events-none"
      />
      <div className="container grid md:grid-cols-2 items-center gap-6 md:gap-8 py-8 md:py-0">

        {/* ── Text column ── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="z-10 flex flex-col items-center md:items-start md:text-left"
        >
          {/* Mobile: stacked badge + heading layout */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:hidden inline-block bg-secondary/20 backdrop-blur-sm text-secondary text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border border-secondary/20 mb-5"
          >
            Web Studio
          </motion.span>

          <h1 className="text-5xl font-display font-bold uppercase leading-[0.85] tracking-tight text-[#161966] sm:text-6xl md:text-7xl lg:text-9xl text-center md:text-left">
          BRIGHT
            <span className="block md:inline font-extrabold text-secondary-foreground">KITTY</span>
          </h1>

          {/* Decorative divider — mobile only */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:hidden w-12 h-[3px] bg-secondary/40 rounded-full mt-5 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 md:mt-8 text-[15px] md:text-2xl text-secondary max-w-xs md:max-w-md leading-relaxed opacity-90 text-center md:text-left"
          >
            We craft immersive web experiences that transcend expectations — with a purr.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="mt-7 md:mt-10 inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 sm:px-10 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase rounded-sm shadow-lg shadow-secondary/20"
          >
            REACH OUT <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        {/* ── Mascot column ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center md:justify-end order-first md:order-last"
        >
          {/* Glow ring behind mascot — mobile */}
          <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[200px] h-[200px] rounded-full bg-secondary/10 blur-2xl" />
          </div>
          <img
            src={heroKitty}
            alt="BrightKitty Engineer Mascot"
            className="w-[200px] sm:w-[280px] md:w-[800px] drop-shadow-2xl relative z-10"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-secondary/50 text-[11px] tracking-[0.2em] uppercase font-semibold hidden sm:block">Scroll</span>
        <ChevronDown size={50} className="text-secondary/60 animate-bounce" />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
