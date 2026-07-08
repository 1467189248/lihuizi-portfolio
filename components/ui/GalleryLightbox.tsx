import { AnimatePresence, motion } from "framer-motion";
import { WorkGalleryItem } from "../../src/data/workGallery";

type GalleryLightboxProps = {
  items: WorkGalleryItem[];
  activeItem: WorkGalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export function GalleryLightbox({ items, activeItem, onClose, onNext, onPrev }: GalleryLightboxProps) {
  const activeIndex = activeItem ? items.findIndex((item) => item.id === activeItem.id) : -1;

  return (
    <AnimatePresence>
      {activeItem && (
        <motion.div
          className="gallery-lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          <button className="gallery-lightbox-close" type="button" onClick={onClose} aria-label="Close preview">
            Close
          </button>
          <button className="gallery-lightbox-nav prev" type="button" onClick={onPrev} aria-label="Previous image">
            Prev
          </button>
          <motion.figure
            className="gallery-lightbox-panel"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.985 }}
            transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={activeItem.image} alt={activeItem.title} />
            <figcaption>
              <span>{activeItem.category}</span>
              <strong>{activeItem.title}</strong>
              <em>{activeItem.project}</em>
              <small>
                {activeIndex + 1} / {items.length}
              </small>
            </figcaption>
          </motion.figure>
          <button className="gallery-lightbox-nav next" type="button" onClick={onNext} aria-label="Next image">
            Next
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
