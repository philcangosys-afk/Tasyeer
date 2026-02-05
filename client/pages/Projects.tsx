import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { Zap, MapPin, Calendar, Award } from "lucide-react";

export default function Projects() {
  const { isArabic } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      id: 1,
      titleAr:
        "تصميم وتنفيذ البنية التحتية وأعمال الهاردسكيب لمحطة أدنوك في مدينة أبوظبي، الخالدية",
      titleEn:
        "Design and Construction of Infrastructure and Hardscaping for the ADNOC Station in Abu Dhabi City, Al Khaldia",
      categoryAr: "الطرق والبنية التحتية",
      categoryEn: "Roads & Infrastructure",
      category: "roads",
      clientAr: "ADNOC",
      clientEn: "ADNOC",
      yearAr: "2023",
      yearEn: "2023",
      descAr:
        "تصميم وتنفيذ أعمال البنية التحتية والهاردسكيب لمحطة أدنوك في أبوظبي - الخالدية.",
      descEn:
        "Design and construction of infrastructure and hardscaping works for the ADNOC station in Abu Dhabi - Al Khaldia.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fa7ba7644ac744e678e9c495fc20ef4f2?format=webp&width=800&height=1200",
      status: "Completed",
    },
    {
      id: 2,
      titleAr:
        "تنفيذ تحويل شبكات الري وأعمال الحفر الأفقي (HDD) لمشروع تطوير MBZ - Z29",
      titleEn:
        "Design and Implementation Irrigation Relocation & HDD Works, MBZ - Z29 Development for The Construction Of Infrastructure and Streetscape in Abu Dhabi",
      categoryAr: "الطرق والبنية التحتية",
      categoryEn: "Roads & Infrastructure",
      category: "roads",
      clientAr: "Western Bainoona Group",
      clientEn: "Western Bainoona Group",
      yearAr: "2024",
      yearEn: "2024",
      descAr:
        "أعمال تحويل شبكات الري والحفر الأفقي لمشروع تطوير MBZ - Z29 في مدينة محمد بن زايد.",
      descEn:
        "Irrigation relocation and HDD works for the MBZ - Z29 development in Mohammed Bin Zayed City.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F776bbbd2a6b54fe2b89e96b0cdc78677?format=webp&width=800&height=1200",
      status: "Completed",
    },
    {
      id: 3,
      titleAr: "تطوير وصيانة البنية التحتية لمدينة محمد بن زايد في أبوظبي",
      titleEn:
        "Development and maintenance of infrastructure for Mohammed Bin Zayed City in Abu Dhabi",
      categoryAr: "الطرق والبنية التحتية",
      categoryEn: "Roads & Infrastructure",
      category: "roads",
      clientAr: "Musanada",
      clientEn: "Musanada",
      yearAr: "2022",
      yearEn: "2022",
      descAr:
        "تطوير وصيانة شاملة للبنية التحتية في مدينة محمد بن زايد - أبوظبي.",
      descEn:
        "Comprehensive development and maintenance of infrastructure in Mohammed Bin Zayed City, Abu Dhabi.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F8570facd56894126bf3f672a42b8cb4c?format=webp&width=800&height=1200",
      status: "Completed",
    },
    {
      id: 4,
      titleAr: "إنشاء جدار حجز تربة ميكانيكي (MSE)",
      titleEn:
        "Construction Mechanically Stabilized Earth (MSE) retaining wall",
      categoryAr: "الطرق والبنية التحتية",
      categoryEn: "Roads & Infrastructure",
      category: "roads",
      clientAr: "Etihad Rail",
      clientEn: "Etihad Rail",
      yearAr: "2023",
      yearEn: "2023",
      descAr: "تنفيذ جدار حجز تربة ميكانيكي في بني ياس - الوثبة.",
      descEn: "Construction of an MSE retaining wall in Bani Yas - Al Wathba.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F9f24cfda145e47fa87b2cdcc16636890?format=webp&width=800&height=1200",
      status: "Completed",
    },
    {
      id: 5,
      titleAr:
        "تصميم وتنفيذ بنية تحتية شاملة تشمل مواقف وممر خارجي لمركز ترحيل المخالفين",
      titleEn:
        "Design and implementation of comprehensive infrastructure, including parking facilities and an external access road, to serve the deportation center for violators",
      categoryAr: "الطرق والبنية التحتية",
      categoryEn: "Roads & Infrastructure",
      category: "roads",
      clientAr: "الهيئة الاتحادية للهوية والجنسية",
      clientEn: "Federal Authority for Identity and Citizenship",
      yearAr: "2025",
      yearEn: "2025",
      descAr:
        "بنية تحتية متكاملة تشمل إنشاء مواقف سيارات وطريق وصول خارجي لخدمة مركز ترحيل المخالفين في الشامخة.",
      descEn:
        "Comprehensive infrastructure including parking facilities and an external access road for the deportation center in Al Shahama.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F0c3f9e20c02f47d4a43b9a3d4e38e1c4?format=webp&width=800&height=1200",
      status: "Ongoing",
    },
    {
      id: 6,
      titleAr: "تنفيذ وتنسيق الحدائق لمشروع فلل المواطنين",
      titleEn:
        "Construction and landscaping of gardens for the citizens' villa project",
      categoryAr: "الطرق والبنية التحتية",
      categoryEn: "Roads & Infrastructure",
      category: "roads",
      clientAr: "هيئة أبوظبي للإسكان",
      clientEn: "Abu Dhabi Housing Authority",
      yearAr: "2023",
      yearEn: "2023",
      descAr: "تنفيذ وتنسيق الحدائق لمشروع فلل المواطنين في منطقة السعد.",
      descEn:
        "Construction and landscaping of gardens for the citizens' villa project in Al Sad.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F5c2d6426a29e4bdfa4be4cc9ef33cd09?format=webp&width=800&height=1200",
      status: "Completed",
    },
    {
      id: 7,
      titleAr: "أعمال رصف بحري لمشروع الجزيرة الجديدة",
      titleEn: "Marine paving works for the new island project",
      categoryAr: "الطرق والبنية التحتية",
      categoryEn: "Roads & Infrastructure",
      category: "roads",
      clientAr: "NMDC",
      clientEn: "NMDC",
      yearAr: "2024",
      yearEn: "2024",
      descAr: "أعمال رصف بحري لمشروع الجزيرة الجديدة في جزيرة الحديريات.",
      descEn:
        "Marine paving works for the new island project in Al Hudayriat Island.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F470e85c16c4647779a59baf739b586cb?format=webp&width=800&height=1200",
      status: "Completed",
    },
    {
      id: 8,
      titleAr: "تصميم وتنفيذ مواقف سيارات مع إنارة لطلاب جامعة خليفة",
      titleEn:
        "Design and implementation of parking facilities with lighting for Khalifa University students",
      categoryAr: "الطرق والبنية التحتية",
      categoryEn: "Roads & Infrastructure",
      category: "roads",
      clientAr: "جامعة خليفة",
      clientEn: "Khalifa University",
      yearAr: "2026",
      yearEn: "2026",
      descAr:
        "إنشاء مواقف سيارات مزودة بالإنارة لطلاب جامعة خليفة في ساس النخل.",
      descEn:
        "Parking facilities with lighting for Khalifa University students in Sas Al Nakhl.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fde3013617d3c4fdebd51bb825ecf3bbd?format=webp&width=800&height=1200",
      status: "Ongoing",
    },
  ];

  const categories = [
    { id: "all", labelAr: "جميع المشاريع", labelEn: "All Projects" },
    {
      id: "roads",
      labelAr: "الطرق والبنية التحتية",
      labelEn: "Roads & Infrastructure",
    },
    {
      id: "completed",
      labelAr: "المشاريع المكتملة",
      labelEn: "Completed Projects",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tasyeer-dark-gray to-tasyeer-maroon text-white py-20">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {isArabic ? "مشاريعنا المتميزة" : "Our Featured Projects"}
            </h1>
            <div className="h-1 w-24 bg-tasyeer-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              {isArabic
                ? "استعرض مجموعة مختارة من مشاريعنا الناجحة والمكتملة بنجاح عبر مختلف القطاعات"
                : "Explore a selection of our successful and completed projects across various sectors"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-tasyeer-maroon text-white shadow-lg"
                    : "bg-white text-tasyeer-dark-gray border-2 border-tasyeer-orange hover:border-tasyeer-maroon"
                }`}
              >
                {isArabic ? category.labelAr : category.labelEn}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container-tight">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={isArabic ? project.titleAr : project.titleEn}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-tasyeer-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {isArabic ? project.categoryAr : project.categoryEn}
                  </div>

                  {/* Status Badge */}
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${
                      project.status === "Completed"
                        ? "bg-green-600"
                        : "bg-blue-600"
                    }`}
                  >
                    {project.status}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tasyeer-dark-gray mb-3">
                    {isArabic ? project.titleAr : project.titleEn}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {isArabic ? project.descAr : project.descEn}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-3 mb-4 border-t border-gray-200 pt-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-tasyeer-maroon flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="text-gray-500 text-xs">
                          {isArabic ? "العميل" : "Client"}
                        </p>
                        <p className="text-gray-700 font-semibold">
                          {isArabic ? project.clientAr : project.clientEn}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-tasyeer-orange flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="text-gray-500 text-xs">
                          {isArabic ? "السنة" : "Year"}
                        </p>
                        <p className="text-gray-700 font-semibold">
                          {isArabic ? project.yearAr : project.yearEn}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <button className="w-full bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                    {isArabic ? "اقرأ المزيد" : "Learn More"}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-tasyeer-dark-gray mb-4">
              {isArabic ? "إحصائيات مشاريعنا" : "Our Project Statistics"}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "50+",
                labelAr: "مشروع مكتمل",
                labelEn: "Projects Completed",
              },
              {
                number: "100K+",
                labelAr: "ساعات عمل",
                labelEn: "Work Hours",
              },
              {
                number: "30+",
                labelAr: "عملاء راضي",
                labelEn: "Satisfied Clients",
              },
              {
                number: "99%",
                labelAr: "معدل النجاح",
                labelEn: "Success Rate",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-bold text-tasyeer-maroon mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-semibold">
                  {isArabic ? stat.labelAr : stat.labelEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
