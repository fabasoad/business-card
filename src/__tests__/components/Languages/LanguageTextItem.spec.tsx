import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import * as React from 'react'

import LanguageTextItem from '../../../components/Languages/LanguageTextItem'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { testLanguageTextItem } from './TestUtils'

for (const { code } of SupportedLocales._items) {
  test(`[${code}] should render LanguageTextItem correctly`, () => {
    const text = 'test-content'
    const { container } = render(<LanguageTextItem code={code} text={text} />)
    testLanguageTextItem(container.querySelector('div'), code, text)
  })
}
