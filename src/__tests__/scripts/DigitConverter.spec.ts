import DigitConverter from '../../scripts/DigitConverter'

interface DigitConverterFixture {
  convert: (c: DigitConverter) => string
  expected: string
  title: string
}

new Array<DigitConverterFixture>({
  convert: (c) => c.toSingleByte('２０１９'),
  expected: '2019',
  title: 'single'
}, {
  convert: (c) => c.toDoubleByte('2019'),
  expected: '２０１９',
  title: 'double'
}).forEach((f) =>
  test(`should convert to ${f.title} byte correctly`, () =>
    expect(f.convert(new DigitConverter())).toBe(f.expected)
  )
)
