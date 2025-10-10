import * as React from 'react'
import type { StatsCommonProps } from '../StatsCommon'

const StatsCommon: React.FC<React.PropsWithChildren<StatsCommonProps>> =
  ({ techName, url, children }) => {
    return (
      <div data-testid={`StatsCommon-${techName}-${url}`}>{children}</div>
    )
  }

export default StatsCommon
