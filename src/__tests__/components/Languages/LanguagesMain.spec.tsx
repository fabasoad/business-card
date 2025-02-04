import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import LanguagesMain from '../../../components/Languages/LanguagesMain'
import { testSectionTitle } from '../Controls/TestUtils'

jest.mock('../../../components/Controls/SectionTitle')
jest.mock('../../../components/Languages/LanguageLinkItem')
jest.mock('../../../components/Languages/LanguageTextItem')

describe('LanguagesMain', () => {
  test('should render LanguageMain correctly', () => {
    const { container } = render(<LanguagesMain />)
    const div = container.querySelector<HTMLDivElement>('div#languages.light-component')
    testSectionTitle(div, 'languages.title')
    const divCol = div.querySelector(
      'div.container > div.row > div.language-list.col.text-center'
    )
    expect(divCol.children).toHaveLength(3)
    const divJP = divCol.querySelector('div[data-testid="jp"]')
    expect(divJP.querySelector('div[data-testid="text"]')).toHaveTextContent('JLPT N4')
    expect(divJP.querySelector('div[data-testid="url"]')).toHaveTextContent(
      'https://drive.google.com/file/d/1QHRRPXiYuOKMmNPeqRf6GQQtyGdBkhQ5/view?usp=sharing'
    )
    const divGB = divCol.querySelector('div[data-testid="gb"]')
    expect(divGB.querySelector('div[data-testid="text"]')).toHaveTextContent('TOEIC 825')
    expect(divGB.querySelector('div[data-testid="url"]')).toHaveTextContent(
      'https://drive.google.com/file/d/1nzM9WQqR7PQpHKDiWvkRYtcNbnRW8-OB/view?usp=sharing'
    )
    const divUA = divCol.querySelector('div[data-testid="ua"]')
    expect(divUA.querySelector('div[data-testid="text"]')).toHaveTextContent('languages.native')
  })
})
