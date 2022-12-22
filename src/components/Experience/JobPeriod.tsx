import * as React from 'react'
import { useTranslation } from 'react-i18next'
import DateLocale from '../controls/DateLocale'
import JobDuration from './JobDuration'

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
        <h4>
          {(toMonthIndex != undefined &&
            toYear &&
            <DateLocale monthIndex={toMonthIndex} year={toYear} />) ||
            <div>{t('business-card-experience-present')}</div>}
          <br />-<br />
          <DateLocale monthIndex={fromMonthIndex} year={fromYear} />
        </h4>
      </div>
    )
  }

export default JobPeriod
