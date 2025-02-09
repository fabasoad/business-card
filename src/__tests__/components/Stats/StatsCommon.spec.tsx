import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import StatsCommon from '../../../components/Stats/StatsCommon'
import StringUtils from '../../../scripts/utils/StringUtils'
import { testStatsCommon } from './TestUtils'

describe('StatsCommon', () => {
  test('should render StatsCommon correctly', () => {
    const url = StringUtils.random(10)
    const techName = 'maven'
    const content = StringUtils.random(10)
    const { container } = render(
      <StatsCommon techName={techName} url={url}>{content}</StatsCommon>
    )
    testStatsCommon(
      container.querySelector('div.row.justify-content-center'), url, content, techName
    )
  })
})
