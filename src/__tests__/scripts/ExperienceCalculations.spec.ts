import ExperienceCalculations from '../../scripts/TotalExperience'

test(`should calculate total experience correctly`, () => {
  const expected: number = Date.now() - Date.parse('2010-03-01')
  const c = new ExperienceCalculations()
  const actual: string[] = c.humanize('gb').split(' ');
  const x: number = expected / 31536000000;
  expect(+actual[0]).toBe(Math.round(x))
  expect(actual[1]).toBe('years')
  expect(+actual[2]).toBe(Math.ceil((x - Math.round(x)) * 12))
  expect(actual[3]).toBe('months')
})
