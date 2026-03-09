import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.imageWrap}>
          <Image
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=750&fit=crop"
            alt="Alexandre Morel en coaching"
            width={600}
            height={750}
            className={styles.image}
          />
        </div>
        <div className={styles.text}>
          <p className={styles.label}>La Methode</p>
          <h2 className={styles.title}>
            Une approche globale pour des resultats durables
          </h2>
          <p className={styles.desc}>
            Ma methode repose sur trois piliers fondamentaux : le renforcement
            physique adapte, l&apos;equilibre nutritionnel et la preparation mentale.
            Chaque programme est concu sur-mesure, en fonction de vos objectifs,
            de votre condition physique et de votre style de vie.
          </p>
          <p className={styles.desc}>
            Diplome d&apos;Etat et certifie en nutrition sportive, je vous accompagne
            avec rigueur et bienveillance pour transformer durablement votre
            quotidien.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>8+</span>
              <span className={styles.statLabel}>Annees d&apos;experience</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>300+</span>
              <span className={styles.statLabel}>Clients accompagnes</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>95%</span>
              <span className={styles.statLabel}>Taux de satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
