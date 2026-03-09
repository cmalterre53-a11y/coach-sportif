import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrap}>
        <Image
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1400&h=900&fit=crop&crop=top"
          alt="Coach sportif en seance d'entrainement"
          width={1400}
          height={900}
          className={styles.image}
          priority
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.label}>Coach Sportif a Paris</p>
        <h1 className={styles.title}>
          Transformez votre corps,
          <br />
          <span className={styles.titleAccent}>liberez votre potentiel</span>
        </h1>
        <p className={styles.subtitle}>
          Un accompagnement personnalise pour atteindre vos objectifs de forme
          et de bien-etre. Methode holistique alliant renforcement, nutrition
          et mental.
        </p>
        <div className={styles.buttons}>
          <a href="/reserver" className={styles.btnPrimary}>
            Reserver une seance
          </a>
          <a href="#space" className={styles.btnSecondary}>
            Decouvrir l&apos;espace
          </a>
        </div>
      </div>
    </section>
  );
}
