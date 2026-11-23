import { useEffect, useId } from 'react'
import type { Realization } from '../data/realizations'
import styles from './Lightbox.module.css'

type Props = {
  items: Realization[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ items, index, onClose, onPrev, onNext }: Props) {
  const titleId = useId()
  const item = items[index]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onPrev, onNext])

  if (!item) return null

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <button type="button" className={styles.close} aria-label="Zamknij" onClick={onClose}>
        ✕
      </button>

      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={`${styles.navBtn} ${styles.prev}`} aria-label="Poprzednie" onClick={onPrev}>
          ‹
        </button>
        <button type="button" className={`${styles.navBtn} ${styles.next}`} aria-label="Następne" onClick={onNext}>
          ›
        </button>

        <figure className={styles.figure}>
          <img src={item.src} alt={item.alt} width={1600} height={1200} />
          <figcaption className={styles.caption} id={titleId}>
            {item.title} · {index + 1} / {items.length}
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
