import * as React from 'react'
import certificatesStorage
  from '../../scripts/certificates/CertificatesStorage'
import { Certificate } from '../../scripts/certificates/types'
import CertificateItem from './CertificateItem'
import SectionTitle from '../Controls/SectionTitle'
import { Container, Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export default function CertificatesMain() {
  const { t } = useTranslation()

  return (
    <div id="certificates" className="light-component">
      <SectionTitle>{t('certificates.title')}</SectionTitle>
      <Container>
        <Row xs={2} sm={3} md={4} lg={6}>
          {
            certificatesStorage.certificates.map((c: Certificate) =>
              <Col lg className="mb-2" key={c.id}>
                <CertificateItem certificate={c} />
              </Col>
            )
          }
        </Row>
      </Container>
    </div>
  )
}
