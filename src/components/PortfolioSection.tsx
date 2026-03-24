import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import AnimateIn from "./AnimateIn";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioDashboard from "@/assets/portfolio-dashboard.jpg";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioFitness from "@/assets/portfolio-fitness.jpg";
import portfolioRealestate from "@/assets/portfolio-realestate.jpg";
import portfolioFintech from "@/assets/portfolio-fintech.jpg";

const categories = ["All", "Web Apps", "E-Commerce", "Mobile"] as const;

const projects = [
  { title: "ShopVault", category: "E-Commerce", description: "Full-stack e-commerce platform with real-time inventory and seamless checkout.", tech: ["React", "Node.js", "Stripe"], image: portfolioEcommerce },
  { title: "InsightBoard", category: "Web Apps", description: "Analytics dashboard with interactive charts and role-based access control.", tech: ["TypeScript", "PostgreSQL", "D3.js"], image: portfolioDashboard },
  { title: "Perriel Bistro", category: "Web Apps", description: "Restaurant website with online reservations and menu management CMS.", tech: ["Next.js", "Tailwind", "Prisma"], image: portfolioRestaurant },
  { title: "FitPulse", category: "Mobile", description: "Fitness tracking app with workout plans, progress charts, and social features.", tech: ["React Native", "Firebase", "Charts"], image: portfolioFitness },
  { title: "HomeNest", category: "E-Commerce", description: "Real estate listing platform with advanced search filters and virtual tours.", tech: ["React", "AWS", "Mapbox"], image: portfolioRealestate },
  { title: "Sancure Pay", category: "Mobile", description: "Fintech banking app with secure transactions and budget tracking tools.", tech: ["React Native", "Stripe", "JWT"], image: portfolioFintech },
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <AnimateIn>
          <p className="text-xl font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-4">
            WHAT WE'VE BUILT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
            Our <span className="text-gradient-brand">Work</span>
          </h2>
        </AnimateIn>

        {/* Filter tabs */}
        <AnimateIn delay={0.1}>
          <div className="mt-6 sm:mt-10 flex flex-wrap gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateIn>

        {/* Project grid */}
        <motion.div layout className="mt-8 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="w-full h-40 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-secondary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ y: 20 }}
                      whileHover={{ scale: 1.1 }}
                      className="bg-primary text-primary-foreground p-3 rounded-full"
                    >
                      <ExternalLink size={20} />
                    </motion.div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-[10px] sm:text-xs font-semibold tracking-widest text-primary uppercase mb-1.5 sm:mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-base sm:text-lg font-display font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase bg-muted text-muted-foreground px-2 py-0.5 sm:py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
