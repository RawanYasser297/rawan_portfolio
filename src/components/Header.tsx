import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = ["home", "projects", "skills", "about", "contact"];

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const handleNavigate = (id: string) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash: `#${id}` });
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const NavLinks = ({ vertical = false }) => (
    <ul className={`flex ${vertical ? "flex-col" : "flex-row"} gap-3 sm:gap-4`}>
      {NAV_ITEMS.map((id) => (
        <li key={id} className="cursor-pointer">
          <button
            onClick={() => handleNavigate(id)}
            className="rounded-full border border-transparent px-3 py-2 text-sm text-zinc-300 transition hover:border-[#A855F7]/50 hover:bg-[#A855F7]/10 hover:text-white sm:text-base"
          >
            {t(`nav.${id}`)}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <header
      className={`fixed left-0 top-0 z-30 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[#A855F7]/20 bg-[#050505]/85 shadow-[0_8px_30px_rgba(0,0,0,0.55)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex w-full items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        <button
          onClick={() => handleNavigate("home")}
          className="text-left leading-tight"
          aria-label="Go to home"
        >
          <p className="text-base font-black tracking-tight text-white sm:text-lg">
            Rawan Yasser
          </p>
          <p className="text-[11px] text-[#C084FC] sm:text-xs">Frontend Developer</p>
        </button>

        {!isMobile && <NavLinks />}

        <div className="flex items-center gap-4">
          {isMobile && (
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#A855F7]/45 text-[#C084FC] transition hover:bg-[#A855F7]/10"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          )}
        </div>
      </div>

      {isMobile && menuOpen && (
        <nav className="absolute left-0 top-full z-20 w-full border-t border-[#A855F7]/20 bg-[#0B0B0F]/95 p-6 shadow-lg backdrop-blur-md">
          <NavLinks vertical />
        </nav>
      )}
    </header>
  );
};

export default Header;
