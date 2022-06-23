/// <reference path='./Resume.d.ts' />
import * as React from 'react'
import { useTranslation, Trans } from 'react-i18next'

export default function Resume() {
  const { t } = useTranslation()
  return (
    <div id="resume" className="light-component">
      <div className="section-title text-center center">
        <h2>{t('business-card-resume-title')}</h2>
        <hr />
      </div>
      <div className="container">
        <div className="col text-center">
          <Trans i18nKey="business-card-resume-message">
            To download my resume please go to my <a href="https://www.linkedin.com/in/yevhenfabizhevskyi/" target="_blank" rel="noreferrer">LinkedIn page</a> and choose More → Save to PDF
          </Trans>
        </div>
      </div>
    </div>
  )
}
