import { Link } from "react-router-dom";
import { Zap, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Electrical Services", path: "/electrical-services" },
    { name: "Solar PV Services", path: "https://kingandbrookssolarenergy.co.uk/", external: true },
    { name: "Contact Us", path: "/contact" },
    { name: "Legal Information", path: "/legal" },
    { name: "Terms of Use", path: "/terms" },
    { name: "Privacy & Cookies", path: "/privacy" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="text-white">
                <span className="text-lg font-bold block leading-none">Jim Brooks</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400">Electrical Ltd</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Industrial, Commercial & Domestic Electrical Installations and Maintenance. Founded in 2003, serving Dorset and the South West.
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-white/5 border border-slate-800 rounded-lg flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                <span className="font-bold text-[10px] text-white">NICEIC</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              {links.slice(0, 3).map((link) => (
                <li key={link.path}>
                  {link.external ? (
                    <a href={link.path} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary-400 transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path} className="text-sm hover:text-primary-400 transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Legal & Policies</h4>
            <ul className="space-y-4">
              {links.slice(3).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:01963210056" className="flex items-start text-sm hover:text-primary-400 transition-colors">
                  <Phone className="w-4 h-4 mr-3 mt-0.5 text-primary-500" />
                  01963 210056
                </a>
              </li>
              <li>
                <a href="mailto:office.jimbrookselec@yahoo.com" className="flex items-start text-sm hover:text-primary-400 transition-colors">
                  <Mail className="w-4 h-4 mr-3 mt-0.5 text-primary-500" />
                  office.jimbrookselec@yahoo.com
                </a>
              </li>
              <li className="flex items-start text-sm">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 text-primary-500" />
                <span>
                  Hillview Farm, Middlemarsh,<br />
                  Dorset, DT9 5QN
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© 2022 – {currentYear} Jim Brooks Electrical Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              Website by Sherborne Web Design Ltd
              <ExternalLink className="w-3 h-3 ml-1" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
