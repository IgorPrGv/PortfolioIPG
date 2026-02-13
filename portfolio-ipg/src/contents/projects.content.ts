import type { ProjectContent } from "./types";
import nutecImg from "../assets/projects/Nutec_3.png";
import nuvemImg from "../assets/projects/Nuvem_1.png";
import avantiImg from "../assets/projects/avanti_2.png";
import bracoImg from "../assets/projects/braco.jpg";
import pdiImg from "../assets/projects/pdi.png";
import diabetesImg from "../assets/projects/DT2M_1.png";

export const projectsContent = {
  sectionTitle: {
    pt: "Projetos",
    en: "Projects",
  },

  imagePlaceholder: {
    pt: "Imagem do projeto",
    en: "Project image",
  },

  viewCode: {
    pt: "Ver código",
    en: "View code",
  },

  projects: [
    {
      title: {
        pt: "Protótipo de irrigação inteligente com reúso de água condensada de AC",
        en: "Prototype of a smart irrigation system using AC condensate water",
      },
      description: {
        pt: "Protótipo IoT de baixo custo que reutiliza água condensada de ar-condicionado para irrigação automatizada, com decisão baseada em sensores de umidade do solo e nível do reservatório.",
        en: "A low-cost IoT prototype that reuses air-conditioner condensate to automate irrigation based on soil moisture and reservoir level sensing.",
      },
      imageUrl: nutecImg,
      techs: ["ESP32", "C/C++", "MQTT", "Supabase", "PostgreSQL", "Grafana"],
      codeUrl: "https://github.com/IgorPrGv/SistemaDeIrrigacaoInteligente",
    },
    {
      title: { pt: "Steam da UFC", en: "Steam da UFC" },
      description: {
        pt: "Plataforma de jogos com arquitetura em microsserviços e orquestração via Docker, onde desenvolvedores publicam jogos e jogadores gerenciam suas bibliotecas.",
        en: "A game platform built with a microservices-based architecture and Docker orchestration, allowing developers to publish games and players to manage personal libraries.",
      },
      imageUrl: nuvemImg,
      techs: ["TypeScript", "Express.Js", "React", "Docker", "PostgreSQL", "AWS SDK", "MinIO/S3", "DynamoDB", "RabbitMQ"],
      codeUrl: "https://github.com/IgorPrGv/nuvem-project-GameWebsite",
    },
    {
      title: {
        pt: "Predição de Inadimplência em Cartões de Crédito",
        en: "Credit Card Default Prediction",
      },
      description: {
        pt: "Projeto de Ciência de Dados focado em análise e modelagem para prever inadimplência com base no dataset 'Default of Credit Card Clients', realizado como parte da formação em Ciência de Dados promovida pelo Instituto Atlântico.",
        en: "Data Science project focused on analysis and modeling to predict credit card default, developed during the Data Science Bootcamp by Atlântico Institute.",
      },
      imageUrl: avantiImg,
      techs: ["Python", "Pandas", "Scikit-learn", "Poetry"],
      codeUrl: "https://github.com/IgorPrGv/Avanti-Bootcamp-CienciaDeDados",
    },
    {
      title: {
        pt: "Controle de Mão Robótica via Visão Computacional",
        en: "Robotic Hand Control via Computer Vision",
      },
      description: {
        pt: "Aplicação de visão computacional que rastreia a mão via webcam e utiliza cálculos vetoriais para converter landmarks do MediaPipe em ângulos de movimento. O sistema envia comandos em tempo real para um Arduino (Firmata), acionando os 5 servomotores de uma mão robótica impressa em 3D.",
        en: "A computer vision application that tracks hand movements via webcam, using vector math to convert MediaPipe landmarks into motion angles. The system sends real-time commands to an Arduino (Firmata) to drive the 5 servomotors of a 3D-printed robotic hand.",
      },
      imageUrl: bracoImg,
      techs: ["Python", "OpenCV", "MediaPipe", "Arduino", "PyFirmata"],
      codeUrl: "https://github.com/ClubeDoHardware/Robot-Arm/tree/main",
    },
    {
      title: {
        pt: "Aplicação Web para Segmentação Pulmonar em Imagens de TC",
        en: "Web Application for Lung Segmentation in CT Images",
      },
      description: {
        pt: "Interface web que gerencia arquivos DICOM, o padrão internacional para imagens médicas, integrando-se a uma API dedicada que executa o pré-processamento, a segmentação e o pós-processamento. O sistema oferece ainda ferramentas para refinamento manual das segmentações, controles de zoom, opções para visualização de densidades e download dos resultados finais.",
        en: "Web interface that manages DICOM files, the international standard for medical imaging, integrating with a dedicated API that performs pre-processing, segmentation, and post-processing. The system also features tools for manual segmentation refinement, zoom controls, options for density visualization and final result download.",
      },
      imageUrl: pdiImg,
      techs: ["React", "TypeScript", "TailwindCSS", "shadcn/ui"],
      codeUrl: "https://github.com/ProjetoFinalPDI/frontend",
    },
    {
      title: {
        pt: "DiabetesAI Care: Ecossistema de Agentes para Diabetes Tipo 2",
        en: "DiabetesAI Care: Agent Ecosystem for Type 2 Diabetes",
      },
      description: {
        pt: "Protótipo de um ecossistema multiagente para apoiar idosos com Diabetes Tipo 2 no dia a dia. Os dois agentes centrais são o Agente Nutricional, que usa RAG em uma base de dados alimentar para montar planos alimentares personalizados, e o Agente Diabético, que analisa séries temporais com um modelo LSTM previamente treinado com uma base de dados (ShanghaiT2DM) e prevê eventos glicêmicos para emitir alertas e indicadores.",
        en: "Prototype of a multi-agent ecosystem designed to support elderly people with Type 2 Diabetes in their daily routine. The two core agents are the Nutritional Agent, which uses RAG over a food database to build personalized meal plans, and the Diabetic Agent, which analyzes time series using an LSTM model previously trained on the ShanghaiT2DM dataset and predicts glycemic events to generate alerts and key indicators.",
      },
      imageUrl: diabetesImg, // importe uma imagem do projeto em ../assets/projects/
      techs: [
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "PostgreSQL",
        "ChromaDB",
        "AngularJS",
        "CrewAI",
        "LangChain",
        "Gemini API",
        "RAG",
        "LSTM",
        "Docker",
      ],
      codeUrl: "https://github.com/IgorPrGv/DiabetesAI",
    },
  ] satisfies ProjectContent[],

  maxVisibleTags: 10,
} as const;

