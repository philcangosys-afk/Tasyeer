import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  titleAr: string;
  titleEn: string;
  clientAr: string;
  clientEn: string;
  descriptionAr: string;
  descriptionEn: string;
  imageUrl: string;
  category: string;
}

export const FeaturedProjectsSection = () => {
  const { t, isArabic } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const projects: Project[] = [
    {
      id: 1,
      titleAr: "مشروع تطوير الطريق الخارجي",
      titleEn: "Suwaihan Paving Project",
      clientAr: "أدنوك",
      clientEn: "ADNOC",
      descriptionAr: "مشروع تطوير طريق حديث بطول 50 كم مع أنظمة صرف متقدمة",
      descriptionEn: "Modern road development project spanning 50km with advanced drainage systems",
      imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop",
      category: "Infrastructure",
    },
    {
      id: 2,
      titleAr: "مدينة محمد بن زايد - البنية التحتية",
      titleEn: "MBZ City Infrastructure",
      clientAr: "الدار",
      clientEn: "Aldar",
      descriptionAr: "تطوير كامل للبنية التحتية لمشروع سكني متعدد الاستخدامات",
      descriptionEn: "Complete infrastructure development for a mixed-use residential project",
      imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop",
      category: "Infrastructure",
    },
    {
      id: 3,
      titleAr: "تنسيق حدائق منتزه العين",
      titleEn: "Al Ain Park Landscaping",
      clientAr: "بلدية العين",
      clientEn: "Al Ain Municipality",
      descriptionAr: "مشروع تنسيق حدائق واسع النطاق مع مساحات خضراء وملاعب رياضية",
      descriptionEn: "Large-scale landscaping project with green spaces and sports facilities",
      imageUrl: "https://images.unsplash.com/photo-1582411921591-25c7f4cfaf3e?w=800&h=500&fit=crop",
      category: "Landscaping",
    },
    {
      id: 4,
      titleAr: "نظام الري والصرف لمشروع زراعي",
      titleEn: "Agricultural Irrigation System",
      clientAr: "وزارة الزراعة",
      clientEn: "Ministry of Agriculture",
      descriptionAr: "تطوير نظام ري متطور لمزرعة حديثة بمساحة 500 هكتار",
      descriptionEn: "Advanced irrigation system development for a 500-hectare modern farm",
      imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=800&h=500&fit=crop",
      category: "Irrigation",
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, projects.length]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setAutoPlay(false);
  };

  const project = projects[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-tasyeer-dark-gray mb-4">
            {t("projects.featured")}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-lg overflow-hidden shadow-2xl h-96"
          >
            <img
              src={project.imageUrl}
              alt={isArabic ? project.titleAr : project.titleEn}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm text-tasyeer-orange mb-2 font-semibold">
                {project.category}
              </p>
              <h3 className="font-cairo text-2xl font-bold">
                {isArabic ? project.titleAr : project.titleEn}
              </h3>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            key={`details-${currentIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <p className="text-tasyeer-orange font-cairo font-semibold mb-2">
                {isArabic ? "العميل:" : "Client:"}{" "}
                {isArabic ? project.clientAr : project.clientEn}
              </p>
              <h3 className="text-3xl md:text-4xl font-cairo font-bold text-tasyeer-dark-gray mb-4">
                {isArabic ? project.titleAr : project.titleEn}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {isArabic ? project.descriptionAr : project.descriptionEn}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-gray-100 hover:bg-tasyeer-maroon text-tasyeer-dark-gray hover:text-white transition-colors duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-full bg-tasyeer-maroon hover:bg-tasyeer-maroon-dark text-white transition-colors duration-300"
              >
                <ChevronRight size={24} />
              </button>
              <div className="ml-auto flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setAutoPlay(false);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-tasyeer-maroon w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button className="mt-8 btn-primary">
              {isArabic ? "عرض جميع المشاريع" : "View All Projects"}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
