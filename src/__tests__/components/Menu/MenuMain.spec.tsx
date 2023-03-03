import '@testing-library/jest-dom'
import * as React from 'react'
import MenuMain from '../../../components/Menu/MenuMain'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { render } from '@testing-library/react'
import { testMenuMain } from './TestUtils'

describe('MenuMain', () => {
  for (const locale of SupportedLocales._items) {
    test(`[${locale.code}] should render MenuMain correctly`, () => {
      const { container } = render(<MenuMain/>)
      testMenuMain(container.querySelector('div#nav'))
    })
  }
})
