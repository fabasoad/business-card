import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from '../../components/Header'

describe('Header', () => {
  const testButton = (div: HTMLDivElement, id: string) => {
    expect(
      div.querySelector(`a.btn.btn-lg.btn-primary[href="#${id}"]`)
    ).toHaveTextContent(`${id}.title`)
  }

  test('should render Header correctly', () => {
    const { container } = render(<Header />)
    const divSelector = 'div#header.header.row.d-flex.flex-md-row-reverse.flex-lg-row-reverse.align-items-center'
    expect(container.querySelector(divSelector).children).toHaveLength(2)
    expect(
      container.querySelector<HTMLImageElement>(
        `${divSelector} > div.header__img-container.col-md-5.col-lg-5 > img.d-flex.mx-lg-auto.img-fluid[src="[object Object]"][alt="Portrait"][loading="lazy"]`
      )
    ).toBeInTheDocument()
    const divText = container.querySelector<HTMLDivElement>(
      `${divSelector} > div.col-md-7.col-lg-7.pt-1`
    )
    expect(divText.querySelector('h1')).toBeInTheDocument()
    expect(divText.querySelector('h5')).toHaveTextContent('header.occupation')
    testButton(divText, 'about-me')
    testButton(divText, 'experience')
  })
})
