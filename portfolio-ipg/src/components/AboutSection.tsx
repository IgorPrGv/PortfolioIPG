import { useLanguage } from "../contexts/LanguageContext";
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

interface SkillCard {
  name: string;
  icon: React.ReactNode;
  popover?: string[];
}

const AboutSection = () => {
  const { t } = useLanguage();

  const tools: SkillCard[] = [
    { name: "Python", icon: <Code2 size={16} /> },
    { name: "C / C++", icon: <Cpu size={16} /> },
    { name: "Java & Spring Boot", icon: <Coffee size={16} /> },
    { name: "JavaScript / TypeScript", icon: <FileCode size={16} /> },
    { name: "React & Tailwind", icon: <Palette size={16} /> },
    { name: "Node.js (Express)", icon: <Server size={16} /> },
    { name: "PostgreSQL & MongoDB", icon: <Database size={16} /> },
    { name: "Docker", icon: <Container size={16} /> },
    { name: "Git & Linux", icon: <GitBranch size={16} /> },
    { name: "AWS Services", icon: <Cloud size={16} />, popover: ["EC2, RDS, DynamoDB", "S3, SNS/SQS"] },
  ];

  const focusAreas: SkillCard[] = [
    { name: t("Engenharia de software", "Software engineering"), icon: <Cog size={16} /> },
    { name: t("Ciência de dados", "Data science"), icon: <BarChart3 size={16} />, popover: [
      t("Análise de dados: Pandas", "Data analysis: Pandas"),
      t("Machine learning: scikit-learn", "Machine learning: scikit-learn"),
      t("Deep learning: TensorFlow, PyTorch", "Deep learning: TensorFlow, PyTorch"),
    ]},
    { name: t("Processamento digital de imagens", "Digital image processing"), icon: <Image size={16} /> },
    { name: t("Internet das Coisas", "Internet of Things"), icon: <Wifi size={16} />, popover: ["ESP32, MQTT", t("Sensores", "Sensors")] },
    { name: t("Processamento de linguagem natural", "Natural language processing"), icon: <MessageSquare size={16} />, popover: ["CrewAI, LangChain", "RAG"] },
  ];

  const renderCard = (card: SkillCard) => {
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
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section title with hover-expanding underline */}
        <div className="text-center mb-16 group cursor-default">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground inline-block">
            {t("Sobre ", "About ")}<span className="text-primary">{t("Mim", "Me")}</span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="h-1 bg-primary rounded-full transition-all duration-300 w-8 group-hover:w-24" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: About text — editorial, no card */}
          <div className="max-w-[52ch] md:self-center">
            <p className="text-xs uppercase tracking-widest text-primary/80 font-medium mb-4">
              {t("Quem sou eu", "Who I am")}
            </p>
            <p className="text-muted-foreground leading-[1.85] mb-6 text-[0.95rem]">
              {t(
                "Sou estudante do 9º semestre de Engenharia de Computação na Universidade Federal do Ceará. Atualmente, atuo como bolsista de P&D no GREat Lab, onde colaboro na construção de serviços e interfaces para uma plataforma de monitoramento de qualidade de vida, integrando dados biométricos de wearables e avaliações clínicas.",
                "I am a 9th semester Computer Engineering student at the Federal University of Ceará. Currently, I work as an R&D fellow at GREat Lab, where I collaborate in the construction of services and interfaces for a quality of life monitoring platform, integrating biometric data from wearables and clinical evaluations."
              )}
            </p>
            <p className="text-muted-foreground leading-[1.85] text-[0.95rem]">
              {t(
                "Minha trajetória acadêmica também inclui a participação na entrega de sites e sistemas web na empresa júnior do curso, bem como a prototipagem de soluções IoT com sistemas embarcados.",
                "My academic background also includes participating in the delivery of websites and web systems at the junior company of the course, as well as prototyping IoT solutions with embedded systems."
              )}
            </p>
          </div>

          {/* Right: Skills */}
          <div className="space-y-8">
            {/* Tools */}
            <div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                {t("Ferramentas", "Tools")}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {tools.map(renderCard)}
              </div>
            </div>

            {/* Focus Areas */}
            <div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                {t("Temáticas", "Focus Areas")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {focusAreas.map(renderCard)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
