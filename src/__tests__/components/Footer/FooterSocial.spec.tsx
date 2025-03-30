import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import FooterSocial from '../../../components/Footer/FooterSocial'

jest.mock('../../../components/Controls/SocialIcon')

describe('FooterSocial', () => {
  const fixture = new Map<string, string>([
    ['https://twitter.com/fabasoad', 'fa-x-twitter'],
    ['https://github.com/fabasoad', 'fa-github'],
    ['https://www.linkedin.com/in/yevhenfabizhevskyi/', 'fa-linkedin'],
    ['https://stackoverflow.com/users/470214/fabasoad', 'fa-stack-overflow'],
    ['https://dev.to/fabasoad', 'fa-dev']
  ])

  test('should render FooterSocial correctly', () => {
    const { container } = render(<FooterSocial />)
    const ul = container.querySelector('div.d-flex.justify-content-center > ul.icon-list')
    expect(ul.children).toHaveLength(fixture.size)
    for (const [url, icon] of fixture) {
      expect(
        ul.querySelector(`li > div[data-testid="${icon}"]`)
      ).toHaveTextContent(url)
    }
  })
})
