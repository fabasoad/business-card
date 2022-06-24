import * as React from 'react'
import { useTranslation } from 'react-i18next'
import DateLocale from '../controls/DateLocale'
import JobDuration from './JobDuration'

interface JobPeriodProps {
  fromMonth: number
  fromYear: number
  toMonth?: number
  toYear?: number
}

const JobPeriod: React.FunctionComponent<JobPeriodProps> =
  ({ fromMonth, fromYear, toMonth, toYear }) => {
    const { t } = useTranslation()
    return (
      <div className="timeline-image">
        <JobDuration
          fromMonth={fromMonth} fromYear={fromYear} toMonth={toMonth} toYear={toYear} />
        <h4>
          {(toMonth &&
            toYear &&
            <DateLocale month={toMonth} year={toYear} />) ||
            <div>{t('business-card-experience-present')}</div>}
          - <br />
          <DateLocale month={fromMonth} year={fromYear} />
        </h4>
      </div>
    )
  }

export default JobPeriod
