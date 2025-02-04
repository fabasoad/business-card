import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import FooterContacts from '../../../components/Footer/FooterContacts'

jest.mock('../../../components/Footer/FooterEmail')
jest.mock('../../../components/Footer/FooterLocation')

describe('FooterContacts', () => {
  test('should render FooterContacts correctly', () => {
    const { container } = render(<FooterContacts />)
    const div = container.querySelector('div.footer-contacts')
    expect(div.children).toHaveLength(2)
    expect(
      div.querySelector('div[data-testid="FooterLocation"]')
    ).toBeInTheDocument()
    expect(
      div.querySelector('div[data-testid="FooterEmail"]')
    ).toHaveTextContent('fabasoad@gmail.com')
  })
})
