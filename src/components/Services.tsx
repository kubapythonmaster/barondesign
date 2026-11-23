import { useState } from 'react'
import { company } from '../data/company'
import { services } from '../data/services'
import { useReveal } from '../hooks/useReveal'
import styles from './Services.module.css'

export function Services() {
  const ref = useReveal<HTMLDivElement>()
  const [active, setActive] = useState(0)
  const current = services[active]

  return (
    <section className={`section section--dark ${styles.section}`} id="uslugi" aria-labelledby="services-title">
      <div className={`container ${styles.layout} reveal`} ref={ref}>
        <aside className={styles.side}>
          <p className="section-label">
            02 <span>/ Usługi</span>
          </p>
          <h2 className="section__title" id="services-title">
            Usługi remontowe i wykończeniowe
          </h2>
          <p className="section__lead">
            Remont łazienki, glazura, wykończenia wnętrz i dekoracyjne ściany —
            wybierz usługę i zobacz zakres prac.
          </p>
          <a className="btn btn--primary" href={company.phoneHref}>
            Omów zakres
          </a>
        </aside>

        <div className={styles.panel}>
          <ul className={styles.tabs}>
            {services.map((service, i) => (
              <li key={service.id}>
                <button
                  type="button"
                  className={`${styles.tab} ${i === active ? styles.tabActive : ''}`}
                  onClick={() => setActive(i)}
                  aria-current={i === active}
                >
                  <span className={styles.tabNum}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.tabTitle}>{service.title}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.detail} key={current.id}>
            <p className={styles.detailLabel}>{current.title}</p>
            <p className={styles.detailText}>{current.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
