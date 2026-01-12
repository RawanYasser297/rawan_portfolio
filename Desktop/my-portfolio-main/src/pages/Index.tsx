import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { lazy, Suspense } from "react";
import FAQ from "@/components/FAQ";
const GlobalBackground = lazy(() => import("@/components/GlobalBackground"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Suspense fallback={null}>
        <GlobalBackground />
      </Suspense>
      <Hero />
      <Projects />
      <Skills />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Index;
