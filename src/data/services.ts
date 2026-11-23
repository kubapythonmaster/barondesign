export type Service = {
  id: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: 'lazienki',
    title: 'Remonty łazienek',
    description:
      'Kompleksowy remont łazienki: hydroizolacja, układanie płytek, wnęki, armatura i biały montaż. Efektem jest łazienka gotowa do codziennego użytkowania — trwała, szczelna i dopracowana w detalach.',
  },
  {
    id: 'wykonczenia',
    title: 'Wykończenia wnętrz',
    description:
      'Wykończenie mieszkań i domów: ściany, sufity, podłogi oraz detale wykończeniowe. Dbamy o spójny efekt od przygotowania podłoża po odbiór bez niedoróbek.',
  },
  {
    id: 'dekor',
    title: 'Dekoracyjne wykończenia ścian',
    description:
      'Faktury, medaliony i artystyczne wykończenia ścian. Detal, który wyróżnia wnętrze, podkreśla charakter przestrzeni i podnosi wartość wykończenia.',
  },
  {
    id: 'glazura',
    title: 'Glazura i gres',
    description:
      'Precyzyjne układanie glazury i gresu — duże formaty, równe fugi i staranne styki. Układ dopasowany do projektu, spadków i warunków pomieszczenia.',
  },
  {
    id: 'przygotowanie',
    title: 'Prace przygotowawcze',
    description:
      'Rozbiórki, skucie starej okładziny, przygotowanie podłoża i porządek na budowie. Czysty, solidny start pod trwałe wykończenie.',
  },
]
