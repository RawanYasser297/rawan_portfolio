import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] px-4">
      <div className="w-full max-w-md rounded-3xl border border-[#A855F7]/35 bg-[#0B0B0F]/90 p-8 text-center shadow-[0_0_35px_rgba(168,85,247,0.15)]">
        <h1 className="mb-4 text-5xl font-bold text-white">404</h1>
        <p className="mb-6 text-lg text-zinc-300">Oops! Page not found</p>
        <a href="/" className="text-[#C084FC] underline transition hover:text-[#E9D5FF]">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
