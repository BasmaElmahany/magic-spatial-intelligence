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
  'nav.devices': { en: 'Devices', ar: 'الأجهزة' },
  // Hero
  'hero.title': { en: 'Minya Advanced GeoSpatial Intelligence Complex', ar: 'مجمع الذكاء المكاني المتقدم' },
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
  'footer.title': { en: 'MAGIC', ar: ' ماجيك' },
  'footer.subtitle': { en: 'Minya Advanced Geospatial Intelligence Complex', ar: ' مجمع الذكاء المكاني المتقدم' },

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
    en: 'Abo Flio - Besides Family Court Bandar El Menia , Minya Center , Al Minya Governate  ',
    ar: 'أبو فليو - بجانب محكمة الأسرة بندر المنيا، مركز المنيا، محافظة المنيا'
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
    ar: 'منياستيك'
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
  'plateform.Digital': {
    en: 'Digital',
    ar: 'الرقمية'
  },
  'plateform.Platforms': {
    en: 'Platforms',
    ar: 'المنصات'
  },
  'plateform.description': {
    en: ' Access our suite of digital tools and applications designed to streamline government services and empower citizens.',
    ar: 'استخدم مجموعتنا من الأدوات والتطبيقات الرقمية المصممة لتبسيط الخدمات الحكومية وتمكين المواطنين.'
  },
  'plateform.Access-Platform': {
    en: 'Access-Platform',
    ar: 'الوصول إلى المنصة'
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
    "ar": "يتقدم المواطن أو من ينوب عنه بطلب إلى المركز التكنولوجي وفقاً لنوع الخدمة المطلوبة.",
    "en": "The citizen or their authorized representative submits a request to the Technological Center according to the type of required service."
  },
  "about.procedures.items.step2": {
    "ar": "تقديم المستندات المطلوبة والتي تشمل الصور، العقود، بيانات الملكية، والكروكي.",
    "en": "Submitting the required documents, including photos, contracts, ownership information, and the excavation sketch."
  },
  "about.procedures.items.step3": {
    "ar": "يقوم موظف الشباك باستلام الطلب وتسجيله على منظومة المركز التكنولوجي.",
    "en": "The service desk employee receives the request and records it in the Technological Center system."
  },
  "about.procedures.items.step4": {
    "ar": "تحرير أمر دفع بالرسوم المطلوبة للخدمة.",
    "en": "A payment order for the required service fees is issued."
  },
  "about.procedures.items.step5": {
    "ar": "يقوم المواطن بسداد الرسوم في الخزينة أو من خلال البنك.",
    "en": "The citizen pays the required fees at the cashier or through the bank."
  },
  "about.procedures.items.step6": {
    "ar": "يتقدم المواطن بما يفيد سداد الرسوم لموظف الشباك.",
    "en": "The citizen submits proof of payment to the service desk employee."
  },
  "about.procedures.items.step7": {
    "ar": "يقوم المركز التكنولوجي بتسليم الطلب إلى إدارة البنية المعلوماتية.",
    "en": "The Technological Center forwards the request to the Information Infrastructure Department."
  },
  "about.procedures.items.step8": {
    "ar": "يقوم مركز شبكات المرافق والرفع المساحي بحصر الطلبات وإرسالها إلى المراكز المختصة.",
    "en": "The Utility Networks and Surveying Center reviews all requests and forwards them to the relevant departments."
  },
  "about.procedures.items.step9": {
    "ar": "يقوم المهندسون المختصون بإجراء المعاينات الميدانية.",
    "en": "Field engineers carry out site inspections."
  },
  "about.procedures.items.step10": {
    "ar": "يتم رفع نتائج المعاينات على المنظومة.",
    "en": "Inspection results are uploaded to the system."
  },
  "about.procedures.items.step11": {
    "ar": "تتم مراجعة المعاينات على المنظومة وطباعة البيانات مثل الشهادات والخرائط.",
    "en": "The inspections are reviewed in the system, and related documents such as certificates and maps are printed."
  },
  "about.procedures.items.step12": {
    "ar": "يتم تسليم الطلبات المطبوعة إلى المركز التكنولوجي في المراكز.",
    "en": "The printed outputs are delivered to the Technological Center in the relevant centers."
  },
  "about.procedures.items.step13": {
    "ar": "تسليم المستندات النهائية للعميل.",
    "en": "The final documents are delivered to the customer."
  },
  "devices.trimbleGnssRef.title": {
    "en": "Trimble GNSS Reference Station",
    "ar": "محطة رصد Trimble GNSS المرجعية"
  },
  "devices.trimbleGnssRef.description": {
    "en": "An integrated Multi-GNSS reference station that continuously tracks all satellite constellations and records stable, standardized data used for precise surveying, geodetic control, and RTK corrections. It supports continuous CORS operation, real-time RTCM/NTRIP corrections, and remote management for reliable performance in all conditions.",
    "ar": "محطة رصد جغرافي متكاملة تعمل على تتبّع جميع أنظمة الأقمار الصناعية بتقنية Multi-GNSS بدقة عالية، مع تسجيل البيانات بشكل مستمر لإنتاج قياسات ثابتة ومعيارية تُستخدم في الرفع المساحي والربط الجيوديسي وتصحيحات الـRTK. تدعم المحطة التشغيل المتواصل CORS، وتوفّر بث تصحيحات فورية عبر بروتوكولات RTCM وNTRIP، مع إمكانية الإدارة والتحكم عن بُعد لضمان أداء موثوق في مختلف التطبيقات."
  },

  "devices.gavadSigma.title": {
    "en": "GAVAD SIGMA GNSS Station",
    "ar": "محطة GAVAD SIGMA GNSS"
  },
  "devices.gavadSigma.description": {
    "en": "An advanced GNSS reference station used for high-precision positioning, supporting RTK and CORS modes. It provides stable reference data for surveying and topographic mapping and is designed to operate continuously under harsh environmental conditions.",
    "ar": "محطة رصد GNSS متقدمة تُستخدم لتحديد المواقع بدقة عالية، مع دعم أنظمة RTK وCORS. توفّر بيانات مرجعية ثابتة لأعمال المساحة والرفع الطبوغرافي، وتعمل بشكل مستمر مع مقاومة عالية للظروف البيئية القاسية."
  },

  "devices.trimbleR12i.title": {
    "en": "Trimble R12i GNSS Receiver",
    "ar": "جهاز Trimble R12i لاستقبال GNSS"
  },
  "devices.trimbleR12i.description": {
    "en": "A state-of-the-art GNSS receiver that combines Trimble ProPoint technology for challenging environments with TIP IMU-based tilt compensation, eliminating the need for calibration and increasing productivity. It offers 672 channels, RTK accuracy of up to 8 mm horizontal and 15 mm vertical, supports all satellite constellations, and weighs about 1.12 kg.",
    "ar": "نظام استقبال GNSS متطور يجمع بين تقنية ProPoint للتعامل مع البيئات الصعبة وتقنية TIP المعتمدة على مستشعر IMU للتعويض عن ميل القطب دون الحاجة إلى معايرة، مما يرفع الإنتاجية. يتميز الجهاز بـ672 قناة، ودقة RTK تصل إلى 8 مم أفقياً و15 مم رأسياً، مع دعم لجميع كوكبات الأقمار الصناعية، ووزن خفيف يقارب 1.12 كجم."
  },

  "devices.trimbleR780.title": {
    "en": "Trimble R780 GNSS Receiver",
    "ar": "جهاز Trimble R780 GNSS"
  },
  "devices.trimbleR780.description": {
    "en": "A rugged, smart GNSS receiver for surveying and construction that delivers high accuracy using RTK, XFill, and RTX technologies. It supports tilt compensation (TIP), multiple wireless communications (Wi-Fi, Bluetooth), and is ideal for stakeout, point positioning, and volume computations.",
    "ar": "جهاز استقبال GNSS ذكي ومتين لأعمال المساحة والبناء، يوفّر دقة عالية باستخدام تقنيات RTK وXFill وRTX، مع التعويض عن الميلان بتقنية TIP. يدعم الاتصال اللاسلكي عبر Wi-Fi والبلوتوث، وقابل للتوسع، ومناسب لمهام التوقيع، تحديد النقاط، وقياس الأحجام."
  },

  "devices.trimbleR4s.title": {
    "en": "Trimble R4s GNSS Receiver",
    "ar": "جهاز Trimble R4s GNSS"
  },
  "devices.trimbleR4s.description": {
    "en": "A flexible, high-accuracy GNSS receiver that can be used as a base or rover thanks to its internal radio. It supports multiple satellite systems and provides centimeter-level accuracy for field surveying and topographic work while optimizing cost and performance.",
    "ar": "جهاز استقبال GNSS مساحي متطور يجمع بين الدقة العالية والمرونة، ويعمل كنقطة أساس (Base) أو جهاز متحرك (Rover) بفضل الراديو الداخلي. يدعم أنظمة الأقمار الصناعية المختلفة، ويوفر بيانات دقيقة لأعمال المسح الحقلي والرفع المساحي بدقة سنتيمترية مع تحقيق توازن بين الأداء والتكلفة."
  },

  "devices.topconHiperVr.title": {
    "en": "Topcon HiPer VR GNSS Receiver",
    "ar": "جهاز Topcon HiPer VR GNSS"
  },
  "devices.topconHiperVr.description": {
    "en": "A high-end GNSS receiver for topographic surveying, construction, and mapping. It supports all major satellite constellations (GPS, GLONASS, Galileo, BeiDou) and delivers RTK-level accuracy. Designed for harsh environments, it offers smart signal tracking and full integration with field controllers for efficient data collection.",
    "ar": "جهاز استقبال GNSS متطور لأعمال الرفع الطبوغرافي والبناء ورسم الخرائط. يدعم جميع أنظمة الملاحة الرئيسية (GPS, GLONASS, Galileo, BeiDou) لتوفير دقة عالية باستخدام RTK، ويعمل كنقطة أساس أو جهاز متنقل. يتميز بتصميم متين مقاوم للظروف القاسية، مع تقنية تتبع ذكية للإشارات وتكامل كامل مع وحدات التحكم لإدارة البيانات والعمليات الميدانية بكفاءة."
  },

  "devices.trimbleS5.title": {
    "en": "Trimble S5 Robotic Total Station",
    "ar": "محطة Trimble S5 الإجمالية الروبوتية"
  },
  "devices.trimbleS5.description": {
    "en": "An advanced robotic total station for topographic surveying featuring Autolock for automatic prism tracking and remote control. It supports precise laser surface scanning to create 3D models, offers long measurement range, tracklight guidance for stakeout, and integrates with modern controllers via Bluetooth and USB.",
    "ar": "محطة إجمالية روبوتية متقدمة للمسح الطبوغرافي، تتميز بخاصية Autolock لتتبع المنشور آلياً والتحكم عن بُعد، مع مسح ليزري دقيق (Surface Scan) لإنشاء نماذج ثلاثية الأبعاد. توفّر مدى قياس طويل وضوء استرشادي للتوقيع، وتعمل مع وحدات تحكم متقدمة مع اتصال بلوتوث وUSB لنقل البيانات وتقليل زمن العمل الميداني."
  },

  "devices.trimbleC5.title": {
    "en": "Trimble C5 Total Station",
    "ar": "محطة Trimble C5 للمساحة"
  },
  "devices.trimbleC5.description": {
    "en": "A robust mechanical total station designed to boost productivity with fast, precise measurements. It features autofocus, dual displays, long-range measurement up to 5000 m with prism, large memory, long battery life, and multiple accuracy options (1\", 2\", 3\", 5\"), making it reliable in demanding field conditions.",
    "ar": "محطة Total Station ميكانيكية متينة وسهلة الاستخدام، مصممة لزيادة الإنتاجية في أعمال المسح بفضل السرعة والدقة. تتميز بالتركيز التلقائي (Autofocus)، وشاشات مزدوجة، ومدى قياس طويل حتى 5000 م مع العاكس، وذاكرة كبيرة، وبطارية طويلة العمر، وخيارات دقة متعددة (1\"، 2\"، 3\"، 5\")، مما يجعلها موثوقة في مختلف الظروف الميدانية."
  },

  "devices.trimbleC3.title": {
    "en": "Trimble C3 Total Station",
    "ar": "محطة Trimble C3 للمساحة"
  },
  "devices.trimbleC3.description": {
    "en": "A compact mechanical total station that combines accuracy, speed, and ease of use to enhance field surveying efficiency and reduce operator fatigue. It is engineered to perform reliably in tough work environments and can be used for a wide range of construction and surveying tasks.",
    "ar": "محطة رصد ميكانيكية Total Station تقليدية تجمع بين الدقة والسرعة وسهولة الاستخدام، ومصممة لتعزيز كفاءة المسح الميداني وتقليل إجهاد العاملين. تتعامل بكفاءة مع ظروف العمل الصعبة، وتصلح لمختلف أعمال المساحة والإنشاءات."
  },

  "devices.leicaTs16m.title": {
    "en": "Leica Viva TS16M Total Station",
    "ar": "محطة Leica Viva TS16M"
  },
  "devices.leicaTs16m.description": {
    "en": "A high-end total station with a touch screen and Leica Captivate software, offering precise measurements, automatic target tracking, project management, and advanced 3D modeling and automation tools for complex surveying tasks.",
    "ar": "محطة مساحية متطورة مزودة بشاشة لمس وبرنامج Leica Captivate، توفّر قياساً دقيقاً وتتبعاً آلياً للأهداف، مع إدارة متكاملة للمشاريع والتحكم في المهام المساحية والأتمتة وإنشاء النماذج ثلاثية الأبعاد."
  },

  "devices.sokkiaIm52.title": {
    "en": "Sokkia iM-52 Total Station",
    "ar": "محطة Sokkia iM-52"
  },
  "devices.sokkiaIm52.description": {
    "en": "An advanced total station used for surveying, topographic mapping, and precise angle and distance measurements. It combines high accuracy, durability, and user-friendly operation, making it suitable for engineering and infrastructure projects in tough environments.",
    "ar": "محطة Total Station متقدمة تُستخدم لأعمال المساحة والرفع الطبوغرافي وقياس الزوايا والمسافات بدقة عالية. تجمع بين الدقة العالية وسهولة الاستخدام وتصميم متين يتحمل ظروف العمل الصعبة، مما يجعلها مناسبة للمشاريع الهندسية ومشروعات البنية التحتية."
  },

  "devices.trimbleT100.title": {
    "en": "Trimble T100 Tablet",
    "ar": "جهاز Trimble T100 اللوحي"
  },
  "devices.trimbleT100.description": {
    "en": "A rugged, high-performance field tablet designed for surveying, mapping, and GIS. It offers fast data processing, a large bright display, and supports a wide range of applications for laser scanners and GNSS receivers such as Trimble SX12 and X7, enabling efficient field workflows.",
    "ar": "جهاز لوحي متين وعالي الأداء مصمم لأعمال المساحة والخرائط ونظم المعلومات الجغرافية (GIS). يوفّر معالجة سريعة للبيانات وشاشة كبيرة للعمل الميداني، مع دعم مجموعة واسعة من التطبيقات لأجهزة المسح بالليزر ووحدات GNSS مثل Trimble SX12 وX7، مما يجعل العمل في الميدان أكثر كفاءة وسرعة."
  },

  "devices.trimbleDini.title": {
    "en": "Trimble DiNi 0.3 mm Digital Level",
    "ar": "ميزان Trimble DiNi 0.3 mm الرقمي"
  },
  "devices.trimbleDini.description": {
    "en": "A high-precision digital level that measures height differences with accuracy down to 0.3 mm. It uses a bar-coded staff and automatically captures and displays readings, making it ideal for elevation control, surface leveling, and precise engineering works.",
    "ar": "جهاز تسوية رقمي عالي الدقة يقيس فروقات الارتفاع بدقة تصل إلى 0.3 مليمتر. يستخدم مسطرة مرقمة باركود، ويلتقط القراءة تلقائياً ويعرضها، مما يجعله مثالياً للتحكم في المناسيب، وتحديد مستوى الأسطح، وتوقيع الأعمال الهندسية الدقيقة."
  },

  "devices.sokkiaB40.title": {
    "en": "Sokkia B40 Auto Level",
    "ar": "ميزان Sokkia B40 الأوتوماتيكي"
  },
  "devices.sokkiaB40.description": {
    "en": "A precise, fast automatic level for leveling and surveying with 24x magnification and 2 mm accuracy per kilometer double-run. It is water and dust resistant (IPX6), has a horizontal circle for angle measurement, and can focus as close as 20 cm for tight spaces.",
    "ar": "ميزان قامة أوتوماتيكي دقيق وسريع للمساحة والتسوية، يتميز بتكبير 24× ودقة 2 مم لكل كيلومتر ذهاباً وإياباً، ومقاوم للماء والغبار بمعيار IPX6، مع دائرة أفقية لقياس الزوايا وقدرة تركيز دقيقة حتى 20 سم، مما يجعله موثوقاً في الأماكن الضيقة والظروف الصعبة."
  },

  "devices.nikonAc2s.title": {
    "en": "Nikon AC-2S Auto Level",
    "ar": "ميزان Nikon AC-2S"
  },
  "devices.nikonAc2s.description": {
    "en": "An automatic optical level for surveying and construction works. It features 24x magnification, automatic compensator for line-of-sight leveling, water and dust resistance, and a horizontal circle for angle reading, used with a tripod and staff for reliable field leveling.",
    "ar": "ميزان تسوية بصري أوتوماتيكي لأعمال المساحة والإنشاءات، يتميز بتلسكوب تكبير 24× مع معوض أوتوماتيكي لتسوية خط الرؤية، ومقاومة للماء والغبار، ودائرة أفقية لقراءة الزوايا. يُستخدم مع حامل ثلاثي ومسطرة، ويوفر تسوية موثوقة في ظروف العمل المختلفة."
  },

  "devices.nikonAx2s.title": {
    "en": "Nikon AX-2S Auto Level",
    "ar": "ميزان Nikon AX-2S الأوتوماتيكي"
  },
  "devices.nikonAx2s.description": {
    "en": "A practical, durable automatic level used for surveying and construction to determine elevations and level ground accurately. It is easy to set up and use, with a high-quality lens for clear vision even in low light, and an internal compensator that keeps the line of sight horizontal to reduce measurement errors.",
    "ar": "ميزان أوتوماتيكي عملي ومتين يُستخدم في أعمال المساحة والبناء لتحديد الارتفاعات وتسوية الأرض بدقة. يتميز بسهولة الإعداد والاستخدام، مع عدسة ذات أداء عالٍ لرؤية واضحة حتى في الإضاءة الضعيفة، ومعوض تلقائي مدمج يحافظ على خط البصر أفقياً، مما يقلل من أخطاء القياس ويجعل العمل أكثر سلاسة حتى على الأراضي غير المستوية."
  },

  "devices.satlabLixelX1.title": {
    "en": "SATLAB Lixel X1 SLAM 3D Scanner",
    "ar": "ماسح SATLAB Lixel X1 ثلاثي الأبعاد بتقنية SLAM"
  },
  "devices.satlabLixelX1.description": {
    "en": "A handheld 3D scanner that combines LiDAR, optical cameras, IMU, and advanced SLAM technology. It allows real-time scene reconstruction and direct export of results without heavy post-processing, enabling efficient, segmented scanning workflows for complex environments.",
    "ar": "ماسح ضوئي ثلاثي الأبعاد يدوي يجمع بين LiDAR، الكاميرات الضوئية، الاستشعار بالقصور الذاتي (IMU)، وتقنية SLAM المتقدمة من SatLab. يتيح معاينة البيانات وإعادة بناء المشهد فوراً، مع إمكانية تصدير النتائج مباشرة دون معالجة لاحقة، مما يسرّع العمل ويسهّل تقسيم المسوحات إلى أجزاء مرنة."
  },

  "devices.seafloorEchoSounder.title": {
    "en": "Seafloor Hydrone Echo Sounder",
    "ar": "جهاز قياس الأعماق Seafloor Hydrone Echo Sounder"
  },
  "devices.seafloorEchoSounder.description": {
    "en": "A specialized echo sounder used for accurate field measurements of water depths, seabed levels, and internal formations of lakes. It geo-references measurements on precise digital maps to support hydraulic design, treatment plant planning, and long-term monitoring.",
    "ar": "يُستخدم الجهاز في تنفيذ قياسات ميدانية دقيقة لأعماق المياه، ورصد مناسيب القاع، وتحديد طبيعة التكوينات الداخلية للبحيرات، مع توثيق البيانات مكانياً على خرائط رقمية دقيقة. يدعم التخطيط الهندسي وإدارة مرافق المعالجة وتحسين كفاءة التشغيل والمتابعة المستقبلية."
  },

  "devices.gprIdsHiMod.title": {
    "en": "GPR IDS Hi Mod 200/600",
    "ar": "نظام GPR IDS Hi Mod 200/600"
  },
  "devices.gprIdsHiMod.description": {
    "en": "An advanced ground-penetrating radar system with dual 200/600 MHz antennas, providing deep penetration and high-resolution near-surface data. It is used to detect buried pipes, cables, and structures, assess soil conditions, and support infrastructure and engineering surveys, with 2D/3D visualization and direct export to CAD and GIS.",
    "ar": "نظام رادار اختراق أرض متطور يجمع بين هوائيات ثنائية التردد 200 و600 ميجاهرتز، مما يوفر عمق اختراق كبير مع دقة عالية في التفاصيل السطحية. يُستخدم للكشف عن الأنابيب والكابلات والعناصر المدفونة، وتقييم التربة، ودعم أعمال البنية التحتية والمسح الهندسي، مع قدرات تصوير ثنائية وثلاثية الأبعاد وإمكانية تصدير البيانات مباشرة إلى خرائط CAD وGIS."
  },

  "devices.radiodetectionRd8200.title": {
    "en": "Radiodetection RD8200 Cable & Pipe Locator",
    "ar": "جهاز Radiodetection RD8200 لتتبع الكابلات والأنابيب"
  },
  "devices.radiodetectionRd8200.description": {
    "en": "A professional locator for accurately tracing and pinpointing underground cables and pipes. It is highly responsive, easy to use, and performs reliably in complex, signal-rich environments, making it ideal for utility maintenance, safe excavation, and network documentation.",
    "ar": "جهاز احترافي لتتبع وتحديد مواقع الكابلات والأنابيب المدفونة تحت الأرض بدقة عالية، ويعد من أقوى الأجهزة في أعمال المرافق والبنية التحتية. يتميز بسهولة الاستخدام واستجابة سريعة وقدرة عالية على العمل في البيئات المعقدة والمزدحمة بالإشارات، مما يجعله مناسباً لأعمال الصيانة والحفر الآمن وتوثيق الشبكات."
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
