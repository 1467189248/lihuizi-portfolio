"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Grainient from "../components/Grainient";
import { Hero } from "../components/Hero";
import { InteractiveTitle } from "../components/InteractiveTitle";
import { Navigation } from "../components/Navigation";
import { featuredProject, projects } from "../data/projects";

const stats = [
  ["18+", "产品与视觉项目"],
  ["6", "重点行业方向"],
  ["4", "从策略到交付阶段"],
  ["2026", "Portfolio System"]
];

const strengths = [
  {
    title: "产品造型判断",
    text: "从比例、体块、分件、握持与结构边界中建立稳定的产品识别。"
  },
  {
    title: "策略与项目推进",
    text: "把需求、用户、成本和时间约束拆成清晰路径，推动方案从概念进入执行。"
  },
  {
    title: "CMF 与视觉表达",
    text: "用材质、光影、渲染和场景图建立硬件产品的可信质感。"
  },
  {
    title: "AI 工作流整合",
    text: "用 AIGC 放大方向推演效率，但保留设计判断作为最终筛选标准。"
  },
  {
    title: "团队协同管理",
    text: "组织设计节奏、评审标准和交付资产，让团队围绕同一目标推进。"
  },
  {
    title: "商业落地意识",
    text: "关注客户理解、市场接受与制造可行性，不只停留在效果图。"
  }
];

const reveal = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.78, ease: [0.16, 1, 0.3, 1] }
  }
};

