import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Check, 
  Map, 
  Database, 
  GraduationCap, 
  Satellite,
  Brain,
  Server,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export default function Services() {
  const { t, language } = useLanguage();

  const services = [
    {
      categoryEn: 'Surveying Services',
      categoryAr: 'خدمات الرفع المساحي',
      icon: Map,
      descriptionEn: 'High-precision land and infrastructure surveying using advanced technologies for urban development and planning.',
      descriptionAr: 'رفع مساحي عالي الدقة للأراضي والبنية التحتية باستخدام التقنيات المتطورة للتنمية العمرانية والتخطيط.',
      color: 'from-red-500 to-orange-500',
      items: [
        { en: 'Building permits surveying', ar: 'الرفع المساحي لتراخيص المباني' },
        { en: 'Activity licensing surveying', ar: 'الرفع المساحي لتراخيص الأنشطة' },
        { en: 'Elevation determination from sea level', ar: 'تحديد منسوب المبنى من سطح البحر' },
        { en: 'Utilities detection and mapping', ar: 'الكشف عن المرافق ورسم الخرائط' },
        { en: 'Sanitation connections protocol', ar: 'بروتوكول وصلات الصرف الصحي' },
        { en: 'Road surveying and quantity estimation', ar: 'رفع الطرق وحساب الكميات' },
        { en: '3D mapping for cities and villages', ar: 'إعداد خرائط ثلاثية الأبعاد للمدن والقرى' }
      ],
      stats: { value: '105M+', labelEn: 'Total Surveying Work', labelAr: 'إجمالي أعمال الرفع المساحي' }
    },
    {
      categoryEn: 'GIS & Spatial Analysis',
      categoryAr: 'نظم المعلومات الجغرافية والتحليل المكاني',
      icon: Database,
      descriptionEn: 'Advanced geographic information systems and spatial data analysis for informed decision-making across all sectors.',
      descriptionAr: 'نظم معلومات جغرافية متقدمة وتحليل البيانات المكانية لاتخاذ قرارات مستنيرة في جميع القطاعات.',
      color: 'from-teal-500 to-cyan-500',
      items: [
        { en: 'Geographic data collection and analysis', ar: 'جمع وتحليل البيانات الجغرافية' },
        { en: 'High-accuracy spatial databases', ar: 'قواعد بيانات مكانية عالية الدقة' },
        { en: 'Analytical maps and reports', ar: 'خرائط وتقارير تحليلية' },
        { en: 'Infrastructure network mapping', ar: 'رسم خرائط شبكات البنية التحتية' },
        { en: 'Planning and decision support', ar: 'دعم التخطيط واتخاذ القرار' },
        { en: 'Digital transformation solutions', ar: 'حلول التحول الرقمي' }
      ],
      stats: { value: '6', labelEn: 'Specialized Centers', labelAr: 'مراكز متخصصة' }
    },
    {
      categoryEn: 'Remote Sensing Applications',
      categoryAr: 'تطبيقات الاستشعار عن بعد',
      icon: Satellite,
      descriptionEn: 'Cutting-edge remote sensing and satellite imagery analysis for environmental monitoring and sustainable development.',
      descriptionAr: 'تحليل متقدم للاستشعار عن بعد والصور الفضائية للمراقبة البيئية والتنمية المستدامة.',
      color: 'from-orange-500 to-yellow-500',
      items: [
        { en: 'Satellite imagery analysis', ar: 'تحليل الصور الفضائية' },
        { en: 'Agricultural resource management', ar: 'إدارة الموارد الزراعية' },
        { en: 'Urban planning support', ar: 'دعم التخطيط العمراني' },
        { en: 'Environmental change monitoring', ar: 'رصد التغيرات البيئية' },
        { en: 'Natural resource management', ar: 'إدارة الموارد الطبيعية' },
        { en: 'Smart solutions for development', ar: 'حلول ذكية للتنمية' }
      ],
      stats: { value: 'AI-Powered', labelEn: 'Analysis Technology', labelAr: 'تقنية التحليل' }
    },
    {
      categoryEn: 'AI & Innovation',
      categoryAr: 'الذكاء الاصطناعي والابتكار',
      icon: Brain,
      descriptionEn: 'Specialized platform for creativity and adopting the latest AI technologies in developing smart services and solutions.',
      descriptionAr: 'منصة متخصصة للإبداع وتبني أحدث تقنيات الذكاء الاصطناعي في تطوير الخدمات والحلول الذكية.',
      color: 'from-blue-500 to-indigo-500',
      items: [
        { en: 'AI-powered smart services', ar: 'خدمات ذكية مدعومة بالذكاء الاصطناعي' },
        { en: 'Research and development', ar: 'البحث والتطوير' },
        { en: 'Innovation environment', ar: 'بيئة الابتكار' },
        { en: 'Advanced technological solutions', ar: 'حلول تكنولوجية متقدمة' },
        { en: 'Digital transformation support', ar: 'دعم التحول الرقمي' },
        { en: 'Specialized workshops and conferences', ar: 'ورش عمل ومؤتمرات متخصصة' }
      ],
      stats: { value: 'Next-Gen', labelEn: 'AI Solutions', labelAr: 'حلول الذكاء الاصطناعي' }
    },
    {
      categoryEn: 'IT & Cybersecurity',
      categoryAr: 'تكنولوجيا المعلومات والأمن السيبراني',
      icon: Server,
      descriptionEn: 'Comprehensive IT infrastructure management, cybersecurity, and digital system operations for secure and efficient services.',
      descriptionAr: 'إدارة شاملة للبنية التحتية لتكنولوجيا المعلومات والأمن السيبراني وتشغيل الأنظمة الرقمية لخدمات آمنة وفعالة.',
      color: 'from-green-500 to-emerald-500',
      items: [
        { en: 'Digital systems operation and maintenance', ar: 'تشغيل وصيانة الأنظمة الرقمية' },
        { en: 'Cybersecurity and data protection', ar: 'الأمن السيبراني وحماية البيانات' },
        { en: 'Server and infrastructure management', ar: 'إدارة الخوادم والبنية التحتية' },
        { en: 'Technical consultations', ar: 'الاستشارات الفنية' },
        { en: 'Software and application development', ar: 'تطوير البرمجيات والتطبيقات' },
        { en: 'Network monitoring systems', ar: 'أنظمة مراقبة الشبكات' }
      ],
      stats: { value: '24/7', labelEn: 'System Monitoring', labelAr: 'مراقبة الأنظمة' }
    },
    {
      categoryEn: 'Training & Capacity Building',
      categoryAr: 'التدريب وبناء القدرات',
      icon: GraduationCap,
      descriptionEn: 'Professional training programs and capacity building in GIS, programming, and emerging technologies for the next generation.',
      descriptionAr: 'برامج تدريب احترافية وبناء قدرات في نظم المعلومات الجغرافية والبرمجة والتقنيات الناشئة للجيل القادم.',
      color: 'from-lime-500 to-green-500',
      items: [
        { en: 'GIS specialized training courses', ar: 'دورات تدريبية متخصصة في نظم المعلومات الجغرافية' },
        { en: 'Programming and software training', ar: 'التدريب على البرمجة والبرمجيات' },
        { en: 'Accredited certifications', ar: 'شهادات معتمدة' },
        { en: 'Practical training opportunities', ar: 'فرص تدريب عملية' },
        { en: 'Mekano Labs for youth (AI, IoT, Electronics)', ar: 'مكانو لابز للشباب (الذكاء الاصطناعي، إنترنت الأشياء، الإلكترونيات)' },
        { en: 'Partnerships with universities', ar: 'شراكات مع الجامعات' }
      ],
      stats: { value: 'Certified', labelEn: 'Training Programs', labelAr: 'برامج تدريب معتمدة' }
    }
  ];

  return (
  <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
    
    {/* ------------------------------------------- */}
    {/* HERO SECTION */}
    {/* ------------------------------------------- */}
    <div className="relative overflow-hidden py-28 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700">
      
      {/* Animated Mesh Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.25) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.25) 0%, transparent 60%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/40 blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative container z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-6"
          >
            <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 text-lg backdrop-blur-md shadow-lg">
              {language === "ar" ? "حلول شاملة" : "Comprehensive Solutions"}
            </Badge>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-black text-white drop-shadow-xl mb-6 tracking-tight">
            {t("services.title")}
          </h1>

          <p className="text-xl text-teal-100 leading-relaxed drop-shadow">
            {t("services.subtitle")}
          </p>
        </motion.div>
      </div>
    </div>

    {/* ------------------------------------------- */}
    {/* SERVICES SECTION */}
    {/* ------------------------------------------- */}
    <div className="container py-24 space-y-28">
      {services.map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start"
        >
          {/* Left Category Card */}
          <motion.div
            className="lg:col-span-4 sticky top-20"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl border border-slate-100 shadow-2xl hover:shadow-3xl transition-all duration-700">
              <motion.div
                className={`w-20 h-20 bg-gradient-to-br ${section.color} rounded-3xl flex items-center justify-center text-white shadow-xl mb-8`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7 }}
              >
                <section.icon className="w-10 h-10" />
              </motion.div>

              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                {language === "ar"
                  ? section.categoryAr
                  : section.categoryEn}
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {language === "ar"
                  ? section.descriptionAr
                  : section.descriptionEn}
              </p>

              {/* Animated divider */}
              <motion.div
                className={`h-2 w-28 bg-gradient-to-r ${section.color} rounded-full mb-8`}
                initial={{ width: 0 }}
                whileInView={{ width: 112 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              />

              {/* Stats */}
              <div
                className={`p-5 rounded-2xl bg-gradient-to-br ${section.color} bg-opacity-10 border`}
              >
                <div
                  className={`text-4xl font-black bg-gradient-to-r ${section.color} bg-clip-text text-transparent mb-1`}
                >
                  {section.stats.value}
                </div>
                <div className="text-sm text-slate-600 font-semibold tracking-wide">
                  {language === "ar"
                    ? section.stats.labelAr
                    : section.stats.labelEn}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Items Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className="h-full p-7 bg-white/70 backdrop-blur-lg rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`mt-1 w-9 h-9 rounded-full bg-gradient-to-br ${section.color} bg-opacity-20 flex items-center justify-center`}
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Check
                          className={`w-5 h-5 bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}
                        />
                      </motion.div>

                      <span className="text-base text-slate-700 font-medium leading-relaxed group-hover:text-slate-900 transition-colors">
                        {language === "ar" ? item.ar : item.en}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* ------------------------------------------- */}
    {/* CTA SECTION */}
    {/* ------------------------------------------- */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container pb-24"
    >
      <Card className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-14 rounded-3xl text-center text-white shadow-3xl">
        <Award className="w-16 h-16 mx-auto mb-6 opacity-90" />

        <h2 className="text-4xl font-bold mb-4 tracking-tight">
          {language === "ar" ? "هل تحتاج إلى خدماتنا؟" : "Need Our Services?"}
        </h2>

        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          {language === "ar"
            ? "تواصل معنا اليوم للحصول على استشارة مجانية وتعرف على كيف يمكننا مساعدتك"
            : "Contact us today for a free consultation and learn how we can help you"}
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="bg-white text-blue-700 px-10 py-4 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          {language === "ar" ? "تواصل معنا" : "Contact Us"}
        </motion.button>
      </Card>
    </motion.div>
  </div>
);

}
