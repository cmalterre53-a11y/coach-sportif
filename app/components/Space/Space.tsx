import Image from "next/image";
import styles from "./Space.module.css";

const spaces = [
  {
    image:
      "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?w=800&h=1000&fit=crop",
    title: "Le Studio Prive",
    desc: "Un espace lumineux et calme, rien que pour vous. Pas de file d'attente, pas de regard — juste vous et votre objectif.",
    size: "large" as const,
  },
  {
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=500&fit=crop",
    title: "Halteres & Charges Libres",
    desc: "Des halteres de 2 a 40 kg, barres olympiques et kettlebells pour un travail de renforcement complet.",
    size: "small" as const,
  },
  {
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=500&fit=crop",
    title: "Espace Fonctionnel",
    desc: "TRX, bandes elastiques, medecine balls, battle ropes — tout le materiel pour un training dynamique et varie.",
    size: "small" as const,
  },
  {
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=500&fit=crop",
    title: "Zone Cardio",
    desc: "Rameur, velo, corde a sauter et piste de sprint pour des seances cardio qui bougent vraiment.",
    size: "small" as const,
  },
  {
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=500&fit=crop",
    title: "Coin Stretching & Recovery",
    desc: "Tapis, rouleaux de massage, blocs de yoga — un espace dedie a la recuperation et a la mobilite.",
    size: "small" as const,
  },
];

export default function Space() {
  return (
    <section id="space" className={styles.section}>
      <div className={styles.container}>
        <p className="section-label">L&apos;Experience</p>
        <h2 className="section-title">
          Votre futur terrain d&apos;entrainement
        </h2>
        <p className={styles.intro}>
          Imaginez-vous ici. Un cadre pense pour votre progression, des
          equipements professionnels et une ambiance qui vous pousse a vous
          depasser.
        </p>

        <div className={styles.grid}>
          {spaces.map((s) => (
            <div
              key={s.title}
              className={`${styles.card} ${styles[s.size]}`}
            >
              <Image
                src={s.image}
                alt={s.title}
                width={800}
                height={600}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
