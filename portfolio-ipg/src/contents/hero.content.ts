import type { I18nText, SocialLink } from "./types";

export const heroContent = {
  name: {
    first: "Igor",
    last: "Pereira",
  },

  role: {
    pt: "Graduando em Engenharia de Computação na Universidade Federal do Ceará",
    en: "Undergraduate in Computer Engineer at Federal University of Ceará",
  } satisfies I18nText,

  ctaPrimary: {
    pt: "Baixar Resumé",
    en: "Download Resumé",
  } satisfies I18nText,

  ctaSecondary: {
    pt: "Ver projetos",
    en: "View projects",
  } satisfies I18nText,

  cvHref: {
    pt: "/cv-pt.pdf", 
    en: "/cv-en.pdf", 
  } satisfies I18nText,

  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/igor-pereira-2115aa24a/" },
    { label: "GitHub", href: "https://github.com/IgorPrGv" },
    { label: "Email", href: "mailto:igorprgv18@gmail.com" },
  ] satisfies SocialLink[],
} as const;
