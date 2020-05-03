import * as React from 'react'
import { useTranslation } from 'react-i18next'

export default function JobPeriod({ fromMonth, fromYear, toMonth, toYear }) {
  const { t } = useTranslation()
  return (
    <div className="timeline-image">
      <h4>
        <span className="mr-1">{t(`business-card-month-${toMonth}`)}</span>
        <span>{toYear}</span>
        <br />- <br />
        <span className="mr-1">{t(`business-card-month-${fromMonth}`)}</span>
        <span>{fromYear}</span>
      </h4>
    </div>
  )
}