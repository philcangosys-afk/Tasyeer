import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function Projects() {
  const { isArabic } = useLanguage();

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-tasyeer-dark-gray mb-8">
            {isArabic ? "مشاريعنا" : "Our Projects"}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange mx-auto mb-12"></div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-12 border-2 border-gray-200">
            <p className="text-xl text-gray-600 mb-6">
              {isArabic
                ? "معرض شامل لجميع المشاريع المكتملة والحالية مع فلاتر البحث."
                : "Comprehensive gallery of all completed and ongoing projects with search filters."}
            </p>
            <p className="text-gray-500">
              {isArabic
                ? "سيتم إضافة معرض المشاريع مع صور عالية الجودة وتفاصيل كاملة لكل مشروع."
                : "Project gallery will be added with high-quality images and complete details for each project."}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
