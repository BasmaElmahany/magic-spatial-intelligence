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
  Award, Bell, ShieldCheck,
  Handshake, Leaf, Eye,
  Radar,
  Waves,
  Rss,
  Cpu
} from 'lucide-react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { centers, visionAr, visionEn } from '@/data/centerData';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from 'react';


type DeviceConfig = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  categoryEn: string;
  categoryAr: string;
  image: string;
  icon: React.ComponentType<any>;
  gradient: string;
};

const devices: DeviceConfig[] = [
  {
    id: 'trimble-gnss-ref',
    titleKey: 'devices.trimbleGnssRef.title',
    descriptionKey: 'devices.trimbleGnssRef.description',
    categoryEn: 'GNSS Reference & CORS',
    categoryAr: 'محطات مرجعية ونظام CORS',
    image: '/assets/devices/Trimble GNSS Reference Station.png',
    icon: Satellite,
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 'gavad-sigma',
    titleKey: 'devices.gavadSigma.title',
    descriptionKey: 'devices.gavadSigma.description',
    categoryEn: 'GNSS Reference',
    categoryAr: 'محطات GNSS مرجعية',
    image: '/assets/devices/GAVAD SIGMA.png',
    icon: Satellite,
    gradient: 'from-sky-500 to-indigo-500',
  },
  {
    id: 'trimble-r12i',
    titleKey: 'devices.trimbleR12i.title',
    descriptionKey: 'devices.trimbleR12i.description',
    categoryEn: 'Rover GNSS',
    categoryAr: 'أجهزة GNSS المتحركة',
    image: '/assets/devices/Trimble R12i.png',
    icon: Radar,
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    id: 'trimble-r780',
    titleKey: 'devices.trimbleR780.title',
    descriptionKey: 'devices.trimbleR780.description',
    categoryEn: 'Construction GNSS',
    categoryAr: 'GNSS للمساحة والإنشاءات',
    image: '/assets/devices/Trimble R780.png',
    icon: Radar,
    gradient: 'from-fuchsia-500 to-pink-500',
  },
  {
    id: 'trimble-r4s',
    titleKey: 'devices.trimbleR4s.title',
    descriptionKey: 'devices.trimbleR4s.description',
    categoryEn: 'Base / Rover GNSS',
    categoryAr: 'قواعد ومتحركات GNSS',
    image: '/assets/devices/Trimble R4s.png',
    icon: Satellite,
    gradient: 'from-teal-500 to-emerald-500',
  },
  {
    id: 'topcon-hiper-vr',
    titleKey: 'devices.topconHiperVr.title',
    descriptionKey: 'devices.topconHiperVr.description',
    categoryEn: 'Multi-Constellation GNSS',
    categoryAr: 'GNSS متعدد الكوكبات',
    image: '/assets/devices/Topcon HiPer VR.jpg',
    icon: Satellite,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'trimble-s5',
    titleKey: 'devices.trimbleS5.title',
    descriptionKey: 'devices.trimbleS5.description',
    categoryEn: 'Robotic Total Station',
    categoryAr: 'محطات روبوتية',
    image: '/assets/devices/Trimble S5 2.png',
    icon: Cpu,
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'trimble-c5',
    titleKey: 'devices.trimbleC5.title',
    descriptionKey: 'devices.trimbleC5.description',
    categoryEn: 'Total Station',
    categoryAr: 'محطات توتال ستايشن',
    image: '/assets/devices/Trimble C5.png',
    icon: Cpu,
    gradient: 'from-rose-500 to-orange-500',
  },
  {
    id: 'trimble-c3',
    titleKey: 'devices.trimbleC3.title',
    descriptionKey: 'devices.trimbleC3.description',
    categoryEn: 'Total Station',
    categoryAr: 'محطات تقليدية',
    image: '/assets/devices/Trimble C3.png',
    icon: Cpu,
    gradient: 'from-amber-500 to-lime-500',
  },
  {
    id: 'leica-ts16m',
    titleKey: 'devices.leicaTs16m.title',
    descriptionKey: 'devices.leicaTs16m.description',
    categoryEn: 'High-End Total Station',
    categoryAr: 'محطات مساحية متقدمة',
    image: '/assets/devices/Leica Viva TS16M.png',
    icon: Cpu,
    gradient: 'from-red-500 to-rose-500',
  },
  {
    id: 'sokkia-im52',
    titleKey: 'devices.sokkiaIm52.title',
    descriptionKey: 'devices.sokkiaIm52.description',
    categoryEn: 'Total Station',
    categoryAr: 'محطات مساحة',
    image: '/assets/devices/Sokkia iM-52.jpg',
    icon: Cpu,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'trimble-t100',
    titleKey: 'devices.trimbleT100.title',
    descriptionKey: 'devices.trimbleT100.description',
    categoryEn: 'Field Controller & Tablet',
    categoryAr: 'وحدات تحكم ميدانية',
    image: '/assets/devices/Trimble T100 Total.png',
    icon: Cpu,
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    id: 'trimble-dini',
    titleKey: 'devices.trimbleDini.title',
    descriptionKey: 'devices.trimbleDini.description',
    categoryEn: 'Digital Level',
    categoryAr: 'مناسيب رقمية',
    image: '/assets/devices/Trimble DiNi 0.3 mm.png',
    icon: Waves,
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    id: 'sokkia-b40',
    titleKey: 'devices.sokkiaB40.title',
    descriptionKey: 'devices.sokkiaB40.description',
    categoryEn: 'Auto Level',
    categoryAr: 'موازين قامة',
    image: '/assets/devices/Sokkia B40 Auto Level.jpg',
    icon: Waves,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 'nikon-ac2s',
    titleKey: 'devices.nikonAc2s.title',
    descriptionKey: 'devices.nikonAc2s.description',
    categoryEn: 'Auto Level',
    categoryAr: 'موازين تسوية',
    image: '/assets/devices/Nikon AC 2s.jpg',
    icon: Waves,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'nikon-ax2s',
    titleKey: 'devices.nikonAx2s.title',
    descriptionKey: 'devices.nikonAx2s.description',
    categoryEn: 'Auto Level',
    categoryAr: 'موازين تلقائية',
    image: '/assets/devices/Nikon AX 2S.jpg',
    icon: Waves,
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    id: 'satlab-lixel-x1',
    titleKey: 'devices.satlabLixelX1.title',
    descriptionKey: 'devices.satlabLixelX1.description',
    categoryEn: 'SLAM 3D Scanner',
    categoryAr: 'ماسح ثلاثي الأبعاد SLAM',
    image: '/assets/devices/SATLAB Lixel X1 SLAM.jpg',
    icon: Rss,
    gradient: 'from-fuchsia-500 to-purple-500',
  },
  {
    id: 'seafloor-echo',
    titleKey: 'devices.seafloorEchoSounder.title',
    descriptionKey: 'devices.seafloorEchoSounder.description',
    categoryEn: 'Hydrographic Survey',
    categoryAr: 'مسح هيدروغرافي وأعماق',
    image: '/assets/devices/model seafloor hydrone echo sounder.jpg',
    icon: Waves,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'gpr-ids-hi-mod',
    titleKey: 'devices.gprIdsHiMod.title',
    descriptionKey: 'devices.gprIdsHiMod.description',
    categoryEn: 'Ground Penetrating Radar',
    categoryAr: 'رادار اختراق أرض GPR',
    image: '/assets/devices/GPR IDS Hi Mod.png',
    icon: Radar,
    gradient: 'from-emerald-500 to-lime-500',
  },
  {
    id: 'rd8200',
    titleKey: 'devices.radiodetectionRd8200.title',
    descriptionKey: 'devices.radiodetectionRd8200.description',
    categoryEn: 'Cable & Pipe Locator',
    categoryAr: 'كاشف كابلات وأنابيب',
    image: '/assets/devices/Radiodetection RD8200.jpg',
    icon: Radar,
    gradient: 'from-red-500 to-orange-500',
  },
];

