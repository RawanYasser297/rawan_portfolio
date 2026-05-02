import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
