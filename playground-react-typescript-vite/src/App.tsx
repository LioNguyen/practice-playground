import { Route, Routes } from "react-router";
import viteLogo from "/vite.svg";

import "@/App.css";
import { AboutPage } from "@/components/pages/about";
import { HomePage } from "@/components/pages/home";

function App() {
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>

      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
