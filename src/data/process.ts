export type ProcessStep = {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Poznajmy projekt',
    description:
      'Opowiedz, co chcesz wyremontować i jaki efekt planujesz. Od razu wiesz, czy bierzemy temat.',
  },
  {
    number: '02',
    title: 'Ustalmy zakres',
    description:
      'Omawiamy prace, materiały, oczekiwania i istotne szczegóły realizacji — na miejscu albo zdalnie.',
  },
  {
    number: '03',
    title: 'Przygotujmy wycenę',
    description:
      'Na podstawie ustaleń określamy zakres i koszt do akceptacji przed startem. Bez ukrytych pozycji.',
  },
  {
    number: '04',
    title: 'Przejdźmy do pracy',
    description:
      'Realizujemy uzgodnione prace, dbając o staranność, porządek i bieżącą komunikację.',
  },
]
