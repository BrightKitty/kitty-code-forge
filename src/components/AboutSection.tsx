import AnimateIn from "./AnimateIn";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        <AnimateIn>
          <p className="text-xl font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-4">
            The Instinct for Better Build.
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
            About <span className="text-gradient-brand">BrightKitty</span>
          </h2>
        </AnimateIn>

        <div className="mt-8 md:mt-12 grid md:grid-cols-2 gap-8 md:gap-12">
          <AnimateIn delay={0.1}>
            <p className="text-sm sm:text-xl text-muted-foreground leading-relaxed">
           At BrightKitty, we don't just ship code; we hunt for excellence. We believe software should be as sleek as a prowling cat and as dependable as its landing. </p>
            <p className="mt-4 sm:mt-6 text-sm sm:text-xl text-muted-foreground leading-relaxed">
             We bring the same level of curiosity and craftsmanship to every project from startups to established brands.Our team blends curiosity with craftsmanship to turn complex problems into elegant, intuitive digital realities.
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
