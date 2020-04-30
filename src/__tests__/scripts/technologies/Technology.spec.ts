import Technology from '../../../scripts/technologies/Technology';

test('should create Technology with name correctly', () => {
  const expectedName = 'some-name';
  const t = new Technology(expectedName);
  expect(t.img).toBeNull();
  expect(t.isSkill).toBeFalsy();
  expect(t.name).toBe(expectedName);
});

test('should create Technology with name and img correctly', () => {
  const expectedName = 'some-name';
  const expectedImg = 'some-img';
  const t = new Technology(expectedName, expectedImg);
  expect(t.img).toBe(expectedImg);
  expect(t.isSkill).toBeFalsy();
  expect(t.name).toBe(expectedName);
});

test('should create Technology with name, isSkill and img correctly', () => {
  const expectedName = 'some-name';
  const expectedImg = 'some-img';
  const t = new Technology(expectedName, expectedImg, true);
  expect(t.img).toBe(expectedImg);
  expect(t.isSkill).toBeTruthy();
  expect(t.name).toBe(expectedName);
});