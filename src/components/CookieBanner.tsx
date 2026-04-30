import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[60]"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 flex items-start space-x-4">
            <div className="bg-primary-50 p-2 rounded-xl text-primary-600 flex-shrink-0">
              <Cookie className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-slate-900">Cookies & Privacy</h3>
                <button onClick={() => setShow(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                We use cookies to ensure you get the best experience on our website. Note that we currently do not use tracking cookies. Read our{" "}
                <Link to="/privacy" className="text-primary-600 font-semibold hover:underline">
                  Privacy Policy
                </Link>{" "}
                for more info.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={handleAccept}
                  className="flex-grow bg-slate-900 text-white text-sm font-bold py-2.5 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Accept All
                </button>
                <button
                  onClick={handleDecline}
                  className="flex-grow bg-slate-100 text-slate-600 text-sm font-bold py-2.5 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
