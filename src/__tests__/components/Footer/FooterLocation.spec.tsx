import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import FooterLocation from '../../../components/Footer/FooterLocation'

test('should render FooterLocation correctly', () => {
  const { container } = render(<FooterLocation />)
  const div = container.querySelector('div')
  expect(div).toHaveAttribute('class', 'col')
  expect(div.querySelector('i')).toHaveAttribute('class', 'fa fa-map-marker-alt fa-2x')
  expect(div.querySelector('p')).toHaveTextContent('business-card-contact-city')
})
