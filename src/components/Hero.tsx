import { useEffect, useState } from 'react'
import { company } from '../data/company'
import { images } from '../data/images'
import styles from './Hero.module.css'

const slides = [
  {
    src: images.lazienka1,
    alt: 'Nowoczesna łazienka — realizacja BaronDesign',
  },
  {
    src: images.lazienka2,
    alt: 'Wykończenie łazienki — realizacja BaronDesign',
  },
  {
    src: images.scianaDekoracyjna,
    alt: 'Dekoracyjna ściana — realizacja BaronDesign',
  },
  {
    src: images.prysznicIndustrial,
    alt: 'Prysznic industrialny — realizacja BaronDesign',
  },
]

const trusts = ['Dbałość o detale', 'Jasne ustalenia', 'Remontujemy z pasją']

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => window.clearInterval(id)
  }, [])

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  return (
    <section className={styles.hero} id="top" aria-label="Wstęp">
      <div className={styles.slider} aria-hidden="true">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            className={`${styles.slide} ${i === index ? styles.slideActive : ''}`}
            src={slide.src}
            alt=""
            width={1200}
            height={900}
            decoding="async"
            fetchPriority={i === 0 ? 'high' : 'low'}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <p className={styles.kicker}>
          <span className={styles.kickerBrand}>
            Baron<span className={styles.kickerGold}>Design</span>
          </span>
          <span className={styles.kickerSep} aria-hidden="true">
            /
          </span>
          <span>{company.slogan}</span>
        </p>

        <h1 className={styles.title}>
          Remonty i wykończenia,
          <br />
          które robią <em>różnicę.</em>
        </h1>

        <p className={styles.lead}>
          Remonty łazienek, glazura, wykończenia wnętrz i dekoracyjne ściany —
          starannie, według jasnych ustaleń i z dbałością o każdy detal.
        </p>

        <div className={styles.ctas}>
          <a className="btn btn--primary" href={company.phoneHref}>
            Porozmawiajmy o remoncie
          </a>
          <a className="btn btn--ghost" href="#realizacje">
            Zobacz galerię
          </a>
        </div>

        <ul className={styles.trust}>
          {trusts.map((item) => (
            <li key={item}>
              <span className={styles.check} aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.arrow} onClick={prev} aria-label="Poprzednie zdjęcie">
          ‹
        </button>
        <div className={styles.dots} role="tablist" aria-label="Slajdy hero">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              aria-label={`Slajd ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button type="button" className={styles.arrow} onClick={next} aria-label="Następne zdjęcie">
          ›
        </button>
      </div>
    </section>
  )
}
