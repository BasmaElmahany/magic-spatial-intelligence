export interface Center {
  id: number;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: string;
  color: string;
  services: string[];
  achievements?: {
    titleAr: string;
    titleEn: string;
    value: string;
  }[];
}

export const centers: Center[] = [
  {
    id: 1,
    nameAr: "مركز معلومات شبكات المرافق والرفع المساحي",
    nameEn: "Facilities Network Information and Surveying Center",
    descriptionAr: "يختص بكافة أعمال الرفع المساحي باستخدام التقنيات المتطورة الحديثة بالتنسيق مع جميع الجهات. يقوم المركز بتجميع وتحديث البيانات المتعلقة بشبكات البنية التحتية مثل (المياه، الصرف الصحي، الغاز الطبيعي، الكهرباء، الاتصالات) مع توفير خرائط دقيقة لمواقع ومسارات هذه الشبكات وذلك لتفادي أي أضرار بالبنية التحتية أثناء أعمال الحفر أو التطوير.",
    descriptionEn: "Specializes in all surveying work using advanced modern technologies in coordination with all entities. The center collects and updates data related to infrastructure networks such as (water, sanitation, natural gas, electricity, telecommunications) while providing accurate maps of the locations and paths of these networks to avoid any damage to the infrastructure during excavation or development work.",
    icon: "Map",
    color: "from-red-500 to-orange-500",
    services: [
      "الرفع المساحي",
      "إعداد الخرائط",
      "Surveying",
      "Map Preparation"
    ],
    achievements: [
      {
        titleAr: "اعمال الرفع المساحي لتراخيص المباني والمحلات",
        titleEn: "Surveying work for building and shop licenses",
        value: "36,918,140"
      },
      {
        titleAr: "اعمال تحديد منسوب المبنى من سطح البحر",
        titleEn: "Building level determination from sea level",
        value: "44,655,036"
      },
      {
        titleAr: "اعمال الكشف عن المرافق",
        titleEn: "Facility detection work",
        value: "2,890,423"
      },
      {
        titleAr: "بروتوكول اعمال الرفع المساحى لوصلات الصرف الصحى",
        titleEn: "Surveying protocol for sanitation connections",
        value: "20,800,000"
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
    services: [
      "تحليل الصور الفضائية",
      "نظم المعلومات الجغرافية",
      "Satellite Image Analysis",
      "Geographic Information Systems"
    ]
  },
  {
    id: 3,
    nameAr: "مركز البنية المعلوماتية المكانية",
    nameEn: "Spatial Information Infrastructure Center",
    descriptionAr: "يختص بجمع وتحليل البيانات الجغرافية وإنشاء قواعد بيانات مكانية محدثة بدقة عالية. يقدم خرائط وتقارير تحليلية تدعم عمليات التخطيط واتخاذ القرار في مختلف القطاعات. يساهم في بناء بنية تحتية رقمية تدعم التنمية المستدامة والتحول الرقمي. يعتمد على أحدث تقنيات نظم المعلومات الجغرافية لتعزيز كفاءة الأداء الحكومي والمؤسسي.",
    descriptionEn: "Specializes in collecting and analyzing geographic data and creating highly accurate updated spatial databases. Provides maps and analytical reports that support planning and decision-making processes in various sectors. Contributes to building a digital infrastructure that supports sustainable development and digital transformation. Relies on the latest geographic information systems technologies to enhance government and institutional performance efficiency.",
    icon: "Database",
    color: "from-teal-500 to-cyan-500",
    services: [
      "قواعد البيانات المكانية",
      "التحليل الجغرافي",
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
    services: [
      "الذكاء الاصطناعي",
      "البحث والتطوير",
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
    services: [
      "الأمن السيبراني",
      "إدارة الأنظمة",
      "Cybersecurity",
      "Systems Management"
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
    services: [
      "التدريب والتطوير",
      "الشهادات المعتمدة",
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
