/* ======================================================
   MAGIC MEDIA – GOOGLE NEWS STYLE
====================================================== */

import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { magicMediaArticles } from "@/data/centerData";

const MagicSection = () => {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const featured = magicMediaArticles[0];
  const rest = magicMediaArticles.slice(1);

 return (
    <section className="py-24 bg-[#f5f7fa]">
      <div className="container max-w-6xl space-y-14">

        {/* ================= SECTION HEADER ================= */}
        <div className={`border-b-4 border-[#D4AF37] pb-6 ${isRTL ? "text-right" : "text-left"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002D62] mb-2">
            {isRTL ? "التغطية الإعلامية الرسمية" : "Official Media Coverage"}
          </h2>

          <p className="text-slate-600 text-lg max-w-3xl">
            {isRTL
              ? "رصد لأبرز ما تناولته الصحف والمواقع الإخبارية ووسائل الإعلام عن مجمع الذكاء المكاني المتقدم."
              : "A curated overview of official press and media coverage of the Advanced Spatial Intelligence Complex."}
          </p>
        </div>

        {/* ================= ARTICLES ================= */}
        {magicMediaArticles.map((item, idx) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden"
          >

            {/* ===== MEDIA ===== */}
            {item.embeddable ? (
              <div className="w-full border-b">
                <iframe
                  src={item.url}
                  title={isRTL ? item.titleAr : item.titleEn}
                  className={`w-full ${
                    item.type === "youtube"
                      ? "aspect-video"
                      : "h-[520px]"
                  }`}
                  allowFullScreen
                />
              </div>
            ) : (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group"
              >
                <img
                  src={item.thumbnail}
                  alt={isRTL ? item.titleAr : item.titleEn}
                  className="w-full h-[380px] object-cover"
                />

                <div className="absolute inset-0 bg-black/35 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="bg-white text-[#002D62] px-6 py-3 rounded-md font-semibold shadow">
                    {isRTL ? "فتح الخبر" : "Open Article"}
                  </span>
                </div>
              </a>
            )}

            {/* ===== CONTENT ===== */}
            <div className={`p-8 ${isRTL ? "text-right" : "text-left"}`}>
              <h3 className="text-2xl font-bold text-[#002D62] mb-3 leading-snug">
                {isRTL ? item.titleAr : item.titleEn}
              </h3>

              <div className="text-sm text-slate-500 mb-4">
                {isRTL ? item.sourceAr : item.sourceEn}
              </div>

              {!item.embeddable && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[#002D62] font-semibold border-b border-[#002D62] hover:text-[#001c3f]"
                >
                  {isRTL ? "قراءة الخبر من المصدر الرسمي" : "Read from official source"}
                </a>
              )}
            </div>

          </motion.article>
        ))}

      </div>
    </section>
  );
};


export default MagicSection;
