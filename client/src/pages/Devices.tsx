import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Cpu, Satellite, Waves, Radar, Rss } from 'lucide-react';
import DeviceImageDialog from './DeviceImageDialog';

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

export default function Devices() {
    const { t, language, dir } = useLanguage();

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 relative overflow-hidden"
            dir={dir}
        >
            {/* Floating background shapes */}
            <div className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute -top-32 -left-20 w-72 h-72 bg-emerald-200 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-40 -right-24 w-80 h-80 bg-cyan-200 rounded-full blur-3xl animate-[pulse_9s_ease-in-out_infinite]" />
                <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-100 rounded-full blur-3xl animate-[pulse_11s_ease-in-out_infinite]" />
            </div>

            {/* HERO SECTION */}
            <div
                className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-emerald-700 via-teal-700 to-sky-700"
                style={{
                    backgroundImage: "url('/assets/devices/magic_devices_header.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-slate-900/60" />

                {/* Animated overlay light */}
                <motion.div
                    className="absolute inset-0 opacity-40"
                    animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                    transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse' }}
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 15% 20%, rgba(255,255,255,0.18) 0%, transparent 55%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.22) 0%, transparent 60%)',
                        backgroundSize: '200% 200%',
                    }}
                />

                <div className="relative container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.9 }}
                    >
                        <Badge className="bg-white/15 text-teal-50 border-white/30 px-5 py-2 text-sm md:text-base backdrop-blur-md mb-4 inline-flex items-center gap-2">
                            <Satellite className="w-4 h-4" />
                            {language === 'ar' ? 'بُنية أجهزة متكاملة' : 'Integrated Device Infrastructure'}
                        </Badge>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-xl mb-4 tracking-tight">
                            {language === 'ar'
                                ? 'منظومة أجهزة MAGIC للمساحة والذكاء المكاني'
                                : 'MAGIC Surveying & Spatial Intelligence Devices'}
                        </h1>

                        <p className="max-w-3xl mx-auto text-base md:text-lg text-teal-100 leading-relaxed mb-6">
                            {language === 'ar'
                                ? 'مجموعة متكاملة من أجهزة GNSS، المحطات المساحية، المسح ثلاثي الأبعاد، والرادار الأرضي لدعم التخطيط، الرفع المساحي، وإدارة البنية التحتية بدقة عالية.'
                                : 'An integrated portfolio of GNSS receivers, total stations, 3D scanners, and GPR systems powering high-precision surveying, planning, and infrastructure management.'}
                        </p>

                        <p className="max-w-2xl mx-auto text-sm md:text-base text-teal-100/90">
                            {language === 'ar'
                                ? 'تعمل هذه المنظومة في تناغم مع أنظمة نظم المعلومات الجغرافية وقواعد البيانات المكانية داخل مجمع الذكاء المكاني.'
                                : 'All devices are tightly integrated with GIS platforms and spatial databases within the MAGIC ecosystem.'}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* DEVICES GRID */}
            <div className="relative container mx-auto px-4 py-16 md:py-24">
                <div className="flex items-baseline justify-between gap-4 mb-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
                            {language === 'ar' ? 'الأجهزة المتاحة' : 'Available Devices'}
                        </h2>
                        <p className="text-slate-600 text-sm md:text-base max-w-xl">
                            {language === 'ar'
                                ? 'استعرض الأجهزة الرئيسية المستخدمة في أعمال الرفع المساحي، الاستشعار عن بعد، والمسح الهيدروغرافي، مع وصف تقني موجز لكل جهاز.'
                                : 'Browse the key instruments used for surveying, remote sensing, and hydrographic work, with a concise technical description for each device.'}
                        </p>
                    </div>

                    <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        {language === 'ar' ? 'تم تحديث الأجهزة والبيانات' : 'Devices & specs kept up to date'}
                    </div>
                </div>

                <motion.div
                    className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { staggerChildren: 0.06, duration: 0.6 },
                        },
                    }}
                >
                    {devices.map((device, index) => {
                        const Icon = device.icon;
                        const isRtl = language === 'ar';

                        return (
                            <motion.div
                                key={device.id}
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                                whileHover={{ y: -6, scale: 1.01 }}
                                transition={{ duration: 0.25 }}
                            >
                                <Card className="group h-full overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-2xl transition-all duration-300 relative">
                                    {/* Image header with dialog */}
                                    <div className="relative h-40 overflow-hidden flex items-center justify-center bg-white">
                                        <DeviceImageDialog
                                            thumbnail={device.image}
                                            full={device.image}
                                            alt={t(device.titleKey)}
                                        />

                                        {/* Category badge */}
                                        <motion.div
                                            className={`absolute ${isRtl ? "left-4" : "right-4"} bottom-3 flex items-center gap-2`}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                        >
                                            <div
                                                className={`w-9 h-9 rounded-2xl bg-gradient-to-br ${device.gradient} flex items-center justify-center shadow-lg`}
                                            >
                                                <Icon className="w-4 h-4 text-white" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-semibold text-slate-700">
                                                    {language === "ar" ? device.categoryAr : device.categoryEn}
                                                </span>
                                                <span className="text-[9px] uppercase tracking-wide text-slate-400">
                                                    {language === "ar" ? "محور تقني" : "Device Category"}
                                                </span>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 md:p-7 space-y-3 relative">
                                        {/* subtle floating circle */}
                                        <motion.div
                                            className={`absolute w-16 h-16 rounded-full bg-gradient-to-br ${device.gradient} opacity-10 -z-10 ${isRtl ? 'left-[-24px] top-6' : 'right-[-24px] top-6'
                                                }`}
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                                        />

                                        <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                                            {t(device.titleKey)}
                                        </h3>

                                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                                            {t(device.descriptionKey)}
                                        </p>

                                        {/* Specs chips */}
                                        <div className="flex flex-wrap gap-2 pt-2 text-[11px] text-slate-500">
                                            <span className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200">
                                                {language === 'ar' ? 'دقة عالية' : 'High precision'}
                                            </span>
                                            <span className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200">
                                                {language === 'ar' ? 'تكامل مع نظم المعلومات' : 'GIS integration'}
                                            </span>
                                            <span className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200">
                                                {language === 'ar' ? 'جاهز للعمل الميداني' : 'Field ready'}
                                            </span>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
