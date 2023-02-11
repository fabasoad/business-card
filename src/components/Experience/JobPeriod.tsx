import * as React from 'react'
import DateDuration from '../Controls/DateDuration'
import DateTimeline from '../Controls/DateTimeline'

interface JobPeriodProps {
  fromMonthIndex: number
  fromYear: number
  toMonthIndex?: number
  toYear?: number
}

const JobPeriod: React.FunctionComponent<JobPeriodProps> =
  ({ fromMonthIndex, fromYear, toMonthIndex, toYear }) => {
    return (
      <div className="timeline-image">
        <DateDuration
          fromMonthIndex={fromMonthIndex}
          fromYear={fromYear}
          toMonthIndex={toMonthIndex}
          toYear={toYear}
        />
        <DateTimeline
          fromMonthIndex={fromMonthIndex}
          fromYear={fromYear}
          toMonthIndex={toMonthIndex}
          toYear={toYear}
        />
      </div>
    )
  }

export default JobPeriod
