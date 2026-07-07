import { workflowSteps } from "../data/projects";
import { InteractiveTitle } from "./InteractiveTitle";

export function AIWorkflow() {
  return (
    <section className="workflow-section" id="workflow">
      <div className="workflow-card">
        <p className="eyebrow">AI Workflow</p>
        <InteractiveTitle>
          AI 不是替代设计判断，而是放大设计推演效率。
        </InteractiveTitle>
        <p>
          我把 AI 放在设计流程中更靠前的位置，用它快速扩展方向、验证视觉可能性、建立沟通素材，
          再回到产品逻辑、结构边界、用户体验和商业目标里做判断。
        </p>
        <div className="workflow-steps">
          {workflowSteps.map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
