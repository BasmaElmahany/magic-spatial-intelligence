import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Map,
  Satellite,
  Database,
  Brain,
  Server,
  GraduationCap,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { centers } from '@/data/centerData';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const iconMap: { [key: string]: any } = {
  Map,
  Satellite,
  Database,
  Brain,
  Server,
  GraduationCap
};

export default function Centers() {
  const { t, dir, language } = useLanguage();
  const [selectedCenter, setSelectedCenter] = useState<typeof centers[0] | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-50">

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

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            {/* Hero Badge */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="inline-block mb-8"
            >
              <Badge className="bg-white/20 text-white text-lg border-white/30 px-8 py-3 rounded-full backdrop-blur-md shadow-lg">
                {centers.length} {language === "ar" ? "مراكز متخصصة" : "Specialized Centers"}
              </Badge>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
              {t("centers.title")}
            </h1>

            <motion.p
              className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              {t("centers.subtitle")}
            </motion.p>
          </motion.div>
        </div>
      </div>



      {/* Centers Grid */}
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {centers.map((center, idx) => {
            const Icon = iconMap[center.icon];
            return (
              <motion.div
                key={center.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card
                  className="h-full border-2 border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white cursor-pointer relative"
                  onClick={() => setSelectedCenter(center)}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${center.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  {/* Top Color Bar */}
                  <motion.div
                    className={`h-1.5 w-full bg-gradient-to-r ${center.color}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: idx * 0.1 + 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  ></motion.div>

                  <CardHeader className="pb-4 relative">
                    <div className="flex justify-between items-start mb-6">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${center.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>
                      <motion.div
                        className="text-5xl font-bold text-slate-100 group-hover:text-slate-200 transition-colors"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 + 0.5 }}
                      >
                        0{center.id}
                      </motion.div>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight min-h-[3.5rem]">
                      {language === 'ar' ? center.nameAr : center.nameEn}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative">
                    <p className="text-slate-600 leading-relaxed mb-6 line-clamp-4">
                      {language === 'ar' ? center.descriptionAr : center.descriptionEn}
                    </p>

                    {/* Services Preview */}
                    {center.services && center.services.length > 0 && (
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {center.services.slice(0, 2).map((service, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="text-xs bg-slate-100 text-slate-700 hover:bg-slate-200"
                            >
                              {service}
                            </Badge>
                          ))}
                          {center.services.length > 2 && (
                            <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                              +{center.services.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    <motion.div
                      className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-3 gap-2 transition-all duration-300"
                      whileHover={{ x: dir === 'rtl' ? -5 : 5 }}
                    >
                      {t('centers.learnMore')}
                      <ArrowRight className={`w-4 h-4 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Center Detail Dialog */}
      <AnimatePresence>
        {selectedCenter && (
          <Dialog open={!!selectedCenter} onOpenChange={() => setSelectedCenter(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
              <DialogHeader>
                <div className="flex items-start gap-4 mb-4">
                  {(() => {
                    const Icon = iconMap[selectedCenter.icon];
                    return (
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedCenter.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>\
                        <Icon className="w-8 h-8" />
                      </div>
                    );
                  })()}

                  <div className="flex-1">
                    <DialogTitle className="text-2xl font-bold text-slate-900 mb-2">
                      {language === "ar" ? selectedCenter.nameAr : selectedCenter.nameEn}
                    </DialogTitle>
                    <Badge className={`bg-gradient-to-r ${selectedCenter.color} text-white border-0 px-4 py-1 rounded-full`}>
                      {t("centers.title")} #{selectedCenter.id}
                    </Badge>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-8 mt-6">
                {/* Description */}
                <div>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    {language === "ar" ? selectedCenter.descriptionAr : selectedCenter.descriptionEn}
                  </p>
                </div>

                {/* Services */}
                {selectedCenter.services && selectedCenter.services.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      {t("centers.services")}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCenter.services.map((service, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-sm bg-slate-100 text-slate-700 px-4 py-2 rounded-full"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {selectedCenter.achievements && selectedCenter.achievements.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      {t("centers.achievements")}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedCenter.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className={`p-6 rounded-2xl bg-gradient-to-br ${selectedCenter.color} bg-opacity-10 border border-slate-200 shadow-md`}
                        >
                          <div className="text-3xl font-extrabold text-blue-600 mb-2">
                            {achievement.value.toLocaleString()}
                          </div>
                          <div className="text-sm text-slate-700">
                            {language === "ar" ? achievement.titleAr : achievement.titleEn}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

    </div>
  );
}
