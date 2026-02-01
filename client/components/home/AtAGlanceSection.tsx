import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState, useRef } from "react";

interface StatItem {
  key: string;
  value: number;
  suffix: string;
}

export const AtAGlanceSection = () => {
  const { t } = useLanguage();
  const [counts, setCounts] = useState({ projects: 0, clients: 0, team: 0, years: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targets = { projects: 50, clients: 30, team: 120, years: 5 };
    const duration = 2000;
    const startTime = Date.now();

    const updateCounts = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        team: Math.floor(targets.team * progress),
        years: Math.floor(targets.years * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      }
    };

    updateCounts();
  }, [isVisible]);

  const stats: StatItem[] = [
    { key: "glance.projects", value: counts.projects, suffix: "+" },
    { key: "glance.clients", value: counts.clients, suffix: "+" },
    { key: "glance.team", value: counts.team, suffix: "+" },
    { key: "glance.experience", value: counts.years, suffix: "+" },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-tasyeer-dark-gray mb-4">
            {t("glance.title")}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-tasyeer-maroon to-tasyeer-orange mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold text-tasyeer-maroon mb-2">
                {stat.value}
                <span className="text-tasyeer-orange">{stat.suffix}</span>
              </div>
              <p className="font-cairo text-gray-700 font-semibold text-lg">{t(stat.key)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
