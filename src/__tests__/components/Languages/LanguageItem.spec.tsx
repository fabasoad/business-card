import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import LanguageItem from '../../../components/Languages/LanguageItem'
import { testLanguageItem } from './TestUtils'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'

for (const { code } of SupportedLocales._items) {
  test(`[${code}] should render LanguageItem correctly`, () => {
    const text = 'test-content'
    const { container } = render(
      <LanguageItem code={code}>{text}</LanguageItem>
    )
    const div = container.querySelector('div')
    expect(div).toHaveTextContent(text)
    testLanguageItem(div, code)
  })
}
