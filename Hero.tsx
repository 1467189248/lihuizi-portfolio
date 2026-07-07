"use client";

import { motion, type MotionStyle, type MotionValue } from "framer-motion";
import type { RefObject } from "react";
import { InteractiveTitle } from "./InteractiveTitle";

type HeroProps = {
  heroRef: RefObject<HTMLElement | null>;
  visualX: MotionValue<string>;
  glowX: MotionValue<string>;
  uiX: MotionValue<string>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
  y: MotionValue<number>;
  onPointerLeave: () => void;
};

const reveal = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { delay, duration: 0.82, ease: [0.16, 1, 0.3, 1] }
  })
};

const profileItems = [
  ["Profile", "LiHuizi"],
  ["Role", "产品设计师 / 设计管理者 / AI创新设计师"],
  ["Born", "2000.12.08"],
  ["Capability", "从产品美学到商业落地的系统化设计"]
];

type HeroMotionStyle = MotionStyle & {
  "--visual-x": MotionValue<string>;
  "--glow-x": MotionValue<string>;
  "--ui-x": MotionValue<string>;
};

export function Hero({
  heroRef,
  visualX,
  glowX,
  uiX,
  scale,
  opacity,
  y,
  onPointerLeave
}: HeroProps) {
  return (
    <motion.section
      ref={heroRef}
      className="hero"
      id="top"
      onPointerLeave={onPointerLeave}
      style={{
        "--visual-x": visualX,
        "--glow-x": glowX,
        "--ui-x": uiX,
        scale,
        opacity,
        y
      } as HeroMotionStyle}
    >
      <motion.svg
        className="hero-grid"
        aria-hidden="true"
        viewBox="0 0 1200 760"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <defs>
          <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="1200" height="760" fill="url(#grid)" />
        <rect width="1200" height="760" fill="url(#dots)" />
      </motion.svg>

      <motion.div
        className="hero-visual-layer"
        aria-hidden="true"
        initial={{ opacity: 0, filter: "blur(18px)", scale: 0.96 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hero-product">
          <span className="hero-product-shell" />
          <span className="hero-product-screen" />
          <span className="hero-product-orbit orbit-one" />
          <span className="hero-product-orbit orbit-two" />
          <span className="hero-product-shadow" />
        </div>
      </motion.div>

      <motion.p className="portfolio-label" variants={reveal} initial="hidden" animate="show" custom={0.58}>
        Personal Portfolio / 2026
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 32, rotateX: 14 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <InteractiveTitle as="h1" className="hero-title" dataText="突破边界，重塑设计可能">
          突破边界，重塑设计可能
        </InteractiveTitle>
      </motion.div>

      <motion.p className="hero-subtitle" variants={reveal} initial="hidden" animate="show" custom={0.56}>
        Product Designer / Design Lead
      </motion.p>
      <motion.div className="hero-statement" aria-label="能力关键词" variants={reveal} initial="hidden" animate="show" custom={0.6}>
        <span>AIGC｜工业设计｜UI / Web｜产品策略｜项目落地｜设计管理</span>
      </motion.div>
      <motion.div className="profile-strip" variants={reveal} initial="hidden" animate="show" custom={0.74}>
        {profileItems.map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </motion.div>
      <motion.div className="hero-actions" variants={reveal} initial="hidden" animate="show" custom={1}>
        <a href="#works">查看作品</a>
        <a href="#contact">联系合作</a>
      </motion.div>
    </motion.section>
  );
}
