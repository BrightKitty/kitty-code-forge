import AnimateIn from "./AnimateIn";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        <AnimateIn>
          <p className="text-xl font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-4">
            FIRST, YOU SHOULD KNOW
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
            About <span className="text-gradient-brand">BrightKitty</span>
          </h2>
        </AnimateIn>

        <div className="mt-8 md:mt-12 grid md:grid-cols-2 gap-8 md:gap-12">
          <AnimateIn delay={0.1}>
            <p className="text-sm sm:text-xl text-muted-foreground leading-relaxed">
            We're a team of passionate developers and designers who believe that building great software should feel as natural as a cat landing on its feet — graceful, precise, and always impressive.
            </p>
            <p className="mt-4 sm:mt-6 text-sm sm:text-xl text-muted-foreground leading-relaxed">
            Our journey combines engineering excellence with creativity. Websites and apps that don't just work, they delight. We bring the same level of curiosity and craftsmanship to every project from startups to established brands.
            </p>
          </AnimateIn>
          <div className="grid gap-4 sm:gap-6">
            <AnimateIn delay={0.2}>
              <div className="bg-muted rounded-lg p-5 sm:p-8">
                <h3 className="text-lg sm:text-xl font-display font-bold text-foreground mb-2 sm:mb-3">🎯 Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-sm">
                  To craft cutting-edge websites that transcend creativity, precision, and conversion. We blend innovation and expertise to deliver web solutions that captivate audiences and drive engagement.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <div className="bg-muted rounded-lg p-5 sm:p-8">
                <h3 className="text-lg sm:text-xl font-display font-bold text-foreground mb-2 sm:mb-3">💎 Values</h3>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-sm">
                  We deeply value robust, trusted partnerships with our clients. Our commitment extends beyond service — we prioritize enduring relationships built on trust, transparency, and mutual respect.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
