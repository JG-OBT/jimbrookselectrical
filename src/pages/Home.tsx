import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Sun, ShieldCheck, CheckCircle2, Phone } from "lucide-react";

// Placeholder image imports
import heroHome from "../assets/images/hero-home.jpg";
import serviceElectrical from "../assets/images/service-electrical.jpg";
import serviceSolar from "../assets/images/service-solar.jpg";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src={heroHome}
            alt="Jim Brooks Electrical: Modern kitchen installation and solar PV inverters"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center space-x-2 bg-primary-600/20 text-primary-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary-400/30">
              <Zap className="w-4 h-4" />
              <span>Established 2003</span>
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-extrabold mb-6 leading-[1.1]">
              Industrial, Commercial & <span className="text-primary-400">Domestic</span> Electrical Experts
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              From complete rewires to innovative solar PV installations, we provide professional electrical maintenance and renewable energy solutions near Sherborne.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-primary-600 hover:bg-primary-500 text-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center transition-all group shadow-xl shadow-primary-600/30"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/electrical-services"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-5 rounded-2xl font-bold transition-all border border-white/20"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-tight">
                  Years of Expertise Across Every Sector
                </h2>
                <div className="h-1.5 w-24 bg-primary-600 rounded-full" />
              </div>
              <p className="text-lg text-slate-600 leading-relaxed text-justify">
                Jim Brooks Electrical Ltd was founded in 2003 and is based at Middlemarsh near Sherborne, Dorset. We are a NICEIC approved Domestic Installer with years of experience across the Domestic, Commercial, Industrial, and Agricultural sectors.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed text-justify">
                Whether you need extra sockets or complete rewires, our team delivers high-quality workmanship. We also specialise in fitting <a href="https://kingandbrookssolarenergy.co.uk/" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-bold hover:underline">Solar PV systems</a>, helping you transition to clean, renewable energy.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "NICEIC Approved Installer",
                  "Free No-Obligation Quotes",
                  "20+ Years Experience",
                  "Renewable Energy Specialists"
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-slate-100 rounded-[2rem] p-4 rotate-2 shadow-2xl">
                <img
                  src={heroHome}
                  alt="Electrical workmanship"
                  className="rounded-[1.5rem] w-full h-[500px] object-cover -rotate-2 hover:rotate-0 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block max-w-[240px]">
                <ShieldCheck className="w-12 h-12 text-primary-600 mb-4" />
                <p className="font-bold text-slate-900 leading-tight">Fully insured and certified electrical solutions.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">Our Core Services</h2>
            <p className="text-lg text-slate-500">Professional solutions for residential, commercial, and renewable requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Electrical card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 h-full flex flex-col"
            >
              <div className="h-64 overflow-hidden">
                <img src={serviceElectrical} alt="Electrical Services" className="w-full h-full object-cover" />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <Zap className="w-12 h-12 text-primary-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Electrical Services</h3>
                <p className="text-slate-500 mb-8 flex-grow">
                  From domestic lighting to heavy-duty industrial systems and agricultural installs.
                </p>
                <Link to="/electrical-services" className="text-primary-600 font-bold flex items-center hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Solar card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 h-full flex flex-col"
            >
              <div className="h-64 overflow-hidden">
                <img src={serviceSolar} alt="Solar PV Services" className="w-full h-full object-cover" />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <Sun className="w-12 h-12 text-amber-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Solar PV Services</h3>
                <p className="text-slate-500 mb-8 flex-grow">
                  Renewable energy experts. Installing and repairing high-efficiency solar panel systems.
                </p>
                <a href="https://kingandbrookssolarenergy.co.uk/" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-bold flex items-center hover:translate-x-2 transition-transform">
                  View Solar Info <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Contact card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-primary-600 rounded-[2.5rem] overflow-hidden shadow-xl shadow-primary-600/20 text-white h-full flex flex-col p-10"
            >
              <Phone className="w-12 h-12 text-primary-200 mb-8" />
              <h3 className="text-3xl font-bold mb-6">Contact Us Today</h3>
              <p className="text-primary-100 mb-10 text-lg leading-relaxed flex-grow">
                Ready to discuss your requirements? Contact us today for a free, no-obligation quote.
              </p>
              <Link to="/contact" className="bg-white text-primary-600 font-extrabold px-8 py-4 rounded-2xl text-center hover:bg-primary-50 transition-colors shadow-lg">
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent-600/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to start your electrical or solar project?
              </h2>
              <p className="text-xl text-slate-400">
                Contact us to discuss your electrical or solar requirements and get a free, no-obligation quote today.
              </p>
            </div>
            <Link
              to="/contact"
              className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center"
            >
              Request a Free Quote
              <ArrowRight className="ml-3 w-5 h-5 text-primary-600" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
