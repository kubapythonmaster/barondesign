import { company } from '../data/company'
import { useReveal } from '../hooks/useReveal'
import styles from './CtaBanner.module.css'

export function CtaBanner() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className={styles.banner} aria-labelledby="cta-title">
      <div className={styles.bg} aria-hidden="true">
        <img
          src="/images/realizations/prysznic-industrial.webp"
          alt=""
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
        />
        <div className={styles.overlay} />
      </div>

      <span className={styles.letter} aria-hidden="true">
        B
      </span>

      <div className={`container ${styles.inner} reveal`} ref={ref}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>05 / Następny krok</p>
          <h2 id="cta-title">Twój pomysł. Nasze wykonanie.</h2>
          <p>
            Opowiedz nam o planowanym remoncie — wspólnie ustalimy, od czego zacząć.
          </p>
        </div>
        <a className={styles.btn} href={company.phoneHref}>
          Zapytaj o wycenę →
        </a>
      </div>
    </section>
  )
}
