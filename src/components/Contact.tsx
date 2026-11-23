import { company } from '../data/company'
import { images } from '../data/images'
import { useReveal } from '../hooks/useReveal'
import styles from './Contact.module.css'

const channels = [
  {
    label: 'Telefon',
    value: company.phone,
    href: company.phoneHref,
  },
  {
    label: 'E-mail',
    value: company.email,
    href: company.emailHref,
  },
  {
    label: 'Facebook',
    value: 'BaronDesign',
    href: company.facebook,
    external: true,
  },
] as const

export function Contact() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className={styles.section} id="kontakt" aria-labelledby="contact-title">
      <div className={`container ${styles.layout} reveal`} ref={ref}>
        <div className={styles.visual}>
          <img
            src={images.lazienka1}
            alt="Realizacja łazienki BaronDesign"
            loading="lazy"
            decoding="async"
            width={900}
            height={1100}
          />
          <div className={styles.visualOverlay} aria-hidden="true" />
          <div className={styles.visualCaption}>
            <p>BaronDesign</p>
            <span>{company.slogan}</span>
          </div>
        </div>

        <div className={styles.copy}>
          <p className={styles.label}>07 / Kontakt</p>
          <h2 className={styles.title} id="contact-title">
            Porozmawiajmy
            <br />
            o remoncie.
          </h2>
          <p className={styles.lead}>
            Bez formularza. Zadzwoń albo napisz — ustalimy zakres, termin i wycenę.
          </p>

          <a className={styles.phone} href={company.phoneHref}>
            <span className={styles.phoneLabel}>Zadzwoń teraz</span>
            <span className={styles.phoneNumber}>{company.phone}</span>
          </a>

          <ul className={styles.channels}>
            {channels.map((item) => (
              <li key={item.label}>
                <a
                  className={styles.channel}
                  href={item.href}
                  {...('external' in item && item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <span className={styles.channelLabel}>{item.label}</span>
                  <span className={styles.channelValue}>{item.value}</span>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
