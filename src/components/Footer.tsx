import { company } from '../data/company'
import { images } from '../data/images'
import styles from './Footer.module.css'

const nav = [
  { href: '#o-nas', label: 'O nas' },
  { href: '#uslugi', label: 'Usługi' },
  { href: '#realizacje', label: 'Realizacje' },
  { href: '#przebieg', label: 'Proces' },
  { href: '#faq', label: 'FAQ' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <a href="#top" className={styles.brand} aria-label="BaronDesign">
              <img src={images.logo} alt="BaronDesign" width={44} height={44} loading="lazy" decoding="async" />
              <span className={styles.brandText}>
                <span className={styles.name}>
                  Baron<span className={styles.design}>Design</span>
                </span>
                <span className={styles.slogan}>{company.slogan}</span>
              </span>
            </a>
            <p className={styles.blurb}>
              Remonty łazienek, glazura, wykończenia wnętrz i dekoracyjne ściany.
              Pracujemy dokładnie, czysto i według jasnych ustaleń.
            </p>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>Nawigacja</p>
            <nav className={styles.nav} aria-label="Stopka">
              {nav.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>Kontakt</p>
            <div className={styles.contact}>
              <a href={company.phoneHref}>{company.phone}</a>
              <a href={company.emailHref}>{company.email}</a>
              <a href={company.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </div>
            <a className={styles.cta} href={company.phoneHref}>
              Zapytaj o wycenę →
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} BaronDesign. Wszelkie prawa zastrzeżone.</p>
          <p className={styles.credit}>
            Strona stworzona przez{' '}
            <a
              href="https://nocturagency.pl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Noctura
            </a>
          </p>
          <a href="#top" className={styles.topLink}>
            Do góry ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
