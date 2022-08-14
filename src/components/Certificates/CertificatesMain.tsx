import * as React from 'react'
import { useTranslation } from 'react-i18next'
import CertificateItem from './CertificateItem'
import { Container, Col, Row } from 'react-bootstrap'

import * as items from './items.json'
import CertificateIssuerStorage
  from '../../scripts/certificates/CertificateIssuerStorage'
import TechnologyStorage from '../../scripts/technologies/TechnologyStorage'

interface CertificatesMainProps {
  certificateIssuerStorage?: CertificateIssuerStorage
  technologyStorage?: TechnologyStorage
}

export default function CertificatesMain(
  { certificateIssuerStorage, technologyStorage }: CertificatesMainProps) {
  const { t } = useTranslation()
  return (
    <div id="certificates" className="light-component">
      <div className="section-title text-center center">
        <h2>{t('business-card-certificates-title')}</h2>
        <hr />
      </div>
      <Container>
        <Row xs={2} md={3} lg={5}>
          {items
            .sort((a, b) => -a.date.localeCompare(b.date))
            .map(({ id, date, issuer, technology, i18nTitleKey, url }) =>
              <Col lg={true} className="mb-2" key={id}>
                <CertificateItem
                  id={id}
                  issueDate={new Date(date)}
                  issuer={certificateIssuerStorage.findByName(issuer)}
                  technology={technologyStorage.findByName(technology)}
                  i18nTitleKey={i18nTitleKey}
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

CertificatesMain.defaultProps = {
  certificateIssuerStorage: new CertificateIssuerStorage(),
  technologyStorage: new TechnologyStorage()
}
