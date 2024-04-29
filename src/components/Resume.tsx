import * as React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Trans, type WithTranslation, withTranslation } from 'react-i18next'
import SectionTitle from './Controls/SectionTitle'

function Resume({ t }: WithTranslation) {
  return (
    <div id="resume" className="light-component">
      <SectionTitle>{t('business-card-resume-title')}</SectionTitle>
      <Container>
        <Col className="text-center">
          <Trans i18nKey="business-card-resume-message">
            To download my resume please go to my{' '}
            <a
              href="https://www.linkedin.com/in/yevhenfabizhevskyi/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn page
            </a>{' '}
            and choose More → Save to PDF
          </Trans>
        </Col>
      </Container>
    </div>
  )
}

export default withTranslation()(Resume)
