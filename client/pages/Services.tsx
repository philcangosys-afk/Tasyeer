import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  Building2,
  Hammer,
  Leaf,
  Droplet,
  Truck,
  Zap,
  Wind,
  Pickaxe,
} from "lucide-react";

export default function Services() {
  const { isArabic } = useLanguage();

  const services = [
    {
      icon: <Hammer className="w-12 h-12" />,
      titleAr: "بناء الطرق السريعة",
      titleEn: "Highways Construction",
      descAr:
        "تشييد الطرق السريعة والطرق الرئيسية بأعلى معايير السلامة والجودة",
      descEn:
        "Highway and main road construction with highest safety and quality standards",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      titleAr: "صيانة وإصلاح الطرق",
      titleEn: "Road Maintenance & Repair",
      descAr:
        "خدمات صيانة دورية وإصلاح شاملة للطرق الموجودة لضمان سلامتها",
      descEn:
        "Regular maintenance and comprehensive repair services for existing roads",
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      titleAr: "بناء الطرق الداخلية",
      titleEn: "Internal Roads Construction",
      descAr:
        "تطوير شبكات الطرق الداخلية للمشاريع والمجمعات السكنية والتجارية",
      descEn:
        "Development of internal road networks for residential and commercial complexes",
    },
    {
      icon: <Truck className="w-12 h-12" />,
      titleAr: "الرصف والتعبيد",
      titleEn: "Asphalt & Paving",
      descAr:
        "خدمات الرصف بالإسفلت والتعبيد بأعلى معايير الجودة والمتانة",
      descEn:
        "Professional asphalt paving services with highest quality standards",
    },
    {
      icon: <Truck className="w-12 h-12" />,
      titleAr: "توريد وتنقل المواد",
      titleEn: "Material Supply & Transportation",
      descAr:
        "توريد وتنقل المواد البناء والخامات اللازمة لجميع المشاريع",
      descEn:
        "Supply and transportation of construction materials and raw materials",
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      titleAr: "تنسيق المناظر الطبيعية",
      titleEn: "Landscaping & Gardening",
      descAr:
        "تصميم وتنفيذ مشاريع تنسيق المناظر الطبيعية والحدائق العامة والخاصة",
      descEn:
        "Design and implementation of landscaping and gardening projects",
    },
    {
      icon: <Pickaxe className="w-12 h-12" />,
      titleAr: "الحفر والأعمال الترابية",
      titleEn: "Excavation & Earthworks",
      descAr:
        "أعمال الحفر والحفريات والأعمال الترابية المتخصصة بكفاءة عالية",
      descEn:
        "Specialized excavation and earthwork operations with high efficiency",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      titleAr: "مقاولات النفط والغاز",
      titleEn: "Oil & Gas Field Facilities",
      descAr:
        "تشييد وصيانة مرافق النفط والغاز بكفاءة عالية وسلامة مضمونة",
      descEn:
        "Construction and maintenance of oil and gas facilities with high efficiency",
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      titleAr: "مقاولات المشاريع السكنية",
      titleEn: "Building Projects",
      descAr:
        "تشييد المشاريع السكنية والتجارية بمعايير عالمية وتصاميم حديثة",
      descEn:
        "Construction of residential and commercial projects with international standards",
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      titleAr: "صيانة العمارات",
      titleEn: "Building Maintenance",
      descAr:
        "خدمات صيانة شاملة للعمارات والمنشآت التجارية بشكل دوري واحترافي",
      descEn:
        "Comprehensive maintenance services for buildings and commercial facilities",
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      titleAr: "التجديد والصيانة",
      titleEn: "Renovation & Maintenance",
      descAr:
        "أعمال التجديد الشاملة والصيانة الدورية للمشاريع القائمة والقديمة",
      descEn:
        "Comprehensive renovation and periodic maintenance of existing projects",
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      titleAr: "شبكات الري",
      titleEn: "Irrigation Networks",
      descAr:
        "تصميم وتنفيذ شبكات الري الحديثة والفعالة والموفرة للمياه",
      descEn:
        "Design and implementation of modern and efficient irrigation networks",
    },
    {
      icon: <Wind className="w-12 h-12" />,
      titleAr: "أنظمة الصرف",
      titleEn: "Storm Water & Drainage",
      descAr:
        "تطوير أنظمة صرف المياه الجوفية والعاصفة بتقنيات حديثة وفعالة",
      descEn:
        "Development of storm water and drainage systems with modern technology",
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      titleAr: "أعمال الصرف الصحي",
      titleEn: "Sanitary Drainage Works",
      descAr:
        "تشييد شبكات الصرف الصحي والصرف بمعايير عالية وسلامة بيئية مضمونة",
      descEn:
        "Construction of sanitary and drainage networks with high environmental standards",
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
              {isArabic ? "خدماتنا المتخصصة" : "Our Specialized Services"}
            </h1>
            <div className="h-1 w-24 bg-tasyeer-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              {isArabic
                ? "نقدم مجموعة شاملة من خدمات البنية التحتية والمقاولات التي تلبي احتياجات السوق الإقليمية"
                : "We provide a comprehensive range of infrastructure and contracting services tailored to meet regional market needs"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-tight">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-tasyeer-orange hover:border-tasyeer-maroon"
              >
                <div className="text-tasyeer-maroon group-hover:text-tasyeer-orange transition-colors mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-tasyeer-dark-gray mb-3">
                  {isArabic ? service.titleAr : service.titleEn}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {isArabic ? service.descAr : service.descEn}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Our Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-tasyeer-dark-gray mb-4">
              {isArabic ? "لماذا خدماتنا المتميزة؟" : "Why Our Services?"}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-tasyeer-maroon mb-4">
                {isArabic ? "الكفاءة والخبرة" : "Expertise & Experience"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {isArabic
                  ? "فريقنا يتمتع بسنوات طويلة من الخبرة في مشاريع البنية التحتية الكبرى والمعقدة مع التزام دائم بأعلى معايير الجودة والسلامة."
                  : "Our team brings years of experience in large-scale and complex infrastructure projects with unwavering commitment to quality and safety."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-tasyeer-orange mb-4">
                {isArabic
                  ? "التكنولوجيا والابتكار"
                  : "Technology & Innovation"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {isArabic
                  ? "نستخدم أحدث التقنيات والمعدات في تنفيذ المشاريع مع الاستثمار المستمر في البحث والتطوير لتحسين خدماتنا."
                  : "We utilize cutting-edge technology and equipment in project execution with continuous investment in R&D for service improvement."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-tasyeer-maroon mb-4">
                {isArabic ? "الاستدامة البيئية" : "Environmental Sustainability"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {isArabic
                  ? "نلتزم بالممارسات البيئية المستدامة والآمنة في جميع مشاريعنا مع الامتثال الكامل للقوانين والتشريعات."
                  : "We are committed to sustainable and safe environmental practices in all projects with full compliance to regulations."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-tasyeer-orange mb-4">
                {isArabic
                  ? "خدمة العملاء المتميزة"
                  : "Outstanding Customer Service"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {isArabic
                  ? "نقدم دعماً مستمراً وحلولاً مخصصة لكل عميل مع التواصل الفعّال والشفافية الكاملة طوال المشروع."
                  : "We provide continuous support and tailored solutions with effective communication and complete transparency."}
              </p>
            </motion.div>
          </div>
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
                ? "هل تريد معرفة المزيد عن خدماتنا؟"
                : "Want to Learn More About Our Services?"}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {isArabic
                ? "تواصل معنا اليوم للحصول على استشارة مجانية حول احتياجاتك الخاصة"
                : "Contact us today for a free consultation about your specific needs"}
            </p>
            <button className="bg-white text-tasyeer-maroon font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              {isArabic ? "اتصل بنا الآن" : "Contact Us Now"}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
