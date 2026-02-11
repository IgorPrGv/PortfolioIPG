import { useLanguage } from "../contexts/LanguageContext";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  techs: string[];
  codeUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: {
      pt: "Irrigação Inteligente com Reúso de Água Condensada",
      en: "Smart Irrigation System using AC Condensate Reuse",
    },
    description: {
      pt: "Protótipo IoT de baixo custo que reutiliza água condensada de ar-condicionado para irrigação automatizada, com decisão baseada em sensores de umidade do solo e nível do reservatório.",
      en: "A low-cost IoT prototype that reuses air-conditioner condensate to automate irrigation based on soil moisture and reservoir level sensing.",
    },
    techs: ["ESP32", "C/C++", "MQTT", "Supabase", "PostgreSQL", "Grafana"],
    codeUrl: "https://github.com",
  },
  {
    title: { pt: "Steam da UFC", en: "Steam da UFC" },
    description: {
      pt: "Plataforma de jogos com arquitetura em microsserviços e orquestração via Docker, onde desenvolvedores publicam jogos e jogadores gerenciam suas bibliotecas.",
      en: "A game platform built with a microservices-based architecture and Docker orchestration, allowing developers to publish games and players to manage personal libraries.",
    },
    techs: ["TypeScript", "Node.js", "Express", "React", "Docker", "PostgreSQL", "DynamoDB", "RabbitMQ"],
    codeUrl: "https://github.com",
  },
  {
    title: {
      pt: "Predição de Inadimplência em Cartões de Crédito",
      en: "Credit Card Default Prediction",
    },
    description: {
      pt: "Projeto de Ciência de Dados focado em análise e modelagem para prever inadimplência com base no dataset 'Default of Credit Card Clients'.",
      en: "A Data Science project focused on exploratory analysis and machine learning modeling to predict credit card default.",
    },
    techs: ["Python", "Pandas", "Scikit-learn", "Poetry"],
    codeUrl: "https://github.com",
  },
  {
    title: {
      pt: "Controle de Mão Robótica via Visão Computacional",
      en: "Robotic Hand Control via Computer Vision",
    },
    description: {
      pt: "Aplicativo desktop em Python que rastreia a mão do usuário em tempo real via webcam e MediaPipe, acionando servomotores de uma mão impressa em 3D.",
      en: "A Python desktop app that tracks the user's hand in real time (webcam + MediaPipe), computes finger angles, and drives servos of a 3D-printed robotic hand.",
    },
    techs: ["Python", "OpenCV", "MediaPipe", "Arduino", "PyFirmata"],
    codeUrl: "https://github.com",
  },
  {
    title: {
      pt: "Segmentação Pulmonar (Frontend DICOM)",
      en: "Lung Segmentation Web App (DICOM)",
    },
    description: {
      pt: "Aplicação web para upload de arquivos DICOM e segmentação pulmonar com seleção de métodos e ajuste de parâmetros de pré/pós-processamento.",
      en: "A web application for uploading DICOM files and performing lung segmentation with selectable methods and configurable pre/post-processing parameters.",
    },
    techs: ["React", "TypeScript", "TailwindCSS", "shadcn/ui"],
    codeUrl: "https://github.com",
  },
];

const MAX_VISIBLE_TAGS = 5;

const ProjectsSection = () => {
  const { language, t } = useLanguage();

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-16 group cursor-default">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground inline-block">
            {t("Projetos", "Projects")}
          </h2>
          <div className="flex justify-center mt-4">
            <div className="h-1 bg-primary rounded-full transition-all duration-300 w-8 group-hover:w-24" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, idx) => {
            const title = language === "pt" ? project.title.pt : project.title.en;
            const desc = language === "pt" ? project.description.pt : project.description.en;
            const visibleTechs = project.techs.slice(0, MAX_VISIBLE_TAGS);
            const extraCount = project.techs.length - MAX_VISIBLE_TAGS;

            return (
              <div
                key={idx}
                className="group flex flex-col rounded-2xl bg-gradient-to-b from-card to-muted/30 border border-border shadow-lg
                  hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1
                  transition-all duration-300"
              >
                {/* Placeholder image area */}
                <div className="h-40 bg-muted/50 rounded-t-2xl flex items-center justify-center">
                  <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                    {t("Imagem do projeto", "Project image")}
                  </span>
                </div>

                {/* Text */}
                <div className="flex-1 flex flex-col p-5">
                  <h3 className="font-display font-semibold text-foreground line-clamp-2 mb-2 transition-all duration-200 group-hover:text-primary group-hover:scale-[1.02] origin-left">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                    {desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4 max-h-14 overflow-hidden">
                    {visibleTechs.map((tech, techIdx) => {
                      const variant = techIdx % 3;
                      const variantClasses = variant === 0
                        ? "border-primary/40 text-primary shadow-[0_0_6px_hsl(38_97%_53%/0.1)]"
                        : variant === 1
                        ? "border-primary/30 text-primary/85 shadow-[0_0_6px_hsl(38_97%_53%/0.08)]"
                        : "border-primary/25 text-primary/75 shadow-[0_0_6px_hsl(38_97%_53%/0.06)]";
                      return (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded-full text-xs font-medium bg-[hsl(222_55%_12%)] border ${variantClasses} focus:outline-none focus:ring-2 focus:ring-primary/50`}
                          tabIndex={0}
                        >
                          {tech}
                        </span>
                      );
                    })}
                    {extraCount > 0 && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[hsl(222_55%_12%)] border border-primary/30 text-primary/80">
                        +{extraCount}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-auto">
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-all duration-200"
                      >
                        <Github size={14} />
                        {t("Ver código", "View code")}
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:scale-105 transition-all duration-200"
                      >
                        <ExternalLink size={14} />
                        Live demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
