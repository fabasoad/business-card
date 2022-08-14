/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import FooterContacts from '../../../components/Footer/FooterContacts'

test('should render FooterContacts correctly', () => {
  const { container } = render(<FooterContacts />)
  expect(container.firstChild).toMatchSnapshot()
})
