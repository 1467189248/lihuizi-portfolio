export type ExploreItem = {
  id: string;
  title: string;
  category: "Sketch" | "AIGC" | "Form Study" | "Process" | "UI";
  image: string;
  description?: string;
};

const categories: ExploreItem["category"][] = ["Sketch", "AIGC", "Form Study", "Process", "UI"];

const titles = [
  "Concept Sketch",
  "AIGC Form Study",
  "Product Direction",
  "Material Mood",
  "Interaction Draft",
  "Structure Thinking",
  "Scenario Board",
  "CMF Trial",
  "Interface Flow",
  "Shape Iteration",
  "Visual Prompt",
  "Process Archive"
];

export const exploreItems: ExploreItem[] = titles.map((title, index) => {
  const number = String(index + 1).padStart(3, "0");

  return {
    id: `explore-${number}`,
    title,
    category: categories[index % categories.length],
    image: `/explore/explore-${number}.jpg`,
    description: "Sketches, AIGC studies, form exploration, and design process fragments."
  };
});
