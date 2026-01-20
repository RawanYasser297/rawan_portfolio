import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import {useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const [mobileWidth,setMobileWidth] = useState(true);
  
  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  useEffect(()=>{
   if (window.innerWidth > 400){
    setMobileWidth(false)
   }
  },[])

  const next = (e, id) => {
    e.preventDefault();

    if (id === "about") {
      nav("/about");
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth animation
      });
      return;
    }

    if (location.pathname !== "/") {
      nav(`/#${id}`);
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      nav('/')
    }, 1);
  };

  const laptop = (
    <nav className=" z-10 flex  justify-between items-center">
      <ul className="flex flex-row gap-4 sm:gap-6">
        {["home", "projects","skills", "about", "contact"].map((id) => (
          <li
            key={id}
            className="text-sm sm:text-base md:text-lg font-semibold text-[hsl(229,75%,70%)]/80 hover:text-[hsl(229,75%,70%)] transition cursor-pointer"
          >
            <button
              onClick={(e) => next(e, id)}
              className="bg-transparent border-none p-0 cursor-pointer"
            >
              {t(`nav.${id}`)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
  const menu = (
    <img src="/image/menu (2).png" alt="" className="w-[30px] cursor-pointer hover:scale-105 transition-all" onClick={()=>setShow(!show)} />
  );

  const mobile = (
    <nav className="absolute w-full bg-background left-0 top-16  h-fit p-4 z-10 flex  justify-between items-center">
      <ul className="flex flex-col gap-4 sm:gap-6">
        {["home", "projects","skills", "about", "contact"].map((id) => (
          <li
            key={id}
            className="text-sm sm:text-base md:text-lg font-semibold text-[hsl(229,75%,70%)]/80 hover:text-[hsl(229,75%,70%)] transition cursor-pointer"
            onClick={()=>setShow(false)}
          > 
            <button
              onClick={(e) => next(e, id)}
              className="bg-transparent border-none p-0 cursor-pointer"
            >
              {t(`nav.${id}`)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-colors duration-300 ${
        scrolled ? "bg-background" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto z-10 flex  flex-row  w-full p-4 sm:p-6  justify-between items-center">
        {mobileWidth?menu:laptop}
        {show && mobile}
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
