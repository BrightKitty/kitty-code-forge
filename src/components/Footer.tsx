import logoTransparent from "@/assets/logo-transparent.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 sm:py-12">
      <div className="container flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <img src={logoTransparent} alt="BrightKitty" className="h-6 w-6 sm:h-8 sm:w-8" />
          <span className="font-display font-bold text-base sm:text-lg">BrightKitty</span>
        </div>
        <p className="text-xs sm:text-sm opacity-60 text-center">
          © {new Date().getFullYear()} BrightKitty. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
