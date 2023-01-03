import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import PortfolioItem from '../../../components/Portfolio/PortfolioItem'
import { testPortfolioItem } from './TestUtils'

test('should render PortfolioItem correctly', () => {
  const img = 'test-img'
  const name = 'test-name'
  const url = 'test-url'
  const title = 'test-title'
  const subtitle = 'test-subtitle'
  const { container } = render(
    <PortfolioItem
      img={img}
      name={name}
      subtitle={subtitle}
      title={title}
      url={url}
    />
  )
  testPortfolioItem(
    container.querySelector('div.col-sm-6.col-md-3.col-lg-3'),
    url, name, title, subtitle, img
  )
})
