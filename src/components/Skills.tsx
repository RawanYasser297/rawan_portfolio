import { useTranslation } from "react-i18next";
const skillCategories = [
  {
    id: "frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
  },
  {
    id: "design",
    skills: ["Figma", "Prototyping"],
  },
  {
    id: "backend",
    skills: ["Node.js", "API Design"],
  },
  {
    id: "tools",
    skills: ["Git", "VS Code"],
  },
];

const Skills = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section
      id="skills"
      className="py-24 px-4"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="gradient-text">{t("skills.title")}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className="glass-card-suc animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                {t(`skills.categories.${category.id}`)}
              </h3>

              <div
                className={`flex flex-wrap gap-3 ${
                  isArabic ? "justify-start" : ""
                }`}
              >
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-white font-medium hover:scale-105 transition-transform cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
