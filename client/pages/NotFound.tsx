import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();
  const { isArabic } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4"
      >
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-tasyeer-maroon mb-4">404</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange mx-auto"></div>
        </div>
        <p className="text-3xl font-cairo font-bold text-tasyeer-dark-gray mb-4">
          {isArabic ? "الصفحة غير موجودة" : "Page Not Found"}
        </p>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          {isArabic
            ? "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها."
            : "Sorry, the page you're looking for doesn't exist or has been moved."}
        </p>
        <Link to="/" className="btn-primary inline-block">
          {isArabic ? "العودة إلى الرئيسية" : "Return to Home"}
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
