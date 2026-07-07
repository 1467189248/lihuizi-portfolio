export type ProjectCategory =
  | "Healthcare"
  | "Smart Hardware"
  | "Industrial"
  | "AI Robot"
  | "Strategy";

export type Project = {
  slug: string;
  category: ProjectCategory;
  title: string;
  subtitle: string;
  tags: string[];
  featured?: boolean;
};

export const projectCategories = [
  "All",
  "Healthcare",
  "Smart Hardware",
  "Industrial",
  "AI Robot",
  "Strategy"
] as const;

export const featuredProject: Project = {
  slug: "smart-medication-box",
  category: "Healthcare",
  title: "智能药盒",
  subtitle: "Medication adherence system for home and mobile care.",
  tags: ["医疗健康", "用药依从性", "用户体验", "便携场景"],
  featured: true
};

export const projects: Project[] = [
  {
    slug: "knee-therapy-device",
    category: "Healthcare",
    title: "膝关节理疗仪",
    subtitle: "可穿戴康复设备与绑带人因设计",
    tags: ["康复设备", "人因设计", "CMF"]
  },
  {
    slug: "nezha-ai-companion",
    category: "AI Robot",
    title: "哪吒 AI 陪伴机器人",
    subtitle: "儿童情绪陪伴与家庭智能硬件",
    tags: ["AI Robot", "儿童陪伴", "硬件策略"]
  },
  {
    slug: "community-gateway",
    category: "Smart Hardware",
    title: "中宏低碳充电桩 & AI 网关",
    subtitle: "家族化设计语言与智慧社区场景落地",
    tags: ["Smart Hardware", "社区场景", "系统设计"]
  },
  {
    slug: "rugged-handheld",
    category: "Industrial",
    title: "中电科宽温手持设备",
    subtitle: "宽温高防护工业设备设计",
    tags: ["Industrial", "三防设备", "结构协同"]
  },
  {
    slug: "multispectral-fire-warning",
    category: "AI Robot",
    title: "多光谱 AI 火灾预警设备",
    subtitle: "非传统安防形态与多传感器集成",
    tags: ["AI Vision", "安防设备", "多传感器"]
  },
  {
    slug: "micro-heater",
    category: "Healthcare",
    title: "微型加热器",
    subtitle: "小型实验设备的功能与握持优化",
    tags: ["实验设备", "握持优化", "功能整合"]
  }
];

export const archiveRows = [
  ["Concept", "CMF", "AIGC", "Prototype", "Strategy", "Render", "Structure", "UX", "Device", "Process", "Detail", "Launch"],
  ["Sketch", "Material", "Scenario", "Product", "Interface", "Model", "Insight", "System", "Visual", "Brand", "Research", "Delivery"],
  ["Form", "Texture", "Decision", "Hardware", "Experience", "Vision", "Iteration", "Team", "Scene", "Archive", "Study", "Lab"],
  ["Planning", "Validation", "Management", "Design", "Workflow", "Portfolio", "CMF", "Render", "UX", "Strategy", "Product", "AI"]
];

export const methodology = [
  {
    index: "01",
    title: "概念策略",
    desc: "把商业需求拆成清晰的产品定义、用户路径和设计机会",
    tools: ["需求拆解 / 场景判断 / 产品定位", "用户研究 / 竞品分析 / 机会地图"]
  },
  {
    index: "02",
    title: "AI 生成",
    desc: "用 AI 快速扩展方向，但由设计判断筛选真正可落地的方案",
    tools: ["Moodboard / 草图推演 / 风格探索", "Midjourney / SD / Flux / ControlNet"]
  },
  {
    index: "03",
    title: "工业渲染",
    desc: "为产品建立可信的形体、材质、结构关系和真实光照",
    tools: ["Rhino / Cinema 4D / Keyshot", "CMF / 结构协同 / 视觉表达"]
  },
  {
    index: "04",
    title: "后期交付",
    desc: "把方案整理成客户、团队和市场都能理解的交付内容",
    tools: ["PPT 提案 / 视觉叙事 / 项目复盘", "Photoshop / Lightroom / ZCOOL"]
  }
];

export const workflowSteps = [
  "策略调研",
  "Moodboard",
  "草图推演",
  "产品渲染",
  "场景图",
  "PPT 提案"
];
