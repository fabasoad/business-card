import * as React from 'react'
import Section from './Controls/Section'
import { Col } from 'react-bootstrap'
import { Trans, useTranslation } from 'react-i18next'

export default function Resume() {
  const { t } = useTranslation()
  return (
    <Section id="resume">
      <Col className="text-center">
        <Trans t={t} i18nKey="resume.body">
          To download my resume please go to my <a href="https://www.linkedin.com/in/yevhenfabizhevskyi/" target="_blank" rel="noreferrer">LinkedIn page</a> and choose More → Save to PDF
        </Trans>
      </Col>
    </Section>
  )
}
