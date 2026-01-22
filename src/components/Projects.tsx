import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

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
  {
    id: "todo",
    gradient: "from-blue-500 to-cyan-500",
    tags: ["SCSS", "JS", "light/dark theme"],
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
      className="container max-w-[85%] mx-auto py-24"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <h2 className="sectionHeader">
        <span className="gradient-text">{t("projects.title")}</span>
      </h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        dir="rtl" // ✅ force RTL
        
        spaceBetween={24}
        slidesPerView={1} // default = mobile
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        style={{ direction: "rtl", height:500 }} // ✅ very important fix
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="max-h-[450px]">
            <Card className="overflow-hidden border-2 hover-lift h-full">
              <div className={`h-48 bg-gradient-to-br ${project.gradient}`}>
                <img
                  src={project.img}
                  alt={project.id}
                  className="h-full w-full object-cover"
                />
              </div>

              <CardContent
                className={`flex flex-col text-start ${
                  !isArabic && "text-end"
                } p-6 space-y-4`}
              >
                <h3 className="text-2xl font-bold">
                  {t(`projects.items.${project.id}.title`)}
                </h3>

                <p
                  className={`hidden sm:flex text-muted-foreground  ${!isArabic && "text-end"}`}
                >
                  {t(`projects.items.${project.id}.description`)}
                </p>

                <div className={`flex flex-wrap gap-2 ${!isArabic && "justify-end"}`}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
