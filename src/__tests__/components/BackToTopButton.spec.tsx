import '@testing-library/jest-dom'
import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'

import BackToTopButton from '../../components/BackToTopButton'

describe('BackToTopButton', () => {
  test('should render BackToTopButton correctly', () => {
    const { container } = render(<BackToTopButton />)
    expect(container.querySelector('a.back-to-top')).not.toBeNull()
  })

  test('should scroll to top', () => {
    const windowScrollToMock = jest.fn()
    global.scrollTo = windowScrollToMock

    const windowAddEventListenerMock = jest.fn()
    global.addEventListener = windowAddEventListenerMock

    const { container } = render(<BackToTopButton />)

    expect(windowAddEventListenerMock).toHaveBeenCalledTimes(1)
    expect(windowAddEventListenerMock).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
      { passive: true }
    )

    fireEvent(
      container.querySelector('a'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )
    expect(windowScrollToMock).toHaveBeenCalledTimes(1)
    expect(windowScrollToMock).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })
})
