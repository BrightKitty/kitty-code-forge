import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import contactKitty from "@/assets/contact-kitty.png";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon 🐱");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${contactKitty})` }}>
        <div className="absolute inset-0 bg-secondary/90" />
      </div>

      <div className="relative container py-16 md:py-24">
        <AnimateIn>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-secondary-foreground/60">WANT TO SAY "Hi"?</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground">
            Contact <span className="text-primary">Us</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <form onSubmit={handleSubmit} className="mt-12 max-w-xl grid gap-4">
            <input type="text" placeholder="Your name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-secondary-foreground/10 border border-secondary-foreground/20 rounded-lg px-5 py-3 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:border-primary transition-colors" />
            <input type="email" placeholder="Your email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-secondary-foreground/10 border border-secondary-foreground/20 rounded-lg px-5 py-3 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:border-primary transition-colors" />
            <textarea placeholder="Your message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-secondary-foreground/10 border border-secondary-foreground/20 rounded-lg px-5 py-3 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none" />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-4 font-bold text-sm tracking-widest uppercase w-fit"
            >
              SEND MESSAGE <Send size={16} />
            </motion.button>
          </form>
        </AnimateIn>
      </div>
    </section>
  );
};

export default ContactSection;
