import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import promiseKitties from "@/assets/promise-kitties.png";

const PromiseSection = () => {
  return (
    <section id="promise" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <AnimateIn>
          <p className="text-xl font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-4">
            SECOND, YOU SHOULD KNOW
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
            OUR PROMISE
          </h2>
        </AnimateIn>

        <div className="mt-8 md:mt-12 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimateIn delay={0.1}>
            <p className="text-sm sm:text-xl text-muted-foreground leading-relaxed">
              Specializing in the creation of vibrant, state-of-the-art websites, we pride ourselves on delivering to-the-point web apps that are extremely stable and convert.
            </p>
            <p className="mt-4 sm:mt-6 text-sm sm:text-xl text-muted-foreground leading-relaxed">
              Our commitment to consistency, code readability, and maintainability leaves you with a website that requires the least amount of long-term maintenance possible.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="mt-6 md:mt-10 inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 sm:px-10 py-3 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase"
            >
              REACH OUT <ArrowRight size={16} />
            </motion.a>
          </AnimateIn>
          <AnimateIn delay={0.2} direction="right">
            <div className="flex justify-center">
              <img
                src={promiseKitties}
                alt="Kitty engineers working together"
                className="w-full max-w-[280px] sm:max-w-md drop-shadow-xl"
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
