import { useState } from 'react'
import { company } from '../data/company'
import { faqItems } from '../data/faq'
import { useReveal } from '../hooks/useReveal'
import styles from './Faq.module.css'

export function Faq() {
  const ref = useReveal<HTMLDivElement>()
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null)

  return (
    <section className={`section section--dark ${styles.section}`} id="faq" aria-labelledby="faq-title">
      <div className={`container ${styles.wrap} reveal`} ref={ref}>
        <header className={styles.head}>
          <div>
            <p className="section-label">
              06 <span>/ FAQ</span>
            </p>
            <h2 className="section__title" id="faq-title">
              Pytania przed startem
            </h2>
          </div>
          <a className={styles.ask} href={company.phoneHref}>
            Nie ma Twojego? Zadzwoń →
          </a>
        </header>

        <div className={styles.list}>
          {faqItems.map((item) => {
            const isOpen = openId === item.id
            return (
              <div key={item.id} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                <button
                  type="button"
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  {item.question}
                  <span className={styles.icon} aria-hidden="true" />
                </button>
                <div className={styles.panel}>
                  <div className={styles.panelInner}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
