import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Globe, Database, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Platforms() {
  const { t } = useLanguage();

  const platforms = [
    {
      title: 'Surveying Portal',
      type: 'Web Portal',
      icon: Globe,
      desc: 'Facilitates building and activity licensing procedures, providing official documentation and supporting planning decisions.',
      image: '/assets/surveying-modern.png'
    },
    {
      title: 'Minya Lands Inquiries (MLI)',
      type: 'Mobile App',
      icon: Smartphone,
      desc: 'Smart application for land inquiries, determining legal status, and checking if land is within urban boundaries.',
      image: '/assets/gis-modern.png'
    },
    {
      title: 'State Lands Inventory',
      type: 'Web Portal',
      icon: Database,
      desc: 'Integrated digital platform for managing legalization requests on state lands, ensuring transparency and speed.',
      image: '/assets/innovation-modern.png'
    },
    {
      title: 'Discover Minya',
      type: 'Website',
      icon: Globe,
      desc: 'Tourism promotion website acting as a quick guide to discovering Minya\'s treasures, hotels, and landmarks.',
      image: '/assets/hero-modern-enhanced.png'
    },
    {
      title: 'Agricultural Holdings',
      type: 'Mobile App',
      icon: Smartphone,
      desc: 'Smart app facilitating the discovery of agricultural holdings and linking them spatially.',
      image: '/assets/surveying-modern.png'
    },
    {
      title: 'Dawagin ERP',
      type: 'System',
      icon: Database,
      desc: 'Integrated ERP system for managing poultry projects financially and administratively.',
      image: '/assets/gis-modern.png'
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
              Digital <span className="text-primary">Platforms</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Access our suite of digital tools and applications designed to streamline government services and empower citizens.
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
                  alt={platform.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm">
                    {platform.type}
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <platform.icon className="w-4 h-4" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {platform.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  {platform.desc}
                </p>
                <Button variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                  Access Platform <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
