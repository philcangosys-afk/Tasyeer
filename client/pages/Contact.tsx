import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const { isArabic, t } = useLanguage();

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-tasyeer-dark-gray mb-8">
            {t("nav.contact")}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8"
          >
            <MapPin className="text-tasyeer-maroon mb-4" size={32} />
            <h3 className="font-cairo text-xl font-bold mb-2">
              {isArabic ? "الموقع" : "Location"}
            </h3>
            <p className="text-gray-600">{t("footer.location")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8"
          >
            <Phone className="text-tasyeer-maroon mb-4" size={32} />
            <h3 className="font-cairo text-xl font-bold mb-2">
              {isArabic ? "الهاتف" : "Phone"}
            </h3>
            <p className="text-gray-600">+971 2 XXX XXXX</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8"
          >
            <Mail className="text-tasyeer-maroon mb-4" size={32} />
            <h3 className="font-cairo text-xl font-bold mb-2">
              {isArabic ? "البريد الإلكتروني" : "Email"}
            </h3>
            <p className="text-gray-600">info@tasyeer.ae</p>
          </motion.div>
        </div>

        {/* Contact Form Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-12 border-2 border-gray-200 text-center"
        >
          <p className="text-xl text-gray-600 mb-4">
            {isArabic
              ? "نموذج اتصال تفاعلي مع خريطة Google وروابط التواصل المباشرة."
              : "Interactive contact form with Google Maps and direct communication links."}
          </p>
          <p className="text-gray-500">
            {isArabic
              ? "سيتم إضافة نموذج الاتصال والخريطة والتفاصيل الكاملة قريباً."
              : "Contact form, map, and complete details will be added soon."}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
