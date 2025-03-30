import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'
import * as ThemeContext from '../../../components/Contexts/ThemeContext'

import FooterInfo from '../../../components/Footer/FooterInfo'

describe('FooterInfo', () => {
  let useThemeContextSpy: jest.SpyInstance

  beforeAll(() => {
    useThemeContextSpy = jest.spyOn(ThemeContext, 'useThemeContext')
  })

  afterEach(() => useThemeContextSpy.mockRestore())

  test.each(
    ['dark', 'light']
  )('should render FooterInfo correctly when theme is %s', (theme: string) => {
    useThemeContextSpy.mockImplementation(() => ({ theme }))
    const { container } = render(<FooterInfo />)
    const div = container.querySelector('div.d-flex.justify-content-center > ul.icon-list')
    expect(div.children).toHaveLength(3)
    const madeByColor = theme === 'dark' ? 'a7d9c1' : '2c3e50'
    expect(
      div.querySelector(
        `li > img[alt="Made by fabasoad"][src="https://img.shields.io/static/v1?label=made%20by&message=fabasoad&color=${madeByColor}&style=for-the-badge&logo=github"][loading="lazy"]`
      )
    ).toBeInTheDocument()
    const bitcoinColor = theme === 'dark' ? 'a7d9c1' : 'f7931a'
    expect(
      div.querySelector(
        `li > a[target="_blank"][rel="noopener noreferrer"][href="https://www.bitcoinqrcodemaker.com/?style=bitcoin&address=145HwyQAcv4vrzUumJhu7nWGAVBysX9jJH&prefix=on"] > img[src="https://img.shields.io/static/v1?label=bitcoin&message=donate&color=${bitcoinColor}&style=for-the-badge&logo=bitcoin"][alt="Donate with Bitcoin"][loading="lazy"]`
      )
    ).toBeInTheDocument()
    expect(
      div.querySelector(
        'li > span.badge.rounded-pill.bg-secondary'
      )
    ).toHaveTextContent('version')
  })
})
