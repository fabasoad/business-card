import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import FooterContacts from '../../../components/Footer/FooterContacts'
import { testFooterContacts } from './TestUtils'

test('should render FooterContacts correctly', () => {
  const { container } = render(<FooterContacts />)
  testFooterContacts(container.querySelector('div.footer-contacts'))
})
