import * as React from 'react'
import * as items from './items.json'
import CertificateIssuerStorage
  from '../../scripts/certificates/CertificateIssuerStorage'
import CertificateItem from './CertificateItem'
import SectionTitle from '../Controls/SectionTitle'
import TechnologyStorage from '../../scripts/technologies/TechnologyStorage'
import { Container, Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

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
            .map((item) => <Col lg className="mb-2" key={item.id}>
              <CertificateItem
                id={item.id}
                issueDate={new Date(item.date)}
                issuer={certificateIssuerStorage.findByName(item.issuer)}
                technology={technologyStorage.findByName(item.technology)}
                name={t(item.i18nTitleKey)}
                url={item.url}
              />
            </Col>)}
        </Row>
      </Container>
    </div>
  )
}
