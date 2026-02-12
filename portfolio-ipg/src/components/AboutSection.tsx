import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { aboutContent } from "../contents/about.content";
import {
  Cog,
  BarChart3,
  Image as ImageIcon,
  Wifi,
  MessageSquare,
  Plus,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";

// Imagens Individuais
import pythonImg from "../assets/icons/python_orange.svg";
import cImg from "../assets/icons/c_orange.svg";
import javaImg from "../assets/icons/java_orange.svg";
import jsImg from "../assets/icons/js_orange.svg";
import reactImg from "../assets/icons/react_orange.png";
import expressImg from "../assets/icons/express_orange.png";
import postgresImg from "../assets/icons/postgres_orange.svg";
import dockerImg from "../assets/icons/docker_orange.png";
import gitImg from "../assets/icons/git_orange.png";
import awsImg from "../assets/icons/aws_orange.png";
import springImg from "../assets/icons/spring_orange.svg";
import nodeImg from "../assets/icons/node_orange.png"; 
import mongoImg from "../assets/icons/mongodb_orange.svg";
import tsImg from "../assets/icons/ts_orange.png";
import tailwindImg from "../assets/icons/tailwind_orange.svg";

const AlternatingIcon = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="tool icon"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

// --- FERRAMENTAS ---
const toolsImages: Record<string, string | string[]> = {
  "Python": pythonImg,
  "C/C++": cImg,
  "Java & Spring Boot": [javaImg, springImg],
  "JavaScript/TypeScript": [jsImg, tsImg], 
  "React & Tailwind": [reactImg, tailwindImg],
  "ExpressJs (NodeJs)": [expressImg, nodeImg], 
  "PostgreSQL & MongoDB": [postgresImg, mongoImg],
  "Docker": dockerImg,
  "Git": gitImg,
  "AWS Services": awsImg,
};

// --- FOCUS AREAS ---
const focusIcons: Record<string, React.ElementType> = {
  "Software engineering": Cog,
  "Data science": BarChart3,
  "Digital image processing": ImageIcon,
  "Internet of Things": Wifi,
  "Natural language processing": MessageSquare,
};

interface CardProps {
  name: string;
  visual: React.ReactNode; 
  popover?: string[];
}

const AboutSection = () => {
  const { tr, language } = useLanguage();

  const renderCard = ({ name, visual, popover }: CardProps) => {
    const cardContent = (
      <div
        className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-muted/60 border border-border text-sm font-medium text-foreground cursor-pointer
          hover:border-primary/60 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5
          transition-all duration-200"
      >
        <div className="shrink-0 flex items-center justify-center w-7 h-7">
          {visual}
        </div>

        <span className="flex-1">{name}</span>
        
        {popover && (
          <Plus size={14} className="text-muted-foreground shrink-0" />
        )}
      </div>
    );

    if (popover) {
      return (
        <Popover key={name}>
          <PopoverTrigger asChild>{cardContent}</PopoverTrigger>
          <PopoverContent className="bg-popover border-border text-popover-foreground text-xs p-3 w-auto max-w-xs">
            <ul className="space-y-1">
              {popover.map((item, i) => (
                <li key={i} className="text-muted-foreground">{item}</li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      );
    }

    return <div key={name}>{cardContent}</div>;
  };

  return (
    <section id="about" className="py-16 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título da Seção */}
        <div className="text-center mb-6 group cursor-default">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground inline-block">
            {aboutContent.sectionTitle[language].a}
            <span className="text-primary">{aboutContent.sectionTitle[language].b}</span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="h-1 bg-primary rounded-full transition-all duration-300 w-8 group-hover:w-24" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Esquerda: Texto Sobre Mim */}
          <div className="max-w-[52ch] md:self-center">
            <p className="text-base uppercase tracking-widest text-primary/80 font-medium mb-4">
              {tr(aboutContent.leftKicker)}
            </p>
            
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p 
                key={index} 
                className={`text-muted-foreground text-justify leading-[1.85] text-[1rem] ${
                  index < aboutContent.paragraphs.length - 1 ? "mb-6" : ""
                }`}
              >
                {tr(paragraph)}
              </p>
            ))}
          </div>

          {/* Direita: Skills */}
          <div className="space-y-8">
            
            {/* 1. TOOLS */}
            <div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                {tr(aboutContent.toolsTitle)}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {aboutContent.tools.map((tool) => {
                  const imageSource = toolsImages[tool.name];
                  
                  let VisualComponent;

                  if (Array.isArray(imageSource)) {
                    VisualComponent = <AlternatingIcon images={imageSource} />;
                  } else if (imageSource) {
                    VisualComponent = (
                      <img 
                        src={imageSource} 
                        alt={tool.name} 
                        className="w-full h-full object-contain" 
                      />
                    );
                  } else {
                     VisualComponent = <span className="w-full h-full bg-primary/20 rounded-full" />
                  }

                  return renderCard({
                    name: tool.name,
                    visual: VisualComponent,
                    popover: tool.popover
                  });
                })}
              </div>
            </div>

            {/* FOCUS AREAS */}
            <div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                {tr(aboutContent.focusAreasTitle)}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {aboutContent.focusAreas.map((area) => {
                  const iconKey = area.name.en;
                  const Icon = focusIcons[iconKey] || Cog; 
                  const translatedPopover = area.popover?.map(item => tr(item));
                  return renderCard({
                    name: tr(area.name),
                    visual: <Icon className="w-full h-full text-primary" />,
                    popover: translatedPopover
                  });
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;