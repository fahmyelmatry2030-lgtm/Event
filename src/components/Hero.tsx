"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-right order-2 md:order-1"
          >
            <h2 className="text-lg md:text-xl font-medium text-primary mb-3 md:mb-4 tracking-wider uppercase">DOMINATE EVENT</h2>
            <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              MONEY MASTER <br/>
              <span className="gold-gradient text-3xl md:text-6xl">YOUR SAFE TRADING</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-10 max-w-lg mx-auto md:ml-auto leading-relaxed">
              مع كوتش أميرة محمد، خبيرة التداول والمحللة المالية. تعلمي كيف تسيطرين على الأسواق وتبدئين رحلتك من الصفر بأمان.
            </p>
            <div className="flex flex-col sm:flex-row-reverse gap-4 justify-center md:justify-start">
              <a href="#booking" className="px-10 py-4 gold-button rounded-xl text-lg font-bold">
                احجز مكانك الآن
              </a>
              <a href="#about" className="px-10 py-4 border border-slate-700 hover:bg-slate-800 rounded-xl text-lg transition-all">
                عن الكوتش
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 md:order-2 px-4 md:px-0"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10 floating max-w-[450px] mx-auto md:max-w-none">
              <img 
                src="/hero-image.png" 
                alt="Amira Mohamed" 
                className="w-full object-cover aspect-[4/5] md:aspect-auto"
              />
            </div>
            {/* Decorative elements - Hidden on small mobile */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-primary/40 rounded-bl-3xl" />
            <div className="hidden sm:block absolute -top-6 -right-6 w-32 h-32 border-r-2 border-t-2 border-primary/40 rounded-tr-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
