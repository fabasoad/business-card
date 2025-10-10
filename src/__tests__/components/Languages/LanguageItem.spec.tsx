import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import LanguageItem from '../../../components/Languages/LanguageItem'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import type { Locale } from '../../../scripts/i18n/types'

describe('LanguageItem', () => {
  test.each(
    SupportedLocales._items
  )('[$code] should render LanguageItem correctly', ({ code }: Locale) => {
    const text = 'test-content'
    const { container } = render(
      <LanguageItem code={code}>{text}</LanguageItem>
    )
    const div = container.querySelector('div.mb-4.mx-4')
    expect(div).toHaveTextContent(text)
    expect(
      div.querySelector('div.h4')
    ).toHaveTextContent(`languages.codes.${code}`)
  })
})
