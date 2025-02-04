import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import LanguageTextItem from '../../../components/Languages/LanguageTextItem'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { Locale } from '../../../scripts/i18n/types'

jest.mock('../../../components/Languages/LanguageItem')

describe('LanguageTextItem', () => {
  test.each(
    SupportedLocales._items
  )('[$code] should render LanguageTextItem correctly', ({ code }: Locale) => {
    const text = 'test-content'
    const { container } = render(
      <LanguageTextItem code={code} text={text} />
    )
    expect(
      container.querySelector(`div[data-testid="${code}"] > span.h5.mt-2`)
    ).toHaveTextContent(text)
  })
})
