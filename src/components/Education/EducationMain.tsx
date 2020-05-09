import * as React from 'react'
import { useTranslation } from 'react-i18next'

import EducationItem from './EducationItem'

export default function EducationMain() {
  const { t } = useTranslation()
  return (
    <div className="light-component" id="education">
      <div className="container">
        <div className="section-title text-center">
          <h2>{t('business-card-education-title')}</h2>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <EducationItem from={2009} to={2010} title={t('business-card-education-university-master')} />
              </li>
              <li className="timeline-inverted">
                <EducationItem from={2005} to={2009} title={t('business-card-education-university-bachelor')} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
