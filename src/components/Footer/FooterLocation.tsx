import * as React from 'react'
import { Col } from 'react-bootstrap'
import { WithTranslation, withTranslation } from 'react-i18next'

function FooterLocation({ t }: WithTranslation) {
  return (
    <Col>
      <i className="fa fa-map-marker-alt fa-2x"></i>
      <p>{t('business-card-contact-city')}</p>
    </Col>
  )
}

export default withTranslation()(FooterLocation)
