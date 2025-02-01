import * as React from 'react'
import * as imgOSAR from '../../assets/images/education/osar.png'
import { getDateLocale } from '../../scripts/utils/DateUtils'
import SectionTitle from '../Controls/SectionTitle'
import { Container, Row } from 'react-bootstrap'
import { useTranslation} from 'react-i18next'

export default function EducationMain() {
  const { t } = useTranslation()
  return (
    <div id="education" className="light-component">
      <Container>
        <SectionTitle>{t('education.title')}</SectionTitle>
        <Row>
          <ul className="timeline">
            <li>
              <p className="timeline__title">
                <img src={imgOSAR} alt="Odesa State Academy of Refrigeration" />
                {t('education.university.title')} ({t('locations.odesa')})
              </p>
              <p className="timeline__subtitle">{getDateLocale(2005)} - {getDateLocale(2010)}</p>
              <div className="timeline__body">
                {t('education.university.speciality')}
              </div>
            </li>
          </ul>
        </Row>
      </Container>
    </div>
  )
}
