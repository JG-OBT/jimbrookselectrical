import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Menu, X, Zap, Sun, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Electrical Services", path: "/electrical-services" },
    { name: "Solar PV Services", path: "https://kingandbrookssolarenergy.co.uk/", external: true },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            <a href="tel:01963210056" className="flex items-center hover:text-primary-400 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              01963 210056
            </a>
            <a href="tel:07970772612" className="flex items-center hover:text-primary-400 transition-colors">
              <PhoneCall className="w-4 h-4 mr-2" />
              07970 772612
            </a>
          </div>
          <a href="mailto:office.jimbrookselec@yahoo.com" className="flex items-center hover:text-primary-400 transition-colors">
            <Mail className="w-4 h-4 mr-2" />
            office.jimbrookselec@yahoo.com
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`px-4 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-white py-5 shadow-sm"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-primary-600 p-2 rounded-lg group-hover:bg-primary-500 transition-colors">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 block leading-tight">JIM BROOKS</span>
              <span className="text-xs font-semibold text-slate-500 tracking-widest uppercase">Electrical Ltd</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                {link.external ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-600 hover:text-primary-600 transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className="text-sm font-semibold text-slate-600 hover:text-primary-600 transition-colors active:text-primary-700"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary-600/20 active:scale-95"
              >
                Free Quote
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <ul className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg font-medium text-slate-700 hover:text-primary-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="block text-lg font-medium text-slate-700 hover:text-primary-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-4 border-t border-slate-100 space-y-4">
                <div className="flex flex-col space-y-2 text-sm text-slate-500">
                  <span className="flex items-center uppercase tracking-widest font-bold text-[10px]">Contact Us</span>
                  <a href="tel:01963210056" className="flex items-center text-slate-700">
                    <Phone className="w-4 h-4 mr-2 text-primary-600" />
                    01963 210056
                  </a>
                  <a href="mailto:office.jimbrookselec@yahoo.com" className="flex items-center text-slate-700">
                    <Mail className="w-4 h-4 mr-2 text-primary-600" />
                    office.jimbrookselec@yahoo.com
                  </a>
                </div>
                <Link
                  to="/contact"
                  className="block w-full bg-primary-600 text-white py-4 rounded-xl text-center font-bold shadow-lg shadow-primary-600/20"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
