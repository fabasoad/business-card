import * as React from 'react'
import { useTranslation } from 'react-i18next'
import DateLocale from '../Controls/DateLocale'

interface JobTimelineProps {
  fromMonthIndex: number
  fromYear: number
  toMonthIndex?: number
  toYear?: number
}

const JobTimeline: React.FunctionComponent<JobTimelineProps> =
  ({ fromMonthIndex, fromYear, toMonthIndex, toYear }) => {
    const { t } = useTranslation()
    return (
      <div className="job-timeline col">
        <div className="row">
          {
            (toMonthIndex != undefined &&
              toYear &&
              <DateLocale monthIndex={toMonthIndex} year={toYear} />) ||
            <div>{t('business-card-experience-present')}</div>
          }
        </div>
        <div className="row">-</div>
        <div className="row"><DateLocale monthIndex={fromMonthIndex} year={fromYear} /></div>
      </div>
    )
  }

export default JobTimeline
