import { Lightbulb, Palette, Code2, CreditCard, BarChart3, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const services = [
  { icon: Lightbulb, title: "Idea & Concept", description: "We develop projects from scratch and provide suggestions on your initial idea and concept. We arrange brainstorming meetings to develop a successful project." },
  { icon: Palette, title: "UX/UI Design", description: "Designed with conversion in mind, we design captivating interfaces that entice your audience and guide them toward a conversion-driven path." },
  { icon: Code2, title: "Web Development", description: "We utilize the latest and most affordable tech. We pay attention to performance, accessibility, best practices, and SEO scores from the initial commit." },
  { icon: CreditCard, title: "Monetization", description: "We can build complete licensing and monetization APIs for native and mobile applications. Subscription and one-time purchase systems are our bread and butter." },
  { icon: BarChart3, title: "CRO", description: "Over ten years of experience building authentic relationships with users through incredibly designed UX/UI. We use A/B testing to understand the perfect formula." },
  { icon: BookOpen, title: "Docs & Training", description: "Upon completing a project, we leave you with complete documentation, in-code comments, and personal training to ensure you know the entire inner workings." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container">
        <AnimateIn>
          <p className="text-xl font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-4">
            WELL COVERED AND EFFECTIVE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
            Services <span className="text-gradient-brand">Provided</span>
          </h2>
        </AnimateIn>

        <div className="mt-8 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group bg-muted rounded-xl p-5 sm:p-8 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default h-full overflow-hidden"
              >
                <service.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors mb-4 sm:mb-6 sm:[&]:w-8 sm:[&]:h-8" />
                <h3 className="text-lg sm:text-xl font-display font-bold mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
