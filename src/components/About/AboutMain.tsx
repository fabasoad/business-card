/// <reference path='./AboutMain.d.ts' />
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import * as imgAboutMe from '../../assets/images/about_me.jpg'
import * as img1z0808Badge from '../../assets/images/badges/oracle-1z0-808.png'
import TotalExperience from '../../scripts/TotalExperience'
import SectionTitle from '../Controls/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'

export default function AboutMain() {
  const { t, i18n } = useTranslation()
  const totalExperience = new TotalExperience()

  const list = t(`about-me.list`, {
    returnObjects: true,
    totalExperience: totalExperience.humanize(i18n.language)
  })
  const renderList = (level: number, array) => {
    // For tests
    if (typeof array === 'string') {
      return array
    }
    return (
      <ul>
        {array.map((item, index) => (
          <li key={`about-me-item-${level}-${index}`}>
            {item.title}
            {Array.isArray(item.list) ? renderList(level + 1, item.list) : <></>}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Container id="about-me">
      <SectionTitle>{t('about-me.title')}</SectionTitle>
      <Row className="d-flex justify-content-center">
        <Col md className="about-photo d-flex justify-content-center">
          <img
            className="about-photo--portrait img-thumbnail"
            src={imgAboutMe}
            alt="About me"
          />
          <img
            className="about-photo--badge"
            src={img1z0808Badge}
            alt="Oracle 1Z0-808"
          />
        </Col>
        <Col md={{ span: 8, offset: 2 }}>
          <ul className="mt-3">
            {renderList(1, list)}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}
