import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function About() {
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
            {isArabic ? "عن الشركة" : "About Us"}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange mx-auto mb-12"></div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-12 border-2 border-gray-200">
            <p className="text-xl text-gray-600 mb-6">
              {isArabic
                ? "هذه الصفحة سيتم ملؤها بالمحتوى الكامل عن الشركة، الرؤية والرسالة والقيم."
                : "This page will be filled with complete information about the company, vision, mission, and values."}
            </p>
            <p className="text-gray-500">
              {isArabic
                ? "يرجى الاستمرار في استكشاف الموقع أو طلب تطوير هذه الصفحة من خلال البدء في تحديد الأجزاء التي تريدها."
                : "Please continue exploring the site or request development of this page by beginning to specify which sections you want."}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