const newsItems = [
  {
    id: 1,
    titleAr: "بروتوكول وصلات الصرف الصحي",
    titleEn: "Sewage Connection Protocol",
    descAr:
      "توقيع بروتوكول مع شركة مياه الشرب والصرف الصحي لعمل الرفع المساحي لوصلات الصرف المنزلية بقرى المبادرة الرئاسية حياة كريمة – المرحلة الأولى. يشمل العمل 192 قرية بإجمالي 260000 غرفة.",
    descEn:
      "Signing a protocol with the Water & Wastewater Company to perform surveying for household sewage connections under the ‘Decent Life’ presidential initiative – Phase 1, covering 2 villages with 260,000 chambers.",
    images: [
      "/assets/news/protocol1.jpg",
      "/assets/news/protocol2.jpg",
      "/assets/news/protocol3.jpg",
      "/assets/news/protocol4.jpg",
      "/assets/news/protocol5.jpg",
      "/assets/news/protocol6.jpg",
      "/assets/news/protocol7.jpg",
      "/assets/news/protocol8.jpg",
    ],
  },
  {
    id: 2,
    titleAr: "الرفع المساحي للطرق",
    titleEn: "Road Surveying Operations",
    descAr:
      "تنفيذ أعمال الرفع المساحي للطرق، حصر المسطحات، التدقيق، وحصر الكميات باستخدام أحدث الأجهزة المساحية وتقنيات GIS، منذ بداية تنفيذ الطرق وحتى الانتهاء منها.",
    descEn:
      "Executing comprehensive road surveying, area calculation, verification, and quantity estimation using modern surveying instruments and GIS technology throughout the full project lifecycle.",
    images: [
      "/assets/news/roads1.jpg",
      "/assets/news/roads2.jpg",
      "/assets/news/roads3.jpg",
      "/assets/news/roads4.jpg",
    ],
  },
];

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
  const [openNews, setOpenNews] = useState<null | number>(null);

  type IconName = keyof typeof iconMap;
  const goalIcons = {
    TrendingUp,
    Cpu: Brain,
    Network: Database,
    Radar: Satellite,
    BookOpen: GraduationCap,
    Lightbulb: Zap
  };

  const direction = language === "ar" ? ["0%", "100%", "200%", "0%"] : ["0%", "-100%", "-200%", "0%"];

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
     NEWS & PROTOCOLS SECTION
