import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <img
                src="/images/me.jpg"
                alt="My profile"
                className="
                  w-40 h-40
                  md:w-48 md:h-48
                  rounded-2xl
                  object-cover
                  shadow-[var(--shadow-soft)]
                  ring-4 ring-primary/10
                "
              />

              <div
                className="
                  absolute -inset-4
                  -z-10
                  rounded-3xl
                  bg-[var(--gradient-soft)]
                  blur-2xl
                "
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
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

        </div>
      </div>
    </section>
  );
};

export default About;
