"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BorderGlow from "../components/BorderGlow";
import ColorBends from "../components/ColorBends";
import { DesignArchiveMarquee } from "../components/DesignArchiveMarquee";
import { ExplorePage } from "./ExplorePage";
import { Hero } from "../components/Hero";
import { InteractiveTitle } from "../components/InteractiveTitle";
import { Navigation } from "../components/Navigation";
import { ScrollIndicator } from "../components/ScrollIndicator";
import { featuredProject, projects } from "../data/projects";
import { WorksPage } from "./WorksPage";

const processModules = [
  {
    index: "01",
    title: "产品策略",
    text: "从需求、用户、场景与竞品中定义设计方向",
    points: ["用户研究 / 竞品分析 / 产品定位", "功能优先级 / 设计机会 / 需求转译"]
  },
  {
    index: "02",
    title: "形态设计",
    text: "把策略判断转译为稳定、可识别、可制造的产品语言",
    points: ["比例推敲 / 体块关系 / 人因握持", "结构边界 / CMF 方向 / 造型迭代"]
  },
  {
    index: "03",
    title: "视觉表达",
    text: "用渲染、场景与叙事让产品价值被快速理解",
    points: ["产品渲染 / 场景构建 / 细节表现", "AIGC 工作流 / 提案表达 / 视觉资产"]
  },
  {
    index: "04",
    title: "项目落地",
    text: "协调目标、团队与交付节奏，让方案进入真实执行",
    points: ["跨部门协同 / 评审推进 / 交付管理", "客户沟通 / 方案落地 / 团队管理"]
  }
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

const workFilters = ["Rendering", "AIGC", "3C Visual", "Motion", "Commercial"];

const reveal = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.78, ease: [0.16, 1, 0.3, 1] }
  }
};

function DesignArchiveSection() {
  return (
    <motion.section
      className="visual-archive"
      id="archive"
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="archive-head">
        <div>
          <div className="eyebrow">Design Archive</div>
          <InteractiveTitle as="h2">设计切片</InteractiveTitle>
        </div>
        <div className="archive-copy">
          <p>从产品定义、AIGC 推演、工业设计到项目落地，记录设计判断形成过程中的关键切片。</p>
        </div>
      </div>

      <BorderGlow
        className="archive-stage portfolio-glow-card"
        aria-label="横向流动视觉墙"
        backgroundColor="rgba(12, 12, 14, 0.72)"
        borderRadius={30}
        edgeSensitivity={26}
        glowRadius={46}
        glowIntensity={0.55}
        coneSpread={18}
        fillOpacity={0.16}
      >
        <div className="archive-glow" />
        <DesignArchiveMarquee />
      </BorderGlow>
    </motion.section>
  );
}

