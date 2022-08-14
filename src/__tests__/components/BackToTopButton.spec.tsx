/// <reference types="jest" />
import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import BackToTopButton from '../../components/BackToTopButton'

let container: HTMLElement
let windowScrollSpy: jest.SpyInstance<void, [number, number]>

beforeAll(() => {
  container = render(<BackToTopButton />).container
  windowScrollSpy = jest.spyOn(window, 'scrollTo').mockImplementation()
})

test('should scroll to top', async () => {
  const preventDefaultSpy = jest.fn()
  const isPrevented: boolean = fireEvent.click(container.querySelector('a'), {
    preventDefault: preventDefaultSpy
  })
  expect(isPrevented).toBe(false)
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
    expect(container.firstChild).toMatchSnapshot()
  })
})
