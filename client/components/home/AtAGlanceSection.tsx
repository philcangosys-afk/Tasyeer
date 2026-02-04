import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState, useRef } from "react";
import { Building, Users, Calendar, Award } from "lucide-react";

interface StatItem {
  value: number;
  suffix: string;
  labelAr: string;
  labelEn: string;
  icon: React.ReactNode;
  color: string;
}

export const AtAGlanceSection = () => {
  const { t, isArabic } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  const stats: StatItem[] = [
    {
      value: 50,
      suffix: "+",
      labelAr: "مشروع مكتمل",
      labelEn: "Projects Completed",
      icon: <Building className="w-8 h-8" />,
      color: "from-tasyeer-maroon to-red-600",
    },
    {
      value: 30,
      suffix: "+",
      labelAr: "عميل راضي",
      labelEn: "Satisfied Clients",
      icon: <Users className="w-8 h-8" />,
      color: "from-tasyeer-orange to-yellow-500",
    },
    {
      value: 120,
      suffix: "+",
      labelAr: "متخصص محترف",
      labelEn: "Team Experts",
      icon: <Award className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      value: 5,
      suffix: "+",
      labelAr: "سنوات خبرة",
      labelEn: "Years Experience",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
    },
  ];

  useEffect(() => {
    if (!isInView) return;

    const duration = 2500;
    const startTime = Date.now();
    const targetValues = stats.map((s) => s.value);

    const updateCounts = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts(targetValues.map((target) => Math.floor(target * easeOutQuart)));

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      }
    };

    requestAnimationFrame(updateCounts);
  }, [isInView]);

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-tasyeer-orange/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-tasyeer-maroon/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
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
            className="inline-block bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange text-white text-sm font-bold px-4 py-2 rounded-full mb-4"
          >
            {isArabic ? "إحصائيات الشركة" : "Company Statistics"}
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tasyeer-dark-gray mb-6">
            {isArabic ? "نظرة سريعة" : "At a Glance"}
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange mx-auto rounded-full"
          />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Animated border */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.icon}
                </motion.div>

                {/* Number with animation */}
                <div className="mb-2">
                  <motion.span
                    className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-tasyeer-dark-gray to-gray-600 bg-clip-text text-transparent force-ltr"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {counts[index]}
                  </motion.span>
                  <span className="text-4xl font-bold text-tasyeer-orange force-ltr">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="text-gray-600 font-semibold text-lg">
                  {isArabic ? stat.labelAr : stat.labelEn}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-200 rounded-tr-lg group-hover:border-tasyeer-orange/50 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-4">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-tasyeer-maroon" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-3 h-3 border-2 border-tasyeer-orange rotate-45"
            />
            <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-tasyeer-maroon" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
