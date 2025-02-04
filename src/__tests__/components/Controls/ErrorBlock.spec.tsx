import '@testing-library/jest-dom'
import * as React from 'react'
import ErrorBlock from '../../../components/Controls/ErrorBlock'
import StringUtils from '../../../scripts/utils/StringUtils'
import { render } from '@testing-library/react'

test('should render ErrorBlock correctly', () => {
  const title = StringUtils.random(10)
  const { container } = render(<ErrorBlock title={title}><div id="test"></div></ErrorBlock>)
  const div = container.querySelector('div.error')
  const divContainer = div.querySelector('div.container')
  const divRows = divContainer.querySelectorAll('div.row')
  expect(divRows).toHaveLength(2)
  expect(divRows.item(0)).toHaveTextContent(title)
  const divTest = divRows.item(1).querySelector('div#test')
  expect(divTest).toBeInTheDocument()
})
