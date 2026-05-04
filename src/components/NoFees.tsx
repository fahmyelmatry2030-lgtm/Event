"use client"
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function NoFees() {
  return (
    <section className="py-16 md:py-20 border-y border-white/5 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
            <ShieldCheck size={32} />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">مفيش رسوم على تعليمك</h3>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl">
            كل المحتوى التعليمي داخل الإيفنت مشمول في سعر التيكت بالكامل. هدفنا هو نشر المعرفة الحقيقية بدون أي تكاليف خفية.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
