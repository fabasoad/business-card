import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Badges from '../../components/Badges'

export function testBadges(div: HTMLDivElement) {
  expect(div).toHaveClass('light-component')
}

test('should render Badges correctly', () => {
  const { container } = render(<Badges/>)
  testBadges(container.querySelector('div#badges'))
})
