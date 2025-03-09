import '@testing-library/jest-dom'
import * as React from 'react'
import * as hooks from 'use-local-storage'
import ThemeImage from '../../../components/Controls/ThemeImage'
import StringUtils from '../../../scripts/utils/StringUtils'
import { render } from '@testing-library/react'

class ThemeImageFixture {
  private readonly theme: string

  constructor(theme: string) {
    this.theme = theme
  }

  toString() {
    return this.theme
  }
}

describe('ThemeImage', () => {
  let windowSpy: jest.SpyInstance

  beforeAll(() => {
    jest.spyOn(hooks, 'default').mockImplementation(
      (k: string, v: string) => [v, jest.fn()]
    )
  })

  beforeEach(() => {
    windowSpy = jest.spyOn(window, "window", "get")
  })

  afterEach(() => {
    windowSpy.mockRestore()
  })

  test.each([
    ['dark', true],
    ['dark', false],
    ['light', true],
    ['light', false],
  ])('should render ThemeImage correctly when theme is %s and dark defined: %s', (
    theme: string, isDarkUndefined: boolean
  ) => {
    windowSpy.mockImplementation(() => ({
      matchMedia: (q: string) => ({ matches: q === `(prefers-color-scheme: ${theme})` })
    }))
    const expectedClassName = `a${StringUtils.random(9)}`
    const expectedImgLight = new ThemeImageFixture('light')
    const expectedImgDark = isDarkUndefined
      ? undefined
      : new ThemeImageFixture('dark')
    const expectedAlt = `b${StringUtils.random(9)}`
    const expectedTitle = `c${StringUtils.random(9)}`
    const { container } = render(<ThemeImage
      className={expectedClassName}
      alt={expectedAlt}
      title={expectedTitle}
      imgLight={expectedImgLight}
      imgDark={expectedImgDark}
    />)
    expect(
      container.querySelector(`img.${expectedClassName}[src=${theme === 'dark' && !isDarkUndefined ? expectedImgDark : expectedImgLight}][alt=${expectedAlt}][title=${expectedTitle}]`)
    ).toBeInTheDocument()
  })
})
