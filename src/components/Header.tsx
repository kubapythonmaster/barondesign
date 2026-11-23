import { useEffect, useState } from 'react'
import styles from './Header.module.css'

const links = [
  { href: '#o-nas', id: 'o-nas', label: 'O nas' },
  { href: '#uslugi', id: 'uslugi', label: 'Usługi' },
  { href: '#przebieg', id: 'przebieg', label: 'Przebieg' },
  { href: '#realizacje', id: 'realizacje', label: 'Realizacje' },
  { href: '#faq', id: 'faq', label: 'FAQ' },
]

const sectionIds = [...links.map((l) => l.id), 'kontakt']

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id)
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open
  const close = () => setOpen(false)

  const handleNav = (id: string) => {
    setActive(id)
    close()
  }

  return (
    <>
      <header className={`${styles.header} ${solid ? styles.headerSolid : ''}`}>
        <div className={styles.inner}>
          <a
            href="#top"
            className={styles.logo}
            onClick={() => {
              setActive('')
              close()
            }}
            aria-label="BaronDesign — strona główna"
          >
            <img src="/logo.webp" alt="BaronDesign" className={styles.logoImg} width={38} height={38} />
            <span className={styles.logoText}>
              <span className={styles.logoBaron}>Baron</span>
              <span className={styles.logoDesign}>Design</span>
            </span>
          </a>

          <nav className={styles.nav} aria-label="Główne">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={active === link.id ? styles.active : undefined}
                onClick={() => handleNav(link.id)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <a
              className={`${styles.cta} ${active === 'kontakt' ? styles.ctaActive : ''}`}
              href="#kontakt"
              onClick={() => handleNav('kontakt')}
            >
              Kontakt
            </a>
            <button
              type="button"
              className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobilne">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.id ? styles.mobileActive : undefined}
              onClick={() => handleNav(link.id)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className={active === 'kontakt' ? styles.mobileActive : undefined}
            onClick={() => handleNav('kontakt')}
          >
            Kontakt
          </a>
        </nav>
      </div>
    </>
  )
}
