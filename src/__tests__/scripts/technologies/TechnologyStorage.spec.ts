import TechnologyProvider from '../../../scripts/technologies/TechnologyProvider';
import TechnologyStorage from '../../../scripts/technologies/TechnologyStorage';
import Technology from '../../../scripts/technologies/Technology';

let technologyStorage : TechnologyStorage;
let techs : any[];

class TechnologyProviderStub implements TechnologyProvider {
  
  items : Map<string, Technology>;

  constructor(techArr : any[]) {
    this.items = new Map<string, Technology>();
    techArr.forEach(t => this.items.set(t[0], new Technology(t[0], null, t[1])));
  }
}

beforeAll(() => {
  techs = [['tech-1', true], ['tech-2', false]];
  technologyStorage = new TechnologyStorage(new TechnologyProviderStub(techs));
});

test('TechnologyStorage should return Technology by name correctly', () => {
  const actual = technologyStorage.getByName(techs[0][0]);
  expect(actual.name).toBe(techs[0][0]);
  expect(actual.isSkill).toBe(techs[0][1]);
});

test('TechnologyStorage should return new Technology by name in case it does not exist', () => {
  const name = 'notExistingName';
  const actual : Technology = technologyStorage.getByName(name);
  expect(actual).not.toBeNull();
  expect(actual.name).toBe(name);
});

test('TechnologyStorage should return Technologies by isSkill correctly', () => {
  const actual : Technology[] = technologyStorage.getBySkill(false);
  expect(actual.length).toBe(1);
  expect(actual[0].name).toBe(techs[1][0]);
  expect(actual[0].isSkill).toBe(techs[1][1]);
});

test('TechnologyStorage should return empty array by isSkill in case no such items', () => {
  const ts = new TechnologyStorage(new TechnologyProviderStub([['tech-3', false]]));
  const actual : Technology[] = ts.getBySkill(true);
  expect(actual).not.toBeNull();
  expect(actual.length).toBe(0);
});