import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <p className={styles.label}>Coach Sportif a Paris</p>
          <h1 className={styles.title}>
            Votre corps merite
            <br />
            <em className={styles.titleItalic}>une attention particuliere</em>
          </h1>
          <p className={styles.subtitle}>
            Coaching personnalise alliant renforcement, equilibre nutritionnel
            et bien-etre. Un accompagnement sur-mesure, a votre rythme.
          </p>
          <div className={styles.buttons}>
            <a href="/reserver" className={styles.btnPrimary}>
              Prendre rendez-vous
            </a>
            <a href="#space" className={styles.btnSecondary}>
              En savoir plus
            </a>
          </div>
        </div>

        <div className={styles.imageCol}>
          <div className={styles.imageDecor} />
          <div className={styles.imageWrap}>
            <Image
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=1000&fit=crop&q=90"
              alt="Coach sportif en seance d'entrainement"
              width={800}
              height={1000}
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
