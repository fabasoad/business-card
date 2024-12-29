import * as React from 'react'
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
          <Col>
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="55ddd8bd-950d-45bb-ad25-d08269bc9ca1"
              data-share-badge-host="https://www.credly.com">
            </div>
          </Col>
          <Col>
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="9f12275d-a5b5-4d4d-9127-c975c555f0ab"
              data-share-badge-host="https://www.credly.com">
            </div>
          </Col>
          <Col>
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="a1c1ec77-29db-4139-8fcb-ac95408653e8"
              data-share-badge-host="https://www.credly.com">
            </div>
          </Col>
          <Col>
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="6f36f952-612a-4aa1-8a3d-adb29396c967"
              data-share-badge-host="https://www.credly.com">
            </div>
          </Col>
          <Col>
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="711c8e30-13e7-499e-aad6-5da9d468177a"
              data-share-badge-host="https://www.credly.com">
            </div>
          </Col>
          <Col>
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="24722d5e-1738-4cec-808b-b4b83a94a8ad"
              data-share-badge-host="https://www.credly.com">
            </div>
          </Col>
          <Col>
            <CertificateItem
              id="F75CDD8ED9F0" // pragma: allowlist secret
              issueDate={new Date("2020-09")}
              issuer={certificateIssuerStorage.findByName("hacker-rank")}
              technology={technologyStorage.findByName("algorithms")}
              name={t("business-card-certificate-4")}
              url="https://www.hackerrank.com/certificates/f75cdd8ed9f0"
            />
          </Col>
          <Col>
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="689b9d7e-cae5-4e36-8a1f-c8c34f104249"
              data-share-badge-host="https://www.credly.com">
            </div>
          </Col>
          <Col>
            <CertificateItem
              id="UC-JGDVYKAQ"
              issueDate={new Date("2019-10")}
              issuer={certificateIssuerStorage.findByName("udemy")}
              technology={technologyStorage.findByName("react")}
              name={t("business-card-certificate-3")}
              url="https://ude.my/UC-JGDVYKAQ"
            />
          </Col>
          <Col>
            <CertificateItem
              id="W5AB2PBZQNPY"
              issueDate={new Date("2018-03")}
              issuer={certificateIssuerStorage.findByName("coursera")}
              technology={technologyStorage.findByName("java")}
              name={t("business-card-certificate-2")}
              url="https://www.coursera.org/account/accomplishments/specialization/W5AB2PBZQNPY"
            />
          </Col>
          <Col>
            <CertificateItem
              id="MWE43H8YDS"
              issueDate={new Date("2015-05")}
              issuer={certificateIssuerStorage.findByName("coursera")}
              technology={technologyStorage.findByName("python")}
              name={t("business-card-certificate-1")}
              url="https://www.coursera.org/account/accomplishments/verify/MWE43H8YDS"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
