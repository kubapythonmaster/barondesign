import { images } from './images'

export type Realization = {
  id: string
  src: string
  alt: string
  title: string
  subtitle: string
}

export const realizations: Realization[] = [
  {
    id: 'lazienka-1',
    src: images.lazienka1,
    alt: 'Nowoczesna łazienka z kamiennymi płytkami, kabiną walk-in i miską WC podwieszaną',
    title: 'Łazienki',
    subtitle: 'Płytki i detale',
  },
  {
    id: 'lazienka-2',
    src: images.lazienka2,
    alt: 'Remont łazienki z umywalką, prysznicem walk-in i płytkami kamiennymi',
    title: 'Wykończenie łazienki',
    subtitle: 'Kompletny efekt',
  },
  {
    id: 'prysznic',
    src: images.prysznicIndustrial,
    alt: 'Prysznic z czarną ramą i płytkami w botaniczny wzór',
    title: 'Prysznic',
    subtitle: 'Industrialny detal',
  },
  {
    id: 'sciana',
    src: images.scianaDekoracyjna,
    alt: 'Dekoracyjna ściana z medalionami i fakturą',
    title: 'Ściany dekoracyjne',
    subtitle: 'Faktura i medaliony',
  },
  {
    id: 'medalion',
    src: images.dekorMedalion,
    alt: 'Ornamentalny medalion dekoracyjny na ścianie z betonową fakturą',
    title: 'Detal',
    subtitle: 'Rzemiosło wykończeniowe',
  },
  {
    id: 'wip',
    src: images.lazienkaWip1,
    alt: 'Przygotowanie kabiny prysznicowej — hydroizolacja i pierwszy rząd płytek',
    title: 'Proces',
    subtitle: 'Przygotowanie pod efekt',
  },
  {
    id: 'schody',
    src: images.schodyKonstrukcja,
    alt: 'Konstrukcja schodów betonowych w trakcie realizacji',
    title: 'Konstrukcja',
    subtitle: 'Solidne podstawy',
  },
]
