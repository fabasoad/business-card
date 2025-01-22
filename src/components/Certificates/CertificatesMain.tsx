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
        <Row xs={2} sm={3} md={4} lg={6}>
          {
            items
              .sort((a, b) => {
                let res = a.date.localeCompare(b.date)
                if (res !== 0) {
                  return -res
                }
                res = a.issuer.localeCompare(b.issuer)
                if (res !== 0) {
                  return -res
                }
                return -t(b.i18nTitleKey).localeCompare(t(a.i18nTitleKey))
              })
              .map(({ id, date, issuer, technology, url, i18nTitleKey }) =>
                <Col lg className="mb-2" key={id}>
                  <CertificateItem
                    id={id}
                    issueDate={new Date(date)}
                    issuer={certificateIssuerStorage.findByName(issuer)}
                    technology={technologyStorage.findByName(technology)}
                    name={t(i18nTitleKey)}
                    url={url}
                  />
                </Col>
              )
          }
        </Row>
      </Container>
    </div>
  )
}
