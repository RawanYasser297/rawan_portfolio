import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-router-dom";

const onButtonClick = () => {
  const link = document.createElement("a");
  link.href = "/image/Rawan_Yasser_Junior_Full_Stack_Developer_CV.pdf";
  link.target = "_blank";
  link.download = "Rawan_Yasser_Junior_Full_Stack_Developer_CV";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section
      dir={isArabic ? "ltr" : "rtl"}
      id="home"
      className="relative min-h-screen overflow-hidden pt-4"
    >
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[78vh] container mx-auto px-4 text-center">
        <div
          className="
            space-y-6 sm:space-y-8
            max-w-xl sm:max-w-2xl md:max-w-4xl
            backdrop-blur-md bg-white/10
            border border-white/15
            rounded-2xl sm:rounded-3xl
            p-6 sm:p-10 md:p-14
            shadow-[var(--shadow-glow)]
          "
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight">
            <span className="block gradient-text">{t("hero.title.line1")}</span>
            <span className="block gradient-text">{t("hero.title.line2")}</span>
            <span className="block gradient-text">{t("hero.title.line3")}</span>
          </h1>

          <p className="text-[hsl(229,75%,70%)] tracking-wide text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pt-4 sm:pt-6 ${
              isArabic ? "sm:flex-row-reverse" : ""
            }`}
          >
            <Button
              size="lg"
              className="
                w-full sm:w-auto
                px-8 py-6 text-base sm:text-lg rounded-xl
                bg-white text-[hsl(230_25%_15%)]
                hover:scale-105 transition
                shadow-lg
              "
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("hero.buttons.work")}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto
                px-8 py-6 text-base sm:text-lg rounded-xl"
              onClick={onButtonClick}
            >
              {t("hero.buttons.cv")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
