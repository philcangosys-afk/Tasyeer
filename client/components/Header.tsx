import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Globe } from "lucide-react";

export const Header = () => {
  const { language, setLanguage, t, isArabic } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { key: "nav.home", path: "/" },
    { key: "nav.about", path: "/about" },
    { key: "nav.services", path: "/services" },
    { key: "nav.projects", path: "/projects" },
    { key: "nav.policies", path: "/policies" },
    { key: "nav.contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container-tight">
        <div
          className={`flex items-center justify-between h-20 ${
            isArabic ? "flex-row-reverse" : "flex-row"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-cairo font-bold text-2xl force-ltr"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F695b86d14e6a4bdeab195add02aaf3df?format=webp&width=100&height=100"
              alt="TASYEER Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-tasyeer-maroon">TASYEER</span>
          </Link>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center gap-8 ${
              isArabic ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className="font-cairo text-sm font-semibold text-gray-700 hover:text-tasyeer-maroon transition-colors duration-200"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* Right Side Controls */}
          <div
            className={`flex items-center gap-4 ${
              isArabic ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Language Toggle */}
            <div className="flex items-center border border-gray-300 rounded-full p-1">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full font-cairo text-sm font-semibold transition-colors duration-200 ${
                  language === "en"
                    ? "bg-tasyeer-maroon text-white"
                    : "text-gray-700 hover:text-tasyeer-maroon"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ar")}
                className={`px-3 py-1 rounded-full font-cairo text-sm font-semibold transition-colors duration-200 ${
                  language === "ar"
                    ? "bg-tasyeer-maroon text-white"
                    : "text-gray-700 hover:text-tasyeer-maroon"
                }`}
              >
                العربية
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-tasyeer-maroon"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 font-cairo text-sm font-semibold text-gray-700 hover:text-tasyeer-maroon hover:px-2 transition-colors duration-200"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
