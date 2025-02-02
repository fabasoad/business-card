import * as React from 'react'
import SectionTitle from './Controls/SectionTitle'
import { Col, Container } from 'react-bootstrap'
import { Trans, useTranslation } from 'react-i18next'

export default function Resume() {
  const { t } = useTranslation()
  return (
    <div id="resume" className="light-component">
      <SectionTitle>{t('resume.title')}</SectionTitle>
      <Container>
        <Col className="text-center">
          <Trans i18nKey="resume.body">
            To download my resume please go to my <a href="https://www.linkedin.com/in/yevhenfabizhevskyi/" target="_blank" rel="noreferrer">LinkedIn page</a> and choose More → Save to PDF
          </Trans>
        </Col>
      </Container>
    </div>
  )
}
