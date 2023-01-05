import * as React from 'react'
import { useTranslation } from 'react-i18next'
import CertificateItem from './CertificateItem'
import { Container, Col, Row } from 'react-bootstrap'

import * as items from './items.json'
import CertificateIssuerStorage
  from '../../scripts/certificates/CertificateIssuerStorage'
import TechnologyStorage from '../../scripts/technologies/TechnologyStorage'
import SectionTitle from '../Controls/SectionTitle'

export default function CertificatesMain() {
  const { t } = useTranslation()
  const certificateIssuerStorage = new CertificateIssuerStorage()
  const technologyStorage = new TechnologyStorage()
  return (
    <div id="certificates" className="light-component">
      <SectionTitle>{t('business-card-certificates-title')}</SectionTitle>
      <Container>
        <Row xs={2} md={3} lg={5}>
          {items
            .sort((a, b) => -a.date.localeCompare(b.date))
            .map((item) => <Col lg={true} className="mb-2" key={item.id}>
              <CertificateItem
                id={item.id}
                issueDate={new Date(item.date)}
                issuer={certificateIssuerStorage.findByName(item.issuer)}
                technology={technologyStorage.findByName(item.technology)}
                i18nTitleKey={item.i18nTitleKey}
                url={item.url}
              />
            </Col>)}
        </Row>
      </Container>
    </div>
  )
}
