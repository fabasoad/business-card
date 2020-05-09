/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import BackToTopButton from '../../components/BackToTopButton'

let wrapper: ShallowWrapper
let windowScrollSpy: jest.SpyInstance<void, [number, number]>

beforeAll(() => {
  wrapper = shallow(<BackToTopButton />)
  windowScrollSpy = jest.spyOn(window, 'scrollTo').mockImplementation()
})

test('should scroll to top', () => {
  const preventDefaultSpy = jest.fn()
  wrapper.find('a').simulate('click', {
    preventDefault: preventDefaultSpy
  })
  expect(preventDefaultSpy).toHaveBeenCalledTimes(1)
  expect(windowScrollSpy).toHaveBeenCalledWith({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})

new Array<number>(300, 301).forEach((v) => {
  test(`should render BackToTopButton correctly as ${v === 300 ? 'not ' : ''}visible`, () => {
    Object.defineProperty(window, 'scrollY', { value: v })
    window.dispatchEvent(new Event('scroll'))
    expect(wrapper).toMatchSnapshot()
  })
})
