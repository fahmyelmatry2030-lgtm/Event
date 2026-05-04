"use client"
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  BookOpen, 
  Monitor, 
  BarChart3, 
  Layers, 
  CheckCircle, 
  Lightbulb 
} from 'lucide-react';

const topics = [
  {
    title: "ما هو مجال التداول؟",
    desc: "فهم شامل لطبيعة العمل في أسواق المال العالمية.",
    icon: HelpCircle
  },
  {
    title: "أساسيات المجال",
    desc: "المصطلحات والمبادئ التي يجب معرفتها قبل البدء.",
    icon: BookOpen
  },
  {
    title: "منصات التداول",
    desc: "شرح عملي لأفضل المنصات وكيفية التعامل معها.",
    icon: Monitor
  },
  {
    title: "جزء من التحليل",
    desc: "مقدمة في قراءة الشارت وفهم حركة الأسعار.",
    icon: BarChart3
  },
  {
    title: "تعدد مصادر الدخل",
    desc: "كيف تجعل التداول مصدر دخل إضافي مستدام.",
    icon: Layers
  },
  {
    title: "الصفقات الجاهزة",
    desc: "كيفية الاستفادة من خبرات المحترفين وتوصياتهم.",
    icon: CheckCircle
  },
  {
    title: "أفضل طريقة للتعلم",
    desc: "خارطة طريق واضحة لاحتراف المجال في أسرع وقت.",
    icon: Lightbulb
  }
];

export default function Topics() {
  return (
    <section id="topics" className="py-20 md:py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-primary font-medium mb-2 tracking-widest uppercase">What You Will Learn</h2>
          <h3 className="text-3xl md:text-4xl font-bold">محاور الإيفنت الرئيسية</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {topics.map((topic, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-2xl card-gradient hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <topic.icon className="text-primary" size={24} />
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-right">{topic.title}</h4>
              <p className="text-slate-400 text-right leading-relaxed text-sm md:text-base">{topic.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
