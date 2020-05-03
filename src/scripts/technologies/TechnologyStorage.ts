import Technology from './Technology'
import TechnologyProvider from './TechnologyProvider'
import TechnologyProviderDefault from './TechnologyProviderDefault'

export default class TechnologyStorage {

  technologyProvider: TechnologyProvider

  constructor(technologyProvider: TechnologyProvider = new TechnologyProviderDefault()) {
    this.technologyProvider = technologyProvider
  }

  findBySkill(isSkill: boolean): Array<Technology> {
    const result: Array<Technology> = new Array<Technology>()
    for (const technology of this.technologyProvider.items.values()) {
      if (technology.isSkill === isSkill) {
        result.push(technology)
      }
    }
    return result
  }

  findByName(name: string): Technology {
    return this.technologyProvider.items.has(name)
      ? this.technologyProvider.items.get(name)
      : new Technology(name)
  }
}