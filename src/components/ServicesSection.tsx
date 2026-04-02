import { Lightbulb, Palette, Code2, Zap, BarChart3, TabletSmartphone } from "lucide-react";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const services = [
  { icon: Lightbulb, title: "Idea & Concept", description: "We develop projects from scratch and provide suggestions on your initial idea and concept. We arrange brainstorming meetings to develop a successful project." },
  { icon: Palette, title: "UX/UI Design", description: "Designed with conversion in mind, we design captivating interfaces that entice your audience and guide them toward a conversion-driven path." },
  { icon: Code2, title: "Web Development", description: "We utilize the latest and most affordable tech. We pay attention to performance, accessibility, best practices, and SEO scores from the initial commit." },
  { icon: Zap, title: "AI Integration", description: "We integrate cutting-edge AI solutions into your products, enhancing functionality and user experience." },
  { icon: BarChart3, title: "Digital Marketing", description: "We help you reach your target audience and drive conversions through data-driven digital marketing strategies." },
  { icon: TabletSmartphone, title: "Mobile App Development", description: "We build cross-platform mobile applications that deliver exceptional user experiences." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container">
        <AnimateIn>
          <p className="text-xl font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-4">
            The Capabilities We Offer.
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
