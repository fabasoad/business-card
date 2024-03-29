import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import LanguageLinkItem from '../../../components/Languages/LanguageLinkItem'
import { testLanguageLinkItem } from './TestUtils'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'

for (const { code } of SupportedLocales._items) {
  test(`[${code}] should render LanguageLinkItem correctly`, () => {
    const text = 'test-text'
    const url = 'test-url'
    const {container} = render(
      <LanguageLinkItem code={code} text={text} url={url}/>
    )
    testLanguageLinkItem(container.querySelector('div'), code, url, text)
  })
}
