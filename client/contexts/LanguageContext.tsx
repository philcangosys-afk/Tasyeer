import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isArabic: boolean;
  isEnglish: boolean;
  t: (key: string) => string;
}

const translations = {
  // Header & Navigation
  "nav.home": { ar: "الرئيسية", en: "Home" },
  "nav.about": { ar: "عن الشركة", en: "About Us" },
  "nav.services": { ar: "خدماتنا", en: "Our Services" },
  "nav.projects": { ar: "مشاريعنا", en: "Our Projects" },
  "nav.policies": { ar: "السياسات والشهادات", en: "Policies & Certificates" },
  "nav.contact": { ar: "اتصل بنا", en: "Contact Us" },

  // Hero Section
  "hero.title": {
    ar: "بناء المستقبل بقوة واحترافية",
    en: "Building the Future with Strength & Expertise",
  },
  "hero.subtitle": {
    ar: "شركة طسير لتكييف عام متخصصة في البنية التحتية والطرق والمناظر الطبيعية في الإمارات العربية المتحدة",
    en: "Leading infrastructure and construction company specializing in roads, landscaping, and maintenance solutions across the UAE",
  },
  "hero.cta": { ar: "استكشف المشاريع", en: "Explore Projects" },

  // At a Glance Section
  "glance.title": { ar: "معلومات عن الشركة", en: "At a Glance" },
  "glance.projects": { ar: "مشروع مكتمل", en: "Projects Completed" },
  "glance.clients": { ar: "عملاء معروفين", en: "Satisfied Clients" },
  "glance.team": { ar: "متخصصين", en: "Team Members" },
  "glance.experience": { ar: "سنوات الخبرة", en: "Years of Excellence" },

  // Services Section
  "services.title": { ar: "خدماتنا الرئيسية", en: "Our Services" },
  "services.infrastructure": {
    ar: "البنية التحتية والطرق",
    en: "Infrastructure & Roads",
  },
  "services.landscaping": { ar: "تنسيق المناظر الطبيعية", en: "Landscaping" },
  "services.maintenance": {
    ar: "الصيانة والتجديد",
    en: "Maintenance & Renovation",
  },
  "services.drainage": {
    ar: "الري والصرف الصحي",
    en: "Irrigation & Drainage",
  },

  // Featured Projects
  "projects.featured": { ar: "المشاريع المميزة", en: "Featured Projects" },
  "projects.viewall": { ar: "عرض جميع المشاريع", en: "View All Projects" },

  // Footer
  "footer.about": { ar: "عن طسير", en: "About Tasyeer" },
  "footer.quicklinks": { ar: "روابط سريعة", en: "Quick Links" },
  "footer.contact": { ar: "معلومات الاتصال", en: "Contact Information" },
  "footer.location": { ar: "منطقة الكاد 1، أبو ظبي", en: "ICAD1, Abu Dhabi" },
  "footer.phone": { ar: "الهاتف", en: "Phone" },
  "footer.email": { ar: "البريد الإلكتروني", en: "Email" },
  "footer.rights": { ar: "جميع الحقوق محفوظة", en: "All Rights Reserved" },
};

type TranslationKey = keyof typeof translations;

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage or default to Arabic
    const saved = localStorage.getItem("language");
    return (saved as Language) || "ar";
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    // Set HTML lang attribute
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  const isArabic = language === "ar";
  const isEnglish = language === "en";

  const t = (key: string): string => {
    const translationKey = key as TranslationKey;
    if (translationKey in translations) {
      return translations[translationKey][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, isArabic, isEnglish, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
