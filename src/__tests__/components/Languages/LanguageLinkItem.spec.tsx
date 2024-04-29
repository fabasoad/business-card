import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import * as React from 'react'

import LanguageLinkItem from '../../../components/Languages/LanguageLinkItem'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { testLanguageLinkItem } from './TestUtils'

for (const { code } of SupportedLocales._items) {
  test(`[${code}] should render LanguageLinkItem correctly`, () => {
    const text = 'test-text'
    const url = 'test-url'
    const { container } = render(
      <LanguageLinkItem code={code} text={text} url={url} />
    )
    testLanguageLinkItem(container.querySelector('div'), code, url, text)
  })
}
