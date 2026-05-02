import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    id: "Kanban",
    gradient: "from-[#1A0C2E] to-[#4C1D95]",
    tags: ["React", "Tailwind"],
    live: "https://board-kanban-sandy.vercel.app/",
    github: "https://github.com/RawanYasser297/board-kanban",
    img: "/image/kanban.png",
  },
  {
    id: "ecommerce",
    gradient: "from-[#1A0C2E] to-[#4C1D95]",
    tags: ["Redux Toolkit","admin dashboard","cart","firebase", "react-i18next"],
    live: "https://my-store-ochre-phi.vercel.app/",
    github: "https://github.com/RawanYasser297/my-store",
    img: "/image/store.png",
  },
  
  {
    id: "todo",
    gradient: "from-[#12091f] to-[#312e81]",
    tags: ["SCSS", "JS", "responsive"],
    live: "https://rawanyasser297.github.io/todo-list/",
    github: "https://github.com/RawanYasser297/todo-list.git",
    img: "/image/todo/desc.png",
  },
  {
    id: "countries",
    gradient: "from-[#1A0C2E] to-[#4C1D95]",
    tags: ["Vite", "React", "Tailwind"],
    live: "https://around-the-world-two.vercel.app/",
    github: "https://github.com/RawanYasser297/around-the-world",
    img: "/image/around-the-world.png",
  },
  {
    id: "blog",
    gradient: "from-[#1A0C2E] to-[#4C1D95]",
    tags: ["React", "Node.js", "Express"],
    live: "https://blog-app-three-silk.vercel.app/",
    github: "https://github.com/RawanYasser297/blog-app-",
    img: "/image/blog.png",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="px-4 py-16 sm:px-6 md:py-20">
      <ScrollReveal className="container mx-auto max-w-6xl">
        <div className="rounded-3xl border border-[#A855F7]/30 bg-[#0B0B0F]/90 p-6 shadow-[0_0_40px_rgba(168,85,247,0.1)] sm:p-8">
        <h2 className="sectionHeader !mb-8 text-white sm:!mb-10">
          <span className="bg-gradient-to-r from-[#E9D5FF] to-[#A855F7] bg-clip-text text-transparent">
            {t("projects.title")}
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-6 min-[900px]:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="h-full">
              <Card className="h-full overflow-hidden border border-[#A855F7]/30 bg-[#09090D] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.22)]">
                <div className={`h-52 bg-gradient-to-br ${project.gradient}`}>
                  <img
                    src={project.img}
                    alt={project.id}
                    className="h-full w-full object-cover opacity-90"
                  />
                </div>

                <CardContent className="w-full space-y-4 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {t(`projects.items.${project.id}.title`)}
                  </h3>

                  <p className="text-sm text-zinc-300 sm:text-base">
                    {t(`projects.items.${project.id}.description`)}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#A855F7]/35 bg-[#A855F7]/10 px-3 py-1 text-sm text-[#E9D5FF]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-[#A855F7]/55 bg-transparent text-[#E9D5FF] hover:bg-[#A855F7]/15 hover:text-white"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t("projects.view")}
                      </a>
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-[#A855F7]/55 bg-transparent text-[#E9D5FF] hover:bg-[#A855F7]/15 hover:text-white"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Projects;
