"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, User, MessageSquare, CheckCircle2, Wallet } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirect to WhatsApp
    const whatsappMessage = `مرحباً، أريد حجز تذكرة لحدث Dominate.\nالاسم: ${formData.name}\nرقم الهاتف: ${formData.phone}\n${formData.message ? `ملاحظات: ${formData.message}` : ''}\nتم تحويل المبلغ وجاهز لإرسال السكرين شوت.`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/201092576682?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="booking" className="py-20 md:py-24 relative overflow-hidden bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">احجز مكانك الآن</h2>
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 px-6 py-2 rounded-full">
            <Wallet className="text-primary" size={20} />
            <span className="text-slate-200">سعر التذكرة:</span>
            <span className="text-primary font-bold text-xl md:text-2xl">200 ج.م</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Instructions */}
          <div className="bg-slate-900/50 p-6 md:p-10 rounded-3xl border border-slate-800 order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-8 text-right text-primary">خطوات الحجز</h3>
            <div className="space-y-8">
              <div className="flex flex-row-reverse gap-5">
                <div className="w-10 h-10 bg-primary text-black rounded-xl flex items-center justify-center flex-shrink-0 font-black shadow-lg shadow-primary/20">1</div>
                <div className="text-right">
                  <p className="text-slate-200 font-bold text-lg mb-1">حول قيمة التذكرة</p>
                  <p className="text-slate-400">حول 200 جنيه على رقم فودافون كاش:</p>
                  <p className="text-white font-mono font-bold text-2xl mt-2 tracking-wider select-all bg-slate-800 px-3 py-1 rounded inline-block">01092576682</p>
                </div>
              </div>
              
              <div className="flex flex-row-reverse gap-5">
                <div className="w-10 h-10 bg-primary text-black rounded-xl flex items-center justify-center flex-shrink-0 font-black shadow-lg shadow-primary/20">2</div>
                <div className="text-right">
                  <p className="text-slate-200 font-bold text-lg mb-1">صور الإيصال</p>
                  <p className="text-slate-400">القط سكرين شوت لإيصال التحويل الناجح.</p>
                </div>
              </div>

              <div className="flex flex-row-reverse gap-5">
                <div className="w-10 h-10 bg-primary text-black rounded-xl flex items-center justify-center flex-shrink-0 font-black shadow-lg shadow-primary/20">3</div>
                <div className="text-right">
                  <p className="text-slate-200 font-bold text-lg mb-1">أكد حجزك</p>
                  <p className="text-slate-400">املأ النموذج وسيتم توجيهك للواتساب لإرسال الإيصال وتأكيد الحجز.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 p-6 md:p-10 rounded-3xl border border-white/10 backdrop-blur-xl order-1 lg:order-2 shadow-2xl">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-right">
                  <label className="block text-sm font-medium text-slate-400 mb-2">الاسم بالكامل (ثلاثي)</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl py-4 px-4 pr-12 focus:outline-none focus:border-primary transition-all text-right" 
                      placeholder="أدخل اسمك كما في الهوية"
                    />
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                  </div>
                </div>

                <div className="text-right">
                  <label className="block text-sm font-medium text-slate-400 mb-2">رقم الموبايل (واتساب)</label>
                  <div className="relative">
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl py-4 px-4 pr-12 focus:outline-none focus:border-primary transition-all text-right" 
                      placeholder="01xxxxxxxxx"
                    />
                    <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-5 gold-button rounded-xl text-xl font-bold flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl shadow-primary/10"
                >
                  {isSubmitting ? "جاري المعالجة..." : "تأكيد الحجز عبر واتساب"}
                </button>
                <p className="text-center text-slate-500 text-xs">سيتم توجيهك فوراً لإرسال إثبات الدفع</p>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-bold mb-2">تم الإرسال بنجاح!</h4>
                <p className="text-slate-400 mb-8">تم فتح واتساب لتأكيد الحجز. إذا لم يفتح، اضغط على الزر أدناه لإرسال بياناتك.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-primary font-bold hover:underline"
                >
                  العودة للنموذج
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
