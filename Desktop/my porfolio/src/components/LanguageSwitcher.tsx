import i18n from "i18next";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState(
    localStorage.getItem("lang") || "en"
  );

  const changeLang = (newLang: "en" | "ar") => {
    setLang(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  useEffect(() => {
    changeLang(lang);
  }, []);

  return (
    <div className="flex gap-2 -order-1 md:order-1 px-[10px] py-[3px] rounded-[20px] bg-white w-fit">
      <button
        onClick={() => changeLang("ar")}
        className={`text-sm  font-semibold  px-[5px]  pb-[5px] border-e-[1px] border-e-slate-300 ${
          lang === "ar"
            ? "text-purple-500"
            : "bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
        }`}
      >
        ع
      </button>

      <button
        onClick={() => changeLang("en")}
        className={`text-sm   font-semibold ${
          lang === "en"
            ? "text-purple-500"
            : "bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
        }`}
      >
        EN
      </button>
    </div>
  );
}
