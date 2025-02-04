import '@testing-library/jest-dom'
import * as React from 'react'
import SectionTitle from '../../../components/Controls/SectionTitle'
import StringUtils from '../../../scripts/utils/StringUtils'
import { render } from '@testing-library/react'

describe('SectionTitle', () => {
  test('should render SectionTitle correctly', () => {
    const title = StringUtils.random(10)
    const { container } = render(<SectionTitle>{title}</SectionTitle>)
    const div = container.querySelector('div.section-title.text-center.center')
    expect(div.querySelector('h2')).toHaveTextContent(title)
    expect(div.querySelector('hr')).toBeInTheDocument()
  })
})
