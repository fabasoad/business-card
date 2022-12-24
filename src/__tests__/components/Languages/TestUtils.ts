export function testLanguageItem(div: HTMLDivElement, code: string) {
  expect(div).toHaveClass('mb-4')
  expect(div).toHaveClass('mx-4')
  const span = div.querySelector('span')
  expect(span).toHaveClass('flag-icon')
  expect(span).toHaveClass('flag-icon-4x')
  expect(span).toHaveClass(`flag-icon-${code}`)
  expect(span).toHaveClass('mx-auto')
}

export function testLanguageLinkItem(div: HTMLDivElement, code: string, url: string, text: string) {
  testLanguageItem(div, code)
  const a = div.querySelector('a')
  expect(a).toHaveClass('h5')
  expect(a).toHaveClass('mt-2')
  expect(a).toHaveAttribute('target', '_blank')
  expect(a).toHaveAttribute('rel', 'noopener noreferrer')
  expect(a).toHaveAttribute('href', url)
  expect(a).toHaveTextContent(text)
}

export function testLanguageTextItem(div: HTMLDivElement, code: string, text: string) {
  expect(div).toHaveTextContent(text)
  testLanguageItem(div, code)
}
