import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import LanguageTextItem from '../../../components/Languages/LanguageTextItem'
import { testLanguageTextItem } from './TestUtils'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { Locale } from '../../../scripts/i18n/types'

describe('LanguageTextItem', () => {
  test.each(SupportedLocales._items)('[$code] should render LanguageTextItem correctly', ({ code }: Locale) => {
    const text = 'test-content'
    const { container } = render(
      <LanguageTextItem code={code} text={text} />
    )
    testLanguageTextItem(container.querySelector('div'), code, text)
  })
})
