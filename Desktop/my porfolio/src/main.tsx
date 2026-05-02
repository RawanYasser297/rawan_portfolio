import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

document.documentElement.lang = "en";
document.documentElement.dir = "ltr";

createRoot(document.getElementById("root")!).render(<App />);
