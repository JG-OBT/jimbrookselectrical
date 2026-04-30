import { BookOpen } from "lucide-react";

const Terms = () => {
  return (
    <div className="bg-slate-50 py-24 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-xl border border-slate-100">
          <div className="flex items-center space-x-4 mb-10 pb-10 border-b border-slate-100">
            <div className="bg-slate-50 p-4 rounded-2xl text-slate-600">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Terms of Use</h1>
          </div>

          <div className="prose prose-slate max-w-none prose-lg">
            <p className="text-lg text-slate-500 italic mb-10">
              By using our website, you imply acceptance of these terms. These terms do not affect your statutory rights.
            </p>

            <div className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">Copyright & Ownership</h2>
                <p className="text-slate-600 leading-relaxed">
                  All data and information on this site is copyright Jim Brooks Electrical (the "named organisations"). It may not be resold or redistributed for compensation without express prior written permission from the copyright holders.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">Permitted Use</h2>
                <p className="text-slate-600 leading-relaxed">
                  Information is provided for personal, non-commercial use only. It must not be used maliciously or for any illegal activities. Any unauthorised use potentially subjects the user to legal action.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">Accuracy of Information</h2>
                <p className="text-slate-600 leading-relaxed">
                  While we strive for accuracy, the information on this site may be incomplete or incorrect. Users must verify all information before acting on it. Measurements and specifications are provided as a guide; slight variations may occur.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">Limitation of Liability</h2>
                <p className="text-slate-600 leading-relaxed">
                  Jim Brooks Electrical Ltd will not be held liable for any direct or indirect damages arising from the use or inability to use this website. This includes, but is not limited to, loss of data or profit.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">Trademarks & External Links</h2>
                <p className="text-slate-600 leading-relaxed">
                  Brand and product names mentioned on this site are trademarks of their respective holders. Links to external websites are provided in good faith for your convenience; we are not responsible for the content or accuracy of third-party sites.
                </p>
              </section>

              <section className="pt-10 border-t border-slate-100">
                <p className="text-slate-500 font-medium">
                  Questions regarding these terms? Please email{" "}
                  <a href="mailto:office.jimbrookselec@yahoo.com" className="text-primary-600 font-bold border-b border-primary-600/20 hover:border-primary-600">
                    office.jimbrookselec@yahoo.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
