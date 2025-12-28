export interface Center {
  id: number;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: string;
  color: string;
  servicesAr: string[];
  servicesEn: string[];
  achievements?: {
    titleAr: string;
    titleEn: string;
    value: string;
  }[];
}

// src/data/magicMedia.ts
export interface MagicMediaArticle {
  id: number;
  titleAr: string;
  titleEn: string;
  sourceAr: string;
  sourceEn: string;
  type: 'youtube' | 'article';
  url: string;        // iframe or article url
  thumbnail?: string; // optional image
  embeddable?: boolean; // optional flag for embeddability
}
export const magicMediaArticles: MagicMediaArticle[] = [
  {
    id: 1,
    titleAr: "لقاء خاص مع نائب محافظ المنيا",
    titleEn: "Exclusive Interview with Minya Deputy Governor",
    sourceAr: "قناة إكسترا نيوز",
    sourceEn: "Extra News Channel",
    type: "youtube",
    url: "https://www.youtube.com/embed/BIpNR88h8YY",
    embeddable: true
  },
  {
    id: 2,
    titleAr: "افتتاح أول مجمع للذكاء المكاني في الصعيد",
    titleEn: "Opening the First Spatial Intelligence Complex in Upper Egypt",
    sourceAr: "بوابة الشروق",
    sourceEn: "Al-Shorouk Gate",
    type: "article",
    url: "https://almessa.gomhuriaonline.com/577176/",
    thumbnail: "/assets/shorouk.png",
    embeddable: false
  },
  {
    id: 3,
    titleAr: "تغطية إخبارية لافتتاح مجمع الذكاء المكاني",
    titleEn: "News Coverage of MAGIC Opening",
    sourceAr: "أخبار اليوم",
    sourceEn: "Akhbar Elyom",
    type: "article",
    url: "https://akhbarelyom.com/news/newdetails/4630414/1/",
    thumbnail: "/assets/media/akhbar.jpg",
    embeddable: true
  },
    {
    id: 4,
    titleAr: "مجمع الذكاء المكاني المتقدم في المنيا 2025",
    titleEn: "Advanced GeoSpatial Intelligence Complex in Minya 2025",
    sourceAr: "الأول نيوز ",
    sourceEn: " The First News",
    type: "article",
    url: "https://alawwalnews.com/sectionsArt/mgmaa-althkaaa-almkany-almtkdm-fy-almnya-2025-alaol-mn-noaah-fy-msr-ldaam-althol-alrkmy-oaltkhtyt-althky",
    thumbnail: "/assets/thefirst.png",
    embeddable: true
  },
  {
    id: 5,
    titleAr: "الأول من نوعه في مصر",
    titleEn: "The first of its kind in Egypt",
    sourceAr: "مصراوي ",
    sourceEn: "Masrawy",
    type: "article",
    url: "https://www.masrawy.com/news/news_regions/details/2025/6/3/2798366/%D8%A7%D9%84%D8%A3%D9%88%D9%84-%D9%85%D9%86-%D9%86%D9%88%D8%B9%D9%87-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1-%D9%85%D8%AD%D8%A7%D9%81%D8%B8-%D8%A7%D9%84%D9%85%D9%86%D9%8A%D8%A7-%D9%8A%D9%81%D8%AA%D8%AA%D8%AD-%D9%85%D8%AC%D9%85%D8%B9-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D9%85%D9%83%D8%A7%D9%86%D9%8A-%D8%A7%D9%84%D9%85%D8%AA%D9%82%D8%AF%D9%85",
    thumbnail: "/assets/masrawy.png",
    embeddable: true
  },
  
  {
    id: 6,
    titleAr: "افتتاح أول مجمع للذكاء المكاني لدعم التحول الرقمي في المنيا",
    titleEn: "The first spatial intelligence complex to support digital transformation was inaugurated in Minya.",
    sourceAr: "المصري اليوم ",
    sourceEn: "El Masry El Youm",
    type: "article",
    url: "https://www.almasryalyoum.com/news/details/3467010",
    thumbnail: "/assets/masryelyoum.png",
    embeddable: true
  },
  {
    id: 7,
    titleAr: "نائب محافظ المنيا يتفقد مجمع الذكاء المكاني المتقدم استعداداً لافتتاحه قريباً",
    titleEn: "The Deputy Governor of Minya inspects the advanced spatial intelligence complex in preparation for its imminent opening.",
    sourceAr: "الوطن",
    sourceEn: "El Watan",
    type: "article",
    url: "https://www.elwatannews.com/news/details/8069407",
    thumbnail: "/assets/watan.png",
    embeddable: true
  },
  {
    id: 9,
    titleAr: "نائب محافظ المنيا يتفقد مجمع الذكاء المكاني المتقدم استعدادًا لافتتاحه قريبًا",
    titleEn: "The Deputy Governor of Minya inspects the advanced spatial intelligence complex in preparation for its imminent opening.",
    sourceAr: "النبأ",
    sourceEn: "El Nabaa",
    type: "article",
    url: "https://www.elnabaa.net/1113549",
    thumbnail: "/assets/nabaa.png",
    embeddable: true
  },
   {
    id: 10,
    titleAr: "نائب محافظ المنيا يتفقد مجمع الذكاء المكاني المتقدم استعدادا لافتتاحه",
    titleEn: "The Deputy Governor of Minya inspects the Advanced Spatial Intelligence Complex in preparation for its opening.",
    sourceAr: "صدى البلد",
    sourceEn: "Sada Elbalad",
    type: "article",
    url: "https://www.elbalad.news/6556722",
    thumbnail: "/assets/sadaElbalad.png",
    embeddable: true
  },
];


