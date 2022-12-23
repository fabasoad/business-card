import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import FooterLocation from '../../../components/Footer/FooterLocation'

export function testFooterLocation(div: HTMLDivElement) {
  expect(div).toHaveAttribute('class', 'col')
  const i = div.querySelector('i');
  ['fa', 'fa-map-marker-alt', 'fa-2x'].forEach((c: string) => expect(i).toHaveClass(c))
  expect(div.querySelector('p')).toHaveTextContent('business-card-contact-city')
}

test('should render FooterLocation correctly', () => {
  const { container } = render(<FooterLocation />)
  testFooterLocation(container.querySelector('div'))
})
