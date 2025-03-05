import '@testing-library/jest-dom'
import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'

import MenuItem from '../../../components/Menu/MenuItem'
import StringUtils from '../../../scripts/utils/StringUtils'

describe('MenuItem', () => {
  test('should render MenuItem correctly', () => {
    const name = StringUtils.random(10)
    const { container } = render(<MenuItem
      name={name}
      setActiveNavLink={() => {/* no action needed */}}
    />)
    expect(
      container.querySelector(`a.nav-link[href="#${name}"]`)
    ).toHaveTextContent(`${name}.title`)
  })

  test('should set active MenuItem correctly', () => {
    const name = StringUtils.random(10)
    const setActiveNavLinkMock = jest.fn((actual: string): void => {
      expect(actual).toEqual(`#${name}`)
    })
    const { container } = render(
      <MenuItem name={name} setActiveNavLink={setActiveNavLinkMock} />
    )
    fireEvent(
      container.querySelector('.nav-link'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )
    expect(setActiveNavLinkMock).toHaveBeenCalledTimes(1)
  })
})
