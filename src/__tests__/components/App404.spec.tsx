import '@testing-library/jest-dom'
import * as React from 'react'
import App404 from '../../components/App404'
import SupportedLocales from '../../scripts/i18n/SupportedLocales'
import { Locale } from '../../scripts/i18n/types'
import { render } from '@testing-library/react'

describe('App404', () => {
  const locale: Locale = SupportedLocales.default

  beforeEach(() => jest.useFakeTimers())

  test('should render App404 correctly', () => {
    const { container } = render(<App404 />)
    const div = container.querySelector('div.font-regular')
    expect(div).toHaveClass(`font-${locale.code === 'jp' ? '' : 'non-'}jp`)
    const pElements = div.querySelectorAll('p')
    expect(pElements.item(0)).toHaveTextContent('404.text.1')
    expect(pElements.item(1)).toHaveTextContent('404.text.2')
    let spanElements = pElements.item(1).querySelectorAll('span')
    expect(spanElements.item(0)).toHaveClass('blinker-prefix')
    expect(spanElements.item(1)).toHaveAttribute('style', 'display: none;')
    expect(spanElements.item(1)).toHaveTextContent('.')
    expect(spanElements.item(2)).toHaveClass('blinker')
    expect(spanElements.item(2)).toHaveTextContent('_')
    expect(pElements.item(2)).toHaveAttribute('style', 'display: none;')
    expect(pElements.item(2)).toHaveTextContent('404.text.3')
    spanElements = pElements.item(2).querySelectorAll('span')
    expect(spanElements).toHaveLength(2)
    expect(spanElements.item(0)).toHaveTextContent('3')
    expect(spanElements.item(1)).toHaveClass('blinker')
    expect(spanElements.item(1)).toHaveTextContent('_')
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
