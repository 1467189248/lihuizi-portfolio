"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AIWorkflow } from "../components/AIWorkflow";
import { ContactSection } from "../components/ContactSection";
import { Hero } from "../components/Hero";
import { Methodology } from "../components/Methodology";
import { Navigation } from "../components/Navigation";
import { ScrollIndicator, indicatorItems } from "../components/ScrollIndicator";
import { VisualSliceWall } from "../components/VisualSliceWall";
import { WorksSection } from "../components/WorksSection";

export default function Page() {
  const heroRef = useRef<HTMLElement | null>(null);
  const workRef = useRef<HTMLElement | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [active, setActive] = useState(0);
  const [showCoverButton, setShowCoverButton] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const pointer = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  const visualX = useSpring(useTransform(pointer, [0, 1], [-10, 10]), { stiffness: 80, damping: 18 });
  const glowX = useSpring(useTransform(pointer, [0, 1], [20, -20]), { stiffness: 70, damping: 20 });
  const uiX = useSpring(useTransform(pointer, [0, 1], [-6, 6]), { stiffness: 90, damping: 20 });
  const workX = useSpring(useTransform(pointer, [0, 1], [-18, 18]), { stiffness: 70, damping: 22 });
  const workY = useSpring(useTransform(pointerY, [0, 1], [-10, 10]), { stiffness: 70, damping: 22 });

  const visualVar = useMotionTemplate`${visualX}px`;
  const glowVar = useMotionTemplate`${glowX}px`;
  const uiVar = useMotionTemplate`${uiX}px`;
  const workXVar = useMotionTemplate`${workX}px`;
  const workYVar = useMotionTemplate`${workY}px`;

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const { scrollYProgress: workScrollProgress } = useScroll({ target: workRef, offset: ["start end", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 0.85], [1, 0.965]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.3]);
  const heroY = useTransform(scrollYProgress, [0, 0.85], [0, -56]);
  const workVisualScale = useTransform(workScrollProgress, [0, 0.45, 1], [1.08, 1, 0.86]);
  const workVisualY = useTransform(workScrollProgress, [0, 0.45, 1], [42, 0, -48]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setTheme("light");
      document.body.dataset.theme = "light";
    }
  }, []);

  useEffect(() => {
    const update = () => {
      setShowCoverButton(window.scrollY > window.innerHeight * 0.55);
      const midpoint = window.scrollY + window.innerHeight * 0.45;
      const nextActive = indicatorItems.reduce((current, [, href], index) => {
        const section = document.querySelector<HTMLElement>(href);
        return section && section.offsetTop <= midpoint ? index : current;
      }, 0);
      setActive(nextActive);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      pointer.set(event.clientX / window.innerWidth);
      pointerY.set(event.clientY / window.innerHeight);
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
      document.body.dataset.cursor = event.target instanceof Element && event.target.closest("a, button") ? "active" : "";
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => {
      window.removeEventListener("pointermove", updatePointer);
      document.body.dataset.cursor = "";
    };
  }, [cursorX, cursorY, pointer, pointerY]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.body.dataset.theme = next === "light" ? "light" : "";
    localStorage.setItem("theme", next);
  };

  const resetParallax = () => {
    pointer.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <>
      <Navigation theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero
          heroRef={heroRef}
          visualX={visualVar}
          glowX={glowVar}
          uiX={uiVar}
          scale={heroScale}
          opacity={heroOpacity}
          y={heroY}
          onPointerLeave={resetParallax}
        />
        <VisualSliceWall
          sectionRef={workRef}
          workX={workXVar}
          workY={workYVar}
          scale={workVisualScale}
          y={workVisualY}
          onPointerLeave={resetParallax}
        />
        <Methodology />
        <WorksSection />
        <AIWorkflow />
        <ContactSection />
      </main>
      <ScrollIndicator active={active} />
      <button
        className={`cover-return ${showCoverButton ? "is-visible" : ""}`}
        type="button"
        aria-label="回到首页封面"
        onClick={() => document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" })}
      >
        <strong>↑</strong>
      </button>
      <motion.div className="cursor-dot" aria-hidden="true" style={{ x: cursorX, y: cursorY }} />
    </>
  );
}
