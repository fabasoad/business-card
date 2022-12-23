import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import FooterContacts from '../../../components/Footer/FooterContacts'
import { testFooterLocation } from './FooterLocation.spec'
import { testFooterEmail } from './FooterEmail.spec'

export function testFooterContacts(div: HTMLDivElement) {
  expect(div).toHaveClass('footer-contacts')
  const divFooters = div.querySelectorAll('div.col')
  expect(divFooters).toHaveLength(2)
  testFooterLocation(divFooters[0] as HTMLDivElement)
  testFooterEmail(divFooters[1] as HTMLDivElement)
}

test('should render FooterContacts correctly', () => {
  const { container } = render(<FooterContacts />)
  testFooterContacts(container.querySelector('div.footer-contacts'))
})
