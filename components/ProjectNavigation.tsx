"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  ["Home", "/#top"],
  ["About", "/#about"],
  ["Works", "/#works"],
  ["Contact", "/#contact"]
];

export function ProjectNavigation() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setTheme("light");
      document.body.dataset.theme = "light";
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.body.dataset.theme = next === "light" ? "light" : "";
    localStorage.setItem("theme", next);
  };

  return (
    <motion.header
      className="site-header project-site-header"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="nav" aria-label="项目详情导航">
        <a className="brand" href="/#top">LiHuizi</a>
        <div className="nav-links">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </div>
        <button
          className="theme-toggle"
          type="button"
          aria-label="切换白天和黑夜模式"
          aria-pressed={theme === "light"}
          onClick={toggleTheme}
        >
          <span className="theme-icon sun" />
          <span className="theme-icon moon" />
        </button>
      </nav>
    </motion.header>
  );
}
