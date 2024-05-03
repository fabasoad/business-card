import DigitConverter from '../../scripts/DigitConverter'

describe('DigitConverter', () => {
  type DigitConverterFixture = {
    convert: (c: DigitConverter) => string
    expected: string
    title: string
  }

  test.each([{
    convert: (c: DigitConverter) => c.toSingleByte('２０１９'),
    expected: '2019',
    title: 'single'
  }, {
    convert: (c: DigitConverter) => c.toDoubleByte('2019'),
    expected: '２０１９',
    title: 'double'
  }])('should convert to $title byte correctly', (f: DigitConverterFixture) =>
    expect(f.convert(new DigitConverter())).toBe(f.expected)
  )
})
