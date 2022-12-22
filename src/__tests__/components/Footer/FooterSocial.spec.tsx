import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'

import FooterSocial from '../../../components/Footer/FooterSocial'

const fixture = new Map<string, string>([
  ['https://twitter.com/fabasoad', 'fab fa-twitter fa-2x'],
  ['https://github.com/fabasoad', 'fab fa-github fa-2x'],
  ['https://www.linkedin.com/in/yevhenfabizhevskyi/', 'fab fa-linkedin fa-2x'],
  ['https://stackoverflow.com/users/470214/fabasoad', 'fab fa-stack-overflow fa-2x'],
  ['https://dev.to/fabasoad', 'fab fa-dev fa-2x']
])

test('should render FooterSocial correctly', () => {
  render(<FooterSocial/>)
  const liElements = screen.getAllByRole('listitem')
  expect(liElements).toHaveLength(5)
  for (const li of liElements) {
    const a = li.querySelector('a')
    expect(a).not.toBeNull()
    expect(a).toHaveAttribute('class', 'btn')
    expect(a).toHaveAttribute('target', '_blank')
    expect(a).toHaveAttribute('rel', 'noopener noreferrer')
    const href = a.getAttribute('href')
    if (fixture.has(href)) {
      const i = a.querySelector('i')
      expect(i).toHaveAttribute('class', fixture.get(href))
      fixture.delete(href)
    } else {
      throw new Error(`'href' attribute does not match. expected - one of the [${Array.from(fixture.keys())}] values, actual - ${href}`)
    }
  }
})
