import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import LanguagesMain from '../../../components/Languages/LanguagesMain'
import { testLanguageLinkItem, testLanguageTextItem } from './TestUtils'

test('should render LanguageMain correctly', () => {
  const { container } = render(<LanguagesMain />)
  const div = container.querySelector('div#languages')
  expect(div).toHaveClass('light-component')
  const divSectionTitle = div.querySelector('div.section-title')
  expect(divSectionTitle).toHaveClass('text-center')
  expect(divSectionTitle).toHaveClass('center')
  expect(divSectionTitle.querySelector('h2'))
    .toHaveTextContent('business-card-languages-title')
  expect(divSectionTitle.querySelector('hr')).not.toBeNull()
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
})
