/// <reference path='./AboutMain.d.ts' />
import * as React from 'react'
import { Trans, withTranslation, WithTranslation } from 'react-i18next'
import * as imgAboutMe from '../../assets/images/about_me.jpg'
import * as img1z0808Badge from '../../assets/images/badges/oracle-1z0-808.png'
import TotalExperience from '../../scripts/TotalExperience'
import SectionTitle from '../Controls/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'

function AboutMain({ t, i18n }: WithTranslation) {
  const totalExperience = new TotalExperience()
  return (
    <Container id="about">
      <SectionTitle>{t('business-card-about-me-title')}</SectionTitle>
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
            <li>
              {t(
                'business-card-about-me-general-list-item-1',
                { totalExperience: totalExperience.humanize(i18n.language) }
              )}
            </li>
            <li>{t('business-card-about-me-general-list-item-2')}</li>
            <li>{t('business-card-about-me-general-list-item-3')}</li>
            <li>{t('business-card-about-me-general-list-item-4')}</li>
            <li>{t('business-card-about-me-general-list-item-5')}</li>
            <li>{t('business-card-about-me-general-list-item-6')}</li>
            <li>{t('business-card-about-me-general-list-item-7')}</li>
            <li>{t('business-card-about-me-general-list-item-8')}</li>
            <li>{t('business-card-about-me-general-list-item-9')}</li>
            <li>{t('business-card-about-me-general-list-item-10')}</li>
            <li>{t('business-card-about-me-general-list-item-11')}</li>
            <li>{t('business-card-about-me-general-list-item-12')}</li>
            <li>
              {t('business-card-about-me-general-list-item-13')}
              <ul>
                <li>{t('business-card-about-me-general-list-item-14')}</li>
                <li>
                  <Trans i18nKey="business-card-about-me-general-list-item-15">
                    Developed and released <a href="https://github.com/marketplace?type=actions&query=fabasoad+" target="_blank" rel="noreferrer">25+ GitHub Actions to the marketplace</a>
                  </Trans>
                </li>
                <li>{t('business-card-about-me-general-list-item-16')}</li>
              </ul>
            </li>
            <li>{t('business-card-about-me-general-list-item-17')}</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default withTranslation()(AboutMain)