export const centers: Center[] = [
  {
    id: 1,
    nameAr: "مركز معلومات شبكات المرافق والرفع المساحي",
    nameEn: "Facilities Network Information and Surveying Center",
    descriptionAr: "يختص بكافة أعمال الرفع المساحي باستخدام التقنيات المتطورة الحديثة بالتنسيق مع جميع الجهات. يقوم المركز بتجميع وتحديث البيانات المتعلقة بشبكات البنية التحتية مثل (المياه، الصرف الصحي، الغاز الطبيعي، الكهرباء، الاتصالات) مع توفير خرائط دقيقة لمواقع ومسارات هذه الشبكات وذلك لتفادي أي أضرار بالبنية التحتية أثناء أعمال الحفر أو التطوير.",
    descriptionEn: "Specializes in all surveying work using advanced modern technologies in coordination with all entities. The center collects and updates data related to infrastructure networks such as (water, sanitation, natural gas, electricity, telecommunications) while providing accurate maps of the locations and paths of these networks to avoid any damage to the infrastructure during excavation or development work.",
    icon: "Map",
    color: "from-red-500 to-orange-500",
    servicesAr: [
      "الرفع المساحي",
      "إعداد الخرائط",

    ],
    servicesEn: [
      "Surveying",
      "Map Preparation"

    ],
    achievements: [
      {
        titleAr: "اعمال الرفع المساحي لتراخيص المباني والمحلات",
        titleEn: "Surveying work for building and shop licenses",
        value: ""
      },
      {
        titleAr: "اعمال تحديد منسوب المبنى من سطح البحر",
        titleEn: "Building level determination from sea level",
        value: ""
      },
      {
        titleAr: "اعمال الكشف عن المرافق",
        titleEn: "Facility detection work",
        value: ""
      },
      {
        titleAr: "بروتوكول اعمال الرفع المساحى لوصلات الصرف الصحى",
        titleEn: "Surveying protocol for sanitation connections",
        value: ""
      }
    ]
  },
  {
    id: 2,
    nameAr: "مركز تطبيقات الاستشعار من البعد",
    nameEn: "Remote Sensing Applications Center",
    descriptionAr: "يُعد المركز رائدًا في توظيف تقنيات الاستشعار عن بُعد ونظم المعلومات الجغرافية لدعم التنمية والتخطيط المستدام. يركز على تحليل الصور الفضائية والمعطيات الجغرافية لدعم اتخاذ القرار في كافة المجالات مثل الزراعة، إدارة الموارد الطبيعية، التخطيط العمراني، رصد التغيرات البيئية. يسهم المركز بفعالية في التحول الرقمي من خلال تقديم حلول ذكية تعتمد على أحدث التقنيات الفضائية والجغرافية.",
    descriptionEn: "The center is a pioneer in employing remote sensing technologies and geographic information systems to support sustainable development and planning. It focuses on analyzing satellite images and geographic data to support decision-making in all fields such as agriculture, natural resource management, urban planning, and environmental change monitoring. The center effectively contributes to digital transformation by providing smart solutions based on the latest space and geographic technologies.",
    icon: "Satellite",
    color: "from-orange-500 to-yellow-500",
    servicesAr: [
      "تحليل الصور الفضائية",
      "نظم المعلومات الجغرافية",
    ],
    servicesEn: [
      "Satellite Image Analysis",
      "Geographic Information Systems"
    ],

  },
  {
    id: 3,
    nameAr: "مركز البنية المعلوماتية المكانية",
    nameEn: "Spatial Information Infrastructure Center",
    descriptionAr: "يختص بجمع وتحليل البيانات الجغرافية وإنشاء قواعد بيانات مكانية محدثة بدقة عالية. يقدم خرائط وتقارير تحليلية تدعم عمليات التخطيط واتخاذ القرار في مختلف القطاعات. يساهم في بناء بنية تحتية رقمية تدعم التنمية المستدامة والتحول الرقمي. يعتمد على أحدث تقنيات نظم المعلومات الجغرافية لتعزيز كفاءة الأداء الحكومي والمؤسسي.",
    descriptionEn: "Specializes in collecting and analyzing geographic data and creating highly accurate updated spatial databases. Provides maps and analytical reports that support planning and decision-making processes in various sectors. Contributes to building a digital infrastructure that supports sustainable development and digital transformation. Relies on the latest geographic information systems technologies to enhance government and institutional performance efficiency.",
    icon: "Database",
    color: "from-teal-500 to-cyan-500",
    servicesAr: [
      "قواعد البيانات المكانية",
      "التحليل الجغرافي",
    ],
    servicesEn: [
      "Spatial Databases",
      "Geographic Analysis"
    ]
  },
  {
    id: 4,
    nameAr: "مركز الابتكار والتطوير والذكاء الإصطناعي",
    nameEn: "Innovation, Development and Artificial Intelligence Center",
    descriptionAr: "يُعد منصة متخصصة لدعم الإبداع وتبني أحدث تقنيات الذكاء الاصطناعي في تطوير الخدمات والحلول الذكية. يدعم البحث والتطوير، ويحفز بيئة الابتكار لبناء نماذج وحلول تكنولوجية متقدمة. يسهم في التحول الرقمي وتعزيز الكفاءة المؤسسية باستخدام أدوات الذكاء الاصطناعي الحديثة. تنظيم ورش عمل ومؤتمرات متخصصة، وإقامة المؤتمرات لعرض أحدث التقنيات والتطبيقات.",
    descriptionEn: "A specialized platform to support creativity and adopt the latest artificial intelligence technologies in developing smart services and solutions. Supports research and development, and stimulates an innovation environment to build advanced technological models and solutions. Contributes to digital transformation and enhancing institutional efficiency using modern artificial intelligence tools. Organizes specialized workshops and conferences, and hosts conferences to showcase the latest technologies and applications.",
    icon: "Brain",
    color: "from-blue-500 to-indigo-500",
    servicesAr: [
      "الذكاء الاصطناعي",
      "البحث والتطوير",
    ],
    servicesEn: [
      "Artificial Intelligence",
      "Research & Development"
    ]
  },
  {
    id: 5,
    nameAr: "مركز تكنولوجيا المعلومات والبرمجيات",
    nameEn: "Information Technology and Software Center",
    descriptionAr: "يختص بتشغيل وصيانة الأنظمة الرقمية وتطبيق معايير الأمن السيبراني لحماية البيانات وتأمين البنية التحتية التكنولوجية. يتولى إدارة الخوادم، الحواسب المركزية، أنظمة المراقبة، والاتصالات داخل المجمع بكفاءة عالية. كما يقدم الاستشارات الفنية ويشارك في دعم وتنفيذ البنية المعلوماتية لكافة الجهات المعنية. يوفر الدعم الفني لتشغيل أجهزة القياس الرقمية وشبكات المرافق، ويقوم بتطوير البرمجيات والتطبيقات الداعمة للعمليات.",
    descriptionEn: "Specializes in operating and maintaining digital systems and applying cybersecurity standards to protect data and secure technological infrastructure. Manages servers, central computers, monitoring systems, and communications within the complex with high efficiency. Also provides technical consultations and participates in supporting and implementing information infrastructure for all concerned entities. Provides technical support for operating digital measurement devices and facility networks, and develops software and applications supporting operations.",
    icon: "Server",
    color: "from-green-500 to-emerald-500",
    servicesAr: [
      "الأمن السيبراني",
      "إدارة الأنظمة" , "تطوير البرمجيات"
    ],
     servicesEn: [
      "Cybersecurity",
      "Systems Management" ,
      "Software Development"
    ]
  },
  {
    id: 6,
    nameAr: "مركز إعداد الكوادر",
    nameEn: "Capacity Building Center",
    descriptionAr: "متخصص في تطوير المهارات وتقديم المعرفة من خلال دورات تدريبية وأكاديمية متخصصة في نظم المعلومات الجغرافية والبرمجيات. يتعاون مع الجامعات والهيئات الأكاديمية لتقديم ورش عمل ودورات معتمدة ومنح شهادات تدريب معترف بها. يوفر المركز خدماته للمجمع والجهات الخارجية. يتيح فرص تدريب عملية للمتدربين. عقد شراكات مع مراكز وشركات متخصصة لتقديم تدريب عالي الجودة والاستفادة من خبرات المتخصصين.",
    descriptionEn: "Specializes in skills development and knowledge delivery through specialized training and academic courses in geographic information systems and software. Collaborates with universities and academic bodies to provide accredited workshops and courses and grant recognized training certificates. The center provides its services to the complex and external entities. Provides practical training opportunities for trainees. Partners with specialized centers and companies to provide high-quality training and benefit from the expertise of specialists.",
    icon: "GraduationCap",
    color: "from-lime-500 to-green-500",
    servicesAr: [
      "التدريب والتطوير",
      "الشهادات المعتمدة",
    ],
     servicesEn: [
      "Training & Development",
      "Certified Programs"
    ]
  }
];

