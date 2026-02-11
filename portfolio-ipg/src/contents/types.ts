export type Lang = "pt" | "en";

export type I18nText = {
  pt: string;
  en: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SkillCardContent = {
  name: I18nText;
  popover?: I18nText[]; 
};

export type ToolCardContent = {
  name: string;
  popover?: string[];
};

export type ProjectContent = {
  title: I18nText;
  description: I18nText;
  imageUrl?: string;
  techs: string[];
  codeUrl?: string;
  demoUrl?: string;
};
