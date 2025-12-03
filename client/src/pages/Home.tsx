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
  Award, Bell, Lightbulb, ShieldCheck,
  CheckCircle2, Handshake, Leaf, Eye
} from 'lucide-react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { centers, strategicGoals, visionAr, visionEn } from '@/data/centerData';

/* ---------------------------------------------------------
   Animated Cards Component
--------------------------------------------------------- */
const AnimatedCards = () => {
  const { t, dir, language } = useLanguage();
  const cards = [
    { key: "platforms.fast.title", descKey: "platforms.fast.desc" },
    { key: "platforms.secure.title", descKey: "platforms.secure.desc" },
    { key: "platforms.smart.title", descKey: "platforms.smart.desc" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="p-8 bg-white shadow-xl rounded-3xl border hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              {t(card.key)}
            </h3>

            <p className="text-lg text-slate-600 leading-relaxed">
              {t(card.descKey)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


/* ---------------------------------------------------------
   Home Page
--------------------------------------------------------- */
export default function Home() {
  const { t, dir, language } = useLanguage();

  const iconMap = {
    Map,
    Zap,
    Bell,
    GraduationCap,
  } as const;

  type IconName = keyof typeof iconMap;
  const goalIcons = {
    TrendingUp,
    Cpu: Brain,
    Network: Database,
    Radar: Satellite,
    BookOpen: GraduationCap,
    Lightbulb: Zap
  };


  return (
    <div className="flex flex-col min-h-screen">

      {/* ======================================================
           HERO SECTION
      ====================================================== */}
      <section
        className={`relative min-h-[95vh] flex items-center overflow-hidden ${dir === 'rtl' ? 'font-[Tajawal]' : ''}`}
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/assets/hero-modern-enhanced.png')",
            filter: 'brightness(0.35) saturate(1.2)',
          }}
        ></div>

        {/* Floating Hero Images */}
        { /*<img src="/assets/1.jpg" className="absolute top-10 left-10 w-64 opacity-60 animate-float" alt="Floating" />*/}
        <img src="/assets/2.jpg" className="absolute bottom-0 right-10 w-80 opacity-50 animate-float-slow" alt="Floating" />

        {/* Animated Grid Overlay */}
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
            <motion.div
              initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`space-y-8 text-center lg:text-${dir === 'rtl' ? 'right' : 'left'}`}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm`}
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-sm font-semibold text-blue-100 tracking-wide uppercase">
                  {language === 'ar' ? 'قيادة التحول الرقمي' : 'Leading Digital Transformation'}
                </span>
              </motion.div>

              <motion.h1
                className="text-6xl md:text-7xl font-bold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {t('hero.title')}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mb-6"
              >
                {t('hero.acronym')}
              </motion.div>

              <motion.p
                className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link href="/services">
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-6 text-lg rounded-xl shadow-2xl">
                    {t('hero.cta')}
                    <ArrowRight className={`w-5 h-5 ml-2`} />
                  </Button>
                </Link>

                <Link href="/about">
                  <Button variant="outline" className="border-2 border-white/30 text-white px-8 py-6 text-lg rounded-xl">
                    {t('hero.learnMore')}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* ======================================================
           ANIMATED CARDS SECTION
      ====================================================== */}
      <AnimatedCards />
      {/* ======================================================
     WORKFLOW STEPS SECTION
====================================================== */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-6 py-2 bg-emerald-100 text-emerald-700 border-emerald-200">
              {language === 'ar' ? 'خطوات العمل' : 'Workflow Steps'}
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              {language === 'ar' ? 'كيف نعمل؟' : 'How We Work'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              {
                img: "/assets/utility.jpg",
                titleAr: "تحليل المتطلبات",
                titleEn: "Requirement Analysis",
                descAr: "فهم احتياجات العميل وتحليل البيئة الحالية.",
                descEn: "Understanding customer needs & analyzing current state.",
              },
              {
                img: "/assets/CertifiedSurveying.jpg",
                titleAr: "تخطيط الحل",
                titleEn: "Solution Planning",
                descAr: "تصميم خارطة طريق واضحة مع أفضل ممارسات التحول الرقمي.",
                descEn: "Designing a clear roadmap using digital best practices.",
              },
              {
                img: "/assets/utilityreq.jpg",
                titleAr: "التنفيذ الذكي",
                titleEn: "Smart Implementation",
                descAr: "بناء الحلول باستخدام أحدث التقنيات.",
                descEn: "Building solutions using modern and scalable technologies.",
              },
              {
                img: "/assets/3.jpg",
                titleAr: "التسليم والدعم",
                titleEn: "Delivery & Support",
                descAr: "تطبيق الحل وضمان استمراريته ودعمه.",
                descEn: "Deploying the solution and ensuring continuity.",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="group p-8 text-center bg-gradient-to-br from-slate-50 to-white border-2 rounded-3xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="w-28 h-28 mx-auto mb-6 rounded-2xl overflow-hidden shadow-md">
                  <img src={step.img} alt={language === 'ar' ? step.titleAr : step.titleEn} className="w-full h-full object-cover" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {language === 'ar' ? step.titleAr : step.titleEn}
                </h3>

                <p className="text-slate-600">
                  {language === 'ar' ? step.descAr : step.descEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ======================================================
           VISION SECTION
      ====================================================== */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Badge className="mb-4 px-6 py-2 bg-blue-100 text-blue-700 border-blue-200">
                {t('about.vision')}
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {language === 'ar' ? 'رؤيتنا للمستقبل' : 'Our Vision for the Future'}
              </h2>
            </div>

            <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 shadow-xl relative overflow-hidden">
              <img src="/assets/surveying-hologram.png" className="absolute inset-0 w-full h-full object-cover opacity-10" />
              <Target className="w-12 h-12 text-blue-600 mb-6 mx-auto relative z-10" />
              <p className="text-lg md:text-xl text-slate-700 text-center relative z-10">
                {language === 'ar' ? visionAr : visionEn}
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
           STRATEGIC GOALS
      ====================================================== */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <motion.div className="text-center mb-16">
            <Badge className="mb-4 px-6 py-2 bg-indigo-100 text-indigo-700 border-indigo-200">
              {t('about.goals')}
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              {language === 'ar' ? 'أهدافنا الإستراتيجية' : 'Our Strategic Goals'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicGoals.map((goal, idx) => {
              const Icon = iconMap[goal.icon as IconName] || Target;




              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="h-full p-8 bg-white border-2 shadow-xl hover:border-blue-200 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl text-white flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {language === 'ar' ? goal.titleAr : goal.titleEn}
                    </h3>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
           CENTERS PREVIEW
      ====================================================== */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div className="text-center mb-16">
            <Badge className="mb-4 px-6 py-2 bg-purple-100 text-purple-700 border-purple-200">
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
            {centers.slice(0, 3).map((center, idx) => {
              return (
                <motion.div
                  key={center.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="h-full p-6 bg-gradient-to-br from-white to-slate-50 border-2 hover:shadow-xl transition-all group">
                    <div className={`w-12 h-12 rounded-xl overflow-hidden mb-4`}>
                      <img src={`/assets/centers/center${center.id}.jpg`} alt={language === 'ar' ? center.nameAr : center.nameEn} className="w-full h-full object-cover" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                      {language === 'ar' ? center.nameAr : center.nameEn}
                    </h3>

                    <p className="text-sm text-slate-600 line-clamp-3">
                      {language === 'ar'
                        ? center.descriptionAr.substring(0, 100) + '...'
                        : center.descriptionEn.substring(0, 100) + '...'}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/centers">
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-6 text-lg rounded-xl shadow-xl">
                {t('common.viewAll')}
                <ArrowRight className={`w-5 h-5 ml-2`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================
     KEY OBJECTIVES SECTION
====================================================== */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-6 py-2 bg-teal-100 text-teal-700 border-teal-200">
              {language === 'ar' ? 'أهدافنا الرئيسية' : 'Key Objectives'}
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              {language === 'ar' ? 'ما الذي نسعى لتحقيقه؟' : 'What We Aim to Achieve'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                titleAr: "تحسين الكفاءة",
                titleEn: "Boost Efficiency",
                descAr: "تمكين المؤسسات من تسريع عملياتها وتحسين الأداء.",
                descEn: "Enabling organizations to speed operations & improve performance.",
              },
              {
                icon: TrendingUp,
                titleAr: "تحقيق النمو",
                titleEn: "Drive Growth",
                descAr: "مساعدة المؤسسات على التوسع الذكي باستخدام البيانات.",
                descEn: "Helping organizations expand wisely through data.",
              },
              {
                icon: ShieldCheck,
                titleAr: "ضمان الجودة",
                titleEn: "Ensure Quality",
                descAr: "تقديم حلول دقيقة وعالية الموثوقية.",
                descEn: "Delivering accurate and highly reliable solutions.",
              },
            ].map((obj, idx) => {
              const Icon = obj.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="p-8 bg-white border-2 rounded-3xl shadow-lg hover:shadow-2xl transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-500 text-white rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {language === 'ar' ? obj.titleAr : obj.titleEn}
                    </h3>

                    <p className="text-slate-600 leading-relaxed">
                      {language === 'ar' ? obj.descAr : obj.descEn}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ======================================================
     ABOUT & VALUES & DOCUMENTS SECTION
====================================================== */}
      {/* ABOUT & VALUES & DOCUMENTS SECTION */}
      <section className="py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="container space-y-32">

          {/* ======================== GOAL ======================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="px-6 py-2 bg-blue-100 text-blue-700 border-blue-200 mb-4">
              {t("about.goal.badge")}
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t("about.goal.title")}
            </h2>

            <p className="text-xl leading-relaxed text-slate-700">
              {t("about.goal.description")}
            </p>
          </motion.div>

          {/* ======================== VALUES ======================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Badge className="px-6 py-2 bg-emerald-100 text-emerald-700 border-emerald-200 mb-4">
              {t("about.values.badge")}
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-14">
              {t("about.values.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
              {[
                { key: "professional", icon: ShieldCheck },
                { key: "quality", icon: Award },
                { key: "transparency", icon: Eye },
                { key: "sustainability", icon: Leaf },
                { key: "integrity", icon: Handshake },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.06, y: -8 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="group p-6 bg-white border rounded-3xl shadow-sm hover:shadow-xl transition relative overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-teal-50 to-blue-50 blur-2xl"></div>

                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="font-bold text-lg text-slate-900">
                      {t(`about.values.items.${item.key}`)}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ======================== DOCUMENTS ======================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <Badge className="px-6 py-2 bg-orange-100 text-orange-700 border-orange-200 mb-4">
              {t("about.documents.badge")}
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 text-center">
              {t("about.documents.title")}
            </h2>

            <div className="bg-white p-10 rounded-3xl shadow-lg border">
              <ul className="space-y-5 text-lg text-slate-700 leading-relaxed">
                {[
                  "item1",
                  "item2",
                  "item3",
                  "item4",
                  "item5",
                  "item6",
                  "item7",
                ].map((key, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1" />
                    <span>{t(`about.documents.items.${key}`)}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ======================== PROCEDURES ======================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <Badge className="px-6 py-2 bg-purple-100 text-purple-700 border-purple-200 mb-4">
              {t("about.procedures.badge")}
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 text-center">
              {t("about.procedures.title")}
            </h2>

            <div className="bg-white p-10 rounded-3xl shadow-lg border relative">
              <ol className="space-y-8 text-lg text-slate-700 leading-relaxed relative">
                <div className="absolute right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-300 to-purple-100 rounded-full"></div>

                {["step1", "step2", "step3", "step4", "step5", "step6"].map(
                  (key, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 35 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="pr-10 relative"
                    >
                      <span className="absolute right-0 top-2 w-5 h-5 rounded-full border-4 border-purple-400 bg-purple-100"></span>
                      {t(`about.procedures.items.${key}`)}
                    </motion.li>
                  )
                )}
              </ol>
            </div>
          </motion.div>

        </div>
      </section>



      {/* ======================================================
           CTA SECTION
      ====================================================== */}
      <section
        className="relative py-24 text-center text-white"
        style={{
          backgroundImage: "url('/assets/minya-cyber.png')", // <-- your image path here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Optional subtle overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10">
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
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl shadow-2xl">
                {language === 'ar' ? 'استكشف خدماتنا' : 'Explore Services'}
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="outline" className="border-2 border-white text-white px-8 py-6 text-lg rounded-xl">
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
