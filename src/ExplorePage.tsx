import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { exploreItems } from "./data/exploreItems";

export function ExplorePage() {
  return (
    <>
      <Navigation />
      <main className="explore-page">
        <section className="explore-hero">
          <p className="section-kicker">Explore</p>
          <h1>Design Exploration</h1>
          <p>草图、AIGC 造型探索、形态推演与过程实验的集合。</p>
        </section>

        <section className="explore-page-grid" aria-label="Design exploration cards">
          {exploreItems.map((item, index) => (
            <motion.article
              className="explore-page-card"
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.035, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div>
                <span>{item.category}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </section>
      </main>
    </>
  );
}
