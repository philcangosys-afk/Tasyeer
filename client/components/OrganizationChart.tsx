import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface Position {
  id: string;
  titleAr: string;
  titleEn: string;
  level: number;
  parentId?: string;
}

export const OrganizationChart = () => {
  const { isArabic } = useLanguage();

  const positions: Position[] = [
    // Level 0
    {
      id: "chairman",
      titleAr: "رئيس مجلس الإدارة والمالك",
      titleEn: "Chairman | Owner",
      level: 0,
    },
    // Level 1
    {
      id: "gm",
      titleAr: "المدير العام",
      titleEn: "General Manager",
      level: 1,
      parentId: "chairman",
    },
    // Level 2
    {
      id: "secretary",
      titleAr: "سكرتيرة المكتب",
      titleEn: "Office Secretary",
      level: 2,
      parentId: "gm",
    },
    {
      id: "hr",
      titleAr: "مدير الموارد البشرية",
      titleEn: "HR Manager",
      level: 2,
      parentId: "gm",
    },
    // Level 3
    {
      id: "qty",
      titleAr: "مراقب الكميات",
      titleEn: "QTY Surveyor",
      level: 3,
      parentId: "gm",
    },
    {
      id: "qa",
      titleAr: "مدير الجودة والمراقبة",
      titleEn: "QA/QC Manager",
      level: 3,
      parentId: "gm",
    },
    {
      id: "pe",
      titleAr: "مهندس المشروع",
      titleEn: "Project Engineer",
      level: 3,
      parentId: "gm",
    },
    {
      id: "accountant",
      titleAr: "محاسب",
      titleEn: "Accountant",
      level: 3,
      parentId: "gm",
    },
    // Level 4
    {
      id: "documents",
      titleAr: "مسؤول الوثائق",
      titleEn: "Documents",
      level: 4,
      parentId: "qa",
    },
    {
      id: "draftsman",
      titleAr: "رسام تقني",
      titleEn: "Draftsman",
      level: 4,
      parentId: "qa",
    },
    {
      id: "se",
      titleAr: "مهندس الموقع",
      titleEn: "Site Engineer",
      level: 4,
      parentId: "pe",
    },
    // Level 5
    {
      id: "foreman",
      titleAr: "مقاول المشروع",
      titleEn: "General Foreman",
      level: 5,
      parentId: "se",
    },
    {
      id: "ls",
      titleAr: "مساح الأراضي",
      titleEn: "Land Surveyor",
      level: 5,
      parentId: "se",
    },
    // Level 6
    {
      id: "siteForeman",
      titleAr: "مقاول موقع",
      titleEn: "Foreman",
      level: 6,
      parentId: "foreman",
    },
    {
      id: "assistSurveyor",
      titleAr: "مساعد مساح",
      titleEn: "Assist. Surveyor",
      level: 6,
      parentId: "ls",
    },
    // Level 7
    {
      id: "operators",
      titleAr: "مشغلوا الآليات",
      titleEn: "Operators",
      level: 7,
      parentId: "siteForeman",
    },
    {
      id: "chainmen",
      titleAr: "عمال القياس",
      titleEn: "Chainmen",
      level: 7,
      parentId: "assistSurveyor",
    },
    // Level 8
    {
      id: "helpers",
      titleAr: "مساعدون",
      titleEn: "Helpers",
      level: 8,
      parentId: "operators",
    },
  ];

  const getPositionsByLevel = (level: number) => {
    return positions.filter((pos) => pos.level === level);
  };

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
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const ChartBox = ({ position }: { position: Position }) => {
    const isHeader = position.level === 0;
    const isManager = position.level === 1;

    return (
      <motion.div
        variants={itemVariants}
        className={`relative ${
          isHeader ? "col-span-full" : ""
        }`}
      >
        <div
          className={`
            rounded-lg p-3 md:p-4 text-center font-bold transition-all duration-300
            hover:shadow-xl hover:scale-105 cursor-default
            ${
              isHeader
                ? "bg-gradient-to-r from-tasyeer-maroon to-red-700 text-white border-4 border-tasyeer-maroon px-6 py-4"
                : isManager
                ? "bg-gradient-to-br from-blue-400 to-blue-500 text-white border-4 border-blue-400 px-4 py-3"
                : "bg-gradient-to-br from-blue-50 to-blue-100 text-tasyeer-maroon border-4 border-blue-300 px-3 py-2"
            }
          `}
        >
          <div className="text-xs md:text-sm lg:text-base break-words">
            {isArabic ? position.titleAr : position.titleEn}
          </div>
        </div>

        {/* Connector lines */}
        {position.level < 8 && (
          <>
            <div className="absolute w-0.5 h-6 bg-gray-400 left-1/2 -translate-x-1/2 -bottom-6" />
          </>
        )}
      </motion.div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-tasyeer-dark-gray mb-4">
            {isArabic ? "الهيكل التنظيمي" : "Organization Chart"}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {isArabic
              ? "فريق تسيير متخصص ومنظم بعناية لتحقيق أفضل النتائج"
              : "Tasyeer's specialized team structure organized for optimal results"}
          </p>
        </motion.div>

        {/* Chart Container */}
        <motion.div
          className="overflow-x-auto pb-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="min-w-max inline-flex flex-col gap-12 px-4">
            {/* Level 0 - Chairman */}
            <div className="flex justify-center">
              <div className="w-56">
                <ChartBox position={positions.find((p) => p.id === "chairman")!} />
              </div>
            </div>

            {/* Level 1 - General Manager */}
            <div className="flex justify-center">
              <div className="w-56">
                <ChartBox position={positions.find((p) => p.id === "gm")!} />
              </div>
            </div>

            {/* Level 2 - Secretary and HR */}
            <div className="flex justify-center gap-16">
              <div className="w-48">
                <ChartBox position={positions.find((p) => p.id === "secretary")!} />
              </div>
              <div className="w-48">
                <ChartBox position={positions.find((p) => p.id === "hr")!} />
              </div>
            </div>

            {/* Level 3 - Four Managers */}
            <div className="flex justify-center gap-8">
              <div className="w-40">
                <ChartBox position={positions.find((p) => p.id === "qty")!} />
              </div>
              <div className="w-40">
                <ChartBox position={positions.find((p) => p.id === "qa")!} />
              </div>
              <div className="w-40">
                <ChartBox position={positions.find((p) => p.id === "pe")!} />
              </div>
              <div className="w-40">
                <ChartBox position={positions.find((p) => p.id === "accountant")!} />
              </div>
            </div>

            {/* Level 4 - Documentation and Site */}
            <div className="flex justify-center gap-12">
              <div className="flex flex-col gap-8">
                <div className="w-40">
                  <ChartBox position={positions.find((p) => p.id === "documents")!} />
                </div>
                <div className="w-40">
                  <ChartBox position={positions.find((p) => p.id === "draftsman")!} />
                </div>
              </div>
              <div className="w-40">
                <ChartBox position={positions.find((p) => p.id === "se")!} />
              </div>
            </div>

            {/* Level 5 - Foremen */}
            <div className="flex justify-center gap-12">
              <div className="w-40">
                <ChartBox position={positions.find((p) => p.id === "foreman")!} />
              </div>
              <div className="w-40">
                <ChartBox position={positions.find((p) => p.id === "ls")!} />
              </div>
            </div>

            {/* Level 6 - Field Workers */}
            <div className="flex justify-center gap-12">
              <div className="w-40">
                <ChartBox position={positions.find((p) => p.id === "siteForeman")!} />
              </div>
              <div className="w-40">
                <ChartBox position={positions.find((p) => p.id === "assistSurveyor")!} />
              </div>
            </div>

            {/* Level 7 - Operators and Helpers */}
            <div className="flex justify-center gap-12">
              <div className="w-40">
                <ChartBox position={positions.find((p) => p.id === "operators")!} />
              </div>
              <div className="w-40">
                <ChartBox position={positions.find((p) => p.id === "chainmen")!} />
              </div>
            </div>

            {/* Level 8 - Helpers */}
            <div className="flex justify-center">
              <div className="w-40">
                <ChartBox position={positions.find((p) => p.id === "helpers")!} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-tasyeer-maroon to-red-700 rounded-lg p-4 text-white text-center">
            <div className="font-bold text-sm">
              {isArabic ? "الإدارة العليا" : "Executive"}
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-4 text-white text-center">
            <div className="font-bold text-sm">
              {isArabic ? "المديرون" : "Managers"}
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-tasyeer-maroon text-center border-2 border-blue-300">
            <div className="font-bold text-sm">
              {isArabic ? "الموظفون" : "Staff"}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
