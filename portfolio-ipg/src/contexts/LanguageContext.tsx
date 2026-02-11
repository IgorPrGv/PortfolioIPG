/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { I18nText, Lang } from "../contents/types";

interface LanguageContextType {
  language: Lang;
  toggleLanguage: () => void;

  // New preferred helper
  tr: (value: I18nText) => string;

  // Backward-compatible helper (optional)
  t: (pt: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Lang>("pt");

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  }, []);

  const tr = useCallback(
    (value: I18nText) => (language === "pt" ? value.pt : value.en),
    [language]
  );

  const t = useCallback(
    (pt: string, en: string) => (language === "pt" ? pt : en),
    [language]
  );

  const ctx = useMemo(() => ({ language, toggleLanguage, tr, t }), [language, toggleLanguage, tr, t]);

  return <LanguageContext.Provider value={ctx}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
