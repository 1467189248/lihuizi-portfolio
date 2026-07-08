import { notFound } from "next/navigation";
import { ProjectNavigation } from "../../../components/ProjectNavigation";
import { featuredProject, projects } from "../../../data/projects";

const specItems = [
  ["01", "项目背景", "为什么这个项目成立", "从真实场景、目标用户与产品机会出发，定义项目的存在理由。"],
  ["02", "设计挑战", "痛点 / 限制 / 矛盾", "拆解用户痛点、结构边界、成本限制与使用场景之间的冲突。"],
  ["03", "设计策略", "用户 / 功能 / 机会", "明确目标用户、核心功能、关键体验路径与设计机会点。"],
  ["04", "项目价值", "用户 / 客户 / 商业", "沉淀用户价值、客户价值、商业价值与可复用的方法论。"]
];

const designPoints = ["CMF", "人因", "结构", "交互", "工艺", "落地"];

const allProjects = [featuredProject, ...projects];

type ProjectDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = allProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectNavigation />
      <main className="project-detail">
        <section className="project-hero">
          <div className="project-hero-copy">
            <p className="eyebrow">Project Detail / 2026</p>
            <h1>{project.title}</h1>
            <p>{project.subtitle}</p>
          </div>
          <div className="project-hero-visual" aria-hidden="true">
            <span className="project-device-main" />
            <span className="project-device-shadow" />
          </div>
        </section>

      <section className="project-narrative">
        <p className="eyebrow">Project Background</p>
        <h2>让一个产品概念，从模糊想法变成可以被理解、评估和推进的设计方案。</h2>
        <p>
          项目详情页用于承载完整的工业设计过程：从项目成立原因，到问题拆解、策略判断、
          视觉表达、关键设计点和最终价值沉淀。后续你的真实作品内容可以直接替换这里的文案与图像。
        </p>
      </section>

      <section className="project-system">
        {specItems.map(([index, title, meta, desc]) => (
          <article key={title}>
            <span>{index}</span>
            <h3>{title}</h3>
            <strong>{meta}</strong>
            <p>{desc}</p>
          </article>
        ))}
      </section>

      <section className="project-gallery">
        <div className="gallery-head">
          <p className="eyebrow">Product Visual</p>
          <h2>用大图建立产品记忆，用细节图解释设计判断。</h2>
        </div>
        <div className="gallery-grid">
          <article className="gallery-card hero-card"><span>Hero View</span></article>
          <article className="gallery-card"><span>Detail</span></article>
          <article className="gallery-card"><span>Three Views</span></article>
          <article className="gallery-card wide"><span>Scenario</span></article>
        </div>
      </section>

      <section className="project-points">
        <div>
          <p className="eyebrow">Key Design Points</p>
          <h2>把造型、材料、结构和体验放在同一套判断里。</h2>
        </div>
        <div className="point-list">
          {designPoints.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

        <section className="project-value">
          <p className="eyebrow">Project Value</p>
          <h2>最终页面要回答三个问题：用户为什么需要，客户为什么认可，商业为什么成立。</h2>
          <a href="/">回到作品集首页</a>
        </section>
      </main>
    </>
  );
}
