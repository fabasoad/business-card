import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Badges from '../../components/Badges'

jest.mock('../../components/Controls/Section')

describe('Badges', () => {
  test('should render Badges correctly', () => {
    const { container } = render(<Badges />)
    const div = container.querySelector('div[data-testid^="Section-"] > div.row')
    expect(div.children).toHaveLength(2)
    expect(
      div.querySelector('div.col-sm.col-md.col-lg.text-center > a[href="https://standforukraine.com"][rel="noopener noreferrer"][target="_blank"] > img.mb-4.mx-4[src="[object Object]"][alt="Support Ukraine"][title="Stand With Ukraine"][loading="lazy"]')
    ).toBeInTheDocument()
    expect(
      div.querySelector('div.col-sm.col-md.col-lg.text-center > a[href="https://tree-nation.com/profile/digitalocean"][rel="noopener noreferrer"][target="_blank"] > img.rounded-circle.mb-4.mx-4[src="[object Object]"][alt="Digital Ocean Forest Badge"][title="DigitalOcean Forest 2021"]')
    ).toBeInTheDocument()
  })
})
