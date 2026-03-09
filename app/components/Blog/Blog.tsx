import Image from "next/image";
import styles from "./Blog.module.css";

const articles = [
  {
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    category: "Entrainement",
    date: "15 Fev 2025",
    title: "5 exercices essentiels pour renforcer votre dos",
    excerpt:
      "Decouvrez les mouvements cles pour prevenir les douleurs dorsales et ameliorer votre posture au quotidien.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    category: "Nutrition",
    date: "8 Fev 2025",
    title: "Comment equilibrer ses repas avant et apres le sport",
    excerpt:
      "Les bases de la nutrition sportive pour optimiser vos performances et votre recuperation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    category: "Bien-etre",
    date: "1 Fev 2025",
    title: "L'importance du sommeil dans la progression sportive",
    excerpt:
      "Pourquoi dormir suffisamment est aussi important que l'entrainement lui-meme pour atteindre vos objectifs.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className={styles.section}>
      <div className={styles.container}>
        <p className="section-label">Blog</p>
        <h2 className="section-title">Conseils & Actualites</h2>

        <div className={styles.grid}>
          {articles.map((a) => (
            <article key={a.title} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={a.image}
                  alt={a.title}
                  width={600}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.category}>{a.category}</span>
                  <span className={styles.date}>{a.date}</span>
                </div>
                <h3 className={styles.title}>{a.title}</h3>
                <p className={styles.excerpt}>{a.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
