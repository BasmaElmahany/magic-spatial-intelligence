import { ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X, Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Chatbot from './Chatbot';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { language, setLanguage, t, dir } = useLanguage();
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'nav.home' },
    { path: '/about', label: 'nav.about' },
    { path: '/centers', label: 'nav.centers' },
    { path: '/services', label: 'nav.services' },
    { path: '/platforms', label: 'nav.platforms' },
    { path: '/complaints', label: 'nav.complaints' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
    const { t } = useLanguage();
  };

  return (
    <div className={`min-h-screen flex flex-col bg-background font-sans ${dir === 'rtl' ? 'rtl' : 'ltr'}`} dir={dir}>
      <Chatbot />
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Minya Governorate, Egypt</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>0862343958</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@magic-minya.gov.eg</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/magic.minya" className="hover:text-white/80 transition-colors" target='blank'><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white/80 transition-colors"><Linkedin className="w-4 h-4" /></a>
            
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm border-border/50' : 'bg-background border-transparent'
          }`}
      >
        <div className="container flex h-20 items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-4 group">
              {/* Logo container */}
              <div className="relative w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-primary/40">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
                {/* Logo image */}
                <img
                  src="/assets/logo.jpg"
                  alt="Logo"
                  className="relative z-10 object-cover w-10 h-10 rounded-lg"
                />
              </div>

              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {language === 'ar' ? 'مجمع الذكاء المكاني المتقدم' : 'Magic'}
                </span>
                <span className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase mt-1">
                  {language === 'ar' ? '' : 'Minya Advanced Geospatial Intelligence Complex'}
                </span>
              </div>
            </a>
          </Link>


          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${location === item.path
                    ? 'text-primary bg-primary/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                >
                  {t(item.label)}
                  {location === item.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full mx-4"
                    />
                  )}
                </a>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden md:flex gap-2 font-medium hover:bg-primary/5 hover:text-primary transition-colors"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'العربية' : 'English'}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b bg-background"
          >
            <div className="container py-4 space-y-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location === item.path
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-muted text-foreground'
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(item.label)}
                  </a>
                </Link>
              ))}
              <Button
                variant="outline"
                className="w-full justify-start gap-2 mt-4"
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
                }}
              >
                <Globe className="w-4 h-4" />
                {language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 py-16 border-t border-slate-800">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo + Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-8">
              {/* Logo Container */}
              <div className="relative w-40 h-24 rounded-xl flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-105">
                {/* Optional gradient overlay - removed for full transparency */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div> */}

                {/* Logo Image */}
                <img
                  src="/assets/logo.jpg"
                  alt="Logo"
                  className="relative z-10 object-cover w-36 h-20 rounded-2xl"
                />
              </div>


              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="font-extrabold text-4xl text-white tracking-tight">
                 MAGIC
                </span>
                <span className="text-lg text-white/70 font-medium tracking-wide mt-1">
                  {t('footer.subtitle')}
                </span>
              </div>
            </div>





            <p className="text-slate-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/magic.minya"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                target='blank'
              >
                <Facebook className="w-4 h-4" />
              </a>
           
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-primary transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-primary transition-colors">
                  {t('footer.services')}
                </Link>
              </li>
              <li>
                <Link href="/centers" className="text-slate-400 hover:text-primary transition-colors">
                  {t('footer.centers')}
                </Link>
              </li>
              <li>
                <Link href="/platforms" className="text-slate-400 hover:text-primary transition-colors">
                  {t('footer.platforms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg">
              {t('footer.servicesTitle')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="text-slate-400 hover:text-primary transition-colors">
                {t('footer.gis')}
              </li>
              <li className="text-slate-400 hover:text-primary transition-colors">
                {t('footer.remoteSensing')}
              </li>
              <li className="text-slate-400 hover:text-primary transition-colors">
                {t('footer.urbanPlanning')}
              </li>
              <li className="text-slate-400 hover:text-primary transition-colors">
                {t('footer.training')}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-400">{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-400">0862343958</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-400">info@magic-minya.gov.eg</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="container mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          {t('footer.rights')}
        </div>
      </footer>

    </div>
  );
}
