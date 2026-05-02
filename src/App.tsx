import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./i18n";
import Header from "./components/Header";

const App = () => (
  <BrowserRouter>
    <Header />

    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050505]">
      <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#6D28D9]/30 blur-[140px]" />
      <div className="absolute right-[-160px] top-1/3 h-[420px] w-[420px] rounded-full bg-[#A855F7]/20 blur-[140px]" />
      <div className="absolute bottom-[-180px] left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#581C87]/25 blur-[130px]" />
    </div>

    <div className="relative z-10">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
