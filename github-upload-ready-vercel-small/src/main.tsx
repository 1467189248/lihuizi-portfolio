import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ClickSpark } from "../components/ClickSpark";
import "../styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClickSpark sparkColor="rgba(245, 248, 255, 0.9)" sparkSize={8} sparkRadius={17} sparkCount={8} duration={420}>
      <App />
    </ClickSpark>
  </StrictMode>
);
