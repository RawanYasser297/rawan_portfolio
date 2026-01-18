import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const socialLinks = [
    {
      icon: Github,
      key: "github",
      href: "https://github.com/RawanYasser297",
    },
    {
      icon: Linkedin,
      key: "linkedin",
      href: "https://www.linkedin.com/in/rawan-yasser-3a4393318/",
    },
    {
      icon: Mail,
      key: "email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=rawan2972000@gmail.com&su=Hello%20Rawan&body=Hi%20Rawan",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-4"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container mx-auto max-w-4xl text-center overflow-hidden">
        <h2 className="sectionHeader">
          <span className="gradient-text">{t("contact.title")}</span>
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12">
          {t("contact.subtitle")}
        </p>

        {/* Social Links */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 ${
            isArabic ? "flex-row-reverse" : ""
          }`}
        >
          {socialLinks.map((social) => (
            <Button
              key={social.key}
              size="lg"
              variant="outline"
              className="border-2 hover:bg-primary/10 transition-all"
              asChild
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon className="w-5 h-5 mr-2" />
                {t(`contact.social.${social.key}`)}
              </a>
            </Button>
          ))}
        </div>
        
        {/* CTA */}
        <Button size="lg" className="glowingButton" asChild>
          <a href="mailto:rawan2972000@gmail.com">
            <Mail className="w-5 h-5 mr-2" />
            {t("contact.send")}
          </a>
        </Button>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-border">
          <p className="text-muted-foreground">{t("contact.copyright")}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
