import * as React from 'react'
import * as imgDigitalOceanBadge from '../assets/images/badges/digital-ocean-forest-2021.png'
import * as imgSupportUkraine from '../assets/images/badges/support-ukraine.png'
import SectionTitle from './Controls/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export default function Badges() {
  const { t } = useTranslation()
  return (
    <div id="badges" className="light-component">
      <SectionTitle>{t('badges.title')}</SectionTitle>
      <Container>
        <Row>
          <Col sm md lg className="text-center">
            <a
              href="https://standforukraine.com"
              rel="noopener noreferrer"
              target="_blank">
              <img
                className="mb-4 mx-4"
                src={imgSupportUkraine}
                alt="Support Ukraine"
                title="Stand With Ukraine"
              />
            </a>
          </Col>
          <Col sm md lg className="text-center">
            <a
              href="https://tree-nation.com/profile/digitalocean"
              rel="noopener noreferrer"
              target="_blank">
              <img
                className="img-circle mb-4 mx-4"
                src={imgDigitalOceanBadge}
                alt="Digital Ocean Forest Badge"
                title="DigitalOcean Forest 2021"
              />
            </a>
          </Col>
          {/* <Col sm md lg className="text-center">
            <Iframe
              url={'https://www.worldcommunitygrid.org/getDynamicImage.do?memberName=fabasoad&mnOn=true&stat=3&imageNum=1&rankOn=false&projectsOn=false&special=false&link=1&memberId=1103124'}
              frameBorder={0}
              name="di"
              scrolling="no"
              display="inline"
            />
          </Col> */}
        </Row>
      </Container>
    </div>
  )
}
