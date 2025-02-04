import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import FooterLocation from '../../../components/Footer/FooterLocation'

describe('FooterLocation', () => {
  test('should render FooterLocation correctly', () => {
    const { container } = render(<FooterLocation />)
    const div = container.querySelector('div.col')
    expect(div.children).toHaveLength(2)
    expect(div.querySelector('i.fa.fa-map-marker-alt.fa-2x')).toBeInTheDocument()
    expect(div.querySelector('p')).toHaveTextContent('contacts.location')
  })
})
