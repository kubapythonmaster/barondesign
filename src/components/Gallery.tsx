import { useCallback, useEffect, useState } from 'react'
import { company } from '../data/company'
import { realizations } from '../data/realizations'
import { useReveal } from '../hooks/useReveal'
import { Lightbox } from './Lightbox'
import styles from './Gallery.module.css'

export function Gallery() {
  const ref = useReveal<HTMLDivElement>()
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)
  const total = realizations.length
  const current = realizations[index]

  const goTo = useCallback((i: number) => {
    setIndex(((i % total) + total) % total)
  }, [total])

  const prev = () => goTo(index - 1)
  const next = () => goTo(index + 1)

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, 5200)
    return () => window.clearInterval(id)
  }, [paused, total])

  const close = useCallback(() => setLightbox(null), [])
  const lbPrev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + total - 1) % total)),
    [total],
  )
  const lbNext = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % total)),
    [total],
  )

  return (
    <section className="section" id="realizacje" aria-labelledby="gallery-title">
      <div className="container reveal" ref={ref}>
        <div className={styles.head}>
          <div>
            <p className="section-label">
              03 <span>/ Realizacje</span>
            </p>
            <h2 className="section__title" id="gallery-title">
              Realizacje remontów i wykończeń
            </h2>
          </div>
          <a className={styles.headLink} href={company.phoneHref}>
            Masz podobny projekt? →
          </a>
        </div>

        <div
          className={styles.showcase}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            className={styles.stage}
            onClick={() => setLightbox(index)}
            aria-label={`Powiększ: ${current.title}`}
          >
            {realizations.map((item, i) => (
              <img
                key={item.id}
                className={`${styles.slide} ${i === index ? styles.slideActive : ''}`}
                src={item.src}
                alt=""
                width={1400}
                height={900}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            ))}
            <div className={styles.stageFade} aria-hidden="true" />
            <div className={styles.stageInfo}>
              <span className={styles.counter}>
                {String(index + 1).padStart(2, '0')} — {String(total).padStart(2, '0')}
              </span>
              <strong>{current.title}</strong>
              <em>{current.subtitle}</em>
            </div>
          </button>

          <div className={styles.rail}>
            <div className={styles.controls}>
              <button type="button" className={styles.arrow} onClick={prev} aria-label="Poprzednie">
                ‹
              </button>
              <button type="button" className={styles.arrow} onClick={next} aria-label="Następne">
                ›
              </button>
            </div>

            <div className={styles.thumbs} role="tablist" aria-label="Miniatury realizacji">
              {realizations.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.thumb} ${i === index ? styles.thumbActive : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={item.title}
                  aria-current={i === index}
                >
                  <img src={item.src} alt="" width={160} height={100} loading="lazy" decoding="async" />
                </button>
              ))}
            </div>

            <div className={styles.progress} aria-hidden="true">
              <span
                key={index}
                className={`${styles.progressBar} ${paused ? styles.progressPaused : ''}`}
              />
            </div>
          </div>
        </div>
      </div>

      {lightbox !== null && (
        <Lightbox
          items={realizations}
          index={lightbox}
          onClose={close}
          onPrev={lbPrev}
          onNext={lbNext}
        />
      )}
    </section>
  )
}
