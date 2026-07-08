"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { exploreItems } from "../../src/data/exploreItems";

const previewLayout = [
  { x: -380, y: -206, rotate: -18, openX: -470, openY: -250, openRotate: -22 },
  { x: -226, y: -242, rotate: -9, openX: -282, openY: -300, openRotate: -12 },
  { x: -54, y: -254, rotate: 0, openX: -62, openY: -326, openRotate: 0 },
  { x: 122, y: -236, rotate: 9, openX: 168, openY: -296, openRotate: 12 },
  { x: 286, y: -190, rotate: 18, openX: 374, openY: -236, openRotate: 22 },
  { x: -326, y: 210, rotate: 17, openX: -430, openY: 272, openRotate: 22 },
  { x: -156, y: 248, rotate: 8, openX: -214, openY: 326, openRotate: 12 },
  { x: 22, y: 260, rotate: 0, openX: 24, openY: 346, openRotate: 0 },
  { x: 198, y: 240, rotate: -8, openX: 266, openY: 320, openRotate: -12 },
  { x: 358, y: 194, rotate: -18, openX: 462, openY: 258, openRotate: -22 },
  { x: -470, y: 12, rotate: -7, openX: -568, openY: 18, openRotate: -10 },
  { x: 470, y: 14, rotate: 7, openX: 568, openY: 20, openRotate: 10 }
];

export function ExploreTrigger() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const open = () => {
    if (!reduceMotion) setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  return (
    <div className="explore-trigger-wrap" onMouseEnter={open} onMouseLeave={close} onFocus={open} onBlur={close}>
      {!reduceMotion && (
        <motion.div
          className="explore-preview-overlay"
          aria-hidden="true"
          initial={false}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: isOpen ? 0.42 : 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="explore-preview-center"
            animate={{
              opacity: isOpen ? 1 : 0,
              scale: isOpen ? 1 : 0.96,
              y: isOpen ? 0 : 10
            }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>Explore</span>
            <strong>Design Exploration</strong>
            <em>AIGC Sketches</em>
          </motion.div>

          {exploreItems.map((item, index) => {
            const layout = previewLayout[index % previewLayout.length];
            return (
              <motion.div
                className="explore-preview-card"
                key={item.id}
                initial={false}
                animate={{
                  x: isOpen ? layout.openX : layout.x,
                  y: isOpen ? layout.openY : layout.y,
                  rotate: isOpen ? layout.openRotate : layout.rotate,
                  scale: isOpen ? 1 : 0.78,
                  opacity: isOpen ? 0.92 : 0.34,
                  filter: isOpen ? "grayscale(0) brightness(1)" : "grayscale(1) brightness(0.48)"
                }}
                transition={{ duration: 0.64, ease: [0.16, 1, 0.3, 1], delay: index * 0.018 }}
              >
                <img src={item.image} alt="" loading="lazy" />
              </motion.div>
            );
          })}
        </motion.div>
      )}

      <a className="explore-button" href="/explore" aria-label="Open Design Exploration">
        Explore
      </a>
    </div>
  );
}