function ExperienceSection() {
  return (
    <motion.section className="experience-section portfolio-section" id="experience" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.22 }}>
      <div className="section-kicker">Experience / Profile</div>
      <div className="experience-grid">
        <div className="portrait-card" aria-label="LiHuizi portrait">
          <div className="portrait-orbit" />
          <div className="portrait-figure">
            <span className="portrait-head" />
            <span className="portrait-body" />
          </div>
          <div className="portrait-meta">
            <span>Industrial Product Designer</span>
            <strong>LiHuizi</strong>
          </div>
        </div>

        <div className="experience-copy">
          <InteractiveTitle as="h2">产品审美、策略判断与项目落地的连续工作流。</InteractiveTitle>
          <p>
            我是一名工业产品设计师，也是一名正在承担产品设计部门管理职责的设计负责人。
            我关注产品从需求定义、用户研究、形态策略、结构协同到最终交付的完整链路。
          </p>
          <p>
            相比只展示最终效果，我更重视设计背后的判断：为什么这样定义问题，
            为什么这样处理比例、材料、交互和场景，以及如何让一个方案真正被客户理解、被团队执行、被市场接受。
          </p>
          <div className="experience-contact">
            <a href="mailto:kiki1467189248@gmail.com">kiki1467189248@gmail.com</a>
            <a href="#contact">合作沟通</a>
          </div>
        </div>
      </div>

      <div className="stats-strip">
        {stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function SelectedWorks() {
  const cards = [featuredProject, ...projects];

  return (
    <motion.section className="selected-works portfolio-section" id="works" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }}>
      <div className="section-heading-row">
        <div>
          <div className="section-kicker">Selected Works</div>
          <InteractiveTitle as="h2">精选项目</InteractiveTitle>
        </div>
        <p>用大图建立产品记忆，用克制的信息层解释项目方向。</p>
      </div>

      <div className="feature-work-card">
        <a href="#contact" className="view-link">View ↗</a>
        <div className="work-visual-large" aria-hidden="true">
          <span className="device-block" />
          <span className="device-lens one" />
          <span className="device-lens two" />
          <span className="device-lens three" />
        </div>
        <div className="work-copy">
          <div className="work-tags">
            {featuredProject.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <h3>{featuredProject.title}</h3>
          <p>{featuredProject.subtitle}</p>
        </div>
      </div>

      <div className="work-grid-large">
        {cards.slice(1).map((project, index) => (
          <article className="portfolio-work-card" key={project.slug}>
            <a href="#contact" className="view-link small">View ↗</a>
            <div className={`project-visual visual-${index + 1}`} aria-hidden="true">
              <span />
            </div>
            <div className="work-copy compact">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

function StrengthsSection() {
  return (
    <motion.section className="strengths-section portfolio-section" id="strengths" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      <div className="section-heading-row">
        <div>
          <div className="section-kicker">Personal Advantages</div>
          <InteractiveTitle as="h2">个人优势</InteractiveTitle>
        </div>
        <p>不是堆叠工具，而是把设计判断、表达效率和项目管理放进同一套系统里。</p>
      </div>

      <div className="strength-card-grid">
        {strengths.map((item, index) => (
          <article className="strength-card" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

function FinalContact() {
  return (
    <section className="final-contact" id="contact">
      <div className="contact-shell">
        <div className="section-kicker">Contact</div>
        <InteractiveTitle as="h2">Let’s build meaningful products.</InteractiveTitle>
        <p>项目合作、设计交流或作品浏览，下面是最直接的入口。</p>
        <div className="contact-actions">
          <a href="mailto:kiki1467189248@gmail.com">
            <span>Email</span>
            <strong>kiki1467189248@gmail.com</strong>
          </a>
          <a href="#works">
            <span>Portfolio</span>
            <strong>查看精选项目</strong>
          </a>
          <a href="#top">
            <span>Back</span>
            <strong>回到封面</strong>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const pointer = useMotionValue(0.5);

  const visualX = useSpring(useTransform(pointer, [0, 1], [-10, 10]), { stiffness: 80, damping: 18 });
  const glowX = useSpring(useTransform(pointer, [0, 1], [20, -20]), { stiffness: 70, damping: 20 });
  const uiX = useSpring(useTransform(pointer, [0, 1], [-6, 6]), { stiffness: 90, damping: 20 });
  const visualVar = useMotionTemplate`${visualX}px`;
  const glowVar = useMotionTemplate`${glowX}px`;
  const uiVar = useMotionTemplate`${uiX}px`;

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 0.85], [1, 0.965]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.3]);
  const heroY = useTransform(scrollYProgress, [0, 0.85], [0, -56]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setTheme("light");
      document.body.dataset.theme = "light";
    }
  }, []);

  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      pointer.set(event.clientX / window.innerWidth);
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
      document.body.dataset.cursor = event.target instanceof Element && event.target.closest("a, button") ? "active" : "";
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => {
      window.removeEventListener("pointermove", updatePointer);
      document.body.dataset.cursor = "";
    };
  }, [cursorX, cursorY, pointer]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.body.dataset.theme = next === "light" ? "light" : "";
    localStorage.setItem("theme", next);
  };

  const resetParallax = () => {
    pointer.set(0.5);
  };

  return (
    <>
      <Navigation theme={theme} onToggleTheme={toggleTheme} />
      <main className="vite-portfolio">
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
        <div className="post-hero-grainient" aria-hidden="true">
          <Grainient
            color1={theme === "light" ? "#ffffff" : "#dce5ff"}
            color2={theme === "light" ? "#cfd7ea" : "#425a9f"}
            color3={theme === "light" ? "#f5f5f7" : "#05060a"}
            timeSpeed={0.16}
            colorBalance={theme === "light" ? 0.18 : -0.18}
            warpStrength={0.42}
            warpFrequency={3.4}
            warpSpeed={0.55}
            warpAmplitude={82}
            blendAngle={-14}
            blendSoftness={0.22}
            rotationAmount={180}
            noiseScale={1.35}
            grainAmount={theme === "light" ? 0.028 : 0.052}
            grainScale={2.4}
            contrast={theme === "light" ? 1.05 : 1.14}
            saturation={theme === "light" ? 0.34 : 0.58}
            centerY={-0.12}
            zoom={1.04}
          />
        </div>
        <ExperienceSection />
        <SelectedWorks />
        <StrengthsSection />
        <FinalContact />
      </main>
      <motion.div className="cursor-dot" aria-hidden="true" style={{ x: cursorX, y: cursorY }} />
    </>
  );
}
