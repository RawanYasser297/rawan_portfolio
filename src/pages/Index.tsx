import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import LeaveComment from "@/components/LeaveComment";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const location =useLocation()

  useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace("#", "");
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  }
}, [location]);

  return (
    <div className="container mx-auto pt-16 z-20">
      <Hero />
      <Projects />
      <Skills />
      <LeaveComment />
      <Contact />
    </div>
  );
};

export default Index;
