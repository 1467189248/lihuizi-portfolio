"use client";

import { motion } from "framer-motion";
import { ExploreTrigger } from "./navigation/ExploreTrigger";

const navItems = [
  ["Home", "#top"],
  ["Experience", "#experience"],
  ["Works", "#works"],
  ["Strengths", "#strengths"],
  ["Contact", "#contact"]
];

type NavigationProps = {
  theme?: "dark" | "light";
  onToggleTheme?: () => void;
};

export function Navigation(_props: NavigationProps = {}) {
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
  const isExplorePage = currentPath === "/explore";
  const isWorksPage = currentPath === "/works";

  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href={isExplorePage ? "/#top" : "#top"}>
          LiHuizi
        </a>
        <div className="nav-links">
          {navItems.map(([label, href]) => (
            <a
              className={(!isExplorePage && !isWorksPage && label === "Home") || (isWorksPage && label === "Works") ? "active" : ""}
              href={isExplorePage || isWorksPage ? `/${href}` : href}
              key={href}
            >
              {label}
            </a>
          ))}
        </div>
        <ExploreTrigger />
      </nav>
    </motion.header>
  );
}
