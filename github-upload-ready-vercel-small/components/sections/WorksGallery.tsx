import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { WorkGalleryCard } from "../cards/WorkGalleryCard";
import { GalleryLightbox } from "../ui/GalleryLightbox";
import {
  WorkGalleryItem,
  workGalleryCategories,
  workGalleryItems
} from "../../src/data/workGallery";

type GalleryCategory = (typeof workGalleryCategories)[number];

export function WorksGallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [activeItem, setActiveItem] = useState<WorkGalleryItem | null>(null);

  const visibleItems = useMemo(() => {
    if (activeCategory === "All") return workGalleryItems;
    return workGalleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const activeIndex = activeItem ? visibleItems.findIndex((item) => item.id === activeItem.id) : -1;

  const showNext = () => {
    if (!visibleItems.length) return;
    const nextIndex = activeIndex < 0 ? 0 : (activeIndex + 1) % visibleItems.length;
    setActiveItem(visibleItems[nextIndex]);
  };

  const showPrev = () => {
    if (!visibleItems.length) return;
    const prevIndex = activeIndex < 0 ? 0 : (activeIndex - 1 + visibleItems.length) % visibleItems.length;
    setActiveItem(visibleItems[prevIndex]);
  };

  return (
    <main className="works-gallery-page">
      <motion.section
        className="works-gallery-hero"
        initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="section-kicker">Selected Works</p>
        <h1>项目图片合集</h1>
        <p>
          整理我参与和主导过的产品设计、AIGC 探索、工业设备、智能硬件与项目落地过程中的关键视觉成果。
        </p>
      </motion.section>

      <section className="works-gallery-shell" aria-label="Project image gallery">
        <div className="works-gallery-filters" aria-label="Gallery filters">
          {workGalleryCategories.map((category) => (
            <button
              className={category === activeCategory ? "active" : ""}
              type="button"
              key={category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div className="works-gallery-grid" layout>
          {visibleItems.map((item) => (
            <motion.div key={item.id} layout>
              <WorkGalleryCard item={item} onOpen={setActiveItem} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <GalleryLightbox
        items={visibleItems}
        activeItem={activeItem}
        onClose={() => setActiveItem(null)}
        onNext={showNext}
        onPrev={showPrev}
      />
    </main>
  );
}
