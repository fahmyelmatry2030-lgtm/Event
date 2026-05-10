import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import dynamic from 'next/dynamic';
const About = dynamic(() => import('@/components/About'), { ssr: false });
import Topics from '@/components/Topics';
import NoFees from '@/components/NoFees';
import BookingForm from '@/components/BookingForm';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Topics />
      
      {/* Date & Location Info Section */}
      <section className="py-20 border-y border-white/5 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <Calendar size={24} />
            </div>
            <h4 className="text-slate-400 text-sm uppercase tracking-widest mb-2">التاريخ</h4>
            <p className="text-2xl font-bold">الجمعة 22 مايو 2026</p>
          </div>
          
          <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-white/5 py-10 md:py-0">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <Clock size={24} />
            </div>
            <h4 className="text-slate-400 text-sm uppercase tracking-widest mb-2">الوقت</h4>
            <p className="text-2xl font-bold">من الساعة 4 عصراً</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <MapPin size={24} />
            </div>
            <h4 className="text-slate-400 text-sm uppercase tracking-widest mb-2">المكان</h4>
            <p className="text-xl md:text-2xl font-bold">نقابة العمال، رمسيس، القاهرة</p>
          </div>
        </div>
      </section>

      <NoFees />
      <BookingForm />

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center bg-black/40">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-2xl font-bold gold-gradient block mb-4">MONEY MASTER</span>
          <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
            كوتش أميرة محمد | خبيرة ومحللة مالية متخصصة في أسواق المال.
          </p>
          <div className="flex justify-center gap-6 text-slate-400 text-sm mb-8">
            <span className="flex items-center gap-2"><MapPin size={16} /> القاهرة</span>
            <span className="flex items-center gap-2"><Calendar size={16} /> 22 مايو</span>
          </div>
          <div className="pt-8 border-t border-white/5 text-slate-600 text-xs">
            © 2026 Dominate Event - Money Master. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
