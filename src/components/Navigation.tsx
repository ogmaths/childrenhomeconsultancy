import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import {
  Menu,
  X,
  Home,
  FileText,
  ClipboardCheck,
  Building,
  Download,
  Phone,
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="h-4 w-4" /> },
    {
      name: "Pre-Registration",
      path: "/pre-registration",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      name: "Inspection Readiness",
      path: "/inspection-readiness",
      icon: <ClipboardCheck className="h-4 w-4" />,
    },
    {
      name: "Post-Registration",
      path: "/post-registration",
      icon: <Building className="h-4 w-4" />,
    },
    {
      name: "Resources",
      path: "/resources",
      icon: <Download className="h-4 w-4" />,
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-navy-600 to-navy-700 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Home className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1
                className={`text-xl font-heading font-bold transition-colors duration-300 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Children's Home Consultancy
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                  location.pathname === item.path
                    ? isScrolled
                      ? "bg-navy-100 text-navy-700"
                      : "bg-white/20 text-white"
                    : isScrolled
                      ? "text-gray-700 hover:bg-gray-100 hover:text-navy-700"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="btn-primary">
                <Phone className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? "bg-navy-100 text-navy-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-navy-700"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link to="/contact">
                  <Button className="btn-primary w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
