"use client";

import { useState } from "react";
import styles from "./page.module.css";

const objectifs = [
  "Perte de poids",
  "Renforcement musculaire",
  "Ameliorer ma posture",
  "Preparation sportive",
  "Remise en forme generale",
  "Gestion du stress",
];

const creneaux = [
  "Matin (7h - 10h)",
  "Midi (12h - 14h)",
  "Apres-midi (14h - 17h)",
  "Soir (17h - 20h)",
];

const niveaux = ["Debutant", "Intermediaire", "Avance"];

export default function Reserver() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedObjectifs, setSelectedObjectifs] = useState<string[]>([]);

  function toggleObjectif(obj: string) {
    setSelectedObjectifs((prev) =>
      prev.includes(obj) ? prev.filter((o) => o !== obj) : [...prev, obj]
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.success}>
            <span className={styles.successIcon}>✓</span>
            <h1 className={styles.successTitle}>Demande envoyee !</h1>
            <p className={styles.successText}>
              Merci pour votre demande. Je reviens vers vous sous 24h pour
              confirmer votre seance et discuter de vos objectifs.
            </p>
            <a href="/" className={styles.backLink}>
              Retour a l&apos;accueil
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <a href="/" className={styles.back}>
          ← Retour
        </a>

        <div className={styles.header}>
          <h1 className={styles.title}>Reserver une seance</h1>
          <p className={styles.subtitle}>
            Remplissez ce formulaire pour que je puisse preparer une seance
            adaptee a vos besoins. Je vous recontacte sous 24h.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Infos personnelles */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Vos coordonnees</legend>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="prenom" className={styles.label}>
                  Prenom *
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  required
                  className={styles.input}
                  placeholder="Votre prenom"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="nom" className={styles.label}>
                  Nom *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  className={styles.input}
                  placeholder="Votre nom"
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={styles.input}
                  placeholder="votre@email.com"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="tel" className={styles.label}>
                  Telephone *
                </label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  required
                  className={styles.input}
                  placeholder="06 12 34 56 78"
                />
              </div>
            </div>
          </fieldset>

          {/* Profil sportif */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Votre profil</legend>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="age" className={styles.label}>
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className={styles.input}
                  placeholder="30"
                  min="14"
                  max="99"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="niveau" className={styles.label}>
                  Niveau sportif *
                </label>
                <select
                  id="niveau"
                  name="niveau"
                  required
                  className={styles.input}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selectionnez votre niveau
                  </option>
                  {niveaux.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="activite" className={styles.label}>
                Activite sportive actuelle
              </label>
              <input
                type="text"
                id="activite"
                name="activite"
                className={styles.input}
                placeholder="Ex: course a pied 2x/semaine, aucune activite..."
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="antecedents" className={styles.label}>
                Blessures ou contraintes medicales
              </label>
              <input
                type="text"
                id="antecedents"
                name="antecedents"
                className={styles.input}
                placeholder="Ex: mal de dos, tendinite au genou, aucune..."
              />
            </div>
          </fieldset>

          {/* Objectifs */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>
              Vos objectifs
            </legend>
            <p className={styles.hint}>
              Selectionnez un ou plusieurs objectifs :
            </p>
            <div className={styles.chips}>
              {objectifs.map((obj) => (
                <button
                  key={obj}
                  type="button"
                  className={`${styles.chip} ${
                    selectedObjectifs.includes(obj) ? styles.chipActive : ""
                  }`}
                  onClick={() => toggleObjectif(obj)}
                >
                  {obj}
                </button>
              ))}
            </div>
            <input
              type="hidden"
              name="objectifs"
              value={selectedObjectifs.join(", ")}
            />
          </fieldset>

          {/* Disponibilites */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Vos disponibilites</legend>
            <div className={styles.field}>
              <label htmlFor="frequence" className={styles.label}>
                Frequence souhaitee *
              </label>
              <select
                id="frequence"
                name="frequence"
                required
                className={styles.input}
                defaultValue=""
              >
                <option value="" disabled>
                  Combien de seances par semaine ?
                </option>
                <option value="1">1 seance / semaine</option>
                <option value="2">2 seances / semaine</option>
                <option value="3">3 seances / semaine</option>
                <option value="4+">4 seances ou plus / semaine</option>
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Creneaux preferes</label>
              <div className={styles.chips}>
                {creneaux.map((c) => (
                  <label key={c} className={styles.checkLabel}>
                    <input
                      type="checkbox"
                      name="creneaux"
                      value={c}
                      className={styles.checkbox}
                    />
                    {c}
                  </label>
                ))}
              </div>
            </div>
          </fieldset>

          {/* Message libre */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Un mot pour moi ?</legend>
            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>
                Decrivez vos attentes, votre motivation ou toute info utile
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={styles.textarea}
                placeholder="Ex: Je souhaite me remettre en forme apres une longue pause, je cherche un coach motivant et a l'ecoute..."
              />
            </div>
          </fieldset>

          <button type="submit" className={styles.submit}>
            Envoyer ma demande
          </button>
        </form>
      </div>
    </main>
  );
}
