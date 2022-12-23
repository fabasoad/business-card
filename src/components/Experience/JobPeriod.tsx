import * as React from 'react'
import { useTranslation } from 'react-i18next'
import JobDuration from './JobDuration'
import JobTimeline from './JobTimeline';

interface JobPeriodProps {
  fromMonthIndex: number
  fromYear: number
  toMonthIndex?: number
  toYear?: number
}

const JobPeriod: React.FunctionComponent<JobPeriodProps> =
  ({ fromMonthIndex, fromYear, toMonthIndex, toYear }) => {
    const { t } = useTranslation()
    return (
      <div className="timeline-image">
        <JobDuration
          fromMonthIndex={fromMonthIndex}
          fromYear={fromYear}
          toMonthIndex={toMonthIndex}
          toYear={toYear}
        />
        <JobTimeline
          fromMonthIndex={fromMonthIndex}
          fromYear={fromYear}
          toMonthIndex={toMonthIndex}
          toYear={toYear}
        />
      </div>
    )
  }

export default JobPeriod
