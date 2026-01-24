import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_ITEMS = ["home", "projects", "skills", "about", "contact"];

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* ================= Scroll Background ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= Screen Size ================= */
  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  /* ================= Navigation Logic ================= */
  const handleNavigate = (id) => {
    setMenuOpen(false);

    // About page is a separate route
    if (id === "about") {
      navigate("/about");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // If not on home page → go home first then scroll
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    // Scroll inside home page
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  /* ================= Nav Items ================= */
  const NavLinks = ({ vertical = false }) => (
    <ul className={`flex ${vertical ? "flex-col" : "flex-row"} gap-4 sm:gap-6`}>
      {NAV_ITEMS.map((id) => (
        <li
          key={id}
          className="text-sm sm:text-base md:text-lg font-semibold 
                     text-[hsl(229,75%,70%)]/80 hover:text-[hsl(229,75%,70%)] 
                     transition cursor-pointer"
        >
          <button
            onClick={() => handleNavigate(id)}
            className="bg-transparent border-none p-0 cursor-pointer"
          >
            {t(`nav.${id}`)}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-colors duration-300 ${
        scrolled ? "bg-background" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex w-full p-4 sm:p-6 justify-between items-center">

        {/* Logo / Left Side */}
        <div />

        {/* Desktop Nav */}
        {!isMobile && <NavLinks />}

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          {/* Mobile Menu Button */}
          {isMobile && (
            <img
              src="/image/menu (2).png"
              alt="menu"
              className="w-[30px] cursor-pointer hover:scale-105 transition"
              onClick={() => setMenuOpen((prev) => !prev)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <nav className="absolute left-0 top-full w-full bg-background p-6 shadow-lg z-20">
          <NavLinks vertical />
        </nav>
      )}
    </header>
  );
};

export default Header;
