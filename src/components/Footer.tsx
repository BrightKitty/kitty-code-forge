import logoTransparent from "@/assets/logo-transparent.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logoTransparent} alt="BrightKitty" className="h-8 w-8" />
          <span className="font-display font-bold text-lg">BrightKitty</span>
        </div>
        <p className="text-sm opacity-60">
          © {new Date().getFullYear()} BrightKitty. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
