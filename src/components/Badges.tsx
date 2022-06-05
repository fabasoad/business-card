import * as React from 'react'
import { useTranslation } from 'react-i18next'
import imgDigitalOceanBadge from '../assets/images/badges/digital-ocean-forest-2021.png'

interface BadgesProps {}

const Badges: React.FC<BadgesProps> = () => {
  const { t } = useTranslation()
  return (
    <div id="badges" className="light-component">
      <div className="section-title text-center center">
        <h2>{t('business-card-badges-title')}</h2>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm col-md col-lg text-center">
            <a href="https://tree-nation.com/profile/digitalocean" rel="noopener noreferrer" target="_blank">
              <img className="mb-4 mx-4" src={imgDigitalOceanBadge} alt="Digital Ocean Forest Badge" title="DigitalOcean Forest 2021" />
            </a>
          </div>
          {/* <div className="col-sm col-md col-lg text-center">
            <Iframe
              url={'https://www.worldcommunitygrid.org/getDynamicImage.do?memberName=fabasoad&mnOn=true&stat=3&imageNum=1&rankOn=false&projectsOn=false&special=false&link=1&memberId=1103124'}
              frameBorder={0}
              name="di"
              scrolling="no"
              display="inline"
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Badges;
