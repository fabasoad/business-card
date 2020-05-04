import DigitConverter from '../../scripts/DigitConverter'

test('should convert from double byte to single byte correctly', () => {
  const converter = new DigitConverter()
  const actual: string = converter.toSingleByte("２０１９")
  expect(actual).toBe('2019')
})

test('should convert from single byte to double byte correctly', () => {
  const converter = new DigitConverter()
  const actual: string = converter.toDoubleByte("2019")
  expect(actual).toBe("２０１９")
})