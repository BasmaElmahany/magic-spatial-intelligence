import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Globe, Database, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Platforms() {
  const { t, language } = useLanguage();

 const platforms = [
  {
    title: 'platforms.surveying.title',
    type: 'platforms.surveying.type',
    icon: Globe,
    desc: 'platforms.surveying.desc',
    image: '/assets/surveying-modern.png',
    link: '/platforms/surveying'
  },
  {
    title: 'platforms.mli.title',
    type: 'platforms.mli.type',
    icon: Smartphone,
    desc: 'platforms.mli.desc',
    image: '/assets/gis-modern.png',
    link: 'http://172.16.1.86:8089/Account/Login?ReturnUrl=%2f'
  },
  {
    title: 'platforms.inventory.title',
    type: 'platforms.inventory.type',
    icon: Database,
    desc: 'platforms.inventory.desc',
    image: '/assets/innovation-modern.png',
    link: 'http://172.16.1.86:8085/Account/Login?ReturnUrl=%2f'
  },
  {
    title: 'platforms.discover.title',
    type: 'platforms.discover.type',
    icon: Globe,
    desc: 'platforms.discover.desc',
    image: '/assets/minyastic.png',
    link: 'https://tourism.minya.gov.eg/'
  },
  {
    title: 'platforms.holdings.title',
    type: 'platforms.holdings.type',
    icon: Smartphone,
    desc: 'platforms.holdings.desc',
    image: '/assets/surveying-modern.png',
    link: '/platforms/holdings'
  },
  {
    title: 'platforms.dawagin.title',
    type: 'platforms.dawagin.type',
    icon: Database,
    desc: 'platforms.dawagin.desc',
    image: '/assets/gis-modern.png',
    link: '/platforms/dawagin'
  }
];


  return (
   <div className="min-h-screen bg-background text-foreground">
  <div className="bg-slate-50 py-20 border-b border-slate-200">
    <div className="container">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl font-bold text-slate-900 mb-6">
        <span className="text-primary">   {language === 'ar' ?   'المنصات الرقمية': 'Digital Platforms'  } </span> 
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          {t('plateform.description')}
        </p>
      </motion.div>
    </div>
  </div>

  <div className="container py-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {platforms.map((platform, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={platform.image}
              alt={t(platform.title)}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">

              {/* type translated */}
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm">
                {t(platform.type)}
              </div>

              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <platform.icon className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col">

            {/* title translated */}
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
              {t(platform.title)}
            </h3>

            {/* description translated */}
            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
              {t(platform.desc)}
            </p>

            <Button
              variant="outline"
              className="w-full justify-between group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
            >
              {t('plateform.Access-Platform')}  
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>

  );
}
