import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, Leaf, Wrench, Droplet } from "lucide-react";

interface ServiceItem {
  key: string;
  icon: React.ReactNode;
  description: string;
}

export const ServicesSection = () => {
  const { t, isArabic } = useLanguage();

  const services: ServiceItem[] = [
    {
      key: "services.infrastructure",
      icon: <Building2 size={48} />,
      description: isArabic
        ? "توفير حلول شاملة للبنية التحتية والطرق مع أعلى معايير الجودة والسلامة"
        : "Comprehensive infrastructure and road solutions with highest quality and safety standards",
    },
    {
      key: "services.landscaping",
      icon: <Leaf size={48} />,
      description: isArabic
        ? "تصميم وتنفيذ مشاريع تنسيق حدائق احترافية وعصرية"
        : "Professional and modern landscaping design and implementation projects",
    },
    {
      key: "services.maintenance",
      icon: <Wrench size={48} />,
      description: isArabic
        ? "خدمات صيانة وتجديد شاملة للمشاريع السابقة والحالية"
        : "Comprehensive maintenance and renovation services for existing projects",
    },
    {
      key: "services.drainage",
      icon: <Droplet size={48} />,
      description: isArabic
        ? "تصميم وتنفيذ أنظمة الري والصرف الصحي المتقدمة"
        : "Advanced irrigation and drainage systems design and implementation",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-tasyeer-dark-gray mb-4">
            {t("services.title")}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ translateY: -10 }}
              className="group p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-tasyeer-maroon mb-4 group-hover:text-tasyeer-orange transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="font-cairo text-xl font-bold text-tasyeer-dark-gray mb-3">
                {t(service.key)}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-tasyeer-maroon group-hover:gap-3 transition-all duration-300">
                <span className="text-sm font-semibold">{isArabic ? "اعرف أكثر" : "Learn More"}</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isArabic ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
