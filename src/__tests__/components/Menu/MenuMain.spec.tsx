import '@testing-library/jest-dom'
import * as React from 'react'
import MenuMain from '../../../components/Menu/MenuMain'
import { render } from '@testing-library/react'
import { testMenuMain } from './TestUtils'

describe('MenuMain', () => {
  test('should render MenuMain correctly', () => {
    const { container } = render(<MenuMain/>)
    testMenuMain(container.querySelector('div#nav'))
  })
})
