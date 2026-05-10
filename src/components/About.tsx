"use client";

import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, ShieldCheck } from 'lucide-react';
export default function About() {
  const stats = [
    { icon: <TrendingUp className="text-primary" size={24} />, value: '+5 سنوات', label: 'خبرة في الأسواق' },
    { icon: <Users className="text-primary" size={24} />, value: '+10,000', label: 'متدرب' },
    { icon: <Award className="text-primary" size={24} />, value: 'معتمدة', label: 'محللة مالية' },
    { icon: <ShieldCheck className="text-primary" size={24} />, value: '100%', label: 'تداول آمن' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-900/20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm md:text-base font-bold tracking-widest uppercase mb-3">عن الكوتش</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">تعرف على كوتش <span className="gold-gradient">أميرة محمد</span></h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 p-2 md:p-4">
              <img 
                src="/amira.png" 
                alt="Amira Mohamed" 
                className="w-full object-cover rounded-2xl aspect-[4/5] transition-all duration-700"
              />
            </div>
            
            {/* Stats Card Overlay */}
            <div className="absolute -bottom-6 md:-right-6 right-4 left-4 md:left-auto bg-slate-800 border border-white/10 p-4 md:p-6 rounded-2xl shadow-xl z-20 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {stats.slice(0, 2).map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <div className="font-bold text-xl text-white">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 space-y-6 text-right"
          >
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
              لو بتفكر تبدأ أونلاين بزنس وتنجح فيه.. أنا هنا عشان أساعدك!
            </h4>
            
            <p className="text-slate-300 leading-relaxed text-lg">
              لو بتفكر تبدأ أونلاين بزنس وتنجح فيه، ويكون عندك شغلك الخاص، أنا موجودة هنا عشان أساعدك خطوة بخطوة. مش بس هتفهم كل حاجة، ده كمان هتلاقي الدعم اللي يخليك تبدأ وتحقق أرباح يومياً ونتائج ممتازة، والأهم تكون ملتزم في خلال رحلتنا التعليمية ❤️🔰.
            </p>
            
            <p className="text-slate-300 leading-relaxed text-lg">
              اتأكد انك موجود هنا في القنوات اللي اتبعتت في أول مسدج مني عشان توصلك كل التحديثات والتدريبات الجديدة.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-end">
              <a 
                href="https://whatsapp.com/channel/0029Vb8vMNe5fM5fIliRZL26" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="WhatsApp" className="w-6 h-6 invert" />
                <div className="flex flex-col text-right">
                  <span className="text-sm">قناة الواتساب</span>
                  <span className="text-xs text-white/80">انضم الآن</span>
                </div>
              </a>

              <a 
                href="https://www.instagram.com/amiramohamed88_/" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" className="w-6 h-6 invert" />
                <div className="flex flex-col text-right">
                  <span className="text-sm">تابعني على انستجرام</span>
                  <span className="text-xs text-white/80" dir="ltr">@amiramohamed88_</span>
                </div>
              </a>
            </div>

            <div className="pt-4 text-right">
              <a href="#booking" className="inline-block px-8 py-3 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                احجز مكانك في الإيفنت الآن
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
