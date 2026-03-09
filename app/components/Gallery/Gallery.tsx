import Image from "next/image";
import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.large}>
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=1000&fit=crop"
              alt="Seance de coaching en salle"
              width={800}
              height={1000}
              className={styles.image}
            />
          </div>
          <div className={styles.small}>
            <Image
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=480&fit=crop"
              alt="Entrainement avec halteres"
              width={600}
              height={480}
              className={styles.image}
            />
          </div>
          <div className={styles.small}>
            <Image
              src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=480&fit=crop"
              alt="Exercice de stretching"
              width={600}
              height={480}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
