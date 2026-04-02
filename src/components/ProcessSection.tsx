import { useState } from "react";
import { Lightbulb, ClipboardList, Palette, Code2, Bug, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

const steps = [
  { icon: Lightbulb, title: "Brainstorming", description: "We kick off with an immersive 1-on-1 brainstorming experience tailored to each client. We explore your objectives and conceptualize solutions together." },
  { icon: ClipboardList, title: "Planning", description: "We create a detailed roadmap with milestones, timelines, and deliverables to ensure every aspect of your project is accounted for." },
  { icon: Palette, title: "Design", description: "Our designers craft captivating UI/UX that guides users toward conversion while keeping the experience delightful and intuitive." },
  { icon: Code2, title: "Development", description: "Clean, maintainable code using cutting-edge tech. We build with performance, accessibility, and scalability in mind from day one." },
  { icon: Bug, title: "QA", description: "Rigorous testing across devices and browsers to ensure everything works flawlessly before going live." },
  { icon: Rocket, title: "Launch", description: "We handle deployment, monitoring, and provide complete documentation and training so you're fully equipped." },
];

const ProcessSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="py-16 md:py-24 bg-background">
      <div className="container">
        <AnimateIn>
          <p className="text-xl font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-4">
          KNOW ABOUT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
            Our Process <span className="text-gradient-brand">Flow</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="mt-8 md:mt-12 grid md:grid-cols-[300px_1fr] gap-4 md:gap-8">
            {/* Mobile: 3-col grid of step buttons. Desktop: vertical list */}
            <div className="grid grid-cols-3 md:flex md:flex-col gap-2">
              {steps.map((step, i) => (
                <motion.button
                  key={step.title}
                  onClick={() => setActive(i)}
                  whileHover={{ x: 4 }}
                  className={`flex items-center justify-center md:justify-start gap-2 px-2 sm:px-4 py-2.5 sm:py-3 rounded-lg text-center md:text-left transition-all text-sm sm:text-base md:text-lg font-semibold ${
                    i === active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <step.icon size={16} className="shrink-0" />
                  <span className="leading-tight">{step.title}</span>
                </motion.button>
              ))}
            </div>
            <div className="bg-muted rounded-xl p-5 sm:p-8 md:p-12 flex items-center min-h-[180px] md:min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                    {(() => { const Icon = steps[active].icon; return <Icon size={20} className="text-primary sm:[&]:w-6 sm:[&]:h-6" />; })()}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-3 sm:mb-4">{steps[active].title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">{steps[active].description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default ProcessSection;
