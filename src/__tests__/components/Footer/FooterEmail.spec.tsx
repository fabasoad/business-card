/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import FooterEmail from '../../../components/Footer/FooterEmail'

test('should render FooterEmail correctly', () => {
  const { container } = render(<FooterEmail/>)
  expect(container.firstChild).toMatchSnapshot()
})
