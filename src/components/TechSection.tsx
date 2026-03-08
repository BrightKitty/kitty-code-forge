import AnimateIn from "./AnimateIn";
import logoTransparent from "@/assets/logo-transparent.png";

const techStack = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" },
  { name: "ESLint", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "Stripe", icon: "https://img.icons8.com/color/96/stripe.png" },
  { name: "JWT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" },
];

const TechSection = () => {
  return (
    <section id="tech" className="pt-24 pb-0 bg-secondary text-secondary-foreground">
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

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {techStack.map((tech, i) => (
            <AnimateIn key={tech.name} delay={i * 0.04}>
              <div className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-lg px-4 py-5 flex flex-col items-center gap-3 hover:border-primary/50 hover:bg-secondary-foreground/10 transition-all group">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-10 w-10 object-contain opacity-70 group-hover:opacity-100 transition-opacity [filter:brightness(0)_invert(1)_opacity(0.8)] group-hover:[filter:none] max-md:[filter:none] max-md:opacity-100"
                />
                <span className="text-xs font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      <div className="mt-24 border-t border-b border-secondary-foreground/10 py-4">
        <div className="container flex items-center justify-between">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
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
