import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Github,
      key: "github",
      href: "https://github.com/RawanYasser297",
    },
    {
      icon: Linkedin,
      key: "linkedin",
      href: "https://www.linkedin.com/in/rawan-yasser-ahmed/",
    },
    {
      icon: Mail,
      key: "email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=rawan2972000@gmail.com&su=Hello%20Rawan&body=Hi%20Rawan",
    },
  ];

  return (
    <section id="contact" className="px-4 py-16 sm:px-6 md:py-20">
      <ScrollReveal className="container mx-auto max-w-6xl">
        <div className="rounded-3xl border border-[#A855F7]/30 bg-[#0B0B0F]/90 p-6 text-center shadow-[0_0_40px_rgba(168,85,247,0.1)] sm:p-8">
        <h2 className="sectionHeader !mb-6 text-white sm:!mb-8">
          <span className="bg-gradient-to-r from-[#E9D5FF] to-[#A855F7] bg-clip-text text-transparent">
            {t("contact.title")}
          </span>
        </h2>

        <p className="mb-10 text-base text-zinc-300 sm:text-xl">
          {t("contact.subtitle")}
        </p>

        <div className="mb-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {socialLinks.map((social) => (
            <Button
              key={social.key}
              size="lg"
              variant="outline"
              className="border-[#A855F7]/55 bg-transparent text-[#E9D5FF] hover:bg-[#A855F7]/15 hover:text-white"
              asChild
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon className="mr-2 h-5 w-5" />
                {t(`contact.social.${social.key}`)}
              </a>
            </Button>
          ))}
        </div>

        <div className="mt-16 border-t border-[#A855F7]/20 pt-8">
          <p className="text-sm text-zinc-400">{t("contact.copyright")}</p>
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Contact;
