"use client";

import { InteractiveTitle } from "./InteractiveTitle";

const contacts = [
  ["Email", "kiki1467189248@gmail.com", "mailto:kiki1467189248@gmail.com"],
  ["ZCOOL", "作品集展示", "/projects"],
  ["RED", "设计过程与项目动态", "#works"],
  ["WeChat", "扫码添加微信", "#top"]
];

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <p className="eyebrow">Contact</p>
        <InteractiveTitle>Let’s build meaningful products.</InteractiveTitle>
        <p>项目合作、设计交流或作品浏览，下面是最直接的入口。</p>
        <div className="contact-grid">
          {contacts.map(([label, value, href]) => (
            <a href={href} key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </a>
          ))}
        </div>
        <button type="button" onClick={() => document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" })}>
          Back to top
        </button>
      </div>
    </section>
  );
}
