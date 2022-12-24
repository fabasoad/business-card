import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import FooterMain from '../../../components/Footer/FooterMain'
import {
  testFooterContacts, testFooterInfo, testFooterSocial
} from './TestUtils'

test('should render FooterMain correctly', () => {
  const { container } = render(<FooterMain />)
  const div = container.querySelector('div.footer')
  expect(div).not.toBeNull()
  const divContact = div.querySelector('div#contact')
  expect(divContact).toHaveClass('container')
  expect(divContact).toHaveClass('text-center')
  const divTitle = divContact.querySelector('div.section-title.center')
  expect(divTitle).not.toBeNull()
  expect(divTitle.querySelector('h2')).toHaveTextContent('business-card-contact-title')
  expect(divTitle.querySelector('hr')).not.toBeNull()
  testFooterContacts(divContact.querySelector('div.footer-contacts'))
  testFooterSocial(divContact.querySelector('div.footer-social'))
  testFooterInfo(divContact.querySelector('div.footer-info'))
})
