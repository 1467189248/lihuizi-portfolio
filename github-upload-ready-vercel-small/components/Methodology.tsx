import { methodology } from "../data/projects";
import { InteractiveTitle } from "./InteractiveTitle";

export function Methodology() {
  return (
    <section className="about-method" id="about">
      <div className="about-method-head">
        <div>
          <p className="eyebrow">About</p>
          <InteractiveTitle>
            让想象落地
          </InteractiveTitle>
        </div>
        <p>
          我是一名工业产品设计师，也是一名正在承担设计管理职责的设计负责人。
          我关注产品从需求定义、用户研究、形态策略、结构协同到最终交付的完整链路。
          相比只展示最终效果，我更重视设计背后的判断：为什么这样定义问题，为什么这样处理比例、材料、交互和场景，
          以及如何让一个方案真正被客户理解、被团队执行、被市场接受。
        </p>
      </div>

      <div className="method-title-row">
        <InteractiveTitle as="h3">从概念到产品</InteractiveTitle>
        <p>策略、生成、渲染与后期整合成一套轻量且完整的视觉生产流程</p>
      </div>

      <div className="method-grid">
        {methodology.map((item) => (
          <article key={item.index}>
            <h4>{item.index} / {item.title}</h4>
            <p>{item.desc}</p>
            <ul>
              {item.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
