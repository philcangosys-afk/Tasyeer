import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  titleAr: string;
  titleEn: string;
  clientAr: string;
  clientEn: string;
  descriptionAr: string;
  descriptionEn: string;
  imageUrl: string;
  categoryAr: string;
  categoryEn: string;
  year: string;
}

export const FeaturedProjectsSection = () => {
  const { isArabic } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [direction, setDirection] = useState(1);

  const projects: Project[] = [
    {
      id: 1,
      titleAr:
        "تصميم وتنفيذ البنية التحتية وأعمال الهاردسكيب لمحطة أدنوك في مدينة أبوظبي، الخالدية",
      titleEn:
        "Design and Construction of Infrastructure and Hardscaping for the ADNOC Station in Abu Dhabi City, Al Khaldia",
      clientAr: "ADNOC",
      clientEn: "ADNOC",
      descriptionAr:
        "تصميم وتنفيذ أعمال البنية التحتية والهاردسكيب لمحطة أدنوك في أبوظبي - الخالدية.",
      descriptionEn:
        "Design and construction of infrastructure and hardscaping works for the ADNOC station in Abu Dhabi - Al Khaldia.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fa7ba7644ac744e678e9c495fc20ef4f2?format=webp&width=800&height=1200",
      categoryAr: "الطرق والبنية التحتية",
      categoryEn: "Roads & Infrastructure",
      year: "2023",
    },
    {
      id: 2,
      titleAr:
        "تنفيذ تحويل شبكات الري وأعمال الحفر الأفقي (HDD) لمشروع تطوير MBZ - Z29",
      titleEn:
        "Design and Implementation Irrigation Relocation & HDD Works, MBZ - Z29 Development for The Construction Of Infrastructure and Streetscape in Abu Dhabi",
      clientAr: "Western Bainoona Group",
      clientEn: "Western Bainoona Group",
      descriptionAr:
        "أعمال تحويل شبكات الري والحفر الأفقي لمشروع تطوير MBZ - Z29 في مدينة محمد بن زايد.",
      descriptionEn:
        "Irrigation relocation and HDD works for the MBZ - Z29 development in Mohammed Bin Zayed City.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F776bbbd2a6b54fe2b89e96b0cdc78677?format=webp&width=800&height=1200",
      categoryAr: "الطرق والبنية التحتية",
      categoryEn: "Roads & Infrastructure",
      year: "2024",
    },
    {
      id: 3,
      titleAr:
        "تطوير وصيانة البنية التحتية لمدينة محمد بن زايد في أبوظبي",
      titleEn:
        "Development and maintenance of infrastructure for Mohammed Bin Zayed City in Abu Dhabi",
      clientAr: "Musanada",
      clientEn: "Musanada",
      descriptionAr:
        "تطوير وصيانة شاملة للبنية التحتية في مدينة محمد بن زايد - أبوظبي.",
      descriptionEn:
        "Comprehensive development and maintenance of infrastructure in Mohammed Bin Zayed City, Abu Dhabi.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F8570facd56894126bf3f672a42b8cb4c?format=webp&width=800&height=1200",
      categoryAr: "الطرق والبنية التحتية",
      categoryEn: "Roads & Infrastructure",
      year: "2022",
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoPlay, projects.length]);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setAutoPlay(false);
  };

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  const project = projects[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-tasyeer-orange/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-tasyeer-maroon/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container-tight relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange text-white text-sm font-bold px-4 py-2 rounded-full mb-4"
          >
            {isArabic ? "أعمالنا المميزة" : "Featured Work"}
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tasyeer-dark-gray mb-6">
            {isArabic ? "مشاريعنا المتميزة" : "Our Featured Projects"}
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange mx-auto rounded-full"
          />
        </motion.div>

        {/* Main Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Project Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={project.imageUrl}
                    alt={isArabic ? project.titleAr : project.titleEn}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Category badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-6 left-6 bg-tasyeer-orange text-white text-sm font-bold px-4 py-2 rounded-full"
                  >
                    {isArabic ? project.categoryAr : project.categoryEn}
                  </motion.div>

                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-3xl font-bold text-white mb-2"
                    >
                      {isArabic ? project.titleAr : project.titleEn}
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center gap-4 text-white/80 text-sm"
                    >
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {isArabic ? project.clientAr : project.clientEn}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Project Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`details-${currentIndex}`}
                initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isArabic ? 50 : -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Client */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-tasyeer-maroon to-tasyeer-orange rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      {isArabic ? "العميل" : "Client"}
                    </p>
                    <p className="text-lg font-bold text-tasyeer-dark-gray">
                      {isArabic ? project.clientAr : project.clientEn}
                    </p>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-tasyeer-dark-gray">
                  {isArabic ? project.titleAr : project.titleEn}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed">
                  {isArabic ? project.descriptionAr : project.descriptionEn}
                </p>

                {/* Year badge */}
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-tasyeer-orange" />
                  <span className="text-gray-500">{project.year}</span>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4 pt-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prev}
                    className="w-14 h-14 rounded-full bg-gray-100 hover:bg-tasyeer-maroon text-tasyeer-dark-gray hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={next}
                    className="w-14 h-14 rounded-full bg-tasyeer-maroon hover:bg-tasyeer-orange text-white transition-all duration-300 flex items-center justify-center shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>

                  {/* Progress indicators */}
                  <div className="flex gap-2 ml-auto">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goTo(index)}
                        className="group"
                      >
                        <motion.div
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex
                              ? "bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange w-8"
                              : "bg-gray-300 w-2 group-hover:bg-gray-400"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(152,19,19,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group bg-tasyeer-dark-gray text-white font-bold py-4 px-10 rounded-full inline-flex items-center gap-3 shadow-lg hover:bg-tasyeer-maroon transition-colors"
            >
              {isArabic ? "عرض جميع المشاريع" : "View All Projects"}
              {isArabic ? (
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              )}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
