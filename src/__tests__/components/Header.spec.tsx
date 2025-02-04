import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from '../../components/Header'

describe('Header', () => {
  const testButton = (div: HTMLDivElement, href: string, text: string) => {
    const a = div.querySelector(`a[href="${href}"]`)
    expect(a).toHaveClass('btn')
    expect(a).toHaveClass('btn-lg')
    expect(a).toHaveClass('btn-primary')
    expect(a).toHaveTextContent(text)
  }

  test('should render Header correctly', () => {
    const { container } = render(<Header />)
    const div = container.querySelector<HTMLDivElement>(
      'header#header.header > div.header__text'
    )
    expect(div.querySelector('h1')).toBeInTheDocument()
    expect(div.querySelector('h5.header__text-subtitle')).toHaveTextContent('header.occupation')
    testButton(div, '#about-me', 'header.about-me')
    testButton(div, '#experience', 'experience.title')
  })
})
