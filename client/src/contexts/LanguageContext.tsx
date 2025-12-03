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
   'footer.title' : {en : 'MAGIC'  , ar :' ماجيك'},
    'footer.subtitle' : {en : 'Minya Advanced Geospatial Intelligence Complex'  , ar :' مجمع الذكاء المكاني المتقدم'},

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

  // Platforms (Bilingual)
  'platforms.surveying.title': {
    en: 'Surveying Portal',
    ar: 'بوابة المساحة'
  },
  'platforms.surveying.type': {
    en: 'Web Portal',
    ar: 'بوابة إلكترونية'
  },
  'platforms.surveying.desc': {
    en: 'Facilitates building and activity licensing procedures, providing official documentation and supporting planning decisions.',
    ar: 'تسهّل إجراءات تراخيص المباني والأنشطة، وتوفر المستندات الرسمية وتدعم قرارات التخطيط.'
  },

  'platforms.mli.title': {
    en: 'Minya Lands Inquiries (MLI)',
    ar: 'استعلامات أراضي المنيا (MLI)'
  },
  'platforms.mli.type': {
    en: 'Mobile App',
    ar: 'تطبيق جوال'
  },
  'platforms.mli.desc': {
    en: 'Smart application for land inquiries, determining legal status, and checking if land is within urban boundaries.',
    ar: 'تطبيق ذكي للاستعلام عن الأراضي وتحديد الوضع القانوني والتأكد من وجود الأرض داخل الأحوزة العمرانية.'
  },

  'platforms.inventory.title': {
    en: 'State Lands Inventory',
    ar: 'حصر أراضي الدولة'
  },
  'platforms.inventory.type': {
    en: 'Web Portal',
    ar: 'بوابة إلكترونية'
  },
  'platforms.inventory.desc': {
    en: 'Integrated digital platform for managing legalization requests on state lands, ensuring transparency and speed.',
    ar: 'منصة رقمية متكاملة لإدارة طلبات التقنين على أراضي الدولة، لضمان الشفافية والسرعة.'
  },

  'platforms.discover.title': {
    en: 'Miniastic',
    ar :  'منياستيك'
  },
  'platforms.discover.type': {
    en: 'Website',
    ar: 'موقع إلكتروني'
  },
  'platforms.discover.desc': {
    en: 'Tourism promotion website acting as a quick guide to discovering Minya\'s treasures, hotels, and landmarks.',
    ar: 'موقع ترويجي للسياحة يعمل كدليل سريع لاكتشاف معالم المنيا وفنادقها ومزاراتها.'
  },

  'platforms.holdings.title': {
    en: 'Agricultural Holdings',
    ar: 'الحيازات الزراعية'
  },
  'platforms.holdings.type': {
    en: 'Mobile App',
    ar: 'تطبيق جوال'
  },
  'platforms.holdings.desc': {
    en: 'Smart app facilitating the discovery of agricultural holdings and linking them spatially.',
    ar: 'تطبيق ذكي يسهل اكتشاف الحيازات الزراعية وربطها مكانياً.'
  },

  'platforms.dawagin.title': {
    en: 'Dawagin ERP',
    ar: 'نظام دواجن ERP'
  },
  'platforms.dawagin.type': {
    en: 'System',
    ar: 'نظام'
  },
  'platforms.dawagin.desc': {
    en: 'Integrated ERP system for managing poultry projects financially and administratively.',
    ar: 'نظام ERP متكامل لإدارة مشاريع الدواجن مالياً وإدارياً.'
  },
  'plateform.Digital' : {
    en :'Digital',
    ar :'الرقمية'
  },
  'plateform.Platforms' : {
    en :'Platforms',
    ar : 'المنصات'
  },
  'plateform.description' : {
    en: ' Access our suite of digital tools and applications designed to streamline government services and empower citizens.',
    ar :'استخدم مجموعتنا من الأدوات والتطبيقات الرقمية المصممة لتبسيط الخدمات الحكومية وتمكين المواطنين.'
  },
  'plateform.Access-Platform' :{
    en : 'Access-Platform' ,
    ar : 'الوصول إلى المنصة'
  }, 
   "platforms.fast.title": {
    "en": "Fast Performance",
    "ar": "أداء سريع"
  },
  "platforms.fast.desc": {
    "en": "High-speed optimized workflow.",
    "ar": "سير عمل محسّن وسريع للغاية."
  },

  "platforms.secure.title": {
    "en": "Secure System",
    "ar": "نظام آمن"
  },
  "platforms.secure.desc": {
    "en": "Advanced protection and encryption.",
    "ar": "حماية متقدمة وتشفير عالي المستوى."
  },

  "platforms.smart.title": {
    "en": "Smart Insights",
    "ar": "تحليلات ذكية"
  },
  "platforms.smart.desc": {
    "en": "AI-powered decision support.",
    "ar": "نظام دعم قرار يعتمد على الذكاء الاصطناعي."
  },
  "about.goal.badge": {
    "en": "Our Goal",
    "ar": "هدفنا"
  },
  "about.goal.title": {
    "en": "What is our goal?",
    "ar": "ما هو هدفنا؟"
  },
  "about.goal.description": {
    "en": "Providing a safe and sustainable infrastructure through accurate maps, specialized trainings, and high-quality services for all our clients.",
    "ar": "توفير بنية تحتية وفوقية آمنة ومستدامة من خلال تقديم خرائط دقيقة وتدريبات تخصصية وخدمات عالية الجودة لجميع عملائنا."
  },

  "about.values.badge": {
    "en": "Our Values",
    "ar": "قيمنا"
  },
  "about.values.title": {
    "en": "What are our values?",
    "ar": "ما هي قيمنا؟"
  },
  "about.values.items.professional": {
    "en": "Professionalism",
    "ar": "الاحترافية"
  },
  "about.values.items.quality": {
    "en": "Quality",
    "ar": "الجودة"
  },
  "about.values.items.transparency": {
    "en": "Transparency",
    "ar": "الشفافية"
  },
  "about.values.items.sustainability": {
    "en": "Sustainability",
    "ar": "الاستدامة"
  },
  "about.values.items.integrity": {
    "en": "Integrity",
    "ar": "الأمانة"
  },

  "about.documents.badge": {
    "en": "Required Documents",
    "ar": "المستندات المطلوبة للتقديم"
  },
  "about.documents.title": {
    "en": "What are the required documents?",
    "ar": "ما المستندات المطلوبة للتقديم؟"
  },
  "about.documents.items.item1": {
    "en": "Original letter from the local authority addressed to the Utility Networks Information Center stating the citizen or entity's name and excavation location.",
    "ar": "أصل خطاب من الحي موجّه إلى مركز معلومات شبكات المرافق يوضح اسم المواطن أو الجهة ومكان الحفر."
  },
  "about.documents.items.item2": {
    "en": "Original letter from the utility to be connected showing the excavation path and its length.",
    "ar": "أصل خطاب من المرفق المراد توصيله يوضح مسار الحفر وطوله."
  },
  "about.documents.items.item3": {
    "en": "Original excavation sketch.",
    "ar": "أصل كروكي مسار الحفر."
  },
  "about.documents.items.item4": {
    "en": "Copy of approvals from (Natural Gas - Sanitation - Water - Telecom Egypt - Electricity) showing each utility path, with originals available for inspection.",
    "ar": "صورة من موافقة كل من (الغاز الطبيعي - الصرف الصحي - المياه - المصرية للاتصالات - الكهرباء) تفيد بمسار كل مرفق على حدى مع إحضار الأصل للاطلاع عليه."
  },
  "about.documents.items.item5": {
    "en": "Copy of the citizen’s ID or the company owner’s ID.",
    "ar": "صورة بطاقة المواطن صاحب المشروع أو صاحب الشركة."
  },
  "about.documents.items.item6": {
    "en": "Copy of the delegate’s ID and authorization/power of attorney (if applicable).",
    "ar": "صورة بطاقة المندوب والتوكيل / التفويض من المال (في حالة مندوب عنه)."
  },
  "about.documents.items.item7": {
    "en": "Mobile number of the citizen or delegate for communication.",
    "ar": "رقم الموبايل الخاص بالمواطن أو المندوب للتواصل."
  },

  "about.procedures.badge": {
    "en": "Procedures",
    "ar": "الإجراءات المتبعة"
  },
  "about.procedures.title": {
    "en": "What are the procedures?",
    "ar": "ما الإجراءات المتبعة؟"
  },
  "about.procedures.items.step1": {
    "en": "Contact the citizen to inform them about the excavation survey for the Utility Networks Information Center inspection.",
    "ar": "يتم التواصل مع المواطن لإخطاره بمقايسة الحفر الخاصة بالمعاينة لمركز معلومات شبكات المرافق."
  },
  "about.procedures.items.step2": {
    "en": "Collect the survey fees via electronic payment (Visa) or request the center to charge the entity via the institutional code.",
    "ar": "يتم تحصيل الرسوم الخاصة بالمقايسة عن طريق الدفع الإلكتروني (فيزا) أو مطالبة من المركز للجهات لتحويل الرسوم على الكود المؤسسي."
  },
  "about.procedures.items.step3": {
    "en": "Inform the citizen to visit the Utility Networks Information Center to receive the technical approval and a map showing the excavation and other utility paths.",
    "ar": "يتم التواصل مع المواطن لإخطاره بالتوجه لمركز معلومات شبكات المرافق لاستلام الموافقة الفنية وخريطة موضّح بها مسار الحفر ومسارات المرافق الأخرى."
  },
  "about.procedures.items.step4": {
    "en": "Ensure the excavation date is renewed upon receiving the technical approval.",
    "ar": "الحرص على تجديد تاريخ الحفر عند استلام الموافقة الفنية."
  },
  "about.procedures.items.step5": {
    "en": "The technical approval is valid for one month from its date, and can be renewed if expired.",
    "ar": "تعتمد الموافقة الفنية لمدة شهر من تاريخها، وفي حالة الانتهاء يتم تجديدها."
  },
  "about.procedures.items.step6": {
    "en": "If the client delays completing the procedures for more than two months, all required documents must be renewed.",
    "ar": "في حالة تأخر العميل عن استكمال الإجراءات لأكثر من شهرين يتم تجديد جميع المستندات المطلوبة."
  }
  

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
