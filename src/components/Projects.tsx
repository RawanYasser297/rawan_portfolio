import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: "ecommerce",
    gradient: "from-purple-500 to-pink-500",
    tags: ["Redux Toolkit", "Firebase", "react-i18next"],
    live: "https://my-store-ochre-phi.vercel.app/",
    github: "https://github.com/RawanYasser297/my-store",
    img: "/image/store.png",
  },
  {
    id: "blog",
    gradient: "from-purple-500 to-pink-500",
    tags: ["React", "Node.js", "Express"],
    live: "https://blog-app-three-silk.vercel.app/",
    github: "https://github.com/RawanYasser297/blog-app-",
    img: "/image/blog.png",
  },
  {
    id: "countries",
    gradient: "from-purple-500 to-pink-500",
    tags: ["Vite", "React", "Tailwind"],
    live: "https://around-the-world-two.vercel.app/",
    github: "https://github.com/RawanYasser297/around-the-world",
    img: "/image/around-the-world.png",
  },
  { id:"todo",
      gradient: "from-blue-500 to-cyan-500",
      tags: ["HTML", "SCSS", "JS", "light/dark theme"],
      live: "https://rawanyasser297.github.io/todo-list/",
      github: "https://github.com/RawanYasser297/todo-list.git",
      img: "/image/todo/desc.png",
    },
];

const Projects = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-[#ffeefd]"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="gradient-text">{t("projects.title")}</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden border-2 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient}`}>
                <img
                  src={project.img}
                  alt={project.id}
                  className="h-full w-full object-cover"
                />
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">
                  {t(`projects.items.${project.id}.title`)}
                </h3>

                <p className="text-muted-foreground">
                  {t(`projects.items.${project.id}.description`)}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className={`flex gap-2 pt-2 ${
                    isArabic ? "flex-row-reverse" : ""
                  }`}
                >
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <a href={project.live} target="_blank">
                      {t("projects.view")}
                    </a>
                  </Button>

                  <Button size="sm" variant="outline" className="flex-1">
                    <a href={project.github} target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
