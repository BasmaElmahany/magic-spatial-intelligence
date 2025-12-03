import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Award, Users, Building2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { visionAr, visionEn, strategicGoals } from '@/data/centerData';

export default function About() {
  const { t, language } = useLanguage();

  const goalIcons: { [key: string]: any } = {
    TrendingUp: CheckCircle2,
    Cpu: CheckCircle2,
    Network: CheckCircle2,
    Radar: CheckCircle2,
    BookOpen: CheckCircle2,
    Lightbulb: CheckCircle2
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
  

      {/* HERO SECTION */}
      <div
        className="relative overflow-hidden py-28 shadow-xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/innovation-modern.png')", // <-- your image path
        }}
      >

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/70 to-purple-900/70"></div>

        {/* Animated Soft Glow Layer */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.15), transparent 60%)",
          }}
        />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-grid-white/10 opacity-20"></div>

        {/* Floating Gradient Blobs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-500 opacity-30 blur-3xl -top-10 -left-10"
          animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-indigo-400 opacity-20 blur-3xl top-20 right-0"
          animate={{ x: [0, -25, 25, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />


        <div className="container relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-block mb-6"
            >
              <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 text-lg backdrop-blur-sm">
                {language === 'ar' ? 'عن المجمع' : 'About MAGIC'}
              </Badge>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('about.fullName')}
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              {t('about.desc')}
            </p>
          </motion.div>
        </div>
      </div>


      {/* Establishment Details */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <Badge className="mb-4 px-4 py-2 bg-indigo-100 text-indigo-700 border-indigo-200">
                  {language === 'ar' ? 'التأسيس' : 'Establishment'}
                </Badge>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">
                  {language === 'ar' ? 'قرار المحافظ رقم 560 لسنة 2024' : 'Governor\'s Decision No. 560 of 2024'}
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-6"></div>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {language === 'ar'
                    ? 'المنشأ بقرار المحافظ برقم 560 لسنة 2024، ويتبع السيد المحافظ، وتحت الإشراف المباشر للسيد الدكتور/ محمد أبوزيد - نائب محافظ المنيا.'
                    : 'Established by Governor\'s Decision No. 560 of 2024, operating under the Governor and under the direct supervision of Dr. Mohamed Abouzeid, Deputy Governor of Minya.'}
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {language === 'ar'
                    ? 'يمثل المجمع قفزة كبيرة في القدرات التكنولوجية للمحافظة، حيث يهدف إلى خلق نظام رقمي شامل يدعم صناع القرار ويعزز الخدمات العامة ويعزز الابتكار في الذكاء المكاني.'
                    : 'The complex represents a significant leap in the governorate\'s technological capabilities, aiming to create a comprehensive digital ecosystem that supports decision-makers, enhances public services, and fosters innovation in spatial intelligence.'}
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-100">
                  <Building2 className="w-10 h-10 text-indigo-600 mb-3" />
                  <div className="text-3xl font-bold text-indigo-600 mb-1">6</div>
                  <div className="text-sm text-slate-600 font-medium">
                    {language === 'ar' ? 'مراكز متخصصة' : 'Specialized Centers'}
                  </div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100">
                  <Award className="w-10 h-10 text-purple-600 mb-3" />
                  <div className="text-3xl font-bold text-purple-600 mb-1">2024</div>
                  <div className="text-sm text-slate-600 font-medium">
                    {language === 'ar' ? 'سنة التأسيس' : 'Year Established'}
                  </div>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/assets/surveying-modern.png"
                  alt="MAGIC Complex"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-sm font-semibold uppercase tracking-wider mb-2 opacity-90">
                    {language === 'ar' ? 'التميز في' : 'Excellence in'}
                  </div>
                  <div className="text-3xl font-bold">
                    {language === 'ar' ? 'العمليات الميدانية' : 'Field Operations'}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
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

            <Card className="p-10 md:p-14 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-100 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <Target className="w-14 h-14 text-blue-600 mb-6 mx-auto" />
                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed text-center font-medium">
                  {language === 'ar' ? visionAr : visionEn}
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-6 py-2 text-base bg-purple-100 text-purple-700 border-purple-200">
              {t('about.goals')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {language === 'ar' ? 'أهدافنا الإستراتيجية' : 'Our Strategic Goals'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'ar'
                ? 'نسعى لتحقيق مجموعة من الأهداف الإستراتيجية التي تدعم التنمية المستدامة والتحول الرقمي'
                : 'We strive to achieve a set of strategic goals that support sustainable development and digital transformation'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicGoals.map((goal, idx) => {
              const GoalIcon = goalIcons[goal.icon] || CheckCircle2;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="h-full p-8 bg-white border-2 border-slate-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <GoalIcon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {language === 'ar' ? goal.titleAr : goal.titleEn}
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'ar' ? 'كن جزءاً من رؤيتنا' : 'Be Part of Our Vision'}
            </h2>
            <p className="text-xl text-purple-100 mb-10 leading-relaxed">
              {language === 'ar'
                ? 'انضم إلينا في رحلتنا نحو التحول الرقمي والتنمية المستدامة من خلال الذكاء المكاني المتقدم'
                : 'Join us on our journey towards digital transformation and sustainable development through advanced spatial intelligence'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
