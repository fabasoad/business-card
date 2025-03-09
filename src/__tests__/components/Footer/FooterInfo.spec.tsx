import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'
import * as hooks from 'use-local-storage'

import FooterInfo from '../../../components/Footer/FooterInfo'

describe('FooterInfo', () => {
  let windowSpy: jest.SpyInstance

  beforeAll(() => {
    jest.spyOn(hooks, 'default').mockImplementation(
      (k: string, v: string) => [v, jest.fn()]
    )
  })

  beforeEach(() => {
    windowSpy = jest.spyOn(window, "window", "get")
  })

  afterEach(() => {
    windowSpy.mockRestore()
  })

  test.each(
    ['dark', 'light']
  )('should render FooterInfo correctly when theme is %s', (theme: string) => {
    windowSpy.mockImplementation(() => ({
      matchMedia: (q: string) => ({ matches: q === `(prefers-color-scheme: ${theme})` })
    }))
    const { container } = render(<FooterInfo />)
    const div = container.querySelector('div.d-flex.justify-content-center > ul.icon-list')
    expect(div.children).toHaveLength(3)
    const madeByColor = theme === 'dark' ? 'a7d9c1' : '2c3e50'
    expect(
      div.querySelector(
        `li > img[alt="Made by fabasoad"][src="https://img.shields.io/static/v1?label=made%20by&message=fabasoad&color=${madeByColor}&style=for-the-badge&logo=github"]`
      )
    ).toBeInTheDocument()
    const bitcoinColor = theme === 'dark' ? 'a7d9c1' : 'f7931a'
    expect(
      div.querySelector(
        `li > a[target="_blank"][rel="noopener noreferrer"][href="https://www.bitcoinqrcodemaker.com/?style=bitcoin&address=145HwyQAcv4vrzUumJhu7nWGAVBysX9jJH&prefix=on"] > img[src="https://img.shields.io/static/v1?label=bitcoin&message=donate&color=${bitcoinColor}&style=for-the-badge&logo=bitcoin"][alt="Donate with Bitcoin"]`
      )
    ).toBeInTheDocument()
    expect(
      div.querySelector(
        'li > span.badge.rounded-pill.bg-secondary'
      )
    ).toHaveTextContent('version')
  })
})
