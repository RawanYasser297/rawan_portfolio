import { Github, Linkedin, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
  const onCvClick = () => {
    const link = document.createElement("a");
    link.href = "/CV/me.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.download = "Rawan_Yasser_CV";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#050505] px-4 py-10 sm:px-6 md:py-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-28%] h-[430px] w-[430px] -translate-x-1/2 rounded-full bg-[#7E22CE]/20 blur-[140px]" />
        <div className="absolute right-[8%] top-[34%] h-[300px] w-[300px] rounded-full bg-[#A855F7]/10 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6.5rem)] max-w-6xl items-center">
        <ScrollReveal className="w-full">
          <div className="grid w-full gap-10 rounded-3xl border border-[#A855F7]/35 bg-[#0B0B0F]/90 p-6 shadow-[0_0_50px_rgba(168,85,247,0.14)] backdrop-blur-sm sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-8 lg:p-12">
          <div className="space-y-6">
            <p className="font-mono text-sm tracking-[0.22em] text-[#A855F7]">
              rawan.codes
            </p>

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">I am Rawan</span>
              <span className="mt-1 block text-[#C084FC]">Frontend Developer</span>
            </h1>

            <p className="max-w-xl text-base text-zinc-300 sm:text-lg">
              I build bold, scalable web experiences using React and modern
              technologies.
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-xl border border-[#C084FC]/40 bg-[#A855F7] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#9333EA] hover:shadow-[0_0_30px_rgba(168,85,247,0.65)]"
              >
                View My Work
              </button>

              <button
                type="button"
                onClick={onCvClick}
                className="rounded-xl border border-[#A855F7]/70 bg-[#0E0B15] px-7 py-3 text-sm font-semibold text-[#E9D5FF] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1B1328] hover:shadow-[0_0_24px_rgba(168,85,247,0.45)]"
              >
                Upload My CV
              </button>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/RawanYasser297"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#A855F7]/60 text-[#D8B4FE] transition duration-300 hover:border-[#C084FC] hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.55)]"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/rawan-yasser-ahmed/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#A855F7]/60 text-[#D8B4FE] transition duration-300 hover:border-[#C084FC] hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.55)]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rawan2972000@gmail.com&su=Hello%20Rawan&body=Hi%20Rawan"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#A855F7]/60 text-[#D8B4FE] transition duration-300 hover:border-[#C084FC] hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.55)]"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="pointer-events-none absolute inset-2 rounded-[36px] bg-gradient-to-br from-[#A855F7]/14 via-[#7E22CE]/10 to-transparent blur-[100px]" />
            <div className="relative z-10 w-full max-w-[520px] overflow-hidden rounded-[20px] border border-white/[0.03] bg-[#0B0B0F]/35 shadow-[0_20px_70px_rgba(0,0,0,0.3)] ring-1 ring-[#A855F7]/5">
              <img
                src="/image/myPhoto.jpeg"
                alt="Rawan portrait"
                className="hero-float aspect-square w-full object-cover  "
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#050505]/12 via-transparent to-[#050505]/38" />
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
