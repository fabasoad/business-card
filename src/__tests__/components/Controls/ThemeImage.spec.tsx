import '@testing-library/jest-dom'
import * as React from 'react'
import * as ThemeContext from '../../../components/Contexts/ThemeContext'
import ThemeImage from '../../../components/Controls/ThemeImage'
import { randomString } from '../../../scripts/utils/StringUtils'
import { render } from '@testing-library/react'

describe('ThemeImage', () => {
  let useThemeContextSpy: jest.SpyInstance

  beforeAll(() => {
    useThemeContextSpy = jest.spyOn(ThemeContext, 'useThemeContext')
  })

  afterEach(() => {
    useThemeContextSpy.mockRestore()
  })

  test.each([
    ['dark', 'testImgDark', 'testImgLight', 'testImgDark'],
    ['dark', null, 'testImgLight', 'testImgLight'],
    ['light', 'testImgDark', 'testImgLight', 'testImgLight'],
    ['light', null, 'testImgLight', 'testImgLight'],
  ])('should render ThemeImage correctly when theme is %s and imgDark is %s', (
    theme: string, imgDark: string | undefined, imgLight: string, expectedSrc: string
  ) => {
    useThemeContextSpy.mockImplementation(() => ({ theme }))
    const expectedClassName = `a${randomString(9)}`
    const expectedAlt = `b${randomString(9)}`
    const expectedTitle = `c${randomString(9)}`
    const { container } = render(<ThemeImage
      className={expectedClassName}
      alt={expectedAlt}
      title={expectedTitle}
      imgLight={imgLight}
      imgDark={imgDark}
    />)
    expect(
      container.querySelector(`img.${expectedClassName}[src=${expectedSrc}][alt=${expectedAlt}][title=${expectedTitle}]`)
    ).toBeInTheDocument()
  })
})
