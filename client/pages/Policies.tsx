import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Award, Shield, Leaf, CheckCircle, Download } from "lucide-react";
import { useState } from "react";

export default function Policies() {
  const { isArabic } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "hse"
  );

  const hsePolicies = [
    {
      titleAr: "السلامة والصحة المهنية",
      titleEn: "Occupational Health & Safety",
      contentAr:
        "نلتزم بمعايير السلامة الدولية العالية وتوفير بيئة عمل آمنة لجميع الموظفين والعاملين. ننفذ برامج تدريب دورية وفحوصات أمان منتظمة لمنع الحوادث والإصابات.",
      contentEn:
        "We commit to highest international safety standards and provide safe working environment for all staff. We implement regular training programs and safety inspections to prevent accidents.",
    },
    {
      titleAr: "الحماية البيئية",
      titleEn: "Environmental Protection",
      contentAr:
        "نحافظ على البيئة من خلال تقليل التلوث واستخدام مواد صديقة للبيئة وإدارة النفايات بشكل مسؤول وفعال في جميع مشاريعنا.",
      contentEn:
        "We protect the environment by reducing pollution, using eco-friendly materials, and managing waste responsibly.",
    },
    {
      titleAr: "الامتثال القانوني",
      titleEn: "Legal Compliance",
      contentAr:
        "نمتثل بشكل كامل لجميع القوانين والتشريعات المحلية والدولية ذات الصلة بالسلامة والبيئة والصحة المهنية في جميع عملياتنا.",
      contentEn:
        "We fully comply with all applicable local and international laws related to HSE in all operations.",
    },
    {
      titleAr: "التحسين المستمر",
      titleEn: "Continuous Improvement",
      contentAr:
        "نسعى باستمرار لتحسين أنظمتنا وممارساتنا من خلال تقييمات دورية وملاحظات الموظفين والمراجعات الخارجية المنتظمة.",
      contentEn:
        "We continuously improve our systems through regular audits, employee feedback, and external reviews.",
    },
  ];

  const qualityPolicies = [
    {
      titleAr: "ضمان جودة المشاريع",
      titleEn: "Project Quality Assurance",
      contentAr:
        "نضمن أعلى معايير الجودة في جميع مشاريعنا من خلال مراقبة دقيقة ومراجعات منتظمة واستخدام مواد عالية الجودة معتمدة دولياً.",
      contentEn:
        "We ensure highest quality standards through rigorous monitoring, regular inspections, and use of certified materials.",
    },
    {
      titleAr: "كفاءة الفريق",
      titleEn: "Team Competence",
      contentAr:
        "نستثمر في تطوير الكوادر البشرية من خلال برامج تدريب مستمرة وتطوير المهارات والشهادات المهنية للموظفين.",
      contentEn:
        "We invest in continuous training programs and skill development to maintain high team competence.",
    },
    {
      titleAr: "رضا العملاء",
      titleEn: "Customer Satisfaction",
      contentAr:
        "نركز على تحقيق رضا العملاء من خلال التواصل الفعّال والشفافية والاستجابة السريعة لاحتياجاتهم ومتطلباتهم.",
      contentEn:
        "We focus on customer satisfaction through effective communication, transparency, and quick response.",
    },
    {
      titleAr: "معايير دولية",
      titleEn: "International Standards",
      contentAr:
        "نطبق أفضل الممارسات العالمية وتتبع معايير ISO في جميع جوانب العمل لضمان مخرجات عالية الجودة والموثوقية.",
      contentEn:
        "We apply best international practices and ISO standards across all operations for consistent quality.",
    },
  ];

  const sustainabilityPolicies = [
    {
      titleAr: "التنمية المستدامة",
      titleEn: "Sustainable Development",
      contentAr:
        "نلتزم بمبادئ التنمية المستدامة وموازنة احتياجات الحاضر مع حماية موارد المستقبل للأجيال القادمة.",
      contentEn:
        "We commit to sustainable development principles balancing present needs with future resource protection.",
    },
    {
      titleAr: "المسؤولية الاجتماعية",
      titleEn: "Social Responsibility",
      contentAr:
        "نساهم في مشاريع المسؤولية الاجتماعية المحلية وندعم المجتمعات المحلية والتنمية الاقتصادية في المناطق التي نعمل بها.",
      contentEn:
        "We contribute to local CSR projects and support community development in areas where we operate.",
    },
    {
      titleAr: "الكفاءة في استهلاك الموارد",
      titleEn: "Resource Efficiency",
      contentAr:
        "نستخدم الموارد الطبيعية بكفاءة عالية ونسعى لتقليل الهدر والانبعاثات من خلال تقنيات متطورة وإدارة ذكية.",
      contentEn:
        "We use natural resources efficiently and reduce waste and emissions through advanced technology.",
    },
    {
      titleAr: "الشراكات المستدامة",
      titleEn: "Sustainable Partnerships",
      contentAr:
        "نبني شراكات طويلة الأجل مع موردين وعملاء يشاركوننا نفس القيم والالتزام بالاستدامة والمسؤولية.",
      contentEn:
        "We build long-term partnerships with suppliers and clients who share our sustainability values.",
    },
  ];

  const certificates = [
    {
      titleAr: "ISO 9001:2015",
      titleEn: "ISO 9001:2015",
      descAr:
        "شهادة نظام إدارة الجودة الدولية (رقم الشهادة: 30092319813) تغطي جميع أنواع مشاريع البناء والتشييد والعقود الساحلية والصرف الصحي والطرق الرئيسية والصيانة. تؤكد التزامنا بأعلى معايير الجودة العالمية في جميع عملياتنا.",
      descEn:
        "Quality Management System Certificate (No: 30092319813) covering all building projects, marine contracting, sewerage networks, and roads. Demonstrates our commitment to highest quality standards across all operations.",
      icon: "🏅",
    },
    {
      titleAr: "ISO 14001:2015",
      titleEn: "ISO 14001:2015",
      descAr:
        "شهادة نظام الإدارة البيئية (رقم الشهادة: 30092319811) التي تؤكد التزامنا بالممارسات البيئية المسؤولة والمستدامة في جميع مشاريعنا والعمليات البيئية الصارمة.",
      descEn:
        "Environmental Management System Certificate (No: 30092319811) confirming our commitment to responsible environmental practices and strict ecological standards in all projects.",
      icon: "🌿",
    },
    {
      titleAr: "ISO 45001:2018",
      titleEn: "ISO 45001:2018",
      descAr:
        "شهادة نظام إدارة الصحة والسلامة المهنية (رقم الشهادة: 30092301812) التي تعكس التزامنا الراسخ بسلامة وصحة جميع الموظفين والعاملين في جميع أنشطتنا.",
      descEn:
        "Occupational Health & Safety Management Certificate (No: 30092301812) reflecting our strong commitment to employee safety and health across all operations.",
      icon: "🛡️",
    },
    {
      titleAr: "شهادة ICV 50%",
      titleEn: "ICV 50% Certificate",
      descAr:
        "شهادة المحتوى الإماراتي (رقم الشهادة: 1311220 - الترخيص: CM-2748800) التي تؤكد التزامنا الفعّال بدعم الاقتصاد الوطني والكوادر الإماراتية بنسبة 50% من قيمة المشاريع.",
      descEn:
        "In-Country Value Certificate (No: 1311220 - License: CM-2748800) demonstrating our 50% commitment to supporting UAE national economy and local workforce development.",
      icon: "🇦🇪",
    },
  ];

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

  const renderPolicySection = (
    icon: React.ReactNode,
    title: string,
    policies: typeof hsePolicies
  ) => (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h2 className="text-3xl font-bold text-tasyeer-dark-gray">{title}</h2>
      </div>
      {policies.map((policy, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg border-l-4 border-tasyeer-orange hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-bold text-tasyeer-dark-gray mb-3">
            {isArabic ? policy.titleAr : policy.titleEn}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {isArabic ? policy.contentAr : policy.contentEn}
          </p>
        </motion.div>
      ))}
    </div>
  );

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
              {isArabic ? "السياسات والشهادات" : "Policies & Certificates"}
            </h1>
            <div className="h-1 w-24 bg-tasyeer-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              {isArabic
                ? "نعتمد على سياسات صارمة للصحة والسلامة والبيئة والجودة وأعلى معايير الامتثال الدولية"
                : "We adhere to strict HSE, Quality, and Sustainability policies with highest international compliance"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-tasyeer-dark-gray mb-4">
              {isArabic
                ? "الشهادات والاعتمادات"
                : "Certifications & Accreditations"}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center border-t-4 border-tasyeer-orange"
              >
                <div className="text-6xl mb-4">{cert.icon}</div>
                <h3 className="text-2xl font-bold text-tasyeer-dark-gray mb-3">
                  {cert.titleEn}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {isArabic ? cert.descAr : cert.descEn}
                </p>
                <button className="flex items-center justify-center gap-2 mx-auto text-tasyeer-maroon font-semibold hover:text-tasyeer-orange transition-colors">
                  <Download className="w-4 h-4" />
                  {isArabic ? "تحميل" : "Download"}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HSE Section */}
      <section className="py-20 bg-white">
        <div className="container-tight">
          {renderPolicySection(
            <Shield className="w-12 h-12 text-tasyeer-maroon" />,
            isArabic
              ? "سياسات الصحة والسلامة والبيئة"
              : "Health, Safety & Environment Policies",
            hsePolicies
          )}
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-tight">
          {renderPolicySection(
            <Award className="w-12 h-12 text-tasyeer-orange" />,
            isArabic ? "سياسات الجودة" : "Quality Policies",
            qualityPolicies
          )}
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-white">
        <div className="container-tight">
          {renderPolicySection(
            <Leaf className="w-12 h-12 text-green-600" />,
            isArabic
              ? "الاستدامة والمسؤولية الاجتماعية"
              : "Sustainability & CSR",
            sustainabilityPolicies
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange">
        <div className="container-tight text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              {isArabic
                ? "هل تريد معرفة المزيد عن التزامنا؟"
                : "Want to Learn More About Our Commitment?"}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {isArabic
                ? "تحميل وثائق السياسات الكاملة والشهادات من هنا"
                : "Download our complete policy documents and certificates"}
            </p>
            <button className="bg-white text-tasyeer-maroon font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 mx-auto">
              <Download className="w-5 h-5" />
              {isArabic ? "تحميل جميع الشهادات" : "Download All Certificates"}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
