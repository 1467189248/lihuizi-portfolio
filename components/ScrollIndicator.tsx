"use client";

const indicatorItems = [
  ["封面", "#top"],
  ["切片", "#archive"],
  ["经历", "#experience"],
  ["作品", "#works"],
  ["优势", "#strengths"],
  ["联系", "#contact"]
];

type ScrollIndicatorProps = {
  active: number;
};

export function ScrollIndicator({ active }: ScrollIndicatorProps) {
  return (
    <nav className="scroll-indicator" aria-label="页面滑动位置">
      {indicatorItems.map(([label, href], index) => (
        <a className={active === index ? "is-active" : ""} href={href} key={href} aria-label={label} />
      ))}
    </nav>
  );
}

export { indicatorItems };
