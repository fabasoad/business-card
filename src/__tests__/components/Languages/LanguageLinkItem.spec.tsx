import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import LanguageLinkItem from '../../../components/Languages/LanguageLinkItem'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { Locale } from '../../../scripts/i18n/types'

jest.mock('../../../components/Languages/LanguageItem')

describe('LanguageLinkItem', () => {
  test.each(
    SupportedLocales._items
  )('[$code] should render LanguageLinkItem correctly', ({ code }: Locale) => {
    const text = 'test-text'
    const url = 'test-url'
    const { container } = render(
      <LanguageLinkItem code={code} text={text} url={url} />
    )
    const a = container.querySelector(`div[data-testid="LanguageItem-${code}"] > a.h5.mt-2`)
    expect(a).toHaveAttribute('target', '_blank')
    expect(a).toHaveAttribute('rel', 'noopener noreferrer')
    expect(a).toHaveAttribute('href', url)
    expect(a).toHaveTextContent(text)
  })
})
