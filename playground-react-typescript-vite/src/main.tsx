import React from "react";
import ReactDOM from "react-dom/client";

// https://reactrouter.com/en/main/router-components/browser-router
import { BrowserRouter } from "react-router-dom";

import App from "@/App";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
