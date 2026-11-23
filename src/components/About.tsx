import { company } from '../data/company'
import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

const pillars = [
  {
    title: 'Staranność wykonania',
    text: 'Dbamy o powierzchnie, połączenia i detale wykończenia.',
  },
  {
    title: 'Jasne ustalenia',
    text: 'Zakres i wycenę omawiamy przed startem — bez niespodzianek.',
  },
  {
    title: 'Indywidualne podejście',
    text: 'Rozwiązania dobieramy do pomieszczenia i uzgodnionego budżetu.',
  },
]

export function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="section" id="o-nas" aria-labelledby="about-title">
      <div className={`container ${styles.layout} reveal`} ref={ref}>
        <div className={styles.copy}>
          <p className="section-label">
            01 <span>/ O nas</span>
          </p>
          <h2 className="section__title" id="about-title">
            Dobry remont zaczyna się od dobrych ustaleń.
          </h2>
          <p className="section__lead">
            BaronDesign to ekipa remontowo-wykończeniowa: łazienki, glazura, wnętrza
            i dekoracyjne ściany. Remont to Twój dom, czas i budżet — dlatego stawiamy
            na jasny zakres, rzetelną wycenę i dokładność na każdym etapie.
          </p>

          <div className={styles.pillars}>
            {pillars.map((item, i) => (
              <article key={item.title} className={styles.pillar}>
                <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <a className="btn btn--ghost-dark" href={company.phoneHref}>
            Omów swój projekt →
          </a>
        </div>

        <div className={styles.visual}>
          <img
            src="/images/realizations/sciana-dekoracyjna.webp"
            alt="Dekoracyjna ściana — realizacja BaronDesign"
            loading="lazy"
            decoding="async"
            width={900}
            height={1100}
          />
          <aside className={styles.quote}>
            <p className={styles.quoteTitle}>Detal ma znaczenie.</p>
            <p className={styles.quoteText}>
              Przemyślane wykończenie to suma dobrych decyzji i starannej pracy.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
