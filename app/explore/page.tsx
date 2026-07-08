import { exploreItems } from "../../src/data/exploreItems";

export default function ExplorePage() {
  return (
    <main className="explore-page">
      <section className="explore-hero">
        <p className="section-kicker">Explore</p>
        <h1>Design Exploration</h1>
        <p>草图、AIGC 造型探索、形态推演与过程实验的集合。</p>
      </section>

      <section className="explore-page-grid" aria-label="Design exploration cards">
        {exploreItems.map((item) => (
          <article className="explore-page-card" key={item.id}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <div>
              <span>{item.category}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
