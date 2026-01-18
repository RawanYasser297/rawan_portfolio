import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import PdfViewer from "./PdfViewer";

const certifications = [
  {
    id: 1,
    title: "Front-End Development Diploma",
    image:
      "/certifications/Rawan-React-Deep-Dive-شهادة-اتمام-دورة-أساسيات-React-Deep-Dive-منصة-المدرسة (1).pdf",
  },
  {
    id: 2,
    title: "AI Tools for Developers",
    image:
      "/certifications/Rawan-مدخل-إلى-الذكاء-الاصطناعي-شهادة-اتمام-دورة-Introduction-to-AI-منصة-المدرسة.pdf",
  },
  {
    id: 3,
    title: "Team Collaboration & Git",
    image:
      "/certifications/Rawan-دورة-تعليم-Git-وجيت-هب-GitHub-Git-and-GitHub-منصة-المدرسة.pdf",
  },
  {
    id: 4,
    title: "Data Structures & Algorithms",
    image:
      "/certifications/Rawan-هياكل-البيانات-الأساسية-شهادة-اتمام-دورة-هياكل-البيانات-هياكل-البيانات-الأساسية-منصة-المدرسة.pdf",
  },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4 space-y-24">
        <div className="relative">
          <img
            src="/image/me.jpg"
            alt="Profile"
            className="
      float-right
      w-32 h-32
      md:w-40 md:h-40
      rounded-2xl
      object-cover
      ml-6 mb-4
      shadow-[var(--shadow-soft)]
      ring-4 ring-primary/10
    "
          />
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <h4 className="-mb-5">{t("about.hi")}</h4>
            <p>{t("about.intro")}</p>
            <p>{t("about.journey")}</p>
            <p>{t("about.platform")}</p>

            <ul className="space-y-2 list-disc list-inside">
              <li>{t("about.points.fundamentals")}</li>
              <li>{t("about.points.dataStructures")}</li>
              <li>{t("about.points.modernTools")}</li>
              <li>{t("about.points.aiTools")}</li>
              <li>{t("about.points.teamwork")}</li>
            </ul>

            <p className="pt-4 font-medium text-foreground">
              {t("about.mindset")}
            </p>
          </div>

          <div className="clear-both" />
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-center">Certifications</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ direction: "rtl", height: "330px" }}
          >
            {certifications.map((cert) => (
              <SwiperSlide key={cert.id}>
                <div className="rounded-2xl h-[280px] max-w-[380px] overflow-hidden bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition">
                  <a href={cert.image} target="_blank">
                    <PdfViewer fileUrl={cert.image} />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;
