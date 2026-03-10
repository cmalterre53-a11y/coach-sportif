import styles from "./Parcours.module.css";

const stats = [
  { number: "8+", label: "annees d'experience" },
  { number: "300+", label: "clients accompagnes" },
  { number: "5", label: "certifications" },
];

const diplomes = [
  {
    annee: "2020",
    titre: "Certification Nutrition Sportive",
    lieu: "Institut de Nutrition du Sport, Paris",
  },
  {
    annee: "2019",
    titre: "Posturologie & Correction Posturale",
    lieu: "CFPC, Lyon",
  },
  {
    annee: "2017",
    titre: "DEJEPS — Education Populaire et du Sport",
    lieu: "CREPS Ile-de-France",
  },
  {
    annee: "2016",
    titre: "BPJEPS — Haltero-Musculation",
    lieu: "CREPS Ile-de-France",
  },
  {
    annee: "2015",
    titre: "Licence STAPS — Entrainement Sportif",
    lieu: "Universite Paris-Saclay",
  },
];

const experience = [
  {
    periode: "2021 — Aujourd'hui",
    poste: "Coach independant",
    description:
      "Coaching prive a domicile et en studio. Plus de 200 clients accompagnes en renforcement, perte de poids et preparation physique.",
  },
  {
    periode: "2018 — 2021",
    poste: "Coach referent — Fitness Park, Paris 11e",
    description:
      "Encadrement de cours collectifs (HIIT, renforcement, stretching) et suivi personnalise de 80+ adherents.",
  },
  {
    periode: "2016 — 2018",
    poste: "Preparateur physique — Club d'athletisme",
    description:
      "Preparation physique de sportifs en competition. Planification d'entrainement et prevention des blessures.",
  },
];

export default function Parcours() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.label}>Parcours</p>
          <h2 className={styles.sectionTitle}>
            Diplomes & Experience
          </h2>
          <p className={styles.intro}>
            Une formation solide et une experience terrain pour vous offrir un
            accompagnement de qualite, en toute confiance.
          </p>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNumber}>{s.number}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Colonnes diplomes + experience */}
        <div className={styles.grid}>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Formation</h3>
            <div className={styles.cards}>
              {diplomes.map((d) => (
                <div key={d.titre} className={styles.card}>
                  <span className={styles.cardAnnee}>{d.annee}</span>
                  <div>
                    <p className={styles.cardTitre}>{d.titre}</p>
                    <p className={styles.cardLieu}>{d.lieu}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Experience</h3>
            <div className={styles.cards}>
              {experience.map((e) => (
                <div key={e.poste} className={styles.cardExp}>
                  <span className={styles.cardPeriode}>{e.periode}</span>
                  <p className={styles.cardPoste}>{e.poste}</p>
                  <p className={styles.cardDesc}>{e.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
