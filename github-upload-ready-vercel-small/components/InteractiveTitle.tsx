"use client";

import type { PointerEvent, ReactNode } from "react";

type InteractiveTitleProps = {
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
  dataText?: string;
};

export function InteractiveTitle({
  as: Tag = "h2",
  children,
  className = "",
  dataText
}: InteractiveTitleProps) {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--title-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--title-y", `${event.clientY - rect.top}px`);
    event.currentTarget.dataset.glow = "active";
  };

  const handlePointerLeave = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.dataset.glow = "";
  };

  return (
    <Tag
      className={`interactive-title ${className}`}
      data-text={dataText ?? (typeof children === "string" ? children : undefined)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </Tag>
  );
}
