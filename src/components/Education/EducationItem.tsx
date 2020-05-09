import * as React from 'react'
import { useTranslation } from 'react-i18next'
import DateLocale from '../controls/DateLocale'

interface EducationItemProps {
  from: number
  to: number
  title: string
}

export default function EducationItem(props: EducationItemProps) {
  const { t } = useTranslation()
  return (
    <>
      <div className="timeline-image">
        <h4><DateLocale year={props.to} />-<br /><DateLocale year={props.from} /></h4>
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>{t('business-card-education-university-title')}</h4>
          <h4 className="subheading">{props.title}</h4>
        </div>
        <div className="timeline-body">
          <p>{t('business-card-education-university-speciality')}</p>
        </div>
      </div>
    </>
  )
}
