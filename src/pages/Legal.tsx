import { Shield } from "lucide-react";

const Legal = () => {
  return (
    <div className="bg-slate-50 py-24 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-xl border border-slate-100">
          <div className="flex items-center space-x-4 mb-10 pb-10 border-b border-slate-100">
            <div className="bg-primary-50 p-4 rounded-2xl text-primary-600">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Legal Information</h1>
          </div>

          <div className="space-y-12">
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Company Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Registered Name</span>
                  <p className="text-slate-900 font-bold">Jim Brooks Electrical Ltd</p>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Company Number</span>
                  <p className="text-slate-900 font-bold">04664244</p>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Registration Country</span>
                  <p className="text-slate-900 font-bold">England and Wales</p>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Contact Email</span>
                  <p className="text-slate-900 font-bold">office.jimbrookselec@yahoo.com</p>
                </div>
              </div>
            </section>

            <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Registered Office</h2>
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200">
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  Hillview Farm,<br />
                  Middlemarsh,<br />
                  Sherborne,<br />
                  Dorset,<br />
                  DT9 5QN
                </p>
              </div>
            </section>

            <section className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
               <h2 className="text-2xl font-bold text-slate-900 mb-6">Telephone</h2>
               <div className="flex space-x-8">
                  <p className="text-xl font-bold text-primary-600 hover:scale-105 transition-transform">01963 210056</p>
               </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
