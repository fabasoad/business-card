import '@testing-library/jest-dom'
import * as React from 'react'
import SocialIcon from '../../../components/Controls/SocialIcon'
import { render } from '@testing-library/react'

describe('SocialIcon', () => {
  test('should render SocialIcon correctly', () => {
    const url = 'test-url'
    const icon = 'test-icon'
    const label = 'test-label'
    const { container } = render(<SocialIcon url={url} icon={icon} label={label} />)
    const a = container.querySelector(
      `a.btn[target="_blank"][rel="noopener noreferrer"][href="${url}"]`
    )
    expect(a).toBeInTheDocument()
    expect(a).toHaveAttribute('aria-label', label)
    expect(
      container.querySelector(
        `a.btn[target="_blank"][rel="noopener noreferrer"][href="${url}"] > i.fab.${icon}.fa-2x`
      )
    ).toBeInTheDocument()
  })
})
