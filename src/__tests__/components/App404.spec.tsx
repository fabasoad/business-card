/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { App404 } from '../../components/App404'

beforeAll(() => jest.useFakeTimers())

new Array<string>('jp', 'gb').forEach((l) =>
  test(`should render App404 with ${l} locale correctly`, () =>
    expect(shallow(<App404 locale={{ code: l, title: '' }} />)).toMatchSnapshot()
  )
)

test('redirecting should work correctly', () => {
  const redirectUrl = '/test'
  const wrapper: ShallowWrapper = shallow(<App404
    locale={{ code: 'gb', title: '' }}
    redirectUrl={redirectUrl}
  />)
  const locationReplaceSpy = jest.fn()
  Object.defineProperty(window, 'location', { value: { replace: locationReplaceSpy } })
  const preventDefaultSpy = jest.fn()
  document.dispatchEvent(new MouseEventStub('click', preventDefaultSpy))
  expect(wrapper).toMatchSnapshot()
  expect(preventDefaultSpy).toHaveBeenCalledTimes(3)
  jest.runAllTimers()
  expect(setInterval).toHaveBeenCalledTimes(3)
  expect(setInterval).toHaveBeenCalledWith<number[]>(expect.any(Function), 1000)
  expect(clearInterval).toHaveBeenCalledTimes(3)
  expect(locationReplaceSpy).toHaveBeenCalledWith<string[]>(redirectUrl)
})

afterEach(() => jest.clearAllTimers())

class MouseEventStub extends MouseEvent {
  constructor(type: string, preventDefault: () => void) {
    super(type)
    this.preventDefault = preventDefault
  }
}
