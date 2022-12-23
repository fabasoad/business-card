import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import FooterEmail from '../../../components/Footer/FooterEmail'

export function testFooterEmail(div: HTMLDivElement) {
  expect(div).toHaveAttribute('class', 'col')
  const i = div.querySelector('i');
  ['fa', 'fa-envelope', 'fa-2x'].forEach((c: string) => expect(i).toHaveClass(c))
  expect(div.querySelector('p')).toHaveTextContent('fabasoad@gmail.com')
}

test('should render FooterEmail correctly', () => {
  const { container } = render(<FooterEmail/>)
  testFooterEmail(container.querySelector('div'))
})
