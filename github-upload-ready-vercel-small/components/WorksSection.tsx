import { featuredProject, projectCategories, projects } from "../data/projects";
import { InteractiveTitle } from "./InteractiveTitle";

export function WorksSection() {
  return (
    <section className="collection-section" id="works">
      <div className="collection-heading">
        <p className="eyebrow">Selected Works</p>
        <InteractiveTitle>精选项目</InteractiveTitle>
      </div>

      <div className="collection-tabs" aria-label="作品分类">
        {projectCategories.map((category) => (
          <button type="button" className={category === "All" ? "is-active" : ""} key={category}>
            {category}
          </button>
        ))}
      </div>

      <article className="collection-card">
        <a className="collection-view" href={`/projects/${featuredProject.slug}`}>View ↗</a>
        <div className="collection-visual" aria-hidden="true">
          <span className="collection-person" />
          <span className="collection-hand" />
          <span className="collection-device" />
          <span className="collection-lens lens-one" />
          <span className="collection-lens lens-two" />
          <span className="collection-lens lens-three" />
        </div>
        <div className="collection-copy">
          <div className="collection-tags">
            {featuredProject.tags.slice(0, 3).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <h2>{featuredProject.title}</h2>
          <p>{featuredProject.subtitle}</p>
          <small>{featuredProject.tags.join(" / ")}</small>
        </div>
      </article>

      <div className="work-card-grid">
        {projects.map((project, index) => (
          <article className="work-card" key={project.slug}>
            <a className="work-card-view" href={`/projects/${project.slug}`}>View ↗</a>
            <div className="work-card-visual" aria-hidden="true">
              <span className={`work-card-object object-${index + 1}`} />
            </div>
            <div className="work-card-copy">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
