function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 animate-fade-in">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column – Description */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Hi, I’m <span className="font-semibold">Rawan Yasser</span>, a
              passionate Frontend Developer from Egypt.
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              I specialize in building modern, scalable web applications using
              <span className="font-semibold"> React</span> and
              <span className="font-semibold"> TypeScript</span>, with a strong
              focus on clean architecture and best practices.
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              I care deeply about performance, maintainability, and delivering
              real value through thoughtful and efficient solutions.
            </p>
          </div>

          {/* Right Column – Personal Info */}
          <div className="animate-fade-in-up">
            <div className="bg-white/10 border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Name</span>
                <span className="text-white font-medium">Rawan Yasser</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Country</span>
                <span className="text-white font-medium">Egypt</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Age</span>
                <span className="text-white font-medium">Your Age</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Stack</span>
                <span className="text-white font-medium">
                  React, TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
