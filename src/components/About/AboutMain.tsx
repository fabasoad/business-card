/// <reference path='./AboutMain.d.ts' />
import * as React from 'react'
import { Trans, useTranslation, getI18n } from 'react-i18next'
import * as imgAboutMe from '../../assets/images/about_me.jpg'
import * as img1z0808Badge from '../../assets/images/badges/oracle-1z0-808.png'
import TotalExperience from '../../scripts/TotalExperience'
import SectionTitle from '../Controls/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'

export default function AboutMain() {
  const { t, i18n } = useTranslation()
  const totalExperience = new TotalExperience()
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
            {
              Array.from({ length: 14 }, (_, i) => i).map(
                (i) => {
                  const keyPrefix = `about-me.list.${i}`
                  return <li key={`about-me-${i}`}>
                    {t(
                      `${keyPrefix}.title`,
                      { totalExperience: totalExperience.humanize(i18n.language) }
                    )}
                    {
                      getI18n().exists(`${keyPrefix}.list`)
                        ? <ul><li><Trans i18nKey={`${keyPrefix}.list`} tOptions={{ joinArrays: '</li><li>' }} /></li></ul>
                        : ''
                    }
                  </li>
                }
              )
            }
          </ul>
        </Col>
      </Row>
    </Container>
  )
}
