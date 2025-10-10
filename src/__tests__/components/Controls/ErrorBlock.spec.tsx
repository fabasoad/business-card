import '@testing-library/jest-dom'
import * as React from 'react'
import ErrorBlock from '../../../components/Controls/ErrorBlock'
import { randomString } from '../../../scripts/utils/StringUtils'
import { render } from '@testing-library/react'

describe('ErrorBlock', () => {
  test('should render ErrorBlock correctly', () => {
    const title = randomString(10)
    const body = randomString(10)
    const { container } = render(<ErrorBlock title={title}>{body}</ErrorBlock>)
    const div = container.querySelector('div.error > div.container')
    const divRows = div.querySelectorAll('div.row')
    expect(divRows).toHaveLength(2)
    expect(divRows.item(0)).toHaveTextContent(title)
    expect(divRows.item(1)).toHaveTextContent(body)
  })
})
