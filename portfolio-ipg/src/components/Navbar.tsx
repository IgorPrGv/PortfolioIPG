import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { id: "home", label: t("Início", "Home") },
    { id: "about", label: t("Sobre", "About") },
    { id: "projects", label: t("Projetos", "Projects") },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Left: Logo */}
        <span className="font-display font-bold text-lg text-foreground">
          IPG
        </span>

        {/* Center: nav links (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right: language toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Toggle language"
          >
            <Globe size={18} />
            <span className="font-medium">{language === "pt" ? "PT" : "EN"}</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-4">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left py-2.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
