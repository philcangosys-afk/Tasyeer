import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen bg-gradient-to-br from-tasyeer-dark-gray via-gray-900 to-tasyeer-maroon text-white flex items-center justify-center overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-tasyeer-orange opacity-10 rounded-full blur-3xl"
          animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-tasyeer-maroon opacity-5 rounded-full blur-3xl"
          animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container-tight relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-cairo text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              {t("hero.subtitle")}
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <button className="btn-primary inline-flex items-center gap-2 justify-center">
                {t("hero.cta")}
                <ArrowRight size={20} />
              </button>
              <button className="btn-outline text-white border-white hover:bg-white hover:text-tasyeer-maroon">
                {t("nav.contact")}
              </button>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Grid background */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                viewBox="0 0 400 400"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#grid)" />
              </svg>

              {/* Main shape */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-64 h-64 border-4 border-tasyeer-orange rounded-2xl transform rotate-45" />
              </motion.div>

              {/* Accent circles */}
              <motion.div
                className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-tasyeer-orange rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-tasyeer-orange opacity-20 rounded-full blur-xl"
                animate={{ y: [0, 20, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-400">{t("isArabic") ? "اسحب للأسفل" : "Scroll down"}</p>
          <svg
            className="w-6 h-6 text-tasyeer-orange"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};
