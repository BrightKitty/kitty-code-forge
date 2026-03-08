import AnimateIn from "./AnimateIn";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        <AnimateIn>
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-4">
            FIRST, YOU SHOULD KNOW
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            About <span className="text-gradient-brand">BrightKitty</span>
          </h2>
        </AnimateIn>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <AnimateIn delay={0.1}>
            <p className="text-muted-foreground leading-relaxed">
              BrightKitty stands as a testament to the fusion of exceptional talent and creative synergy. We're a team of passionate developers and designers who believe that building great software should feel as natural as a cat landing on its feet — graceful, precise, and always impressive.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our journey began with a simple idea: combine engineering excellence with playful creativity. The result? Websites and apps that don't just work — they delight. From startups to established brands, we bring the same level of curiosity and craftsmanship to every project.
            </p>
          </AnimateIn>
          <div>
            <AnimateIn delay={0.2}>
              <div className="bg-muted rounded-lg p-8 mb-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-3">🎯 Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  To craft cutting-edge websites that transcend creativity, precision, and conversion. We blend innovation and expertise to deliver web solutions that captivate audiences and drive engagement.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-xl font-display font-bold text-foreground mb-3">💎 Values</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
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
