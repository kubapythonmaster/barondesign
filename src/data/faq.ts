export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: 'wycena',
    question: 'Jak uzyskać wycenę remontu łazienki lub wykończenia?',
    answer:
      'Zadzwoń pod +48 661 273 323 lub napisz na barondesignn@gmail.com. Opisz zakres prac oraz — jeśli możesz — metraż i planowany termin. Na tej podstawie ustalimy kolejne kroki i przygotujemy indywidualną wycenę bez ukrytych pozycji.',
  },
  {
    id: 'zakres',
    question: 'Czy robicie tylko kompleksowe remonty, czy też pojedyncze prace?',
    answer:
      'Wykonujemy zarówno pojedyncze prace — remont łazienki, glazurę, dekoracyjne ściany — jak i szersze wykończenia wnętrz. Zakres dopasowujemy do potrzeb lokalu i budżetu.',
  },
  {
    id: 'przygotowanie',
    question: 'Co warto przygotować przed rozmową o remoncie?',
    answer:
      'Krótki opis prac, przybliżony metraż oraz oczekiwany termin. Pomocne będą zdjęcia pomieszczenia lub projekt. Im więcej szczegółów, tym szybciej przygotujemy wycenę.',
  },
  {
    id: 'materialy',
    question: 'Czy pomagacie w doborze płytek i materiałów wykończeniowych?',
    answer:
      'Tak. Doradzamy przy wyborze płytek, armatury i wykończeń pod kątem trwałości, montażu i spójnego efektu. Decyzje podejmujesz Ty — my dbamy, żeby wszystko dobrze się złożyło na budowie.',
  },
  {
    id: 'termin',
    question: 'Jak długo trwa remont łazienki lub wykończenie wnętrza?',
    answer:
      'Termin zależy od zakresu prac i dostępności materiałów. Harmonogram ustalamy przed startem i informujemy o ewentualnych zmianach na bieżąco — bez niespodzianek na końcu.',
  },
]
