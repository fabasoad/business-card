import TotalExperience from '../../scripts/TotalExperience'

test(`should calculate total experience correctly`, () => {
  const c = new TotalExperience(() => new Date(2012, 6, 1))
  const actual: string[] = c.humanize('gb').split(' ')
  expect<number>(actual.length).toBe(4)
  expect<number>(+actual[0]).toBe(2)
  expect<string>(actual[1]).toBe('years')
  expect<number>(+actual[2]).toBe(4)
  expect<string>(actual[3]).toBe('months')
})
