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
      <SectionTitle>{t('certificates.title')}</SectionTitle>
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
                return -t(b.issuer).localeCompare(t(a.issuer))
              })
              .map(({ id, date, issuer, technology, url }) =>
                <Col lg className="mb-2" key={id}>
                  <CertificateItem
                    id={id}
                    issueDate={new Date(date)}
                    issuer={certificateIssuerStorage.findByName(issuer)}
                    technology={technologyStorage.findByName(technology)}
                    name={t(`certificates.list.${id}`)}
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
