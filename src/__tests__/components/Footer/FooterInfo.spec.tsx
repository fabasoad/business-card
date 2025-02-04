import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import FooterInfo from '../../../components/Footer/FooterInfo'

describe('FooterInfo', () => {
  test('should render FooterInfo correctly', () => {
    const { container } = render(<FooterInfo />)
    const div = container.querySelector('div.footer-info > ul.icon-list')
    expect(div.children).toHaveLength(3)
    expect(
      div.querySelector(
        'li > img[alt="Made by fabasoad"][src="https://img.shields.io/static/v1?label=made%20by&message=fabasoad&color=2c3e50&style=for-the-badge&logo=github"]'
      )
    ).toBeInTheDocument()
    expect(
      div.querySelector(
        'li > a[target="_blank"][rel="noopener noreferrer"][href="https://www.bitcoinqrcodemaker.com/?style=bitcoin&address=145HwyQAcv4vrzUumJhu7nWGAVBysX9jJH&prefix=on"] > img[src="https://img.shields.io/static/v1?label=bitcoin&message=donate&color=f7931a&style=for-the-badge&logo=bitcoin"][alt="Donate with Bitcoin"]'
      )
    ).toBeInTheDocument()
    expect(
      div.querySelector(
        'li > span.badge.rounded-pill.bg-secondary'
      )
    ).toHaveTextContent('version')
  })
})
