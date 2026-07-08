"use client";

import { motion, type MotionStyle, type MotionValue } from "framer-motion";
import type { RefObject } from "react";
import { archiveRows } from "../data/projects";
import { InteractiveTitle } from "./InteractiveTitle";

const archiveTags = [
  "Product Strategy",
  "Industrial Design",
  "AI Workflow",
  "Design Leadership",
  "Prototype Validation",
  "CMF / Structure / UX"
];

type VisualSliceWallProps = {
  sectionRef: RefObject<HTMLElement | null>;
  workX: MotionValue<string>;
  workY: MotionValue<string>;
  scale: MotionValue<number>;
  y: MotionValue<number>;
  onPointerLeave: () => void;
};

type ArchiveMotionStyle = MotionStyle & {
  "--work-x": MotionValue<string>;
  "--work-y": MotionValue<string>;
};

export function VisualSliceWall({ sectionRef, workX, workY, scale, y, onPointerLeave }: VisualSliceWallProps) {
  return (
    <motion.section
      ref={sectionRef}
      className="visual-archive"
      id="work"
      onPointerLeave={onPointerLeave}
      style={{ "--work-x": workX, "--work-y": workY } as ArchiveMotionStyle}
    >
      <div className="archive-head">
        <div>
          <p className="eyebrow">Design Archive</p>
          <InteractiveTitle>设计切片</InteractiveTitle>
        </div>
        <div className="archive-copy">
          <p>把产品、结构、场景与策略拆成连续的设计索引，快速进入不同项目方向。</p>
          <a href="/projects">查看项目详情模板</a>
        </div>
      </div>

      <motion.div className="archive-stage" style={{ scale, y }}>
        <div className="archive-glow" aria-hidden="true" />
        <div className="slice-wall" aria-hidden="true">
          {archiveRows.map((row, rowIndex) => (
            <div className="slice-row" key={rowIndex}>
              {[...row, ...row].map((label, index) => (
                <span className="slice-tile" key={`${rowIndex}-${label}-${index}`}>
                  <em>{label}</em>
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className="work-product" aria-hidden="true">
          <span className="work-product-body" />
          <span className="work-product-screen" />
          <span className="work-product-lens" />
          <span className="work-product-foot" />
        </div>

        <div className="work-tags" aria-hidden="true">
          {archiveTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
