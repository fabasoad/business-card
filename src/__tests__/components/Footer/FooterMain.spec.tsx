import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import FooterMain from '../../../components/Footer/FooterMain'

jest.mock('../../../components/Controls/SectionTitle')
jest.mock('../../../components/Footer/FooterContacts')
jest.mock('../../../components/Footer/FooterSocial')
jest.mock('../../../components/Footer/FooterInfo')

describe('FooterMain', () => {
  test('should render FooterMain correctly', () => {
    const { container } = render(<FooterMain />)
    const div = container.querySelector<HTMLDivElement>(
      'div#contacts.footer.text-center'
    )
    expect(div.children).toHaveLength(4)
    expect(
      div.querySelector('div[data-testid="SectionTitle"]')
    ).toHaveTextContent('contacts.title')
    for (const testId of ['FooterContacts', 'FooterSocial', 'FooterInfo']) {
      expect(
        div.querySelector(`div[data-testid="${testId}"]`)
      ).toBeInTheDocument()
    }
  })
})
