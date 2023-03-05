import '@testing-library/jest-dom'
import * as React from 'react'
import SectionTitle from '../../../components/Controls/SectionTitle'
import StringUtils from '../../../scripts/utils/StringUtils'
import { render } from '@testing-library/react'
import { testSectionTitle } from './TestUtils'

test('should render SectionTitle correctly', () => {
  const title = StringUtils.random(10)
  const { container } = render(<SectionTitle>{title}</SectionTitle>)
  testSectionTitle(container.querySelector('div.section-title'), title)
})