====================================================== */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-6 py-2 bg-rose-100 text-rose-700 border-rose-200">
              {language === "ar" ? "الأخبار والبروتوكولات" : "News & Protocols"}
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {language === "ar" ? "آخر المستجدات" : "Latest Updates"}
            </h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {language === "ar"
                ? "أهم البروتوكولات والمشاريع التي يعمل عليها مجمع الذكاء المكاني."
                : "Key protocols and surveying projects currently undertaken by MAGIC."}
            </p>
          </motion.div>

          {/* NEWS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {newsItems.map((item, idx) => {
              const direction = language === "ar"
                ? ["0%", "100%", "200%", "0%"] // RTL reverse direction
                : ["0%", "-100%", "-200%", "0%"]; // LTR normal direction

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  onClick={() => setOpenNews(item.id)}
                  className="cursor-pointer bg-white border rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                >
                  {/* CARD CAROUSEL */}
                  <div className="relative w-full h-64 overflow-hidden group">
                    <motion.div
                      className="flex h-full"
                      animate={{ x: direction }}
                      transition={{
                        repeat: Infinity,
                        duration: item.images.length * 4,
                        ease: "linear",
                      }}
                    >
                      {item.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          className="w-full h-64 object-cover flex-shrink-0"
                        />
                      ))}
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {language === "ar" ? item.titleAr : item.titleEn}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {language === "ar" ? item.descAr : item.descEn}
                    </p>

                    <Button className="bg-gradient-to-r from-rose-600 to-red-600 text-white mt-2">
                      {language === "ar" ? "عرض التفاصيل" : "View Details"}
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ===================== LARGE DIALOG ===================== */}
        {newsItems.map((item) => {
          const direction = language === "ar"
            ? ["0%", "100%", "200%", "0%"]
            : ["0%", "-100%", "-200%", "0%"];

          const isRTL = language === "ar";

          return (
            <Dialog key={item.id} open={openNews === item.id} onOpenChange={() => setOpenNews(null)}>
              <DialogContent
                className="w-[98vw] max-w-none p-0 overflow-hidden rounded-3xl mx-auto"
                dir={isRTL ? "rtl" : "ltr"}
              >

                {/* HEADER */}
                <DialogHeader className={`p-6 pb-2 ${isRTL ? "text-right" : "text-left"}`}>
                  <DialogTitle className="text-3xl font-bold">
                    {isRTL ? item.titleAr : item.titleEn}
                  </DialogTitle>
                  <DialogDescription className={`mt-2 text-slate-600 ${isRTL ? "text-right" : "text-left"}`}>
                    {isRTL ? item.descAr : item.descEn}
                  </DialogDescription>
                </DialogHeader>

                {/* CAROUSEL */}
                <div className="relative w-full h-[500px] overflow-hidden">
                  <motion.div
                    className="flex h-full"
                    animate={{ x: direction }}
                    transition={{
                      repeat: Infinity,
                      duration: item.images.length * 4,
                      ease: "linear",
                    }}
                  >
                    {item.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        className="w-full h-[500px] object-cover flex-shrink-0"
                      />
                    ))}
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                </div>

                {/* BODY TEXT */}
                <div className={`p-6 ${isRTL ? "text-right" : "text-left"}`}>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {isRTL ? item.descAr : item.descEn}
                  </p>
                </div>

              </DialogContent>
            </Dialog>
          );
        })}


      </section>
      {/* ======================================================
     DEVICES PREVIEW SECTION (NEW)
====================================================== */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-6 py-2 bg-emerald-100 text-emerald-700 border-emerald-200">
              {language === "ar" ? "الأجهزة والمساحة" : "Surveying Devices"}
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {language === "ar" ? "أبرز الأجهزة المتوفرة" : "Key Available Devices"}
            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === "ar"
                ? "مجموعة من أهم أجهزة المساحة والذكاء المكاني المستخدمة داخل مجمع MAGIC."
                : "A selection of the most important surveying & spatial intelligence devices used at MAGIC."}
            </p>
          </motion.div>

          {/* DEVICE GRID – showing only first 3 devices */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {devices.slice(0, 3).map((device, idx) => {
              const Icon = device.icon;
              const isRTL = language === "ar";

              return (
                <motion.div
                  key={device.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="h-full p-6 bg-gradient-to-br from-white to-slate-50 border-2 hover:shadow-xl transition-all rounded-3xl overflow-hidden relative">

                    {/* Image with gradient badge */}
                    <div className="relative h-40 rounded-xl overflow-hidden mb-5">
                      <div className="flex justify-center items-center h-44 mb-6">
                        <img
                          src={device.image}
                          alt={t(device.titleKey)}
                          className="max-h-36 object-contain drop-shadow-lg"
                        />
                      </div>


                      <div
                        className={`absolute ${isRTL ? "left-4" : "right-4"} bottom-3 flex items-center gap-2`}
                      >
                        <div
                          className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${device.gradient} flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                      {t(device.titleKey)}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-slate-600 line-clamp-3 mb-4">
                      {t(device.descriptionKey).substring(0, 120)}...
                    </p>

                    {/* CTA */}
                    <Link href="/devices">
                      <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl shadow-md">
                        {language === "ar" ? "عرض الأجهزة" : "View Devices"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>

                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* View All Devices */}
          <div className="text-center">
            <Link href="/devices">
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-6 text-lg rounded-xl shadow-xl">
                {language === "ar" ? "عرض جميع الأجهزة" : "View All Devices"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
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

                {["step1", "step2", "step3", "step4", "step5", "step6", "step7", "step8", "step9", "step10", "step11", "step12", "step13"].map(
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