function ExperienceSection() {
  return (
    <motion.section className="experience-section portfolio-section" id="experience" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.22 }}>
      <div className="section-kicker">Experience / Profile</div>
      <div className="experience-grid">
        <BorderGlow
          className="portrait-card portfolio-glow-card"
          aria-label="LiHuizi portrait"
          backgroundColor="rgba(16, 16, 18, 0.72)"
          borderRadius={34}
          edgeSensitivity={32}
          glowRadius={34}
          glowIntensity={0.48}
          fillOpacity={0.12}
        >
          <div className="portrait-orbit" />
          <div className="portrait-figure portrait-photo-frame">
            <img src="/images/profile-lihuizi.png" alt="LiHuizi" loading="lazy" />
          </div>
          <div className="portrait-meta">
            <span>Industrial Product Designer</span>
            <strong>LiHuizi</strong>
          </div>
        </BorderGlow>

        <div className="experience-copy">
          <InteractiveTitle as="h2" className="experience-title" dataText="从策略到落地，构建产品设计价值闭环">
            <span>从策略到落地，</span>
            <span>构建产品设计价值闭环</span>
          </InteractiveTitle>
          <p>聚焦产品策略、工业设计、AI辅助设计流程与结构协同，推动复杂项目从需求判断到可执行交付。</p>
          <div className="experience-keywords" aria-label="核心能力关键词">
            {["Product Strategy", "Industrial Design", "AI Workflow", "Structure Collaboration", "Project Delivery", "Design Management"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="experience-contact">
            <a href="mailto:kiki1467189248@gmail.com">kiki1467189248@gmail.com</a>
            <a href="#works">个人作品</a>
          </div>
        </div>
      </div>

      <div className="stats-strip process-strip">
        {processModules.map((item) => (
          <article key={item.index}>
            <h3>
              <span>{item.index} /</span>
              {item.title}
            </h3>
            <p>{item.text}</p>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
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
      </div>

      <div className="work-filter-tabs" aria-label="作品分类">
        {workFilters.map((filter, index) => (
          <button className={index === 0 ? "active" : ""} type="button" key={filter}>
            {filter}
          </button>
        ))}
      </div>

      <BorderGlow
        className="feature-work-card portfolio-glow-card"
        backgroundColor="rgba(12, 12, 14, 0.76)"
        borderRadius={30}
        edgeSensitivity={28}
        glowRadius={42}
        glowIntensity={0.58}
        fillOpacity={0.14}
        animated
      >
        <a href="/works" className="view-link">View ↗</a>
        <div className="work-visual-large work-collection-visual" aria-hidden="true">
          <img src="/images/work-collection-yanzhi-nezha.png" alt="" loading="lazy" />
        </div>
        <div className="work-copy">
          <h3>作品合集</h3>
        </div>
      </BorderGlow>

      <div className="work-grid-large">
        {cards.slice(1).map((project, index) => (
          <BorderGlow
            className="portfolio-work-card portfolio-glow-card"
            key={project.slug}
            backgroundColor="rgba(12, 12, 14, 0.76)"
            borderRadius={24}
            edgeSensitivity={34}
            glowRadius={30}
            glowIntensity={0.42}
            fillOpacity={0.1}
          >
            <a href="#contact" className="view-link small">View ↗</a>
            <div className={`project-visual visual-${index + 1}`} aria-hidden="true">
              <span />
            </div>
            <div className="work-copy compact">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
            </div>
          </BorderGlow>
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
          <BorderGlow
            className="strength-card portfolio-glow-card"
            key={item.title}
            backgroundColor="rgba(16, 16, 18, 0.7)"
            borderRadius={26}
            edgeSensitivity={34}
            glowRadius={28}
            glowIntensity={0.42}
            fillOpacity={0.12}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </BorderGlow>
        ))}
      </div>
    </motion.section>
  );
}

function FinalContact() {
  return (
    <section className="final-contact" id="contact">
      <BorderGlow
        className="contact-shell portfolio-glow-card"
        backgroundColor="rgba(16, 16, 18, 0.74)"
        borderRadius={38}
        edgeSensitivity={28}
        glowRadius={48}
        glowIntensity={0.5}
        fillOpacity={0.12}
      >
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
        </div>
        <a className="contact-back-top" href="#top">BACK TO TOP</a>
      </BorderGlow>
      <footer className="site-footer">
        <span>©LiHuizi</span>
        <span>JUSTDOIT FORFUTURE</span>
      </footer>
    </section>
  );
}

export default function App() {
  const isExplorePage = typeof window !== "undefined" && window.location.pathname === "/explore";
  const isWorksPage = typeof window !== "undefined" && window.location.pathname === "/works";
  const heroRef = useRef<HTMLElement | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeSection, setActiveSection] = useState(0);
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
    const sectionIds = ["top", "archive", "experience", "works", "strengths", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = sectionIds.indexOf(visible.target.id);
        if (index >= 0) setActiveSection(index);
      },
      { rootMargin: "-38% 0px -42% 0px", threshold: [0.08, 0.2, 0.42, 0.64] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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

  if (isExplorePage) {
    return <ExplorePage />;
  }

  if (isWorksPage) {
    return <WorksPage />;
  }

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
        <div className="post-hero-colorbends" aria-hidden="true">
          <ColorBends
            colors={theme === "light" ? ["#ffffff", "#cfd7ea", "#dde5ff"] : ["#dce5ff", "#40549a", "#11131b"]}
            rotation={84}
            autoRotate={0.35}
            speed={0.12}
            scale={1.18}
            frequency={1.06}
            warpStrength={0.42}
            mouseInfluence={0.34}
            parallax={0.22}
            noise={theme === "light" ? 0.035 : 0.065}
            iterations={2}
            intensity={theme === "light" ? 0.82 : 1.12}
            bandWidth={theme === "light" ? 4.4 : 5.2}
            transparent
          />
        </div>
        <DesignArchiveSection />
        <ExperienceSection />
        <SelectedWorks />
        <StrengthsSection />
        <FinalContact />
      </main>
      <ScrollIndicator active={activeSection} />
      <motion.div className="cursor-dot" aria-hidden="true" style={{ x: cursorX, y: cursorY }} />
    </>
  );
}