export const visionAr = "أن يكون مجمع الذكاء المكاني المتقدم مركزًا رياديًا للإبتكار والتكنولوجيا في مجال البيانات المكانية على مستوى الجمهورية خلال خمس سنوات، من خلال دمج أحدث التقنيات في المسح الجغرافي الذكاء الاصطناعي وتكنولوجيا المعلومات، بهدف دعم التخطيط المستدام وتعزيز التنمية الشاملة";

export const visionEn = "To be a leading center for innovation and technology in the field of spatial data at the republic level within five years, by integrating the latest technologies in geographic surveying, artificial intelligence and information technology, with the aim of supporting sustainable planning and promoting comprehensive development";

export const strategicGoals = [
  {
    titleAr: "تعزيز التحول الرقمي",
    titleEn: "Enhance Digital Transformation",
    icon: "TrendingUp"
  },
  {
    titleAr: "إستخدام الذكاء الاصطناعي في التطوير التقني",
    titleEn: "Use AI in Technical Development",
    icon: "Cpu"
  },
  {
    titleAr: "رفع كفاءة إدارة شبكات المرافق",
    titleEn: "Improve Facility Network Management Efficiency",
    icon: "Network"
  },
  {
    titleAr: "تطوير تطبيقات الاستشعار عن بعد",
    titleEn: "Develop Remote Sensing Applications",
    icon: "Radar"
  },
  {
    titleAr: "إنشاء بيئة تدريبية متقدمة",
    titleEn: "Create Advanced Training Environment",
    icon: "BookOpen"
  },
  {
    titleAr: "دعم الابتكار وريادة الأعمال",
    titleEn: "Support Innovation and Entrepreneurship",
    icon: "Lightbulb"
  }
];

export const mekanoLabs = {
  nameAr: "mekano labs",
  nameEn: "mekano labs",
  descriptionAr: "مكان تعليمي للأطفال والشباب يقدم أهم مجالات التدريب",
  descriptionEn: "Educational space for children and youth offering the most important training fields",
  programs: [
    { nameAr: "الذكاء الاصطناعي", nameEn: "Artificial Intelligence" },
    { nameAr: "البرمجة", nameEn: "Programming" },
    { nameAr: "إنترنت الأشياء (IOT)", nameEn: "Internet of Things (IOT)" },
    { nameAr: "الإلكترونيات والدوائر الذكية", nameEn: "Electronics and Smart Circuits" },
    { nameAr: "الإبتكار والتصميم التقني", nameEn: "Innovation and Technical Design" }
  ]
};
