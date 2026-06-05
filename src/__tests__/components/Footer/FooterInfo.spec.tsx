import type { MockInstance } from 'vitest'
import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'
import * as ThemeContext from '../../../components/Contexts/ThemeContext'

import FooterInfo from '../../../components/Footer/FooterInfo'

describe('FooterInfo', () => {
  let useThemeContextSpy: MockInstance

  beforeAll(() => {
    useThemeContextSpy = vi.spyOn(ThemeContext, 'useThemeContext')
  })

  afterEach(() => useThemeContextSpy.mockRestore())

  test.each(
    ['dark', 'light']
  )('should render FooterInfo correctly when theme is %s', (theme: string) => {
    useThemeContextSpy.mockImplementation(() => ({ theme }))
    const { container } = render(<FooterInfo />)
    const ul = container.querySelector('div.d-flex.justify-content-center > ul.icon-list')!
    expect(ul.children).toHaveLength(3)

    const madeByColor = theme === 'dark' ? 'a7d9c1' : '2c3e50'
    const madeByImg = ul.querySelector<HTMLImageElement>('li > img[alt="Made by fabasoad"][loading="lazy"]')
    expect(madeByImg).toBeInTheDocument()
    expect(madeByImg!.src).toContain(`color=${madeByColor}`)

    const bitcoinColor = theme === 'dark' ? 'a7d9c1' : 'f7931a'
    const bitcoinLink = ul.querySelector<HTMLAnchorElement>('li > a[target="_blank"][rel="noopener noreferrer"]')
    expect(bitcoinLink).toBeInTheDocument()
    expect(bitcoinLink!.href).toContain('bitcoinqrcodemaker.com')
    const bitcoinImg = bitcoinLink!.querySelector<HTMLImageElement>('img[alt="Donate with Bitcoin"][loading="lazy"]')
    expect(bitcoinImg).toBeInTheDocument()
    expect(bitcoinImg!.src).toContain(`color=${bitcoinColor}`)

    expect(
      ul.querySelector('li > span.badge.rounded-pill.bg-secondary')
    ).toHaveTextContent('version')
  })
})
