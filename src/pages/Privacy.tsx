import { Lock } from "lucide-react";

const Privacy = () => {
  return (
    <div className="bg-slate-50 py-24 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-xl border border-slate-100">
          <div className="flex items-center space-x-4 mb-10 pb-10 border-b border-slate-100">
            <div className="bg-accent-50 p-4 rounded-2xl text-accent-600">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Privacy & Cookie Policy</h1>
          </div>

          <div className="prose prose-slate max-w-none prose-lg">
            <div className="space-y-12">
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Introduction</h2>
                <p className="text-slate-600 leading-relaxed">
                  Jim Brooks Electrical Ltd respects your privacy and is committed to protecting your personal data. This policy explains how we handle your information when you interact with our website.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Data We Collect</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2">Usage Data</h3>
                    <p className="text-sm text-slate-600">We collect your IP address to protect our service from malicious activities.</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2">Contact Data</h3>
                    <p className="text-sm text-slate-600">We collect your name, email, and phone number when you submit an enquiry form.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">How We Use Your Data</h2>
                <p className="text-slate-600 leading-relaxed">
                  Usage data is used exclusively for monitoring and preventing abuse of our web services. Contact data is used solely to respond to your specific enquiry about our electrical or solar services.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Data Sharing & Retention</h2>
                <p className="text-slate-600 leading-relaxed">
                  Usage data is held by our website provider, Sherborne Web Design Ltd, for a period of six months. We will <strong>never</strong> share your personal data with other organisations for marketing purposes unless required by law. Data is kept only as long as necessary.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Your Rights</h2>
                <p className="text-slate-600 mb-4">You have the following rights regarding your personal data:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>The right to request a copy of your personal data.</li>
                  <li>The right to correct any inaccuracies.</li>
                  <li>The right to request deletion or cessation of processing.</li>
                </ul>
                <p className="text-slate-600 text-sm mt-4">
                  Please note that some requests may be refused due to legal or accounting requirements. To exercise your rights, contact us at Hillview Farm, Middlemarsh, Sherborne, Dorset, DT9 5QN.
                </p>
                <p className="text-sm">
                  You also have the right to complain to the{" "}
                  <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-bold hover:underline">
                    Information Commissioner’s Office (ICO)
                  </a>.
                </p>
              </section>

              <section className="space-y-6 bg-amber-50 p-8 rounded-3xl border border-amber-100">
                <h2 className="text-2xl font-bold text-slate-900">Cookies</h2>
                <p className="text-slate-800 leading-relaxed">
                  Although we provide cookie choices for compliance, <strong>this website currently does not use active tracking cookies</strong>. We use a simple cookie to remember your preference for this banner.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">External Links</h2>
                <p className="text-slate-600 leading-relaxed">
                  External links provided on this site are beyond our control. We recommend reviewing the privacy policies of any third-party websites you visit.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
