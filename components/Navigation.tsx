"use client";

import { motion } from "framer-motion";

const navItems = [
  ["Home", "#top"],
  ["Experience", "#experience"],
  ["Works", "#works"],
  ["Strengths", "#strengths"],
  ["Contact", "#contact"]
];

type NavigationProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export function Navigation({ theme, onToggleTheme }: NavigationProps) {
  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="#top">LiHuizi</a>
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
          onClick={onToggleTheme}
        >
          <span className="theme-icon sun" />
          <span className="theme-icon moon" />
        </button>
      </nav>
    </motion.header>
  );
}
