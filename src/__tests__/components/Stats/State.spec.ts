import State from '../../../components/Stats/State';

test('State should be in correct order', () => {
  expect(State.NOT_STARTED).toEqual(0)
  expect(State.STARTED).toEqual(1)
  expect(State.FINISHED).toEqual(2)
  expect(State.FAILED).toEqual(3)
})
