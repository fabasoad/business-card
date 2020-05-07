import TechnologyStorage from '../../../scripts/technologies/TechnologyStorage'
import {
  Technology,
  TechnologyProvider
} from '../../../scripts/technologies/types'

let technologyStorage: TechnologyStorage
let techs: Array<Technology>

class TechnologyProviderStub implements TechnologyProvider {
  items: Map<string, Technology>

  constructor(techArr: Array<Technology>) {
    this.items = techArr.reduce(
      (map: Map<string, Technology>, t: Technology) => {
        map.set(t.name, t)
        return map
      },
      new Map<string, Technology>()
    )
  }
}

beforeAll(() => {
  techs = new Array<Technology>(
    { name: 'tech-1', isSkill: true },
    { name: 'tech-2', isSkill: false }
  )
  technologyStorage = new TechnologyStorage(new TechnologyProviderStub(techs))
})

test('findByName should works correctly if items are present', () => {
  const actual = technologyStorage.findByName(techs[0].name)
  expect(actual.name).toBe(techs[0].name)
  expect(actual.isSkill).toBe(techs[0].isSkill)
})

test('findByName should works correctly if items are not present', () => {
  const name = 'notExistingName'
  const actual: Technology = technologyStorage.findByName(name)
  expect(actual).not.toBeNull()
  expect(actual.name).toBe(name)
})

test('findBySkill should works correctly if items are present', () => {
  const actual: Technology[] = technologyStorage.findBySkill(false)
  expect(actual.length).toBe(1)
  expect(actual[0].name).toBe(techs[1].name)
  expect(actual[0].isSkill).toBe(techs[1].isSkill)
})

test('findBySkill should works correctly if items are not present', () => {
  const ts = new TechnologyStorage(
    new TechnologyProviderStub([{ name: 'tech-3', isSkill: false }])
  )
  const actual: Technology[] = ts.findBySkill(true)
  expect(actual).not.toBeNull()
  expect(actual.length).toBe(0)
})
