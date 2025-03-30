import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import LanguagesMain from '../../../components/Languages/LanguagesMain'

jest.mock('../../../components/Controls/Section')
jest.mock('../../../components/Languages/LanguageLinkItem')
jest.mock('../../../components/Languages/LanguageTextItem')

describe('LanguagesMain', () => {
  test('should render LanguageMain correctly', () => {
    const { container } = render(<LanguagesMain />)
    const div = container.querySelector<HTMLDivElement>(
      'div[data-testid="Section-languages"] > div.row > div.language-list.col.text-center'
    )
    expect(div.children).toHaveLength(3)
    const divJP = div.querySelector('div[data-testid="jp"]')
    expect(divJP.querySelector('div[data-testid="text"]')).toHaveTextContent('JLPT N4')
    expect(divJP.querySelector('div[data-testid="url"]')).toHaveTextContent(
      'https://drive.google.com/file/d/1QHRRPXiYuOKMmNPeqRf6GQQtyGdBkhQ5/view?usp=sharing'
    )
    expect(
      div.querySelector('div[data-testid="gb"]')
    ).toHaveTextContent('languages.fluent')
    expect(
      div.querySelector('div[data-testid="ua"]')
    ).toHaveTextContent('languages.native')
  })
})
