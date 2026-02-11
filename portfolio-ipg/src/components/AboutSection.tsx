import { useLanguage } from "../contexts/LanguageContext";
import { aboutContent } from "../contents/about.content"; 
import {
  Code2, Cpu, Coffee, FileCode, Palette, Server,
  Database, Container, GitBranch, Cloud,
  Cog, BarChart3, Image, Wifi, MessageSquare, Plus,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  popover?: string[];
}

const toolsIcons: Record<string, React.ElementType> = {
  "Python": Code2,
  "C/C++": Cpu,
  "Java & Spring Boot": Coffee,
  "JavaScript/TypeScript": FileCode,
  "React & Tailwind": Palette,
  "ExpressJS": Server,
  "PostgreSQL & MongoDB": Database,
  "Docker": Container,
  "Git": GitBranch,
  "AWS Services": Cloud,
};

const focusIcons: Record<string, React.ElementType> = {
  "Software engineering": Cog,
  "Data science": BarChart3,
  "Digital image processing": Image,
  "Internet of Things": Wifi,
  "Natural language processing": MessageSquare,
};

const AboutSection = () => {
  const { tr, language } = useLanguage();

  const renderCard = (card: SkillCardProps) => {
    const cardContent = (
      <div
        className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-muted/60 border border-border text-sm font-medium text-foreground cursor-pointer
          hover:border-primary/60 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5
          transition-all duration-200"
      >
        <span className="text-primary">{card.icon}</span>
        <span className="flex-1">{card.name}</span>
        {card.popover && (
          <Plus size={14} className="text-muted-foreground shrink-0" />
        )}
      </div>
    );

    if (card.popover) {
      return (
        <Popover key={card.name}>
          <PopoverTrigger asChild>{cardContent}</PopoverTrigger>
          <PopoverContent className="bg-popover border-border text-popover-foreground text-xs p-3 w-auto max-w-xs">
            <ul className="space-y-1">
              {card.popover.map((item, i) => (
                <li key={i} className="text-muted-foreground">{item}</li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      );
    }

    return <div key={card.name}>{cardContent}</div>;
  };

  return (
    <section id="about" className="py-16 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section title */}
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
          {/* Left: About text */}
          <div className="max-w-[52ch] md:self-center">
            <p className="text-base  uppercase tracking-widest text-primary/80 font-medium mb-4">
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

          {/* Right: Skills */}
          <div className="space-y-8">
            {/* Tools */}
            <div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                {tr(aboutContent.toolsTitle)}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {aboutContent.tools.map((tool) => {
                  const Icon = toolsIcons[tool.name] || Code2;
                  return renderCard({
                    name: tool.name,
                    icon: <Icon size={16} />,
                    popover: tool.popover
                  });
                })}
              </div>
            </div>

            {/* Focus Areas */}
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
                    icon: <Icon size={24} />,
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