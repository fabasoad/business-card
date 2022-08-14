/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import FooterSocial from '../../../components/Footer/FooterSocial'

test('should render FooterSocial correctly', () => {
  const { container } = render(<FooterSocial />)
  expect(container.firstChild).toMatchSnapshot()
})
