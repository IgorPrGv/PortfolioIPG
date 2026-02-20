import type { I18nText, ToolCardContent, SkillCardContent } from "./types";

export const aboutContent = {
  sectionTitle: {
    pt: { a: "Sobre ", b: "Mim" },
    en: { a: "About ", b: "Me" },
  },

  leftKicker: {
    pt: "Quem sou eu",
    en: "Who I am",
  } satisfies I18nText,

  paragraphs: [
    {
      pt: "Sou estudante do 9º semestre de Engenharia de Computação na Universidade Federal do Ceará. Atualmente, atuo como bolsista de P&D no GREat Lab, onde colaboro na construção de serviços e interfaces para uma plataforma de monitoramento de qualidade de vida, integrando dados biométricos de wearables e avaliações clínicas.",
      en: "I am a 9th-semester Computer Engineering student at the Federal University of Ceará. Currently, I work as an R&D fellow at GREat Lab, where I collaborate on services and interfaces for a quality-of-life monitoring platform, integrating wearable biometric data and clinical assessments.",
    },
    {
      pt: "Minha trajetória acadêmica também inclui a participação na entrega de sites e sistemas web na empresa júnior do curso, bem como a prototipagem de soluções IoT com sistemas embarcados.",
      en: "My academic background also includes delivering websites and web systems at the course’s junior company, as well as prototyping IoT solutions with embedded systems.",
    },
  ] as const,

  toolsTitle: {
    pt: "Ferramentas",
    en: "Tools",
  } satisfies I18nText,

  focusAreasTitle: {
    pt: "Temáticas de interesse",
    en: "Focus Areas",
  } satisfies I18nText,

  tools: [
    { name: "Python" },
    { name: "C/C++" },
    { name: "Java & Spring Boot" },
    { name: "JavaScript/TypeScript" },
    { name: "React & Tailwind" },
    { name: "ExpressJs (NodeJs)" },
    { name: "PostgreSQL & MongoDB" },
    { name: "Docker" },
    { name: "Git" },
    { name: "AWS Services", popover: ["EC2, RDS, DynamoDB", "S3, SNS/SQS"] },
  ] satisfies ToolCardContent[],

  focusAreas: [
    {
      name: { pt: "Engenharia de software", en: "Software engineering" },
    },
    {
      name: { pt: "Ciência de dados", en: "Data science" },
      popover: [
        { pt: "Análise de dados: Pandas", en: "Data analysis: Pandas" },
        { pt: "Machine learning: scikit-learn", en: "Machine learning: scikit-learn" },
        { pt: "Deep learning: TensorFlow, PyTorch", en: "Deep learning: TensorFlow, PyTorch" },
      ],
    },
    {
      name: { pt: "Processamento digital de imagens", en: "Digital image processing" },
    },
    {
      name: { pt: "Internet das Coisas", en: "Internet of Things" },
      popover: [
        { pt: "ESP32, MQTT", en: "ESP32, MQTT" },
        { pt: "Sensores", en: "Sensors" },
      ],
    },
    // {
    //   name: { pt: "Agentes de IA", en: "Agentic AI" },
    //   popover: [
    //     { pt: "CrewAI, LangChain", en: "CrewAI, LangChain" },
    //     { pt: "RAG", en: "RAG" },
    //   ],
    // },
  ] satisfies SkillCardContent[],
} as const;
