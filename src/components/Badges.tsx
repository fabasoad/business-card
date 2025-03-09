import * as React from 'react'
import * as imgDigitalOceanBadge from '../assets/images/badges/digital-ocean-forest-2021.png'
import * as imgSupportUkraine from '../assets/images/badges/support-ukraine.png'
import Section from './Controls/Section'
import { Col, Row } from 'react-bootstrap'

export default function Badges() {
  return (
    <Section id="badges">
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
              loading="lazy"
            />
          </a>
        </Col>
        <Col sm md lg className="text-center">
          <a
            href="https://tree-nation.com/profile/digitalocean"
            rel="noopener noreferrer"
            target="_blank">
            <img
              className="rounded-circle mb-4 mx-4"
              src={imgDigitalOceanBadge}
              alt="Digital Ocean Forest Badge"
              title="DigitalOcean Forest 2021"
              loading="lazy"
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
    </Section>
  )
}
