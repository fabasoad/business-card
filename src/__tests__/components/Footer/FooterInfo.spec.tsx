import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import FooterInfo from '../../../components/Footer/FooterInfo'

export function testFooterInfo(div: HTMLDivElement) {
  expect(div).toHaveClass('footer-info')
  const ul = div.querySelector('ul')
  expect(ul).toHaveAttribute('class', 'icon-list')
  const liElements = ul.querySelectorAll('li')
  expect(liElements).toHaveLength(3)
  let a = false
  let b = false
  let c = false
  for (const li of liElements) {
    if (a) {
      const img = li.querySelector('img')
      if (img != null) {
        expect(img).toHaveAttribute('src', 'https://img.shields.io/static/v1?label=made%20by&amp;message=fabasoad&amp;color=2c3e50&amp;style=for-the-badge&amp;logo=github')
        expect(img).toHaveAttribute('alt', 'Made by fabasoad')
        a = false
        continue
      } else if (!b && !c) {
        throw new Error(`Expected img inside li element. Actual: ${li.innerHTML}`)
      }
    }
    if (b) {
      const a = li.querySelector('a')
      if (a != null) {
        expect(a).toHaveAttribute('target', '_blank')
        expect(a).toHaveAttribute('rel', 'noopener noreferrer')
        expect(a).toHaveAttribute('href', 'https://www.bitcoinqrcodemaker.com/?style=bitcoin&address=145HwyQAcv4vrzUumJhu7nWGAVBysX9jJH&prefix=on')
        const img = a.querySelector('img')
        expect(img).toHaveAttribute('src', 'https://img.shields.io/static/v1?label=bitcoin&amp;message=donate&amp;color=f7931a&amp;style=for-the-badge&amp;logo=bitcoin')
        expect(img).toHaveAttribute('alt', 'Donate with Bitcoin')
        b = false
        continue
      } else if (!a && !c) {
        throw new Error(`Expected a inside li element. Actual: ${li.innerHTML}`)
      }
    }
    if (c) {
      const span = li.querySelector('span')
      if (span != null) {
        expect(span).toHaveAttribute('class', 'badge rounded-pill bg-secondary')
        expect(span).toHaveTextContent('business-card-version')
        c = false
      } else if (!a && !b) {
        throw new Error(`Expected span inside li element. Actual: ${li.innerHTML}`)
      }
    }
  }
  if (a || b || c) {
    throw new Error('Test failed')
  }
}

test('should render FooterInfo correctly', () => {
  const { container } = render(<FooterInfo />)
  testFooterInfo(container.querySelector('div'))
})
