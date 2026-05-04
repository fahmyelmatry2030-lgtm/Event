"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-black gold-gradient tracking-tighter">AK</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 flex-row-reverse space-x-reverse">
            <Link href="#home" className="text-slate-200 hover:text-primary transition-colors font-medium">الرئيسية</Link>
            <Link href="#topics" className="text-slate-200 hover:text-primary transition-colors font-medium">المحاور</Link>
            <Link href="#booking" className="px-8 py-3 gold-button rounded-full text-sm font-bold shadow-lg shadow-primary/20">احجز الآن</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-200 p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-white/5 py-6 px-4 flex flex-col items-center gap-6 shadow-2xl"
        >
          <Link href="#home" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium">الرئيسية</Link>
          <Link href="#topics" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium">المحاور</Link>
          <Link href="#booking" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-4 gold-button rounded-xl font-bold">احجز الآن</Link>
        </motion.div>
      )}
    </nav>
  );
}
