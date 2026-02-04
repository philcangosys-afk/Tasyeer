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
      id: "owner",
      titleAr: "المالك / الرئيس التنفيذي / الرئيس",
      titleEn: "Owner / CEO / President",
      level: 0,
    },
    // Level 1
    {
      id: "coo",
      titleAr: "الرئيس التنفيذي للعمليات",
      titleEn: "Chief Operating Officer (COO)",
      level: 1,
      parentId: "owner",
    },
    {
      id: "cfo",
      titleAr: "الرئيس المالي",
      titleEn: "Chief Financial Officer (CFO)",
      level: 1,
      parentId: "owner",
    },
    {
      id: "vps",
      titleAr: "نواب الرئيس",
      titleEn: "Vice Presidents",
      level: 1,
      parentId: "owner",
    },
    // Level 2
    {
      id: "operations",
      titleAr: "العمليات وإدارة المشاريع",
      titleEn: "Operations & Project Management",
      level: 2,
      parentId: "coo",
    },
    {
      id: "specialized",
      titleAr: "الإدارات المتخصصة",
      titleEn: "Specialized Departments",
      level: 2,
      parentId: "cfo",
    },
    // Level 3 - Column headers
    {
      id: "projectDirectorHead",
      titleAr: "مدير المشاريع",
      titleEn: "Project Director",
      level: 3,
      parentId: "operations",
    },
    {
      id: "estimating",
      titleAr: "التقدير",
      titleEn: "Estimating",
      level: 3,
      parentId: "operations",
    },
    {
      id: "preconstruction",
      titleAr: "ما قبل الإنشاء",
      titleEn: "Preconstruction",
      level: 3,
      parentId: "operations",
    },
    {
      id: "scheduling",
      titleAr: "الجدولة",
      titleEn: "Scheduling",
      level: 3,
      parentId: "operations",
    },
    {
      id: "procurement",
      titleAr: "المشتريات",
      titleEn: "Procurement",
      level: 3,
      parentId: "specialized",
    },
    {
      id: "safety",
      titleAr: "السلامة",
      titleEn: "Safety",
      level: 3,
      parentId: "specialized",
    },
    {
      id: "quality",
      titleAr: "الجودة",
      titleEn: "Quality",
      level: 3,
      parentId: "specialized",
    },
    {
      id: "legal",
      titleAr: "الشؤون القانونية",
      titleEn: "Legal Affairs",
      level: 3,
      parentId: "specialized",
    },
    // Level 4
    {
      id: "projectDirector",
      titleAr: "مدير المشاريع",
      titleEn: "Project Director",
      level: 4,
      parentId: "projectDirectorHead",
    },
    {
      id: "seniorEstimator",
      titleAr: "كبير مقدري التكاليف",
      titleEn: "Senior Estimator",
      level: 4,
      parentId: "estimating",
    },
    {
      id: "preconstructionManager",
      titleAr: "مدير ما قبل الإنشاء",
      titleEn: "Preconstruction Manager",
      level: 4,
      parentId: "preconstruction",
    },
    {
      id: "scheduler",
      titleAr: "مسؤول الجدولة",
      titleEn: "Scheduler",
      level: 4,
      parentId: "scheduling",
    },
    {
      id: "purchasingManager",
      titleAr: "مدير المشتريات",
      titleEn: "Purchasing Manager",
      level: 4,
      parentId: "procurement",
    },
    {
      id: "safetyManager",
      titleAr: "مدير السلامة",
      titleEn: "Safety Manager",
      level: 4,
      parentId: "safety",
    },
    {
      id: "qualityManager",
      titleAr: "مدير الجودة",
      titleEn: "Quality Manager",
      level: 4,
      parentId: "quality",
    },
    {
      id: "legalAssistant",
      titleAr: "مساعد قانوني",
      titleEn: "Legal Assistant",
      level: 4,
      parentId: "legal",
    },
    // Level 5
    {
      id: "projectDirector2",
      titleAr: "مدير المشاريع",
      titleEn: "Project Director",
      level: 5,
      parentId: "projectDirector",
    },
    {
      id: "juniorEstimators",
      titleAr: "مقدرو تكاليف مبتدئون",
      titleEn: "Junior Estimators",
      level: 5,
      parentId: "estimating",
    },
    {
      id: "preconstructionCoordinator",
      titleAr: "منسق ما قبل الإنشاء",
      titleEn: "Preconstruction Coordinator",
      level: 5,
      parentId: "preconstruction",
    },
    {
      id: "schedulingAssistant",
      titleAr: "مساعد الجدولة",
      titleEn: "Scheduling Assistant",
      level: 5,
      parentId: "scheduling",
    },
    {
      id: "purchasingAgent1",
      titleAr: "مسؤول المشتريات",
      titleEn: "Purchasing Agent",
      level: 5,
      parentId: "procurement",
    },
    {
      id: "qcInspector",
      titleAr: "مفتش الجودة",
      titleEn: "QC Inspector",
      level: 5,
      parentId: "quality",
    },
    // Level 6
    {
      id: "projectManager",
      titleAr: "مدير مشروع",
      titleEn: "Project Manager",
      level: 6,
      parentId: "projectDirector",
    },
    {
      id: "purchasingAgent2",
      titleAr: "مسؤول المشتريات",
      titleEn: "Purchasing Agent",
      level: 6,
      parentId: "procurement",
    },
    {
      id: "qaSpecialist",
      titleAr: "أخصائي ضمان الجودة",
      titleEn: "QA Specialist",
      level: 6,
      parentId: "quality",
    },
    // Level 7
    {
      id: "superintendent",
      titleAr: "مشرف عام",
      titleEn: "Superintendent",
      level: 7,
      parentId: "projectManager",
    },
    {
      id: "expeditor",
      titleAr: "منسق التوريد",
      titleEn: "Expeditor",
      level: 7,
      parentId: "procurement",
    },
    // Level 8
    {
      id: "foreman",
      titleAr: "رئيس العمال",
      titleEn: "Foreman",
      level: 8,
      parentId: "superintendent",
    },
  ];

  const operationsColumns = [
    {
      headerId: "projectDirectorHead",
      childIds: [
        "projectDirector",
        "projectDirector2",
        "projectManager",
        "superintendent",
        "foreman",
      ],
    },
    {
      headerId: "estimating",
      childIds: ["seniorEstimator", "juniorEstimators"],
    },
    {
      headerId: "preconstruction",
      childIds: ["preconstructionManager", "preconstructionCoordinator"],
    },
    {
      headerId: "scheduling",
      childIds: ["scheduler", "schedulingAssistant"],
    },
  ];

  const specializedColumns = [
    {
      headerId: "procurement",
      childIds: [
        "purchasingManager",
        "purchasingAgent1",
        "purchasingAgent2",
        "expeditor",
      ],
    },
    {
      headerId: "safety",
      childIds: ["safetyManager"],
    },
    {
      headerId: "quality",
      childIds: ["qualityManager", "qcInspector", "qaSpecialist"],
    },
    {
      headerId: "legal",
      childIds: ["legalAssistant"],
    },
  ];

  const getPositionById = (id: string) => {
    return positions.find((pos) => pos.id === id);
  };

  const renderBox = (id: string, widthClass: string) => {
    const position = getPositionById(id);
    if (!position) return null;
    return (
      <div className={widthClass}>
        <ChartBox position={position} />
      </div>
    );
  };

  const renderColumn = (
    headerId: string,
    childIds: string[],
    widthClass: string,
  ) => (
    <div className="flex flex-col items-center gap-3">
      {renderBox(headerId, widthClass)}
      {childIds.map((id) => {
        const position = getPositionById(id);
        if (!position) return null;
        return (
          <div key={id} className={widthClass}>
            <ChartBox position={position} />
          </div>
        );
      })}
    </div>
  );

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
        className={`relative ${isHeader ? "col-span-full" : ""}`}
      >
        <div
          className={`
            rounded-lg text-center font-bold transition-all duration-300
            hover:shadow-xl hover:scale-105 cursor-default
            ${
              isHeader
                ? "bg-gradient-to-r from-tasyeer-maroon to-red-700 text-white border-2 sm:border-4 border-tasyeer-maroon px-3 sm:px-6 py-2 sm:py-4"
                : isManager
                  ? "bg-gradient-to-br from-blue-400 to-blue-500 text-white border-2 sm:border-4 border-blue-400 px-2 sm:px-4 py-2 sm:py-3"
                  : "bg-gradient-to-br from-blue-50 to-blue-100 text-tasyeer-maroon border-2 sm:border-4 border-blue-300 px-2 sm:px-3 py-1.5 sm:py-2"
            }
          `}
        >
          <div className="text-[10px] sm:text-xs md:text-sm lg:text-base break-words line-clamp-2">
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
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-tasyeer-dark-gray mb-4">
            {isArabic ? "الهيكل التنظيمي" : "Organization Chart"}
          </h2>
          <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange mx-auto mb-4 md:mb-6"></div>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto px-4">
            {isArabic
              ? "فريق تسيير متخصص ومنظم بعناية لتحقيق أفضل النتائج"
              : "Tasyeer's specialized team structure organized for optimal results"}
          </p>
        </motion.div>

        {/* Mobile Chart */}
        <div className="md:hidden overflow-x-auto pb-4">
          <div className="min-w-max inline-flex flex-col gap-4 px-2 scale-[0.85] origin-top">
            <div className="flex justify-center">{renderBox("owner", "w-40")}</div>

            <div className="flex justify-center gap-3">
              {["coo", "cfo", "vps"].map((id) => (
                <div key={id} className="w-32">
                  <ChartBox position={getPositionById(id)} />
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              {renderBox("operations", "w-36")}
              {renderBox("specialized", "w-36")}
            </div>

            <div className="flex justify-center gap-8">
              <div className="flex gap-4">
                {operationsColumns.map((col) => (
                  <div key={col.headerId}>
                    {renderColumn(col.headerId, col.childIds, "w-28")}
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                {specializedColumns.map((col) => (
                  <div key={col.headerId}>
                    {renderColumn(col.headerId, col.childIds, "w-28")}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Chart */}
        <motion.div
          className="hidden md:block overflow-x-auto pb-6 md:pb-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="min-w-max inline-flex flex-col gap-8 md:gap-12 px-2 md:px-4">
            <div className="flex justify-center">
              {renderBox("owner", "w-56 md:w-64")}
            </div>

            <div className="flex justify-center gap-6 md:gap-10">
              {["coo", "cfo", "vps"].map((id) => (
                <div key={id} className="w-40 md:w-48">
                  <ChartBox position={getPositionById(id)} />
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-8 md:gap-16">
              {renderBox("operations", "w-52 md:w-60")}
              {renderBox("specialized", "w-52 md:w-60")}
            </div>

            <div className="flex justify-center gap-12">
              <div className="flex gap-8">
                {operationsColumns.map((col) => (
                  <div key={col.headerId}>
                    {renderColumn(col.headerId, col.childIds, "w-32 md:w-36")}
                  </div>
                ))}
              </div>
              <div className="flex gap-8">
                {specializedColumns.map((col) => (
                  <div key={col.headerId}>
                    {renderColumn(col.headerId, col.childIds, "w-32 md:w-36")}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto px-4"
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
