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

  /* ===== Ultra Smooth Marquee ===== */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    let rafId: number;

    const isMobile = window.innerWidth < 640;
    const speed = isMobile ? 0.35 : 0.6;

    // ✅ احسب عرض أول نسخة فقط
    const singleSetWidth = track.scrollWidth / 2;

    const animate = () => {
      x += speed;

      if (x >= singleSetWidth) {
        x = 0; // 🔁 Seamless reset
      }

      track.style.transform = `translate3d(${-x}px, 0, 0)`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, []);



  return (
    <section className="py-16 bg-[#f4f6f9] border-t overflow-hidden">
      <div className="container overflow-hidden">

        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 sm:gap-8 will-change-transform"
            style={{ direction: "ltr" }}
          >
            {[...governmentEntities, ...governmentEntities].map((entity, index) => (
              <a
                key={index}
                href={entity.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
              min-w-[140px] sm:min-w-[200px]
              h-[110px] sm:h-[130px]
              bg-white
              rounded-2xl
              flex flex-col items-center justify-center gap-2
              transition-transform duration-300 ease-out
              hover:scale-[1.05]
            "
              >
                <img
                  src={entity.logo}
                  alt={isRTL ? entity.nameAr : entity.nameEn}
                  className="max-h-10 sm:max-h-14 object-contain"
                />
                <span className="text-[11px] sm:text-xs text-slate-600 text-center px-2 line-clamp-1">
                  {isRTL ? entity.nameAr : entity.nameEn}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>

  );
};

export default GovernmentEntitiesSlider;
