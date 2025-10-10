import * as React from 'react'
import certificatesStorage
  from '../../scripts/certificates/CertificatesStorage'
import type { Certificate } from '../../scripts/certificates/types'
import Section from '../Controls/Section'
import CertificateItem from './CertificateItem'
import { Col, Row } from 'react-bootstrap'

export default function CertificatesMain() {
  return (
    <Section id="certificates">
      <Row xs={2} sm={3} md={4} lg={6}>
        {
          certificatesStorage.certificates.map((c: Certificate) =>
            <Col lg className="mb-2" key={c.id}>
              <CertificateItem certificate={c} />
            </Col>
          )
        }
      </Row>
    </Section>
  )
}
