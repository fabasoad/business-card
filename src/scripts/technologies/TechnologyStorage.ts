import Technology from './Technology';
import TechnologyProvider from './TechnologyProvider';
import TechnologyProviderDefault from './TechnologyProviderDefault';

export default class TechnologyStorage {

  technologyProvider : TechnologyProvider;

  constructor(technologyProvider : TechnologyProvider = new TechnologyProviderDefault()) {
    this.technologyProvider = technologyProvider;
  }

  getBySkill(isSkill : boolean) : Technology[] {
    const result : Technology[] = [];
    for (const technology of this.technologyProvider.items.values()) {
      if (technology.isSkill === isSkill) {
        result.push(technology);
      }
    }
    return result;
  }

  getByName(name : string) : Technology {
    return this.technologyProvider.items.has(name) ? this.technologyProvider.items.get(name) : new Technology(name);
  }
}