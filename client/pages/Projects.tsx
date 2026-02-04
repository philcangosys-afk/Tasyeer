import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { Zap, MapPin, Calendar, Award } from "lucide-react";

export default function Projects() {
  const { isArabic } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    // Recent Projects
    {
      id: 1,
      titleAr: "أعمال الرصف للمناطق الداخلية والخارجية لمبنى إدارة ترحيل المخالفين - السويحة",
      titleEn: "Paving works for the external and internal areas of the Deportation and Removal of Violators Department building - Suwaihan",
      categoryAr: "الطرق والبنية التحتية",
      categoryEn: "Roads & Infrastructure",
      category: "roads",
      clientAr: "الهيئة الاتحادية للهوية والجنسية والجمارك وأمن الحدود - ICP",
      clientEn: "The Federal Authority for Identity and Citizenship, Customs and Ports Security - ICP",
      yearAr: "2024",
      yearEn: "2024",
      descAr:
        "أعمال رصف شاملة للمناطق الداخلية والخارجية لمبنى إدارة ترحيل المخالفين بمعايير عالية",
      descEn:
        "Comprehensive paving works for external and internal areas with highest quality standards",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fa1d9e9f8f75d4d76b9e2b4a1ba6eb3e1?format=webp",
      status: "Ongoing",
    },
    {
      id: 2,
      titleAr: "إعادة توطين شبكات الري وأعمال HDD، MBZ - Z29 لتطوير أبو ظبي",
      titleEn: "Irrigation Relocation & HDD Works, MBZ - Z29 Development for The Construction Of Infrastructure and Streetscape in Abu Dhabi",
      categoryAr: "الطرق والبنية التحتية",
      categoryEn: "Roads & Infrastructure",
      category: "roads",
      clientAr: "Western Bainoona Group LLC - WBG",
      clientEn: "Western Bainoona Group LLC - WBG",
      yearAr: "2024",
      yearEn: "2024",
      descAr:
        "إعادة توطين شبكات الري وأعمال الحفر الأفقي للبئر في مشروع تطوير منطقة Z29",
      descEn:
        "Irrigation relocation and HDD works for Z29 development infrastructure project",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F4c3a08cda6294ecdabb84fc4c2334998?format=webp",
      status: "Ongoing",
    },
    {
      id: 3,
      titleAr: "بناء الطرق والحواجز الخرسانية تحت الجسر في أبو ظبي، سويحان",
      titleEn: "Construction of Roads and Concrete Barriers Under the Bridge In Abu Dhabi, Swehan",
      categoryAr: "الطرق والبنية التحتية",
      categoryEn: "Roads & Infrastructure",
      category: "roads",
      clientAr: "متعدد",
      clientEn: "Multiple",
      yearAr: "2024",
      yearEn: "2024",
      descAr:
        "بناء طرق وحواجز خرسانية متقدمة تحت الجسر مع معايير أمان عالية جداً",
      descEn:
        "Construction of advanced roads and concrete barriers under bridge with highest safety standards",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F8ab317fc240745c6a98ce11513b875b4?format=webp",
      status: "Completed",
    },
    {
      id: 4,
      titleAr: "بناء البنية التحتية والطرق في مدينة MBZ City One C",
      titleEn: "Construction of Roads and Infrastructure at MBZ City one C",
      categoryAr: "الطرق والبنية التحتية",
      categoryEn: "Roads & Infrastructure",
      category: "roads",
      clientAr: "متعدد",
      clientEn: "Multiple",
      yearAr: "2024",
      yearEn: "2024",
      descAr:
        "بناء البنية التحتية والطرق الشاملة في منطقة MBZ City One C",
      descEn:
        "Construction of comprehensive roads and infrastructure in MBZ City One C area",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F7083dbf580ed4ca89e3ab12c977a8a6c?format=webp",
      status: "Ongoing",
    },
    {
      id: 5,
      titleAr: "جدار الحجز من التربة المستقرة ميكانيكياً (MSE) في البنينة",
      titleEn: "Mechanically Stabilized Earth (MSE) retaining wall in Baniyas",
      categoryAr: "الطرق والبنية التحتية",
      categoryEn: "Roads & Infrastructure",
      category: "roads",
      clientAr: "متعدد",
      clientEn: "Multiple",
      yearAr: "2024",
      yearEn: "2024",
      descAr:
        "تشييد جدار حجز من التربة المستقرة ميكانيكياً بمواصفات عالية في البنينة",
      descEn:
        "Construction of mechanically stabilized earth retaining wall with high specifications",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F376d72231cd14810a59dd7a2dfa62330?format=webp",
      status: "Completed",
    },
    {
      id: 6,
      titleAr: "بناء البنية التحتية وتنسيق المناظر الطبيعية لمحطة ADNOC في أبو ظبي",
      titleEn: "Construction of Infrastructure and Hardscaping for the ADNOC Station in Abu Dhabi City, Khalidiya",
      categoryAr: "الطرق والبنية التحتية",
      categoryEn: "Roads & Infrastructure",
      category: "roads",
      clientAr: "ADNOC",
      clientEn: "ADNOC",
      yearAr: "2024",
      yearEn: "2024",
      descAr:
        "بناء البنية التحتية والتنسيق الكامل لمحطة ADNOC في منطقة الخليجية",
      descEn:
        "Infrastructure and hardscaping construction for ADNOC station in Khalidiya",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fa1d9e9f8f75d4d76b9e2b4a1ba6eb3e1?format=webp",
      status: "Ongoing",
    },
    // Completed Projects
    {
      id: 7,
      titleAr: "Force10 United Arab Emirates LLC",
      titleEn: "Force10 United Arab Emirates LLC - Project Demolition Existing Railway Service Station and Design and Build works",
      categoryAr: "المشاريع المكتملة",
      categoryEn: "Completed Projects",
      category: "completed",
      clientAr: "Force10 United Arab Emirates LLC",
      clientEn: "Force10 United Arab Emirates LLC",
      yearAr: "2023",
      yearEn: "2023",
      descAr:
        "مشروع هدم محطة السكك الحديدية الموجودة وأعمال التصميم والبناء لمحطة خدمات خليجية في أبو ظبي",
      descEn:
        "Project Demolition Existing Railway Service Station and Design and Build works to construct Khalidiyah Hub service station",
      descValue: "AED 5.5 Million",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fa1d9e9f8f75d4d76b9e2b4a1ba6eb3e1?format=webp",
      status: "Completed",
    },
    {
      id: 8,
      titleAr: "Ghantoot Transport & General Contracting LLC",
      titleEn: "Ghantoot Transport & General Contracting LLC",
      categoryAr: "المشاريع المكتملة",
      categoryEn: "Completed Projects",
      category: "completed",
      clientAr: "Ghantoot Transport & General Contracting LLC",
      clientEn: "Ghantoot Transport & General Contracting LLC",
      yearAr: "2023",
      yearEn: "2023",
      descAr:
        "مشروع بناء الطرق والبنية التحتية وأعمال تنسيق المناظر الطبيعية",
      descEn:
        "Construction of Roads, Infrastructure landscaping works at Mohammed Bin Zayed City, Zone C",
      descValue: "AED 4 Million",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F4c3a08cda6294ecdabb84fc4c2334998?format=webp",
      status: "Completed",
    },
    {
      id: 9,
      titleAr: "RMB General Contracting & Transporting LLC",
      titleEn: "RMB General Contracting & Transporting LLC",
      categoryAr: "المشاريع المكتملة",
      categoryEn: "Completed Projects",
      category: "completed",
      clientAr: "RMB General Contracting & Transporting LLC",
      clientEn: "RMB General Contracting & Transporting LLC",
      yearAr: "2023",
      yearEn: "2023",
      descAr:
        "مشروع بناء الطرق والبنية التحتية في مدينة محمد بن زايد",
      descEn:
        "Construction of Roads, Infrastructure landscaping works at Mohammed Bin Zayed City, Zone C",
      descValue: "AED 12 Million",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F8ab317fc240745c6a98ce11513b875b4?format=webp",
      status: "Completed",
    },
    {
      id: 10,
      titleAr: "Al Sahraa Freight Transport & Logistics LLC",
      titleEn: "Al Sahraa Freight Transport & Logistics LLC",
      categoryAr: "المشاريع المكتملة",
      categoryEn: "Completed Projects",
      category: "completed",
      clientAr: "Al Sahraa Freight Transport & Logistics LLC",
      clientEn: "Al Sahraa Freight Transport & Logistics LLC",
      yearAr: "2023",
      yearEn: "2023",
      descAr:
        "مشروع تحسين وترقية تقاطع الفجيرة للطريق والصرف",
      descEn:
        "Improvement and Upgrading of the Intersection of Fujairah Port Road, Yaas Island Port Road, CMW-21022-C001-Maintenance Works Dubai",
      descValue: "AED 4 Million",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F7083dbf580ed4ca89e3ab12c977a8a6c?format=webp",
      status: "Completed",
    },
    {
      id: 11,
      titleAr: "Tripoli Contracting & Maintenance LLC",
      titleEn: "Tripoli Contracting & Maintenance LLC",
      categoryAr: "المشاريع المكتملة",
      categoryEn: "Completed Projects",
      category: "completed",
      clientAr: "Tripoli Contracting & Maintenance LLC",
      clientEn: "Tripoli Contracting & Maintenance LLC",
      yearAr: "2023",
      yearEn: "2023",
      descAr:
        "مشروع سوق الحرير - المرحلة الأولى",
      descEn:
        "Project: Al Reef Mall - Phase II Development, Refurbishment & New BExpansion in Road and Landscape",
      descValue: "AED 5 Million",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F376d72231cd14810a59dd7a2dfa62330?format=webp",
      status: "Completed",
    },
    {
      id: 12,
      titleAr: "Al Geemi & Partners Contracting LLC",
      titleEn: "Al Geemi & Partners Contracting LLC",
      categoryAr: "المشاريع المكتملة",
      categoryEn: "Completed Projects",
      category: "completed",
      clientAr: "Al Geemi & Partners Contracting LLC",
      clientEn: "Al Geemi & Partners Contracting LLC",
      yearAr: "2023",
      yearEn: "2023",
      descAr:
        "مشروع مدينة الرياض جنوب - البنية التحتية والشارع",
      descEn:
        "J262-Riyad City South Phase - Infrastructure & Streetscape, Construction of Roads, Infrastructure and Public Realm",
      descValue: "AED 3 Million",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fa1d9e9f8f75d4d76b9e2b4a1ba6eb3e1?format=webp",
      status: "Completed",
    },
    {
      id: 13,
      titleAr: "Al Altern Transport & Gen. Cont. Est",
      titleEn: "Al Altern Transport & Gen. Cont. Est",
      categoryAr: "المشاريع المكتملة",
      categoryEn: "Completed Projects",
      category: "completed",
      clientAr: "Al Altern Transport & Gen. Cont. Est",
      clientEn: "Al Altern Transport & Gen. Cont. Est",
      yearAr: "2022",
      yearEn: "2022",
      descAr:
        "مشروع تحسين الطرق والصيانة في مدينة محمد بن زايد",
      descEn:
        "Road improvement and maintenance works, Madinat Zayed 3187006. Maintenance of Internal Roads and Parking lots for the Armed Forces Sailing",
      descValue: "AED 3.1 Million",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F4c3a08cda6294ecdabb84fc4c2334998?format=webp",
      status: "Completed",
    },
    {
      id: 14,
      titleAr: "Gulf Contractors Company PLC",
      titleEn: "Gulf Contractors Company PLC",
      categoryAr: "المشاريع المكتملة",
      categoryEn: "Completed Projects",
      category: "completed",
      clientAr: "Gulf Contractors Company PLC",
      clientEn: "Gulf Contractors Company PLC",
      yearAr: "2023",
      yearEn: "2023",
      descAr:
        "مشروع بناء الشارع والمناظر الطبيعية والحدائق",
      descEn:
        "Construction of StreetScape, Landscape & Parks work for Al Saad Emiriti Housing Community",
      descValue: "AED 0.9 Million",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F8ab317fc240745c6a98ce11513b875b4?format=webp",
      status: "Completed",
    },
    {
      id: 15,
      titleAr: "Western Bainoona Group",
      titleEn: "Western Bainoona Group",
      categoryAr: "المشاريع المكتملة",
      categoryEn: "Completed Projects",
      category: "completed",
      clientAr: "Western Bainoona Group",
      clientEn: "Western Bainoona Group",
      yearAr: "2023",
      yearEn: "2023",
      descAr:
        "مشروع MBZ - Z29 لتطوير البنية التحتية",
      descEn:
        "Project: M BZ-Z29 Development for the construction of infrastructure",
      descValue: "AED 7 Million",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F376d72231cd14810a59dd7a2dfa62330?format=webp",
      status: "Completed",
    },
    {
      id: 16,
      titleAr: "Domas Contracting Company",
      titleEn: "Domas Contracting Company",
      categoryAr: "المشاريع المكتملة",
      categoryEn: "Completed Projects",
      category: "completed",
      clientAr: "Domas Contracting Company",
      clientEn: "Domas Contracting Company",
      yearAr: "2023",
      yearEn: "2023",
      descAr:
        "مشروع طريق الجزيرة الريم",
      descEn:
        "Project: Al Reem Island Road Maintenance works",
      descValue: "AED 0.7 Million",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F7083dbf580ed4ca89e3ab12c977a8a6c?format=webp",
      status: "Completed",
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
