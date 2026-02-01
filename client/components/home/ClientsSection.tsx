import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const ClientsSection = () => {
  const { isArabic } = useLanguage();

  // Client logos with placeholder names
  const clients = [
    { name: "ADNOC", nameAr: "أدنوك" },
    { name: "Aldar", nameAr: "الدار" },
    { name: "Abu Dhabi Municipality", nameAr: "بلدية أبو ظبي" },
    { name: "Al Ain Municipality", nameAr: "بلدية العين" },
    { name: "Ministry of Agriculture", nameAr: "وزارة الزراعة" },
    { name: "Roads Authority", nameAr: "هيئة الطرق" },
    { name: "EWEC", nameAr: "مياه وكهرباء الإمارات" },
    { name: "Etihad Rail", nameAr: "الاتحاد للقطارات" },
  ];

  // Duplicate for seamless loop
  const allClients = [...clients, ...clients];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-tight mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-tasyeer-dark-gray mb-4">
            {isArabic ? "شركاء النجاح" : "Our Trusted Partners"}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            {isArabic
              ? "نفخر بالعمل مع أكبر المؤسسات والشركات في الإمارات"
              : "Proud to work with the leading organizations and companies in the UAE"}
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling clients */}
        <motion.div
          className="flex gap-12 py-8"
          animate={{
            x: isArabic ? [0, 1000] : [-1000, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {allClients.map((client, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex-shrink-0 bg-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 min-w-[200px]"
            >
              <div className="flex flex-col items-center gap-3">
                {/* Placeholder logo */}
                <div className="w-16 h-16 bg-gradient-to-br from-tasyeer-maroon/10 to-tasyeer-orange/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-tasyeer-maroon">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-semibold text-gray-700 text-center">
                  {isArabic ? client.nameAr : client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container-tight mt-12"
      >
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-tasyeer-maroon/30" />
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-tasyeer-orange rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-tasyeer-maroon/30" />
        </div>
      </motion.div>
    </section>
  );
};
