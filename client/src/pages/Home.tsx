import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Map,
  Database,
  Satellite,
  Brain,
  Server,
  GraduationCap,
  TrendingUp,
  Target,
  Zap,
  Award
} from 'lucide-react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { centers, strategicGoals, visionAr, visionEn } from '@/data/centerData';

export default function Home() {
  const { t, dir, language } = useLanguage();

  const iconMap: { [key: string]: any } = {
    Map, Satellite, Database, Brain, Server, GraduationCap
  };

  const goalIcons: { [key: string]: any } = {
    TrendingUp, Cpu: Brain, Network: Database, Radar: Satellite, BookOpen: GraduationCap, Lightbulb: Zap
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className={`relative min-h-[95vh] flex items-center overflow-hidden ${dir === 'rtl' ? 'font-[Tajawal]' : ''
          }`}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/assets/hero-modern-enhanced.png')",
            filter: 'brightness(0.35) saturate(1.2)',
          }}
        ></div>

        {/* Optional Animated Overlay Grid */}
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundPosition: ['0% 0%', dir === 'rtl' ? '-100% -100%' : '100% 100%'] }}
          transition={{ duration: 60, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="container relative z-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`space-y-8 ${dir === 'rtl' ? 'text-right' : 'text-left'
                } text-center lg:text-${dir === 'rtl' ? 'right' : 'left'}`}
            >
              {/* Tag */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm 
            ${dir === 'rtl' ? 'mr-auto lg:mr-0' : 'ml-auto lg:ml-0'}`}
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-sm font-semibold text-blue-100 tracking-wide uppercase">
                  {language === 'ar' ? 'قيادة التحول الرقمي' : 'Leading Digital Transformation'}
                </span>
              </motion.div>

              {/* Title + Acronym */}
              <div>
                <motion.h1
                  className={`text-6xl md:text-7xl font-bold leading-tight mb-4 ${dir === 'rtl' ? 'leading-[1.3]' : ''
                    }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200">
                    {t('hero.title')}
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className={`text-5xl md:text-6xl font-black text-transparent bg-clip-text 
              bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mb-6 
              ${dir === 'rtl' ? 'tracking-tight' : ''}`}
                >
                  {t('hero.acronym')}
                </motion.div>
              </div>

              {/* Subtitle */}
              <motion.p
                className={`text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0 ${dir === 'rtl' ? 'text-right' : 'text-left'
                  }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {t('hero.subtitle')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className={`flex flex-wrap gap-4 justify-center lg:justify-${dir === 'rtl' ? 'end' : 'start'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link href="/services">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group"
                  >
                    {t('hero.cta')}
                    <ArrowRight
                      className={`w-5 h-5 ${dir === 'rtl' ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'
                        } transition-transform`}
                    />
                  </Button>
                </Link>

                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg rounded-xl"
                  >
                    {t('hero.learnMore')}
                  </Button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                className={`grid grid-cols-3 gap-6 pt-8 ${dir === 'rtl' ? 'text-right' : 'text-left'
                  }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-1">6</div>
                  <div className="text-sm text-blue-200">{language === 'ar' ? 'مراكز متخصصة' : 'Centers'}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-1">105M+</div>
                  <div className="text-sm text-blue-200">{language === 'ar' ? 'أعمال منجزة' : 'Work Done'}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-1">2024</div>
                  <div className="text-sm text-blue-200">{language === 'ar' ? 'تأسيس' : 'Established'}</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className={`absolute bottom-10 transform ${dir === 'rtl' ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'
            }`}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>



      {/* Vision Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Badge className="mb-4 px-6 py-2 text-base bg-blue-100 text-blue-700 border-blue-200">
                {t('about.vision')}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {language === 'ar' ? 'رؤيتنا للمستقبل' : 'Our Vision for the Future'}
              </h2>
            </div>

            <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-100 shadow-xl">
              <Target className="w-12 h-12 text-blue-600 mb-6 mx-auto" />
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed text-center">
                {language === 'ar' ? visionAr : visionEn}
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-6 py-2 text-base bg-indigo-100 text-indigo-700 border-indigo-200">
              {t('about.goals')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              {language === 'ar' ? 'أهدافنا الإستراتيجية' : 'Our Strategic Goals'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicGoals.map((goal, idx) => {
              const GoalIcon = goalIcons[goal.icon] || Target;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="h-full p-8 bg-white border-2 border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <GoalIcon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {language === 'ar' ? goal.titleAr : goal.titleEn}
                    </h3>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Centers Preview */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-6 py-2 text-base bg-purple-100 text-purple-700 border-purple-200">
              {t('centers.title')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {language === 'ar' ? 'مراكزنا المتخصصة' : 'Our Specialized Centers'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('centers.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {centers.slice(0, 6).map((center, idx) => {
              const Icon = iconMap[center.icon];
              return (
                <motion.div
                  key={center.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="h-full p-6 bg-gradient-to-br from-white to-slate-50 border-2 border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 group">
                    <div className={`w-12 h-12 bg-gradient-to-br ${center.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                      {language === 'ar' ? center.nameAr : center.nameEn}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3">
                      {language === 'ar' ? center.descriptionAr.substring(0, 100) + '...' : center.descriptionEn.substring(0, 100) + '...'}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/centers">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl group">
                {t('common.viewAll')}
                <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform`} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <Award className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'ar' ? 'انضم إلى مستقبل الذكاء المكاني' : 'Join the Future of Spatial Intelligence'}
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              {language === 'ar'
                ? 'اكتشف كيف يمكن لحلولنا المتقدمة أن تحول رؤيتك إلى واقع'
                : 'Discover how our advanced solutions can transform your vision into reality'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl shadow-2xl">
                  {language === 'ar' ? 'استكشف خدماتنا' : 'Explore Services'}
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg rounded-xl">
                  {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
