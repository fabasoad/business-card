import * as React from 'react'
import { useTranslation } from 'react-i18next'
import DateLocale from '../controls/DateLocale'

interface JobPeriodProps {
  fromMonth: number
  fromYear: number
  toMonth?: number
  toYear?: number
}

export default function JobPeriod(props: JobPeriodProps) {
  const { t } = useTranslation()
  return (
    <div className="timeline-image">
      <h4>
        {(props.toMonth &&
          props.toYear &&
          <DateLocale month={props.toMonth} year={props.toYear} />) ||
          <div>{t('business-card-experience-present')}</div>}
        - <br />
        <DateLocale month={props.fromMonth} year={props.fromYear} />
      </h4>
    </div>
  )
}
