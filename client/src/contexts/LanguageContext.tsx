import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

type Translations = {
  [key: string]: {
    en: string;
    ar: string;
  };
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.about': { en: 'About', ar: 'عن المجمع' },
  'nav.centers': { en: 'Centers', ar: 'المراكز' },
  'nav.services': { en: 'Services', ar: 'الخدمات' },
  'nav.platforms': { en: 'Platforms', ar: 'المنصات' },
  'nav.contact': { en: 'Contact', ar: 'تواصل معنا' },
  'nav.complaints': { en: 'Complaints', ar: 'الشكاوى' },

  // Hero
  'hero.title': { en: 'Advanced Spatial Intelligence Complex', ar: 'مجمع الذكاء المكاني المتقدم' },
  'hero.acronym': { en: 'M.A.G.I.C', ar: 'M.A.G.I.C' },
  'hero.subtitle': { en: 'Leading innovation in spatial data and AI technology for sustainable development', ar: 'الريادة في الابتكار في البيانات المكانية وتقنيات الذكاء الاصطناعي للتنمية المستدامة' },
  'hero.cta': { en: 'Explore Our Services', ar: 'استكشف خدماتنا' },
  'hero.learnMore': { en: 'Learn More', ar: 'اعرف المزيد' },

  // About
  'about.title': { en: 'About MAGIC', ar: 'عن مجمع ماجيك' },
  'about.fullName': { en: 'Advanced Spatial Intelligence Complex (MAGIC)', ar: 'مجمع الذكاء المكاني المتقدم (MAGIC)' },
  'about.desc': {
    en: 'Established by Governor\'s Decision No. 560 of 2024, MAGIC operates under the direct supervision of the Deputy Governor. The complex is a leading center for innovation and technology in the field of spatial data.',
    ar: 'المنشأ بقرار المحافظ برقم 560 لسنة 2024، ويتبع السيد المحافظ، وتحت الإشراف المباشر للسيد الدكتور/ نائب المحافظ. يعد المجمع مركزاً رائداً للابتكار والتكنولوجيا في مجال البيانات المكانية.'
  },
  'about.vision': { en: 'Our Vision', ar: 'الرؤية' },
  'about.visionText': {
    en: 'To be a leading center for innovation and technology in the field of spatial data at the republic level within five years, by integrating the latest technologies in geographic surveying, artificial intelligence and information technology, with the aim of supporting sustainable planning and promoting comprehensive development.',
    ar: 'أن يكون مجمع الذكاء المكاني المتقدم مركزًا رياديًا للإبتكار والتكنولوجيا في مجال البيانات المكانية على مستوى الجمهورية خلال خمس سنوات، من خلال دمج أحدث التقنيات في المسح الجغرافي الذكاء الاصطناعي وتكنولوجيا المعلومات، بهدف دعم التخطيط المستدام وتعزيز التنمية الشاملة'
  },
  'about.goals': { en: 'Strategic Goals', ar: 'الأهداف الإستراتيجية' },

  // Centers
  'centers.title': { en: 'Our Centers', ar: 'مراكزنا' },
  'centers.subtitle': { en: 'Six specialized centers working together to achieve digital transformation', ar: 'ستة مراكز متخصصة تعمل معاً لتحقيق التحول الرقمي' },
  'centers.learnMore': { en: 'Learn More', ar: 'اعرف المزيد' },
  'centers.services': { en: 'Services', ar: 'الخدمات' },
  'centers.achievements': { en: 'Achievements', ar: 'الإنجازات' },

  // Center Names
  'center.1.name': { en: 'Facilities Network Information and Surveying Center', ar: 'مركز معلومات شبكات المرافق والرفع المساحي' },
  'center.2.name': { en: 'Remote Sensing Applications Center', ar: 'مركز تطبيقات الاستشعار من البعد' },
  'center.3.name': { en: 'Spatial Information Infrastructure Center', ar: 'مركز البنية المعلوماتية المكانية' },
  'center.4.name': { en: 'Innovation, Development and Artificial Intelligence Center', ar: 'مركز الابتكار والتطوير والذكاء الإصطناعي' },
  'center.5.name': { en: 'Information Technology and Software Center', ar: 'مركز تكنولوجيا المعلومات والبرمجيات' },
  'center.6.name': { en: 'Capacity Building Center', ar: 'مركز إعداد الكوادر' },

  // Services
  'services.title': { en: 'Our Services', ar: 'خدماتنا' },
  'services.subtitle': { en: 'Comprehensive spatial intelligence solutions for sustainable development', ar: 'حلول شاملة للذكاء المكاني من أجل التنمية المستدامة' },
  'services.surveying': { en: 'Surveying Services', ar: 'خدمات الرفع المساحي' },
  'services.gis': { en: 'GIS & Spatial Analysis', ar: 'نظم المعلومات الجغرافية والتحليل المكاني' },
  'services.remoteSensing': { en: 'Remote Sensing', ar: 'الاستشعار عن بعد' },
  'services.ai': { en: 'AI Solutions', ar: 'حلول الذكاء الاصطناعي' },
  'services.training': { en: 'Training & Development', ar: 'التدريب والتطوير' },
  'services.it': { en: 'IT Services', ar: 'خدمات تكنولوجيا المعلومات' },

  // Mekano Labs
  'mekano.title': { en: 'mekano labs', ar: 'mekano labs' },
  'mekano.subtitle': { en: 'Educational space for children and youth', ar: 'مكان تعليمي للأطفال والشباب' },
  'mekano.desc': { en: 'Offering the most important training fields', ar: 'يقدم أهم مجالات التدريب' },

  // Complaints
  'complaints.title': { en: 'Submit a Complaint', ar: 'تقديم شكوى' },
  'complaints.subtitle': { en: 'We value your feedback and are here to help', ar: 'نحن نقدر ملاحظاتك ونحن هنا للمساعدة' },
  'complaints.name': { en: 'Full Name', ar: 'الاسم بالكامل' },
  'complaints.email': { en: 'Email Address', ar: 'البريد الإلكتروني' },
  'complaints.phone': { en: 'Phone Number', ar: 'رقم الهاتف' },
  'complaints.subject': { en: 'Subject', ar: 'الموضوع' },
  'complaints.message': { en: 'Message', ar: 'الرسالة' },
  'complaints.submit': { en: 'Submit Complaint', ar: 'إرسال الشكوى' },
  'complaints.success': { en: 'Complaint submitted successfully', ar: 'تم إرسال الشكوى بنجاح' },
  'complaints.error': { en: 'Failed to submit complaint. Please try again.', ar: 'فشل إرسال الشكوى. يرجى المحاولة مرة أخرى.' },

  // Contact
  'contact.title': { en: 'Contact Us', ar: 'تواصل معنا' },
  'contact.address': { en: 'Address', ar: 'العنوان' },
  'contact.phone': { en: 'Phone', ar: 'الهاتف' },
  'contact.email': { en: 'Email', ar: 'البريد الإلكتروني' },
  'contact.location': { en: 'Minya Governorate, Egypt', ar: 'محافظة المنيا، مصر' },

  // Footer
  'footer.rights': { en: 'All Rights Reserved © 2025 MAGIC', ar: 'جميع الحقوق محفوظة © 2025 مجمع الذكاء المكاني المتقدم' },
  'footer.about': { en: 'About MAGIC', ar: 'عن المجمع' },
  'footer.quickLinks': { en: 'Quick Links', ar: 'روابط سريعة' },
  'footer.followUs': { en: 'Follow Us', ar: 'تابعنا' },

  // Common
  'common.readMore': { en: 'Read More', ar: 'اقرأ المزيد' },
  'common.viewAll': { en: 'View All', ar: 'عرض الكل' },
  'common.loading': { en: 'Loading...', ar: 'جاري التحميل...' },
  'common.error': { en: 'An error occurred', ar: 'حدث خطأ' },
  'common.close': { en: 'Close', ar: 'إغلاق' },
  'common.submit': { en: 'Submit', ar: 'إرسال' },
  'common.cancel': { en: 'Cancel', ar: 'إلغاء' },

  // Chatbot
  'chatbot.title': { en: 'MAGIC Assistant', ar: 'مساعد ماجيك' },
  'chatbot.welcome': { en: 'Hello! How can I help you today?', ar: 'مرحباً! كيف يمكنني مساعدتك اليوم؟' },
  'chatbot.placeholder': { en: 'Type your message...', ar: 'اكتب رسالتك...' },
  'chatbot.send': { en: 'Send', ar: 'إرسال' },
  'chatbot.typing': { en: 'Typing...', ar: 'يكتب...' },
  // Complaints (Rewritten professionally like About section)


  // Contact Information
  'complaints.getInTouch': { en: 'Get in Touch', ar: 'تواصل معنا' },
  'complaints.visitUs': { en: 'Visit Us', ar: 'زورونا' },
  'complaints.location': { en: 'Minya Governorate, Egypt', ar: 'محافظة المنيا، مصر' },
  'complaints.emailUs': { en: 'Email Us', ar: 'راسلونا عبر البريد الإلكتروني' },
  'complaints.callUs': { en: 'Call Us', ar: 'اتصل بنا' },
  'complaints.workingHours': { en: 'Working Hours', ar: 'ساعات العمل' },
  'complaints.sunThu': { en: 'Sun - Thu', ar: 'الأحد - الخميس' },
  'complaints.friSat': { en: 'Fri - Sat', ar: 'الجمعة - السبت' },
  'complaints.closed': { en: 'Closed', ar: 'مغلق' },
  'complaints.timeRange': { en: '9 AM – 3 PM', ar: '9:00 صباحاً – 3:00 مساءً' },

  // Form
  'complaints.formTitle': {
    en: 'Send a Message',
    ar: 'أرسل رسالة'
  },

  'complaints.formSubtitle': {
    en: 'Fill out the form below and our team will get back to you shortly.',
    ar: 'املأ النموذج أدناه وسيقوم فريقنا بالرد عليك في أقرب وقت.'
  },


'footer.description': {
    en: 'Advanced Spatial Intelligence Complex leading the digital transformation in Minya Governorate through cutting-edge GIS and remote sensing technologies.',
    ar: 'مجمع الذكاء المكاني المتقدم يقود التحول الرقمي في محافظة المنيا باستخدام أحدث تقنيات نظم المعلومات الجغرافية والاستشعار عن بعد.'
  },


  'footer.services': {
    en: 'Our Services',
    ar: 'خدماتنا'
  },
  'footer.centers': {
    en: 'Centers',
    ar: 'المراكز'
  },
  'footer.platforms': {
    en: 'Digital Platforms',
    ar: 'المنصات الرقمية'
  },

  'footer.servicesTitle': {
    en: 'Services',
    ar: 'الخدمات'
  },
  'footer.gis': {
    en: 'GIS Mapping',
    ar: 'الخرائط الجغرافية'
  },
  'footer.remoteSensing': {
    en: 'Remote Sensing',
    ar: 'الاستشعار عن بعد'
  },
  'footer.urbanPlanning': {
    en: 'Urban Planning',
    ar: 'التخطيط العمراني'
  },
  'footer.training': {
    en: 'Training Programs',
    ar: 'برامج التدريب'
  },

  'footer.contact': {
    en: 'Contact Us',
    ar: 'تواصل معنا'
  },
  'footer.address': {
    en: 'Minya Governorate General Diwan, Corniche El Nile St.',
    ar: 'ديوان عام محافظة المنيا – كورنيش النيل'
  },
  'footer.phone': {
    en: 'Phone',
    ar: 'هاتف'
  },
  'footer.email': {
    en: 'Email',
    ar: 'البريد الإلكتروني'
  },


};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
