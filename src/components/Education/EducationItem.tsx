import * as React from 'react'
import { useTranslation } from 'react-i18next'

export default function EducationItem(props) {
  const { t } = useTranslation()
  return (
    <>
      <div className="timeline-image">
        <h4>{props.to}<br />-<br />{props.from}</h4>
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>{t("business-card-education-university-title")}</h4>
          <h4 className="subheading">{props.title}</h4>
        </div>
        <div className="timeline-body">
          <p>{t("business-card-education-university-speciality")}</p>
        </div>
      </div>
    </>
  )
}