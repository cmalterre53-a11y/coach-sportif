"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { label: "A propos", href: "#about" },
  { label: "Temoignages", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          Alexandre Morel
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/reserver"
            className={styles.navCta}
            onClick={() => setMenuOpen(false)}
          >
            Reserver
          </a>
        </nav>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
