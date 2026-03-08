import { Quote } from "lucide-react";
import AnimateIn from "./AnimateIn";

const testimonials = [
  {
    quote: "BrightKitty has become like family to us. They have been an integral part of scaling our company in our creative development, and we're looking forward to a long and fruitful relationship. I enthusiastically recommend BrightKitty if you want to take your company to new heights.",
    name: "Sarah Mitchell",
    company: "TechPulse Inc.",
  },
  {
    quote: "Working with BrightKitty was an absolute game-changer. Their attention to detail and commitment to quality resulted in a 40% increase in our conversion rate. The team truly understands how to blend aesthetics with functionality.",
    name: "James Chen",
    company: "NovaBrand Studio",
  },
];

const StoriesSection = () => {
  return (
    <section id="stories" className="py-24 bg-muted">
      <div className="container">
        <AnimateIn>
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-4">CHECK OUT</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Our <span className="text-gradient-brand">Stories</span>
          </h2>
        </AnimateIn>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 0.15} direction={i === 0 ? "left" : "right"}>
              <div className="bg-background rounded-xl p-8 md:p-10 relative h-full">
                <Quote size={32} className="text-primary/20 mb-4" />
                <p className="italic text-muted-foreground leading-relaxed">"{t.quote}"</p>
                <div className="mt-6">
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-primary">{t.company}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
