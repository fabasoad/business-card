import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { testSectionTitle } from './TestUtils'
import SectionTitle from '../../../components/Controls/SectionTitle'
import StringUtils from '../../../scripts/utils/StringUtils'

test('should render SectionTitle correctly', () => {
  const title = StringUtils.random(10)
  const { container } = render(<SectionTitle>{title}</SectionTitle>)
  testSectionTitle(container.querySelector('div.section-title'), title)
})
