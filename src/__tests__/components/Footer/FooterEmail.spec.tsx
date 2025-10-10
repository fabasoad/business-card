import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import FooterEmail from '../../../components/Footer/FooterEmail'
import { randomString } from '../../../scripts/utils/StringUtils'

describe('FooterEmail', () => {
  test('should render FooterEmail correctly', () => {
    const email = randomString(10)
    const { container } = render(<FooterEmail email={email} />)
    const div = container.querySelector('div.col')
    expect(div.children).toHaveLength(2)
    expect(div.querySelector('i.fa.fa-envelope.fa-2x')).toBeInTheDocument()
    expect(
      div.querySelector(
        `p > a[target="_blank"][rel="noreferrer"][href="mailto:${email}"]`
      )
    ).toHaveTextContent(email)
  })
})
