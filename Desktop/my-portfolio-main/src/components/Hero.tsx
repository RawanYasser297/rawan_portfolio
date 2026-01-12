import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const onButtonClick = () => {
  const link = document.createElement("a");
  link.href = "/image/Black and White Minimalist Accountant Resume.pdf"; 
  link.target = "_blank"; 
  link.download = "RawanYasser_CV.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <nav className="flex w-full p-6 md:p-10 justify-between items-center">
        <ul className="flex flex-row gap-6">
          <li
            className="text-xl font-bold gradient-text cursor-pointer"
            onClick={() =>
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("nav.skills")}
          </li>

          <li
            className="text-xl font-bold gradient-text cursor-pointer"
            onClick={() =>
              document
                .getElementById("faq")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("nav.faq")}
          </li>

          <li
            className="text-xl font-bold gradient-text cursor-pointer"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("nav.contact")}
          </li>
        </ul>

        <LanguageSwitcher />
      </nav>

      <div className="flex flex-col items-center justify-center relative z-10 container mx-auto px-4 text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="block gradient-text">{t("hero.title.line1")}</span>
            <span className="block gradient-text">{t("hero.title.line2")}</span>
            <span className="block gradient-text">{t("hero.title.line3")}</span>
          </h1>

          <p className="text-white tracking-[0.5px] text-xl md:text-2xl max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>

          <div
            className={`flex gap-4 justify-center pt-8 ${
              isArabic ? "flex-row-reverse" : ""
            }`}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
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
              onClick={onButtonClick}>
              {t("hero.buttons.cv")}
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
