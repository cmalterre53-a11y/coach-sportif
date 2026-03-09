import styles from "./Services.module.css";

const services = [
  {
    icon: "💪",
    title: "Renforcement musculaire",
    desc: "Programmes personnalises pour developper votre masse musculaire et votre force fonctionnelle.",
  },
  {
    icon: "⚡",
    title: "HIIT & Cardio",
    desc: "Seances haute intensite pour bruler des calories et ameliorer votre endurance cardiovasculaire.",
  },
  {
    icon: "🧘",
    title: "Stretching & Mobilite",
    desc: "Ameliorez votre souplesse, reduisez les tensions et prevenez les blessures au quotidien.",
  },
  {
    icon: "🏃",
    title: "Correction posturale",
    desc: "Analyse et correction de votre posture pour eliminer les douleurs et desequilibres.",
  },
  {
    icon: "🥗",
    title: "Conseil nutritionnel",
    desc: "Plans alimentaires adaptes a vos objectifs, sans regime restrictif ni frustration.",
  },
  {
    icon: "🏋️",
    title: "Preparation sportive",
    desc: "Preparation physique specifique pour vos objectifs sportifs : marathon, competition, defi personnel.",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>Services</p>
        <h2 className={styles.title}>Un coaching adapte a vos objectifs</h2>

        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.title} className={styles.card}>
              <span className={styles.icon}>{s.icon}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
