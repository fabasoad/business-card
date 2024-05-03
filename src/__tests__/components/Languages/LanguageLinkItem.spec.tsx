import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import LanguageLinkItem from '../../../components/Languages/LanguageLinkItem'
import { testLanguageLinkItem } from './TestUtils'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { Locale } from '../../../scripts/i18n/types'

describe('LanguageLinkItem', () => {
  test.each(SupportedLocales._items)('[$code] should render LanguageLinkItem correctly', ({ code }: Locale) => {
    const text = 'test-text'
    const url = 'test-url'
    const {container} = render(
      <LanguageLinkItem code={code} text={text} url={url}/>
    )
    testLanguageLinkItem(container.querySelector('div'), code, url, text)
  })
})
