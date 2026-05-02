import ScrollReveal from "./ScrollReveal";

const About = () => {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="rounded-3xl border border-[#A855F7]/30 bg-[#0B0B0F]/90 px-6 py-10 text-center shadow-[0_0_50px_rgba(168,85,247,0.1)] sm:px-8 md:px-12">
            <h2 className="sectionHeader !mb-4 text-white">
              <span className="bg-gradient-to-r from-[#E9D5FF] to-[#A855F7] bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className='leading-[27px] tracking-[2.4px]'>
                “Hi, I am Rawan. I am 25 years old. I graduated from
                the Faculty of Business at Ain Shams University in Cairo, Egypt.
              Because my academic background is broad and can connect with
              different fields, I decided to study programming to develop my
              technical knowledge. During this journey, I became especially
              interested in web development because I realized how important
              websites are for businesses. I have worked on several projects,
              which helped me build a good understanding of full-stack
              development. I completed an online front-end diploma through
              Elmdrasa, and I am currently attending an offline full-stack crash
              course at National Telecommunication Institute. At the moment, I
              have practical knowledge of JavaScript, React, Angular, and
              Node.js. I am looking for an opportunity where I can continue
              learning, strengthen my skills, and contribute to real-world
              projects.”
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
