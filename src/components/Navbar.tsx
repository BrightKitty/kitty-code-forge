import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import wordmarkBlue from "@/assets/wordmark-blue.png";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "PROMISE", href: "#promise" },
  { label: "PROCESS", href: "#process" },
  { label: "TECH", href: "#tech" },
  { label: "SERVICES", href: "#services" },
  { label: "WORK", href: "#portfolio" },
  { label: "STORIES", href: "#stories" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-14 sm:h-16">
        <a href="#" className="flex items-center">
          <img src={wordmarkBlue} alt="BrightKitty" className="h-7 sm:h-8" />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs font-semibold tracking-widest transition-colors relative pb-1 ${
                activeSection === item.href.slice(1)
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                  : scrolled
                  ? "text-foreground hover:text-primary"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container py-3 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-semibold tracking-widest transition-colors py-1 ${
                    activeSection === item.href.slice(1)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
