import * as React from 'react'
import { useTranslation } from 'react-i18next'
import * as imgDigitalOceanBadge from '../assets/images/badges/digital-ocean-forest-2021.png'
import SectionTitle from './Controls/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'

interface BadgesProps {}

const Badges: React.FC<BadgesProps> = () => {
  const { t } = useTranslation()
  return (
    <div id="badges" className="light-component">
      <SectionTitle>{t('business-card-badges-title')}</SectionTitle>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12} className="text-center">
            <a href="https://tree-nation.com/profile/digitalocean" rel="noopener noreferrer" target="_blank">
              <img className="mb-4 mx-4" src={imgDigitalOceanBadge} alt="Digital Ocean Forest Badge" title="DigitalOcean Forest 2021" />
            </a>
          </Col>
          {/* <div className="col-sm col-md col-lg text-center">
            <Iframe
              url={'https://www.worldcommunitygrid.org/getDynamicImage.do?memberName=fabasoad&mnOn=true&stat=3&imageNum=1&rankOn=false&projectsOn=false&special=false&link=1&memberId=1103124'}
              frameBorder={0}
              name="di"
              scrolling="no"
              display="inline"
            />
          </div> */}
        </Row>
      </Container>
    </div>
  )
}

export default Badges;
