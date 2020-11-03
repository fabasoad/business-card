import TechnologyStorage from '../../../scripts/technologies/TechnologyStorage'
import { Technology } from '../../../scripts/technologies/types'

let technologyStorage: TechnologyStorage

beforeAll(() => {
  technologyStorage = new TechnologyStorage({
    items: new Map<string, Technology>([
      ['tech-1', { name: 'tech-1', title: 'Tech 1', isSkill: true }],
      ['tech-2', { name: 'tech-2', title: 'Tech 2', isSkill: false }]
    ])
  })
})

test('findByName should works correctly if items are present', () => {
  const actual: Technology = technologyStorage.findByName('tech-1')
  expect(actual.name).toBe('tech-1')
  expect(actual.title).toBe('Tech 1')
  expect(actual.isSkill).toBe(true)
})

test('findByName should works correctly if items are not present', () => {
  const name = 'notExistingName'
  const actual: Technology = technologyStorage.findByName(name)
  expect(actual).not.toBeNull()
  expect(actual.name).toBe(name)
  expect(actual.title).toBe(name)
})

test('findBySkill should works correctly if items are present', () => {
  const actual: Technology[] = technologyStorage.findBySkill(false)
  expect(actual.length).toBe(1)
  expect(actual[0].name).toBe('tech-2')
  expect(actual[0].title).toBe('Tech 2')
  expect(actual[0].isSkill).toBe(false)
})

test('findBySkill should works correctly if items are not present', () => {
  const ts = new TechnologyStorage({
    items: new Map<string, Technology>([
      ['tech-3', { name: 'tech-3', title: 'Tech 3', isSkill: false }]
    ])
  })
  const actual: Technology[] = ts.findBySkill(true)
  expect(actual).not.toBeNull()
  expect(actual.length).toBe(0)
})
