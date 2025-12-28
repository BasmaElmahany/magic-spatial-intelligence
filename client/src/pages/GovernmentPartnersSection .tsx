import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const GovernmentEntitiesSlider = () => {
    const { language } = useLanguage();
    const isRTL = language === "ar";
    const trackRef = useRef<HTMLDivElement>(null);

    const governmentEntities = [
        {
            nameAr: "وزارة التخطيط والتنمية الاقتصادية",
            nameEn: "Ministry of Planning & Economic Development",
            url: "https://mped.gov.eg/",
            logo: "/assets/mped.png",
        },
        {
            nameAr: "وزارة التنمية المحلية",
            nameEn: "Ministry of Local Development",
            url: "https://www.mld.gov.eg/",
            logo: "/assets/mld.jpg",
        },
        {
            nameAr: "وزارة الاتصالات وتكنولوجيا المعلومات",
            nameEn: "Ministry of Communications & IT",
            url: "https://mcit.gov.eg/ar",
            logo: "/assets/mcit.png",
        },
        {
            nameAr: "وزارة التضامن الاجتماعي",
            nameEn: "Ministry of Social Solidarity",
            url: "https://www.moss.gov.eg/",
            logo: "/assets/moss.png",
        },
        {
            nameAr: "محافظة المنيا",
            nameEn: "Minya Governorate",
            url: "http://www.minia.gov.eg/",
            logo: "/assets/minya.png",
        },
        {
            nameAr: "مجلس الوزراء المصري",
            nameEn: "Egyptian Cabinet",
            url: "https://cabinet.gov.eg/",
            logo: "/assets/cabinet.jpg",
        },
        {
            nameAr: "هيئة تنمية الصعيد",
            nameEn: "Upper Egypt Development Authority",
            url: "https://uda.gov.eg/",
            logo: "/assets/uda.jpg",
        },
        {
            nameAr: "الهيئة المصرية العامة للمساحة",
            nameEn: "Egyptian Survey Authority",
            url: "https://www.esa.gov.eg/",
            logo: "/assets/esa.jpg",
        },
        {
            nameAr: "إدارة المساحة العسكرية",
            nameEn: "Military Survey Department",
            url: "http://www.msd.com.eg/",
            logo: "/assets/msd.png",
        },
    ];

    /* ===== Auto Scroll ===== */
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let scrollPos = 0;
        const speed = 0.5;

        const interval = setInterval(() => {
            scrollPos += speed;
            track.scrollLeft = isRTL ? -scrollPos : scrollPos;

            if (scrollPos >= track.scrollWidth - track.clientWidth) {
                scrollPos = 0;
                track.scrollLeft = 0;
            }
        }, 16);

        return () => clearInterval(interval);
    }, [isRTL]);

    return (
        <section className="py-20 bg-[#f4f6f9] border-t">
            <div className="container">

                {/* ===== Section Header ===== */}
                <div className={`mb-10 ${isRTL ? "text-right" : "text-left"}`}>
                  
                </div>

                {/* ===== Slider ===== */}
                <div
                    ref={trackRef}
                    className="flex gap-8 overflow-x-auto scrollbar-hide py-6"
                    style={{ direction: isRTL ? "rtl" : "ltr" }}
                >
                    {[...governmentEntities, ...governmentEntities].map((entity, index) => (
                        <a
                            key={index}
                            href={entity.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
    min-w-[200px] h-[130px]
    bg-white
    rounded-2xl
    flex flex-col items-center justify-center gap-3
    transition-all duration-300 ease-out
    hover:scale-104
    hover:shadow-lg
  "
                        >

                            <img
                                src={entity.logo}
                                alt={isRTL ? entity.nameAr : entity.nameEn}
                                className="max-h-14 object-contain transition"
                            />

                            <span className="text-xs text-slate-600 text-center px-2">
                                {isRTL ? entity.nameAr : entity.nameEn}
                            </span>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GovernmentEntitiesSlider;
