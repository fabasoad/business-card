import type { MockInstance } from 'vitest'
import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as ThemeContext from '../../components/Contexts/ThemeContext'
import LoadingSpinner from '../../components/LoadingSpinner'

describe('LoadingSpinner', () => {
  test.each(['dark', 'light', 'success'])(
    'should render LoadingSpinner correctly with %s color',
    (color: string) => {
      const spyInstance: MockInstance = vi.spyOn(ThemeContext, 'useThemeContext')
      spyInstance.mockImplementation(() => ({ theme: 'dark' }))

      const { container } = render(<LoadingSpinner color={color as any} />)
      expect(
        container.querySelector(`div.loader-light.d-flex.justify-content-center > div.spinner-border.text-${color}[role="status"] > span.sr-only`)
      ).toHaveTextContent('Loading...')
    }
  )

  test.each([['dark', 'light'], ['light', 'dark']])(
    'should render LoadingSpinner correctly with %s theme',
    (theme: string, expectedColor: string) => {
      const spyInstance: MockInstance = vi.spyOn(ThemeContext, 'useThemeContext')
      spyInstance.mockImplementation(() => ({ theme }))

      const { container } = render(<LoadingSpinner />)
      expect(
        container.querySelector(`div.loader-light.d-flex.justify-content-center > div.spinner-border.text-${expectedColor}[role="status"] > span.sr-only`)
      ).toHaveTextContent('Loading...')
    }
  )

  test.each(['dark', 'light'])(
    'should render LoadingSpinner correctly with %s background',
    (background: string) => {
      const spyInstance: MockInstance = vi.spyOn(ThemeContext, 'useThemeContext')
      spyInstance.mockImplementation(() => ({ theme: 'dark' }))

      const { container } = render(<LoadingSpinner background={background as any} />)
      expect(
        container.querySelector(`div.loader-${background}.d-flex.justify-content-center > div.spinner-border.text-light[role="status"] > span.sr-only`)
      ).toHaveTextContent('Loading...')
    }
  )
})
