import { company } from '../data/company'
import { processSteps } from '../data/process'
import { useReveal } from '../hooks/useReveal'
import styles from './Process.module.css'

export function Process() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className={`section section--dark ${styles.section}`} id="przebieg" aria-labelledby="process-title">
      <div className="container reveal" ref={ref}>
        <div className={styles.head}>
          <div>
            <p className="section-label">
              04 <span>/ Proces</span>
            </p>
            <h2 className="section__title" id="process-title">
              Jak działamy
            </h2>
            <p className="section__lead">
              Od pierwszej rozmowy do odbioru — jasno i bez niespodzianek.
            </p>
          </div>
          <a className="btn btn--primary" href={company.phoneHref}>
            Zacznij od rozmowy
          </a>
        </div>

        <ol className={styles.steps}>
          {processSteps.map((step) => (
            <li key={step.number} className={styles.step}>
              <span className={styles.num} aria-hidden="true">
                {step.number}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
