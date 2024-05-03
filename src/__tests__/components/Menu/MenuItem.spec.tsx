import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import MenuItem from '../../../components/Menu/MenuItem'
import StringUtils from '../../../scripts/utils/StringUtils'
import { testMenuItemActive, testMenuItemRendered } from './TestUtils'

test('should render MenuItem correctly', () => {
  const name = StringUtils.random(10)
  const { container } = render(<MenuItem
    name={name}
    setActiveNavLink={() => {/* no action needed */}}
  />)
  testMenuItemRendered(container.querySelector('a'), name)
})

test('should set active MenuItem correctly', () => {
  const name = StringUtils.random(10)
  const setActiveNavLinkMock = jest.fn((actual: string): void => {
    expect(actual).toEqual(`#${name}`)
  })
  const { container } = render(
    <MenuItem name={name} setActiveNavLink={setActiveNavLinkMock} />
  )
  testMenuItemActive(
    container.querySelector('.nav-link') as HTMLAnchorElement,
    setActiveNavLinkMock
  )
})
