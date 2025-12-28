import { useLanguage } from "@/contexts/LanguageContext";
import { magicMediaArticles } from "@/data/centerData";
import { motion } from "framer-motion";
import { Badge } from "lucide-react";

const MagicMediaLanding = () => {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <section className="bg-white py-28">
      <div className="container max-w-6xl">

      

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


        {/* ================= STORIES ================= */}
        <div className="space-y-32">

          {magicMediaArticles.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12 }}
              viewport={{ once: true }}
              className="space-y-10"
            >

              {/* ===== STORY HEADER ===== */}
              <header className={`${isRTL ? "text-right" : "text-left"}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 leading-snug">
                  {isRTL ? item.titleAr : item.titleEn}
                </h2>

                <div className="text-sm text-slate-500">
                  {isRTL ? item.sourceAr : item.sourceEn}
                </div>
              </header>

              {/* ===== STORY MEDIA ===== */}
              {item.embeddable ? (
                <div className="w-full rounded-2xl overflow-hidden border shadow-md">
                  <iframe
                    src={item.url}
                    title={isRTL ? item.titleAr : item.titleEn}
                    className={`w-full ${
                      item.type === "youtube"
                        ? "aspect-video"
                        : "h-[650px]"
                    }`}
                    allowFullScreen
                  />
                </div>
              ) : (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative rounded-2xl overflow-hidden shadow-md"
                >
                  <img
                    src={item.thumbnail}
                    alt={isRTL ? item.titleAr : item.titleEn}
                    className="w-full h-[420px] object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <span className="px-10 py-4 bg-white text-slate-900 font-bold text-lg rounded-full shadow-lg">
                      {isRTL ? "قراءة التقرير كاملًا" : "Read Full Coverage"}
                    </span>
                  </div>
                </a>
              )}

              {/* ===== STORY FOOTER ===== */}
              {!item.embeddable && (
                <div className={`${isRTL ? "text-right" : "text-left"}`}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 font-semibold hover:underline"
                  >
                    {isRTL
                      ? "المصدر الإعلامي الأصلي"
                      : "Original Media Source"}
                  </a>
                </div>
              )}

            </motion.article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default MagicMediaLanding;