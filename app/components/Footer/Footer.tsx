import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <h3 className={styles.logo}>Alexandre Morel</h3>
          <p className={styles.desc}>
            Coach sportif certifie a Paris. Accompagnement personnalise pour
            transformer votre corps et votre esprit.
          </p>
          <div className={styles.social}>
            <a href="#" aria-label="Instagram" className={styles.socialLink}>
              Instagram
            </a>
            <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
              LinkedIn
            </a>
            <a href="#" aria-label="YouTube" className={styles.socialLink}>
              YouTube
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navigation</h4>
          <nav className={styles.nav}>
            <a href="#about">A propos</a>
            <a href="#services">Services</a>
            <a href="#testimonials">Temoignages</a>
            <a href="#blog">Blog</a>
          </nav>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <div className={styles.contactInfo}>
            <p>contact@alexandremorel.fr</p>
            <p>+33 6 12 34 56 78</p>
            <p>Paris, France</p>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          &copy; {new Date().getFullYear()} Alexandre Morel. Tous droits
          reserves.
        </p>
      </div>
    </footer>
  );
}
