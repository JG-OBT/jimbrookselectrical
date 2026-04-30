import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Send, MessageSquare, Check, PhoneCall, Zap } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    antispam: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.antispam !== "5") {
      alert("Antispam check failed. Please try again.");
      return;
    }
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      title: "Call Us",
      value: "01963 210056",
      subValue: "07970 772612",
      link: "tel:01963210056",
      icon: <Phone className="w-6 h-6" />,
      color: "bg-primary-50 text-primary-600",
    },
    {
      title: "Email Us",
      value: "office.jimbrookselec@yahoo.com",
      link: "mailto:office.jimbrookselec@yahoo.com",
      icon: <Mail className="w-6 h-6" />,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Visit Us",
      value: "Hillview Farm, Middlemarsh,",
      subValue: "Sherborne, Dorset, DT9 5QN",
      link: "https://maps.google.com/?q=Hillview+Farm+Middlemarsh+Dorset+DT9+5QN",
      icon: <MapPin className="w-6 h-6" />,
      color: "bg-slate-50 text-slate-600",
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 text-center max-w-xl mx-auto"
        >
          <div className="bg-accent-50 text-accent-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-12 h-12" strokeWidth={3} />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Message Sent!</h1>
          <p className="text-xl text-slate-500 mb-10 leading-relaxed">
            Thank you for your enquiry, <span className="font-bold text-slate-900">{formData.name}</span>. We've received your message and will get back to you as soon as possible.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-primary-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50">
      {/* Page Header */}
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tighter uppercase">Contact Us</h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Ready for a free, no-obligation quote? We're here to help with any electrical or solar PV requirements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Get in Touch</h2>
              
              <div className="grid grid-cols-1 gap-6">
                {contactMethods.map((method) => (
                  <motion.a
                    key={method.title}
                    href={method.link}
                    whileHover={{ x: 10 }}
                    className="flex items-start p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className={`${method.color} p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform`}>
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-400 text-sm uppercase tracking-widest mb-1">{method.title}</h3>
                      <p className="text-slate-900 font-bold text-lg leading-tight">{method.value}</p>
                      {method.subValue && <p className="text-slate-900 font-bold text-lg leading-tight">{method.subValue}</p>}
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="bg-primary-600 rounded-3xl p-10 text-white shadow-2xl shadow-primary-600/20 relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-bold">Office Hours</h3>
                  <div className="space-y-2 opacity-90 font-medium">
                    <div className="flex justify-between">
                      <span>Mon - Fri:</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>By Appointment</span>
                    </div>
                    <div className="flex justify-between border-t border-white/20 pt-2 mt-2">
                      <span>Emergency calls:</span>
                      <span className="font-bold">24/7 Available</span>
                    </div>
                  </div>
                </div>
                <Zap className="absolute -bottom-10 -right-10 w-48 h-48 text-white/10" />
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100"
              >
                <div className="flex items-center space-x-3 mb-10">
                  <div className="bg-primary-100 p-2 rounded-lg text-primary-600">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Send a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Your Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all bg-slate-50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all bg-slate-50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all bg-slate-50"
                      placeholder="01234 567890"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                    <textarea
                      required
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all bg-slate-50 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Antispam: What is 4 + 1?</label>
                    <input
                      required
                      type="text"
                      name="antispam"
                      value={formData.antispam}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all bg-slate-50"
                      placeholder="Enter the number"
                    />
                  </div>

                  <p className="text-xs text-slate-400 italic px-1 pt-2">
                    Privacy Note: Information provided above will only be used to reply to your specific enquiry.
                  </p>

                  <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full bg-primary-600 text-white font-bold py-5 rounded-2xl hover:bg-primary-700 active:scale-95 transition-all shadow-xl shadow-primary-600/20 flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
