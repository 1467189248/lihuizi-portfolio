export type WorkGalleryItem = {
  id: string;
  title: string;
  project: string;
  category: "Product Design" | "AIGC" | "Smart Hardware" | "Medical" | "Industrial" | "Strategy";
  image: string;
  description?: string;
};

export const workGalleryCategories = [
  "All",
  "Product Design",
  "AIGC",
  "Smart Hardware",
  "Medical",
  "Industrial",
  "Strategy"
] as const;

const categories: WorkGalleryItem["category"][] = [
  "Product Design",
  "AIGC",
  "Smart Hardware",
  "Medical",
  "Industrial",
  "Strategy"
];

const galleryTitles = [
  ["产品定义切片", "Design Archive"],
  ["AIGC 造型探索", "AI Form Study"],
  ["智能硬件视觉", "Smart Device"],
  ["医疗产品方案", "Healthcare Product"],
  ["工业设备设计", "Industrial System"],
  ["项目策略推演", "Strategy Board"],
  ["结构与人因研究", "Structure Study"],
  ["CMF 方向板", "CMF Direction"],
  ["场景渲染表现", "Scenario Render"],
  ["产品家族化", "Product Family"],
  ["界面体验草案", "UI Experience"],
  ["落地交付记录", "Delivery Archive"],
  ["硬件形态迭代", "Hardware Iteration"],
  ["商业视觉提案", "Commercial Visual"],
  ["AIGC 场景实验", "AIGC Scenario"],
  ["设备细节研究", "Detail Study"],
  ["产品展示图", "Product Visual"],
  ["设计过程归档", "Process Archive"]
];

export const workGalleryItems: WorkGalleryItem[] = galleryTitles.map(([title, project], index) => {
  const number = String(index + 1).padStart(3, "0");

  return {
    id: `work-${number}`,
    title,
    project,
    category: categories[index % categories.length],
    image: `/works/gallery/work-${number}.jpg`,
    description: "Selected visual material from product design, AIGC exploration, and project delivery."
  };
});
