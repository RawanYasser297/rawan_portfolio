import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./i18n";
import About from "./components/About";
import Header from "./components/Header";


const App = () => (
  <BrowserRouter>
    <Header />
    <div className="fixed  h-screen w-screen mx-auto overflow-hidden z-0">
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[hsl(var(--gradient-indigo))] opacity-30 blur-[120px] rounded-full" />
      <div className="absolute top-1/3 -right-40 w-[420px] h-[420px] bg-[hsl(var(--gradient-blue))] opacity-30 blur-[120px] rounded-full" />
    </div>

    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
