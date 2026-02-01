import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function Services() {
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
            {isArabic ? "خدماتنا" : "Our Services"}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange mx-auto mb-12"></div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-12 border-2 border-gray-200">
            <p className="text-xl text-gray-600 mb-6">
              {isArabic
                ? "صفحة تفصيلية عن جميع خدماتنا الرئيسية والمتخصصة."
                : "Detailed page about all our main and specialized services."}
            </p>
            <p className="text-gray-500">
              {isArabic
                ? "يرجى طلب تطوير هذه الصفحة لإضافة معلومات مفصلة عن كل خدمة."
                : "Please request development of this page to add detailed information about each service."}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
