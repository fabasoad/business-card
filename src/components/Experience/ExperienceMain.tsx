import * as React from 'react'
import * as imgArkaFSS from '../../assets/images/companies/arka-fss.png'
import * as imgBitcoinCom from '../../assets/images/companies/bitcoin-com.png'
import * as imgLohika from '../../assets/images/companies/lohika.png'
import * as imgWbyT from '../../assets/images/companies/wbyt.png'
import { getDateLocale } from '../../scripts/utils/DateUtils'
import DateCircleBox from '../Controls/DateCircleBox'
import JobDescription from './JobDescription'
import JobResponsibilities from './JobResponsibilities'
import JobTechnologies from './JobTechnologies'
import JobTitle from './JobTitle'
import { Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../Controls/SectionTitle';

export default function ExperienceMain() {
  const { t } = useTranslation()
  return (
    <div id="experience" className="light-component">
      <Container>
        <SectionTitle>{t('business-card-experience-title')}</SectionTitle>
        <Row>
          <ul className="experience-timeline">
            <li>
              <p className="experience-title">Woven by Toyota ({t('business-card-location-tokyo')})</p>
              <p className="experience-subtitle">{getDateLocale(2020, 4)} - {t('experience.present')}</p>
              <p className="experience-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque scelerisque diam non nisi semper, et elementum lorem
                ornare. Maecenas placerat facilisis mollis. Duis sagittis
                ligula in sodales vehicula....
              </p>
            </li>
            <li>
              <p className="experience-title">Bitcoin.com ({t('business-card-location-tokyo')})</p>
              <p className="experience-subtitle">Sep 2018 - Apr 2020</p>
              <p className="experience-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque scelerisque diam non nisi semper, et elementum lorem
                ornare. Maecenas placerat facilisis mollis. Duis sagittis
                ligula in sodales vehicula....
              </p>
            </li>
            <li>
              <p className="experience-title">Lohika ({t('business-card-location-odesa')})</p>
              <p className="experience-subtitle">Oct 2011 - Sep 2018</p>
              <p className="experience-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque scelerisque diam non nisi semper, et elementum lorem
                ornare. Maecenas placerat facilisis mollis. Duis sagittis
                ligula in sodales vehicula....
              </p>
            </li>
            <li>
              <p className="experience-title">ARKA - Finance, Software, Services ({t('business-card-location-odesa')})</p>
              <p className="experience-subtitle">Mar 2010 - Sep 2011</p>
              <p className="experience-body">
                Developing investing application as an internal project. Also, developing various web applications for external customers mostly from Germany.
              </p>
              <p className="experience-techstack">
                Tech stack: C#/Silverlight, JavaScript, PHP, MySQL.
              </p>
            </li>
          </ul>
        </Row>
      </Container>
    </div>
  )
}
