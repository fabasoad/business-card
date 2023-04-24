import { testSectionTitle } from '../Controls/TestUtils'

export function testLanguageItem(div: HTMLDivElement, code: string): void {
  expect(div).toHaveClass('mb-4')
  expect(div).toHaveClass('mx-4')
  const divH4 = div.querySelector('div.h4')
  expect(divH4).toHaveTextContent(code)
}

export function testLanguageLinkItem(
  div: HTMLDivElement, code: string, url: string, text: string
): void {
  testLanguageItem(div, code)
  const a = div.querySelector('a')
  expect(a).toHaveClass('h5')
  expect(a).toHaveClass('mt-2')
  expect(a).toHaveAttribute('target', '_blank')
  expect(a).toHaveAttribute('rel', 'noopener noreferrer')
  expect(a).toHaveAttribute('href', url)
  expect(a).toHaveTextContent(text)
}

export function testLanguageMain(div: HTMLDivElement) {
  expect(div).toHaveClass('light-component')
  testSectionTitle(
    div.querySelector('div.section-title'),
    'business-card-languages-title'
  )
  const divContainer = div.querySelector('div.container')
  expect(divContainer).not.toBeNull()
  const divRow = divContainer.querySelector('div.row')
  expect(divRow).not.toBeNull()
  const divCol = divRow.querySelector('div.col')
  expect(divCol).toHaveClass('language-list')
  expect(divCol).toHaveClass('text-center')
  const divLanguages = divCol.querySelectorAll('div.mb-4.mx-4')
  expect(divLanguages).toHaveLength(3)
  testLanguageLinkItem(
    divLanguages.item(0) as HTMLDivElement,
    'jp',
    'https://drive.google.com/file/d/1QHRRPXiYuOKMmNPeqRf6GQQtyGdBkhQ5/view?usp=sharing',
    'JLPT N4'
  )
  testLanguageLinkItem(
    divLanguages.item(1) as HTMLDivElement,
    'gb',
    'https://drive.google.com/file/d/1nzM9WQqR7PQpHKDiWvkRYtcNbnRW8-OB/view?usp=sharing',
    'TOEIC 825'
  )
  testLanguageTextItem(
    divLanguages.item(2) as HTMLDivElement,
    'ua',
    'business-card-languages-native'
  )
}

export function testLanguageTextItem(div: HTMLDivElement, code: string, text: string): void {
  expect(div).toHaveTextContent(text)
  testLanguageItem(div, code)
}
