/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import { App404 } from '../../components/App404'

describe('App404', () => {
  beforeAll(() => jest.useFakeTimers())

  new Array<string>('jp', 'gb').forEach((l) =>
    test(`should render App404 with ${l} locale correctly`, () => {
      const { container } = render(<App404 locale={{code: l, title: ''}}/>)
      expect(container.firstChild).toMatchSnapshot()
    })
  )

  test('redirecting should work correctly', () => {
    const redirectUrl = '/test'
    const { container } = render(<App404
      locale={{ code: 'gb', title: '' }}
      redirectUrl={redirectUrl}
    />)
    const locationReplaceSpy = jest.fn()
    Object.defineProperty(window, 'location', { value: { replace: locationReplaceSpy } })
    const preventDefaultSpy = jest.fn()
    document.dispatchEvent(new MouseEventStub('click', preventDefaultSpy))
    expect(container.firstChild).toMatchSnapshot()
    expect(preventDefaultSpy).toHaveBeenCalledTimes(3)
    jest.runAllTimers()
    expect(locationReplaceSpy).toHaveBeenCalledWith<string[]>(redirectUrl)
  })

  afterEach(() => jest.clearAllTimers())
})

class MouseEventStub extends MouseEvent {
  constructor(type: string, preventDefault: () => void) {
    super(type)
    this.preventDefault = preventDefault
  }
}
