import * as React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { Col } from 'react-bootstrap'

function FooterLocation({ t }: WithTranslation) {
  return (
    <Col>
      <i className="fa fa-map-marker-alt fa-2x"></i>
      <p>{t('business-card-contact-city')}</p>
    </Col>
  )
}

export default withTranslation()(FooterLocation)
