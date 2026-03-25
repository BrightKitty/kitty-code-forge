import { useState } from "react";
import { Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";
import contactKitty from "@/assets/contact-kitty.png";

const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSendClick = () => {
    if (userInput.trim()) {
      setIsOpen(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon 🐱");
    setIsOpen(false);
    setFormData({ name: "", email: "" });
    setUserInput("");
  };

  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${contactKitty})` }}>
        <div className="absolute inset-0 bg-secondary/90" />
      </div>

      <div className="relative container py-16 md:py-24">
        {/* Header Animation */}
        <AnimateIn>
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-10"
          >
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-2 text-secondary-foreground/60">Kitty wants to know</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-foreground">
            <span className="text-primary">what's on your mind?</span>
            </h2>
          </motion.div>
        </AnimateIn>

        {/* Main Input Bar */}
        <AnimateIn delay={0.2}>
          <motion.div 
            whileHover={{ scale: 1.01 }}
            whileFocus={{ borderColor: "hsl(var(--primary))", boxShadow: "0 10px 25px -5px rgba(var(--primary) / 0.1)" }}
            className="w-full max-w-2xl mx-auto flex items-center border-2 border-secondary-foreground/30 rounded-full px-6 py-4 bg-secondary-foreground/5 transition-colors"
          >
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendClick()}
              placeholder="I want to build a landing page for my business that..."
              className="flex-grow outline-none text-lg bg-transparent placeholder:text-secondary-foreground/40 text-secondary-foreground"
            />
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={handleSendClick}
              className="ml-2 p-2 rounded-full hover:bg-primary/10 text-secondary-foreground/60 hover:text-primary transition-colors"
            >
              <Send size={24} />
            </motion.button>
          </motion.div>
        </AnimateIn>

        {/* Modal with Framer Motion */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-secondary w-full max-w-sm rounded-2xl p-8 shadow-2xl relative border border-secondary-foreground/10"
              >
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-secondary-foreground/40 hover:text-secondary-foreground transition-colors"
                >
                  <X size={24} />
                </button>

                <h2 className="text-2xl font-bold text-secondary-foreground mb-8">Let's Connect</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground/70">Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full border-2 border-secondary-foreground/20 rounded-lg px-4 py-3 outline-none focus:border-primary focus:bg-primary/5 transition-colors bg-secondary-foreground/5 text-secondary-foreground placeholder:text-secondary-foreground/40"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-foreground/70">Email</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full border-2 border-secondary-foreground/20 rounded-lg px-4 py-3 outline-none focus:border-primary focus:bg-primary/5 transition-colors bg-secondary-foreground/5 text-secondary-foreground placeholder:text-secondary-foreground/40"
                    />
                  </div>

                  <div className="flex justify-end mt-8">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold text-sm transition-all"
                    >
                      Submit
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactSection;
