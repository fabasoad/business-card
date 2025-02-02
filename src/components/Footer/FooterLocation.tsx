import * as React from 'react'
import { Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export default function FooterLocation() {
  const { t } = useTranslation()
  return (
    <Col>
      <i className="fa fa-map-marker-alt fa-2x"></i>
      <p>{t('contacts.location')}</p>
    </Col>
  )
}
