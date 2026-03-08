import AnimateIn from "./AnimateIn";
import logoTransparent from "@/assets/logo-transparent.png";

const techNames = [
  "React", "TypeScript", "Node.js", "Tailwind CSS", "Next.js",
  "PostgreSQL", "AWS", "Vercel", "Prisma", "Express.js",
  "Sass", "ESLint", "JWT", "PayPal", "Stripe",
  "Docker", "Redis", "GraphQL", "REST APIs", "Figma",
];

const TechSection = () => {
  return (
    <section id="tech" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container">
        <AnimateIn>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 opacity-60">
            SECURE, RELIABLE, TO-THE-POINT
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Tech Stack</h2>
          <p className="mt-6 max-w-2xl opacity-80 leading-relaxed">
            We only deal with the most tested open source frameworks and APIs that are safe and proven to significantly decrease client frustration.
          </p>
        </AnimateIn>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {techNames.map((name, i) => (
            <AnimateIn key={name} delay={i * 0.04}>
              <div className="bg-navy-light/30 border border-secondary-foreground/10 rounded-lg px-4 py-3 text-center text-sm font-medium opacity-80 hover:opacity-100 hover:border-primary/50 transition-all">
                {name}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      <div className="mt-24 overflow-hidden border-t border-b border-secondary-foreground/10 py-4">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-6 mx-6">
              <img src={logoTransparent} alt="" className="h-8 w-8" />
              <span className="text-xl font-display font-bold tracking-wide">
                Bright<span className="text-primary">Kitty</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
