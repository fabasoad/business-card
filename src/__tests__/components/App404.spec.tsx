import '@testing-library/jest-dom'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import App404 from '../../components/App404'
import SupportedLocales from '../../scripts/i18n/SupportedLocales'
import type { Locale } from '../../scripts/i18n/types'
import { render } from '@testing-library/react'

describe('App404', () => {
  beforeEach(() => jest.useFakeTimers())

  test.each(
    SupportedLocales._items
  )('[$code] should render App404 correctly', ({ code }: Locale) => {
    const { i18n } = useTranslation()
    i18n.language = code

    const { container } = render(<App404 />)
    const cols = container.querySelectorAll(
      `div.container.d-flex.font-regular.font-${code === 'jp' ? '' : 'non-'}jp > div.row > div.col`
    )
    expect(cols).toHaveLength(3)
    expect(cols.item(0)).toHaveTextContent('404.text.1')
    expect(cols.item(1).querySelector('span.blinker-prefix')).toBeInTheDocument()
    expect(cols.item(1)).toHaveTextContent('404.text.2')
    expect(
      cols.item(1).querySelector('span[data-redirecting="false"]')
    ).toHaveTextContent('.')
    expect(
      cols.item(1).querySelector('span.blinker[data-redirecting="true"]')
    ).toHaveTextContent('_')
    expect(cols.item(2)).toHaveAttribute('data-redirecting', 'false')
    expect(cols.item(2)).toHaveTextContent('404.text.3')
    expect(cols.item(2).querySelector('span')).toHaveTextContent('3')
    expect(cols.item(2).querySelector('span.blinker')).toHaveTextContent('_')
  })

  test('redirecting should work correctly', () => {
    const redirectUrl = '/test'
    render(
      <App404 redirectUrl={redirectUrl} />
    )
    // TODO: Implement this test
  })

  afterEach(() => jest.clearAllTimers())
})
