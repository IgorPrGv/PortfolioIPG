import { Download, ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import profilePhoto from "@/assets/profile-photo.jpg";
const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-14"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left column */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight group cursor-default">
              <span className="text-foreground inline-block transition-all duration-300 group-hover:scale-[1.03] group-hover:brightness-125">Igor</span>{" "}
              <span className="text-primary inline-block transition-all duration-300 group-hover:scale-[1.03] group-hover:brightness-125">Pereira</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light">
              {t("Engenheiro de Computação.", "Computer Engineer.")}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-200"
              >
                <Download size={16} />
                {t("Baixar CV", "Download CV")}
              </a>
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold text-sm hover:border-primary hover:bg-muted transition-all duration-200"
              >
                <ArrowDown size={16} />
                {t("Ver projetos", "View projects")}
              </button>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 justify-center md:justify-start pt-2">
              {[
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Mail, href: "mailto:igor@email.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary hover:scale-110 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right column: Photo */}
          <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-border shadow-2xl shadow-primary/10">
              <img
                src={profilePhoto}
                alt="Igor Pereira"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
