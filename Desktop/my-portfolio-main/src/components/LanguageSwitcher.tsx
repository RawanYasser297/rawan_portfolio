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
    <div className="flex gap-3">
      <button
        onClick={() => changeLang("ar")}
        className={`text-xl font-bold ${
          lang === "ar"
            ? "text-purple-500"
            : "bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
        }`}
      >
        العربية
      </button>

      <button
        onClick={() => changeLang("en")}
        className={`text-xl font-bold ${
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
