import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const ClientsSection = () => {
  const { isArabic } = useLanguage();

  // Client logos with actual images
  const clients = [
    {
      name: "ALDAR",
      nameAr: "الدار",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F96f3b329421448a9accd372436116683?format=webp"
    },
    {
      name: "Department of Urban Planning",
      nameAr: "بلدية العين",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fa0a19e72270d4ba687a7d4bd369a84e3?format=webp"
    },
    {
      name: "ADNOC",
      nameAr: "أدنوك",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fc72bb74aca464b3fb1319896ffc73989?format=webp"
    },
    {
      name: "MODON",
      nameAr: "موادن",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fe7db2a890df64d99a4fe82aefa66cdca?format=webp"
    },
    {
      name: "KIZAD",
      nameAr: "كيزاد",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fd63f216eb32f4ff19393505bffbb7fa4?format=webp"
    },
    {
      name: "National Guard",
      nameAr: "الحرس الوطني",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F4babb0fd81eb461986a39ff0dab746e6?format=webp"
    },
    {
      name: "Presidential Court",
      nameAr: "ديوان الرئاسة",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F79c268e165bd4a9d817d40bb1b07b90b?format=webp"
    },
    {
      name: "RTA",
      nameAr: "هيئة الطرق والمواصلات",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F48f5b8c7f11a4729a9418a22440e5458?format=webp"
    },
    {
      name: "Ministry of Energy & Infrastructure",
      nameAr: "وزارة الطاقة والبنية التحتية",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fc4810e81a22b499b968fd5b8a1f07240?format=webp"
    },
    {
      name: "Command of Military Works",
      nameAr: "هيئة الأشغال العسكرية",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F635ae0716ee24c3cbd7db6bd8a932952?format=webp"
    },
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
