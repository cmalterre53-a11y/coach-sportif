import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Sophie L.",
    role: "Cadre dirigeante",
    text: "Alexandre a completement transforme ma routine sportive. Son approche personnalisee et sa bienveillance m'ont permis de retrouver confiance et energie au quotidien.",
    stars: 5,
  },
  {
    name: "Thomas R.",
    role: "Entrepreneur",
    text: "Apres 6 mois de coaching, les resultats sont au-dela de mes attentes. La methode d'Alexandre est structuree, motivante et adaptee a mon rythme de vie intense.",
    stars: 5,
  },
  {
    name: "Marie D.",
    role: "Professeure de yoga",
    text: "Un coach qui sait ecouter et s'adapter. Alexandre combine parfaitement performance et bien-etre. Je le recommande sans hesitation a tous mes proches.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className={styles.star}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <p className="section-label">Temoignages</p>
        <h2 className="section-title">Ce que disent mes clients</h2>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <Stars count={t.stars} />
              <p className={styles.text}>{t.text}</p>
              <div className={styles.author}>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.role}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
