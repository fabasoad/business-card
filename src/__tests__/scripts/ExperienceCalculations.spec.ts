import ExperienceCalculations from '../../scripts/ExperienceCalculations'

test(`should calculate total experience correctly`, () => {
  const expected: number = Date.now() - Date.parse('2010-03-01')
  const c = new ExperienceCalculations()
  expect(c.totalHumanize('gb')).toBe(`${Math.round(expected / 31536000000)} years`)
})
