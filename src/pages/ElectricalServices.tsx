import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Zap, Home as HomeIcon, Building2, Factory, Tractor, Leaf, ArrowRight, CheckCircle } from "lucide-react";

// Placeholder image imports
import domesticImg from "../assets/images/domestic-electrical.jpg";
import commercialImg from "../assets/images/commercial-electrical.jpg";
import industrialImg from "../assets/images/industrial-electrical.jpg";
import agriculturalImg from "../assets/images/agricultural-electrical.jpg";

const ElectricalServices = () => {
  const sectors = [
    {
      title: "Domestic",
      icon: <HomeIcon className="w-8 h-8" />,
      image: domesticImg,
      description: "Comprehensive home electrical services for safety and comfort.",
      bullets: [
        "New or upgraded consumer units",
        "Complete & partial rewires",
        "Extra power & lighting points",
        "Heating repairs & installs",
        "Kitchen & bathroom installs",
        "EV car charging points",
      ],
    },
    {
      title: "Commercial",
      icon: <Building2 className="w-8 h-8" />,
      image: commercialImg,
      description: "Reliable electrical solutions for your business premises.",
      bullets: [
        "New power & lighting points",
        "Emergency lighting design",
        "PAT testing (Portable Appliances)",
        "Cat 5/6 data & telephone points",
        "Fire alarm panel installations",
        "Office & shop installations",
      ],
    },
    {
      title: "Industrial",
      icon: <Factory className="w-8 h-8" />,
      image: industrialImg,
      description: "Heavy-duty electrical infrastructure for factories and warehouses.",
      bullets: [
        "3-phase distribution boards",
        "Machinery supply installs",
        "High-level warehouse lighting",
        "Electrical maintenance & repair",
        "Sub-main supplies",
        "Workshop installations",
      ],
    },
    {
      title: "Agricultural",
      icon: <Tractor className="w-8 h-8" />,
      image: agriculturalImg,
      description: "Specialist electrical work for farms and rural businesses.",
      bullets: [
        "Barn & stable high-level lighting",
        "3-phase cabling & distribution",
        "Livestock shed equipment supplies",
        "Pump installations & repairs",
        "External lighting & power",
        "Generator installations",
      ],
    },
  ];

  return (
    <div className="bg-slate-50">
      {/* Hero Header */}
      <section className="bg-slate-900 py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={industrialImg} alt="Background" className="w-full h-full object-cover blur-sm" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="w-16 h-16 text-primary-400 mx-auto mb-8 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">Electrical Services</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We cover all electrical services for domestic, commercial, industrial and agricultural sectors across Sherborne and the South West.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:items-center gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              {/* Image Column */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary-600 rounded-3xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
                  <img
                    src={sector.image}
                    alt={`${sector.title} Electrical`}
                    className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute top-6 left-6 bg-white p-4 rounded-2xl shadow-lg text-primary-600">
                    {sector.icon}
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:w-1/2 space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{sector.title} Electrical Services</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">{sector.description}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {sector.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-primary-600 font-bold hover:translate-x-2 transition-transform"
                  >
                    Request a {sector.title} Quote <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Renewable energy teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-8 md:p-16 text-center shadow-inner">
            <Leaf className="w-16 h-16 text-accent-600 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Renewable Electrical Services</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-3xl mx-auto">
              We install Air Source Heat Pumps, Ground Source Heat Pumps and specialise in solar panel installation and repair. Transitioning to renewable energy has never been easier.
            </p>
            <a
              href="https://kingandbrookssolarenergy.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent-600 hover:bg-accent-700 text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-xl shadow-accent-600/20"
            >
              Explore Solar Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Professional Electrical Work for Any Property</h2>
          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">Contact us for a free, no-obligation quote today. No job is too small or too large.</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-600 font-extrabold px-12 py-5 rounded-2xl text-xl hover:bg-primary-50 active:scale-95 transition-all shadow-2xl"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ElectricalServices;
