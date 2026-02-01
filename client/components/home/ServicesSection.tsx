import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, Leaf, Wrench, Droplet, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ServiceItem {
  id: number;
  titleAr: string;
  titleEn: string;
  icon: React.ReactNode;
  descriptionAr: string;
  descriptionEn: string;
  color: string;
  image: string;
}

export const ServicesSection = () => {
  const { isArabic } = useLanguage();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const services: ServiceItem[] = [
    {
      id: 1,
      titleAr: "البنية التحتية والطرق",
      titleEn: "Infrastructure & Roads",
      icon: <Building2 className="w-10 h-10" />,
      descriptionAr:
        "توفير حلول شاملة للبنية التحتية والطرق السريعة والداخلية مع أعلى معايير الجودة والسلامة",
      descriptionEn:
        "Comprehensive infrastructure and highway solutions with highest quality and safety standards",
      color: "from-tasyeer-maroon to-red-700",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      titleAr: "تنسيق المناظر الطبيعية",
      titleEn: "Landscaping & Gardens",
      icon: <Leaf className="w-10 h-10" />,
      descriptionAr:
        "تصميم وتنفيذ مشاريع تنسيق حدائق احترافية وعصرية مع أنظمة ري متطورة",
      descriptionEn:
        "Professional and modern landscaping design with advanced irrigation systems",
      color: "from-emerald-600 to-green-700",
      image: "https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      titleAr: "الصيانة والتجديد",
      titleEn: "Maintenance & Renovation",
      icon: <Wrench className="w-10 h-10" />,
      descriptionAr:
        "خدمات صيانة وتجديد شاملة للمشاريع السكنية والتجارية بجودة عالية",
      descriptionEn:
        "Comprehensive maintenance and renovation services for residential and commercial projects",
      color: "from-tasyeer-orange to-amber-600",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      titleAr: "الري والصرف الصحي",
      titleEn: "Irrigation & Drainage",
      icon: <Droplet className="w-10 h-10" />,
      descriptionAr:
        "تصميم وتنفيذ أنظمة الري والصرف الصحي المتقدمة بكفاءة وموثوقية",
      descriptionEn:
        "Advanced irrigation and drainage systems design with efficiency and reliability",
      color: "from-blue-600 to-cyan-600",
      image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-tasyeer-dark-gray via-gray-900 to-tasyeer-dark-gray relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-tasyeer-orange/10 rounded-full blur-[100px]"
          animate={{ x: [0, 50, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-tasyeer-maroon/10 rounded-full blur-[100px]"
          animate={{ x: [0, -50, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />

        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100">
          <defs>
            <pattern id="serviceGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#serviceGrid)" />
        </svg>
      </div>

      <div className="container-tight relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-white/10 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full mb-4 border border-white/20"
          >
            {isArabic ? "ماذا نقدم" : "What We Offer"}
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {isArabic ? "خدماتنا المتميزة" : "Our Premium Services"}
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange mx-auto rounded-full"
          />
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            {isArabic
              ? "نقدم مجموعة متكاملة من الخدمات الاحترافية في مجال البنية التحتية والمقاولات"
              : "We provide a complete range of professional services in infrastructure and contracting"}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative perspective-1000"
            >
              <motion.div
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={isArabic ? service.titleAr : service.titleEn}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    animate={hoveredId === service.id ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                </div>

                {/* Content */}
                <div className="relative p-8 md:p-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-tasyeer-orange transition-colors">
                    {isArabic ? service.titleAr : service.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                    {isArabic ? service.descriptionAr : service.descriptionEn}
                  </p>

                  {/* Link */}
                  <motion.div
                    className="flex items-center gap-2 text-tasyeer-orange font-semibold"
                    whileHover={{ x: isArabic ? -5 : 5 }}
                  >
                    <span>{isArabic ? "اكتشف المزيد" : "Learn More"}</span>
                    {isArabic ? (
                      <ArrowLeft className="w-5 h-5" />
                    ) : (
                      <ArrowRight className="w-5 h-5" />
                    )}
                  </motion.div>

                  {/* Decorative line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-tasyeer-maroon via-tasyeer-orange to-tasyeer-maroon"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>

                {/* Hover border effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-tasyeer-orange/0 rounded-2xl pointer-events-none"
                  animate={hoveredId === service.id ? { borderColor: "rgba(235,183,106,0.3)" } : {}}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(235,183,106,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-tasyeer-orange to-yellow-500 text-tasyeer-dark-gray font-bold py-4 px-10 rounded-full inline-flex items-center gap-3 shadow-lg"
            >
              {isArabic ? "عرض جميع الخدمات" : "View All Services"}
              {isArabic ? (
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              )}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
