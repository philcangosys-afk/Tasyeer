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
    ar: "شركة طسير متخصصة في البنية التحتية والطرق والمناظر الطبيعية والصيانة في الإمارات العربية المتحدة",
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

  // About Page
  "about.title": { ar: "عن طسير", en: "About Tasyeer" },
  "about.founded": { ar: "تأسست عام", en: "Founded in" },
  "about.intro": {
    ar: "شركة طسير للمقاولات العامة هي شركة متخصصة في خدمات دعم البنية التحتية في الإمارات العربية المتحدة. مع تاريخ يعود إلى عام 2019، استقرت الشركة كلاعب رئيسي في قطاعات مختلفة بما فيها الطرق السريعة والنقل والسكك الحديدية والطاقة وإدارة النفايات والمرافق العامة.",
    en: "Tasyeer General Contracting is a leading infrastructure support services company based in the UAE. With a history dating back to 2019, we have established ourselves as a key player in various sectors including highways, transportation, railway, energy, waste management, and utilities.",
  },
  "about.vision.title": { ar: "رؤيتنا", en: "Our Vision" },
  "about.vision.content": {
    ar: "أن نكون شركة رائدة ومبتكرة في السوق الإقليمية لخدمات الهندسة المدنية والمقاولات.",
    en: "To be a pioneering and innovative company in the regional market for civil engineering and construction services.",
  },
  "about.mission.title": { ar: "رسالتنا", en: "Our Mission" },
  "about.mission.content": {
    ar: "تقديم خدمات هندسية بناء عالمية الجودة توفر حلولاً فعالة وميسورة التكلفة ومستدامة وعالية الجودة.",
    en: "To be a world-class engineering construction company providing efficient, affordable, sustainable, and high-quality services.",
  },
  "about.values.title": { ar: "قيمنا", en: "Our Values" },
  "about.values.content": {
    ar: "نحن ننتمي للتميز والجودة والمهنية والنزاهة والإبداع والموقف الإيجابي في كل ما نقوم به.",
    en: "We maintain the highest standards of professionalism, integrity, creativity, and a positive attitude in everything we do.",
  },
  "about.commitment": {
    ar: "التزامنا بالتميز في تقديم خدمات البناء والهندسة عالية الجودة مع ضمان المشاريع الناجحة وفعالة التكلفة.",
    en: "Our commitment to delivering top-quality construction expertise and services, ensuring cost-effective and successful projects.",
  },

  // Services Page
  "services.pageTitle": { ar: "خدماتنا المتخصصة", en: "Our Specialized Services" },
  "services.intro": {
    ar: "نقدم مجموعة شاملة من خدمات البنية التحتية والمقاولات التي تلبي احتياجات السوق الإقليمية",
    en: "We provide a comprehensive range of infrastructure and contracting services tailored to meet regional market needs",
  },
  "services.infrastructure": {
    ar: "أعمال البنية التحتية",
    en: "Infrastructure Works",
    desc: {
      ar: "خدمات شاملة لتطوير وتحسين البنية التحتية الأساسية",
      en: "Comprehensive services for developing and improving essential infrastructure",
    },
  },
  "services.highways": {
    ar: "بناء الطرق السريعة",
    en: "Highways Construction",
    desc: {
      ar: "تشييد الطرق السريعة باستخدام أحدث التقنيات والمواد عالية الجودة",
      en: "Highway construction using latest technologies and high-quality materials",
    },
  },
  "services.road-maintenance": {
    ar: "صيانة وإصلاح الطرق",
    en: "Road Maintenance & Repair",
    desc: {
      ar: "خدمات صيانة دورية وإصلاح شاملة للطرق الموجودة",
      en: "Regular maintenance and comprehensive repair services for existing roads",
    },
  },
  "services.internal-roads": {
    ar: "بناء الطرق الداخلية",
    en: "Internal Roads Construction",
    desc: {
      ar: "تطوير شبكات الطرق الداخلية للمشاريع والمجمعات السكنية والتجارية",
      en: "Development of internal road networks for projects and residential/commercial complexes",
    },
  },
  "services.asphalt": {
    ar: "الرصف والتعبيد",
    en: "Asphalt & Paving",
    desc: {
      ar: "خدمات الرصف بالإسفلت والتعبيد بأعلى معايير الجودة",
      en: "Asphalt and paving services with highest quality standards",
    },
  },
  "services.supply": {
    ar: "توريد النقل والمواد",
    en: "Material Supply & Transportation",
    desc: {
      ar: "توريد وتنقل المواد البناء والخامات اللازمة للمشاريع",
      en: "Supply and transportation of construction materials and raw materials",
    },
  },
  "services.landscaping": {
    ar: "تنسيق المناظر الطبيعية",
    en: "Landscaping & Gardening",
    desc: {
      ar: "تصميم وتنفيذ مشاريع تنسيق المناظر الطبيعية والحدائق",
      en: "Design and implementation of landscaping and gardening projects",
    },
  },
  "services.excavation": {
    ar: "الحفر والأعمال الترابية",
    en: "Excavation & Earthworks",
    desc: {
      ar: "أعمال الحفر والحفريات والأعمال الترابية المتخصصة",
      en: "Specialized excavation and earthwork operations",
    },
  },
  "services.oilgas": {
    ar: "مقاولات مرافق النفط والغاز",
    en: "Oil & Gas Field Facilities",
    desc: {
      ar: "تشييد وصيانة مرافق النفط والغاز بكفاءة عالية",
      en: "Construction and maintenance of oil and gas facilities with high efficiency",
    },
  },
  "services.building": {
    ar: "مقاولات المشاريع السكنية",
    en: "Building Projects",
    desc: {
      ar: "تشييد المشاريع السكنية والتجارية بمعايير عالمية",
      en: "Construction of residential and commercial projects with international standards",
    },
  },
  "services.building-maintenance": {
    ar: "صيانة العمارات",
    en: "Building Maintenance",
    desc: {
      ar: "خدمات صيانة شاملة للعمارات والمنشآت",
      en: "Comprehensive maintenance services for buildings and facilities",
    },
  },
  "services.renovation": {
    ar: "التجديد والصيانة",
    en: "Renovation & Maintenance",
    desc: {
      ar: "أعمال التجديد والصيانة الدورية للمشاريع القائمة",
      en: "Renovation and periodic maintenance of existing projects",
    },
  },
  "services.irrigation": {
    ar: "شبكات الري",
    en: "Irrigation Networks",
    desc: {
      ar: "تصميم وتنفيذ شبكات الري الحديثة والفعالة",
      en: "Design and implementation of modern and efficient irrigation networks",
    },
  },
  "services.stormwater": {
    ar: "المياه الجوفية",
    en: "Storm Water",
    desc: {
      ar: "أنظمة صرف المياه الجوفية والعاصفة",
      en: "Storm water and drainage systems",
    },
  },
  "services.drainage": {
    ar: "أعمال الصرف الصحي",
    en: "Drainage Works",
    desc: {
      ar: "تشييد شبكات الصرف الصحي والصرف بمعايير عالية",
      en: "Construction of sanitary and drainage networks with high standards",
    },
  },

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
