import { useState } from "react";
import { useTranslation } from "react-i18next";
const faqs = [
  {
    id: 1,
    q: "faq.who.q",
    a: "faq.who.a",
  },
  {
    id: 2,
    q: "faq.website.q",
    a: "faq.website.a",
  },
  {
    id: 3,
    q: "faq.compare.q",
    a: "faq.compare.a",
  },
];

export default function FAQ() {
  const { t, i18n } = useTranslation();
  const [openId, setOpenId] = useState<number | null>(null);

  const isArabic = i18n.language === "ar";

  return (
    <section id="faq" className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="gradient-text">{t("faq.title")}</span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                dir={isArabic ? "rtl" : "ltr"}
                className="border-b border-purple-200 pb-4 cursor-pointer"
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                {/* Question */}
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    {t(item.q)}
                  </h3>

                  <span
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <img src="/image/down-arrow.png" className="w-5" />
                  </span>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className="text-neutral-900 font-semibold leading-relaxed pe-2 md:pe-4"
                    dangerouslySetInnerHTML={{ __html: t(item.a) }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
