import { useState } from "react";
import { Menu, X } from "lucide-react";
import wordmarkBlue from "@/assets/wordmark-blue.png";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "PROMISE", href: "#promise" },
  { label: "PROCESS", href: "#process" },
  { label: "TECH", href: "#tech" },
  { label: "SERVICES", href: "#services" },
  { label: "STORIES", href: "#stories" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          <img src={wordmarkBlue} alt="BrightKitty" className="h-8" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-semibold tracking-widest text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold tracking-widest text-foreground hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
