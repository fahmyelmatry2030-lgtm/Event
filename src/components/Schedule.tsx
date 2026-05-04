"use client"
import { motion } from 'framer-motion';

const schedule = [
  { time: "04:00 PM", event: "الاستقبال والتسجيل", color: "bg-slate-800" },
  { time: "05:00 PM", event: "الجلسة الأولى: فلسفة شطرنج المال", color: "bg-primary/20" },
  { time: "06:30 PM", event: "استراحة صلاة وقهوة", color: "bg-slate-800" },
  { time: "07:00 PM", event: "الجلسة الثانية: استراتيجيات التنفيذ", color: "bg-primary/20" },
  { time: "08:30 PM", event: "مناقشة مفتوحة وأسئلة", color: "bg-primary" }
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">جدول اليوم</h3>
        <div className="space-y-4">
          {schedule.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`p-6 rounded-2xl flex flex-row-reverse justify-between items-center ${item.color} border border-white/5`}
            >
              <span className="font-bold text-lg">{item.time}</span>
              <span className="text-xl">{item.event}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
