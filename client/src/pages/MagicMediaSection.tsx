/* ======================================================
   MAGIC MEDIA – NYT EDITORIAL STYLE (NO GROUPING)
====================================================== */

import { useLanguage } from "@/contexts/LanguageContext";
import { magicMediaArticles } from "@/data/centerData";
import { motion } from "framer-motion";
import { Badge } from "lucide-react";
import { useEffect, useState } from "react";

const MagicMediaSection = () => {
    const { language } = useLanguage();
    const isRTL = language === "ar";
    const [activeStory, setActiveStory] = useState<null | any>(null);
    useEffect(() => {
        if (magicMediaArticles.length) {
            setActiveStory(magicMediaArticles[0]);
        }
    }, []);

    const [activeSection, setActiveSection] = useState<string | null>(null);

    const publishDateISO = "2025-06-03";
    const publishDateText = isRTL
        ? "الثلاثاء، 03 يونيو 2025"
        : "Tuesday, June 03, 2025";
    return (
        <main className="bg-white text-slate-900">


            {/* ======================================================
          HERO SECTION (MEDIA PORTAL)
      ====================================================== */}
            <section className="relative bg-[#002D62] text-white">
                <div className="absolute inset-0 bg-[url('/assets/minya-cyber.png')] bg-cover bg-center opacity-15"></div>

                <div className="relative container py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`max-w-4xl ${isRTL ? "text-right" : "text-left"}`}
                    >
                        <Badge className="mb-5 bg-[#D4AF37] text-[#002D62] px-5 py-2">
                            {isRTL ? "المركز الإعلامي" : "Media Center"}
                        </Badge>

                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                            {isRTL
                                ? "التغطية الإعلامية لمجمع الذكاء المكاني المتقدم"
                                : "Media Coverage of the Advanced Spatial Intelligence Complex"}
                        </h1>

                        <p className="text-lg text-blue-100 max-w-3xl">
                            {isRTL
                                ? "الخبر الرسمي والتقارير الصحفية ولقاءات وسائل الإعلام التي تناولت مجمع الذكاء المكاني المتقدم بمحافظة المنيا."
                                : "Official news, press articles, and media interviews covering the Advanced Spatial Intelligence Complex in Minya."}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ======================================================
          FRONT PAGE LAYOUT (NYT STYLE)
      ====================================================== */}
            <section className="container py-16">
                <div className="grid grid-cols-12 gap-12">

                    {/* ================= MAIN STORY ================= */}
                    <article className={`col-span-12 md:col-span-8 ${isRTL ? "text-right" : "text-left"}`}>

                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                            {activeStory
                                ? (isRTL ? activeStory.titleAr : activeStory.titleEn)
                                : "مجمع الذكاء المكاني المتقدم بمحافظة المنيا"}
                        </h2>

                        <p className="text-slate-600 text-lg mb-6 max-w-3xl">
                            {activeStory
                                ? (isRTL ? activeStory.sourceAr : activeStory.sourceEn)
                                : "نموذج رائد بقيادة فكرية وكفاءات بشرية عالية لدعم التحول الرقمي"}
                        </p>

                        {/* ===== MEDIA ===== */}
                        {activeStory ? (
                            activeStory.embeddable ? (
                                <iframe
                                    src={activeStory.url}
                                    className="w-full aspect-video mb-6"
                                    allowFullScreen
                                />
                            ) : (
                                <img
                                    src={activeStory.thumbnail}
                                    alt={activeStory.titleEn}
                                    className="w-full h-[420px] object-cover mb-6"
                                />
                            )
                        ) : (
                            <img
                                src="/assets/news/protocol1.jpg"
                                className="w-full h-[420px] object-cover mb-6"
                            />
                        )}

                    </article>


                    {/* ================= SIDE NEWS (EDITORIAL PREVIEWS) ================= */}
                    {/* ================= SIDE NEWS (EDITORIAL PREVIEWS) ================= */}
                    <aside
                        className={`
    col-span-12 md:col-span-4 space-y-6
    ${isRTL ? "border-r pr-6" : "border-l pl-6"}
    md:max-h-[520px]
    md:overflow-y-auto
    md:pr-3
    scrollbar-thin
  `}
                    >
                        {magicMediaArticles.slice(0, 10).map(item => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setActiveStory(item)}
                                className={`flex gap-4 items-start w-full text-left group hover:bg-slate-50 p-2 rounded transition ${isRTL ? "text-right" : "text-left"
                                    }`}
                            >
                                {/* === MINI MEDIA === */}
                                <div className="w-24 h-16 flex-shrink-0 bg-slate-100 overflow-hidden rounded">
                                    {item.embeddable ? (
                                        <iframe
                                            src={item.url}
                                            className="w-full h-full pointer-events-none"
                                            title={item.titleEn}
                                        />
                                    ) : (
                                        <img
                                            src={item.thumbnail}
                                            alt={item.titleEn}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>

                                {/* === TEXT === */}
                                <div>
                                    <h4 className="text-sm font-semibold leading-snug group-hover:underline">
                                        {isRTL ? item.titleAr : item.titleEn}
                                    </h4>

                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="block text-xs text-slate-500 mt-1 hover:underline hover:text-slate-700"
                                    >
                                        {isRTL ? item.sourceAr : item.sourceEn}
                                    </a>

                                </div>
                            </button>
                        ))}
                    </aside>



                </div>
            </section>

            {/* ======================================================
    FULL OFFICIAL ARTICLE – GOVERNMENTAL NEWSPAPER STYLE
    WITH TOC + COLUMNS
====================================================== */}
            <section className="bg-[#f4f6f9] py-24">
                <div className="container max-w-7xl grid grid-cols-12 gap-10">

                    {/* ================= TOC (FLOATING) ================= */}
                    <aside
                        className={`
        hidden lg:block col-span-3
        ${isRTL ? "order-last text-right" : "text-left"}
      `}
                    >
                        <div className="sticky top-28 bg-white border rounded-lg shadow-sm p-6">
                            <h4 className="font-bold text-[#002D62] mb-4 text-lg">
                                {isRTL ? "محتويات المقال" : "Contents"}
                            </h4>

                            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
                                <li>
                                    <a
                                        href="#intro"
                                        onClick={() => setActiveSection("intro")}
                                        className={`toc-link ${activeSection === "intro"
                                            ? "text-[#002D62] font-semibold"
                                            : ""
                                            }`}
                                    >
                                        • {isRTL ? "مقدمة الخبر" : "Introduction"}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#vision"
                                        onClick={() => setActiveSection("vision")}
                                        className={`toc-link ${activeSection === "vision"
                                            ? "text-[#002D62] font-semibold"
                                            : ""
                                            }`}
                                    >
                                        • {isRTL ? "رؤية المجمع" : "Vision of the Complex"}
                                    </a>
                                </li>
                                <li>

                                    <a
                                        href="#integration"
                                        onClick={() => setActiveSection("integration")}
                                        className={`toc-link ${activeSection === "integration"
                                            ? "text-[#002D62] font-semibold"
                                            : ""
                                            }`}
                                    >
                                        • {isRTL ? "التكامل المؤسسي" : "Institutional Integration"}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#centers"
                                        onClick={() => setActiveSection("centers")}
                                        className={`toc-link ${activeSection === "centers"
                                            ? "text-[#002D62] font-semibold"
                                            : ""
                                            }`}
                                    >

                                        • {isRTL ? "المراكز المتخصصة" : "Specialized Centers"}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#impact"
                                        onClick={() => setActiveSection("impact")}
                                        className={`toc-link ${activeSection === "impact"
                                            ? "text-[#002D62] font-semibold"
                                            : ""
                                            }`}
                                    >

                                        • {isRTL ? "الأثر الاستراتيجي" : "Strategic Impact"}
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </aside>

                    {/* ================= ARTICLE ================= */}
                    <article
                        className={`
        col-span-12 lg:col-span-9
        bg-white border rounded-lg shadow-md
        ${isRTL ? "text-right" : "text-left"}
      `}
                    >
                        {/* ===== HEADER ===== */}
                        <div className="border-b px-10 py-8">
                            <span className="block text-sm font-semibold uppercase tracking-wide text-[#002D62] mb-3">
                                {isRTL ? "الخبر الرسمي" : "Official Feature"}
                            </span>

                            <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
                                {isRTL
                                    ? "مجمع الذكاء المكاني المتقدم بالمنيا"
                                    : "Advanced Spatial Intelligence Complex in Minya"}
                            </h2>

                            <p className="mt-4 text-xl text-slate-600 max-w-4xl">
                                {isRTL
                                    ? "نموذج رائد بقيادة فكرية وكفاءات بشرية عالية"
                                    : "A pioneering model driven by intellectual leadership and highly qualified human capital"}
                            </p>
                            {/* BYLINE + DATE */}
                            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                                <span className="font-semibold text-slate-700">
                                    {isRTL ? "المصدر:" : "Source:"}
                                </span>
                                <span>
                                    {isRTL ? "محافظة المنيا – المركز الإعلامي" : "Minya Governorate – Media Center"}
                                </span>
                                <span className="mx-2">•</span>
                                <time dateTime={publishDateISO}>
                                    {publishDateText}
                                </time>
                            </div>
                        </div>

                        {/* ===== BODY (COLUMNS) ===== */}
                        <div
                            className={`
          px-10 md:px-14 py-12
          text-lg leading-loose text-slate-700
          md:columns-2 md:gap-14
        `}

                        >
                            {/* === INTRODUCTION === */}
                            <div
                                id="intro"
                                className={`break-inside-avoid mb-6 p-3 rounded-md transition
    ${activeSection === "intro" ? "bg-yellow-100" : ""}
  `}
                            >
                                <h4 className="text-xl font-bold text-[#002D62] mb-3">
                                    {isRTL ? "المقدمة" : "Introduction"}
                                </h4>
                                {/* === INTRO === */}
                                <p id="intro" className="mb-6 break-inside-avoid">

                                    {isRTL
                                        ? "في إطار تنفيذ استراتيجية الدولة المصرية للتحول الرقمي، ودعم خطط التنمية المستدامة، افتتح اللواء عماد كدواني محافظ المنيا مجمع الذكاء المكاني المتقدم بمنطقة أبو فليو شرق النيل، بحضور الدكتور محمد أبو زيد نائب محافظ المنيا والمشرف العام على المجمع، وعدد من القيادات التنفيذية.ويُعد المجمع الأول من نوعه على مستوى الدولة، حيث يجمع نظم المعلومات الجغرافية، والبنية المعلوماتية المكانية، والذكاء الاصطناعي، والاستشعار عن بُعد، والحوسبة الفائقة"
                                        : "As part of Egypt’s national digital transformation strategy, the Advanced Spatial Intelligence Complex was inaugurated in Minya in the presence of senior executive leadership.The complex is the first of its kind nationwide, integrating GIS, spatial data infrastructure, AI, remote sensing, and high-performance computing."}
                                </p>
                            </div>
                            {/* === vision === */}
                            <div
                                id="vision"
                                className={`break-inside-avoid mb-6 p-3 rounded-md transition
    ${activeSection === "vision" ? "bg-yellow-100" : ""}
  `}
                            >

                                <h4 className="text-xl font-bold text-[#002D62] mb-3">
                                    {isRTL ? "رؤية المجمع" : "Vision of the Complex"}
                                </h4>
                                {/* === VISION === */}
                                <p id="vision" className="mb-6 break-inside-avoid">

                                    {isRTL
                                        ? "لعب الدكتور محمد أبو زيد نائب محافظ المنيا دورًا محوريًا في بلورة فكرة المجمع وتحويلها من مجرد تصور تقني إلى منظومة مؤسسية متكاملة، حيث انطلقت الرؤية من أهمية امتلاك قاعدة بيانات جغرافية دقيقة تُبنى على رفع الإحداثيات المكانية لكافة المواقع وربطها بمعلومات تفصيلية قابلة للتحليل والتحديث المستمر."
                                        : "Dr. Mohamed Abu Zeid, Deputy Governor of Minya, played a pivotal role in shaping the idea of ​​the complex and transforming it from a mere technical concept into an integrated institutional system. The vision stemmed from the importance of possessing an accurate geographic database built upon recording the spatial coordinates of all sites and linking them to detailed information that is amenable to analysis and continuous updating."}
                                </p>


                            </div>


                            {/* === centers === */}
                            <div
                                id="centers"
                                className={`break-inside-avoid mb-6 p-3 rounded-md transition
    ${activeSection === "centers" ? "bg-yellow-100" : ""}
  `}
                            >
                                {/* === CENTERS === */}
                                <div id="centers" className="mb-6 break-inside-avoid">
                                    <h4 className="text-xl font-bold text-[#002D62] mb-3">
                                        {isRTL ? "المراكز المتخصصة" : "Specialized Centers"}
                                    </h4>

                                    <ul className={`list-disc space-y-2 ${isRTL ? "pr-6" : "pl-6"}`}>
                                        <li>{isRTL ? "مركز معلومات شبكات المرافق والرفع المساحي" : "Utilities Networks Information and Surveying Center"}</li>
                                        <li>{isRTL ? "مركز تطبيقات الاستشعار عن البعد" : "Remote Sensing Applications Center"}</li>
                                        <li>{isRTL ? "مركز البنية المعلوماتية" : "Spatial Data Infrastructure Center"}</li>
                                        <li>{isRTL ? "مركز تكنولوجيا المعلومات والبرمجيات" : "IT & Software Center"}</li>
                                        <li>{isRTL ? "مركز الابتكار والذكاء الاصطناعي" : "Innovation & AI Center"}</li>
                                        <li>{isRTL ? "مركز إعداد الكوادر" : "Capacity Building Center"}</li>
                                    </ul>
                                </div>
                            </div>
                            {/* === impact === */}
                            <div
                                id="impact"
                                className={`break-inside-avoid mb-6 p-3 rounded-md transition
    ${activeSection === "impact" ? "bg-yellow-100" : ""}
  `}
                            >
                                <h4 className="text-xl font-bold text-[#002D62] mb-3">
                                    {isRTL ? "الأثر الاستراتيجي" : "Strategic Impact"}
                                </h4>
                                {/* === IMPACT === */}
                                <p id="impact" className="break-inside-avoid">
                                    {isRTL
                                        ? "يمثل مجمع الذكاء المكاني المتقدم بالمنيا أحد النماذج الوطنية الرائدة التي تعكس رؤية الدولة في بناء منظومة رقمية متكاملة تعتمد على البيانات الدقيقة، والكفاءات البشرية المؤهلة، والتكنولوجيا الحديثة، بما يدعم تحقيق التنمية المستدامة، ويبزر محافظة المنيا في موقع متقدم على خريطة التحول الرقمي على مستوى الجمهورية."
                                        : "The Advanced Spatial Intelligence Complex in Minya represents one of the leading national models that reflects the state’s vision of building an integrated digital system based on accurate data, qualified human competencies, and modern technology, which supports the achievement of sustainable development and highlights Minya Governorate in an advanced position on the digital transformation map at the national level."}
                                </p>
                            </div>
                            {/* === INTegration === */}
                            <div
                                id="integration"
                                className={`break-inside-avoid mb-6 p-3 rounded-md transition
    ${activeSection === "integration" ? "bg-yellow-100" : ""}
  `}
                            >

                                <h4 className="text-xl font-bold text-[#002D62] mb-3">
                                    {isRTL ? "التكامل المؤسسي" : "Institutional Integration"}
                                </h4>


                                {/* === INTEGRATION === */}
                                <p id="integration" className="mb-6 break-inside-avoid">

                                    {isRTL
                                        ? "كما قاد الدكتور محمد أبو زيد عملية دمج البنية المعلوماتية المكانية مع مركز شبكات المرافق والرفع المساحي في إطار واحد، بما يضمن توحيد مصادر البيانات، ومنع تضارب المعلومات، ودعم أعمال التخطيط العمراني، والحفاظ على البنية التحتية أثناء تنفيذ المشروعات المختلفة أكد محافظ المنيا أن المجمع يمثل أداة استراتيجية لإحكام السيطرة المعلوماتية المكانية على مختلف المواقع داخل المحافظة، حيث يوفر بيانات دقيقة وحديثة تدعم متخذي القرار في متابعة المشروعات التنموية، والتنبؤ بالمشاكل والمخالفات المحتملة قبل حدوثها، والتعامل معها، وتحسين مستوى الخدمات المقدمة للمواطنين. وأشار إلى أن المنيا تشهد طفرة حقيقية في مجال التقنيات الرقمية، من خلال هذا المجمع الذي يتيح تحليل البيانات الجغرافية والمكانية باستخدام نظم الذكاء الاصطناعي وصور الأقمار الصناعية، وإنتاج خرائط ثنائية وثلاثية الأبعاد تخدم مختلف القطاعات، من التخطيط العمراني إلى إدارة المرافق والبنية الأساسية. لا يقتصر تميز مجمع الذكاء المكاني المتقدم على البنية التكنولوجية فحسب، بل يمتد ليشمل الكوادر البشرية العاملة به، حيث يضم المجمع نخبة من المهندسين والمتخصصين والفنيين المدربين على أعلى مستوى في مجالات نظم المعلومات الجغرافية، والرفع المساحي، والاستشعار عن بُعد، والبرمجيات ، والذكاء الاصطناعي، وتحليل البيانات. وأكد الدكتور محمد أبو زيد أن الاستثمار في العنصر البشري يمثل حجر الأساس في نجاح المجمع، وهو ما انعكس في الحرص على إعداد وتأهيل الكوادر بشكل مستمر من خلال برامج تدريبية متقدمة، تضمن مواكبة أحدث التطورات التقنية، وتحقيق أعلى درجات الدقة والكفاءة في تنفيذ الأعمال والخدمات المقدمة."
                                        : "Dr. Mohamed Abu Zeid also led the integration of the Spatial Information System (SIS) with the Utilities Networks and Surveying Center into a single framework. This ensures the unification of data sources, prevents information conflicts, supports urban planning, and preserves infrastructure during the implementation of various projects. The Governor of Minya emphasized that the complex represents a strategic tool for establishing spatial information control over various locations within the governorate. It provides accurate and up-to-date data that supports decision-makers in monitoring development projects, predicting potential problems and violations before they occur, addressing them, and improving the level of services provided to citizens. He pointed out that Minya is witnessing a genuine leap forward in the field of digital technologies through this complex, which enables the analysis of geographic and spatial data using artificial intelligence systems and satellite imagery. This results in the production of two-dimensional and three-dimensional maps that serve various sectors, from urban planning to the management of utilities and infrastructure. The excellence of the Advanced Spatial Intelligence Complex is not limited to its technological infrastructure but extends to its human resources. The complex includes a select group of engineers, specialists, and technicians trained to the highest standards in the fields of geographic information systems, surveying, remote sensing, software, artificial intelligence, and data analysis. Dr. Mohamed Abu Zeid emphasized that investing in human capital is the cornerstone of the complex’s success, which is reflected in the commitment to continuously preparing and qualifying personnel through advanced training programs that ensure keeping pace with the latest technological developments and achieving the highest levels of accuracy and efficiency in the execution of the work and services provided."}
                                </p>
                            </div>


                        </div>
                    </article>

                </div>
            </section>


        </main>
    );
};

export default MagicMediaSection;
