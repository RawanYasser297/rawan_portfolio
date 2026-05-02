import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    id: "frontend",
    skills: ["React", "TypeScript", "Tailwind CSS"],
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
  const { t } = useTranslation();

  return (
    <section id="skills" className="px-4 py-16 sm:px-6 md:py-20">
      <ScrollReveal className="container mx-auto max-w-6xl">
        <div className="rounded-3xl border border-[#A855F7]/30 bg-[#0B0B0F]/90 p-6 shadow-[0_0_40px_rgba(168,85,247,0.1)] sm:p-8">
        <h2 className="sectionHeader !mb-8 text-white sm:!mb-10">
          <span className="bg-gradient-to-r from-[#E9D5FF] to-[#A855F7] bg-clip-text text-transparent">
            {t("skills.title")}
          </span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className="rounded-2xl border border-[#A855F7]/25 bg-[#09090D] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(168,85,247,0.2)]"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <h3 className="mb-5 text-2xl font-bold text-[#D8B4FE]">
                {t(`skills.categories.${category.id}`)}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-full border border-[#A855F7]/35 bg-[#A855F7]/10 px-4 py-2 font-medium text-[#F3E8FF] transition duration-300 hover:shadow-[0_0_16px_rgba(168,85,247,0.45)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Skills;
