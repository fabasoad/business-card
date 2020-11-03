import { Technology, TechnologyProvider } from './types'
import TechnologyProviderDefault from './TechnologyProviderDefault'

export default class TechnologyStorage {
  provider: TechnologyProvider

  constructor(provider: TechnologyProvider = TechnologyProviderDefault) {
    this.provider = provider
  }

  findBySkill(isSkill: boolean): Array<Technology> {
    const result: Array<Technology> = new Array<Technology>()
    for (const technology of this.provider.items.values()) {
      if (technology.isSkill === isSkill) {
        result.push(technology)
      }
    }
    return result
  }

  findByName(name: string): Technology {
    return this.provider.items.has(name)
      ? this.provider.items.get(name)
      : { name, title: name }
  }
}
