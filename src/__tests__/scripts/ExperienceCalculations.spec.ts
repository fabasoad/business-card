import ExperienceCalculations from '../../scripts/ExperienceCalculations'

interface Fixture {
  title: string
  date: string
  calc: (c: ExperienceCalculations) => string
}

new Array<Fixture>(
  { title: 'agile', date: '2011-10-01', calc: (c) => c.agileHumanize('gb') },
  { title: 'total', date: '2010-03-01', calc: (c) => c.totalHumanize('gb') }
).forEach((f) =>
  test(`should calculate ${f.title} experience correctly`, () => {
    const expected: number = Date.now() - Date.parse(f.date)
    const c = new ExperienceCalculations()
    expect(f.calc(c)).toBe(`${Math.round(expected / 31536000000)} years`)
  })
)
