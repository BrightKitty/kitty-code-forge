import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroKitty from "@/assets/hero-kitty.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden pt-16">
      <div className="container grid md:grid-cols-2 items-center gap-6 md:gap-8 py-8 md:py-0">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="z-10 text-center md:text-left"
        >
          <h1 className="text-4xl font-display font-bold uppercase leading-[0.9] tracking-tight text-secondary sm:text-6xl md:text-9xl">
            BRIGHT<span className="font-extrabold text-secondary-foreground">KITTY</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 md:mt-8 text-base md:text-xl text-secondary max-w-md leading-relaxed opacity-90 mx-auto md:mx-0"
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
            className="mt-6 md:mt-10 inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-7 sm:px-10 py-3 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase"
          >
            REACH OUT <ArrowRight size={16} />
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center md:justify-end order-first md:order-last"
        >
          <img
            src={heroKitty}
            alt="BrightKitty Engineer Mascot"
            className="w-[220px] sm:w-[320px] md:w-[500px] drop-shadow-2xl"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-secondary">
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
