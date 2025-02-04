import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import FooterMain from '../../../components/Footer/FooterMain'
import {
  testFooterContacts,
  testFooterInfo,
  testFooterSocial
} from './TestUtils'

test('should render FooterMain correctly', () => {
  const { container } = render(<FooterMain />)
  const div = container.querySelector('div.footer')
  expect(div).toBeInTheDocument()
  const divContact = div.querySelector('div#contacts')
  expect(divContact).toHaveClass('container')
  expect(divContact).toHaveClass('text-center')
  const divTitle = divContact.querySelector('div.section-title.center')
  expect(divTitle).toBeInTheDocument()
  expect(divTitle.querySelector('h2')).toHaveTextContent('contacts.title')
  expect(divTitle.querySelector('hr')).toBeInTheDocument()
  testFooterContacts(divContact.querySelector('div.footer-contacts'))
  testFooterSocial(divContact.querySelector('div.footer-social'))
  testFooterInfo(divContact.querySelector('div.footer-info'))
})
