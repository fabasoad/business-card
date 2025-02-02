import * as React from 'react'
import * as imgOSAR from '../../assets/images/education/osar.png'
import SectionTitle from '../Controls/SectionTitle'
import EducationItem from './EducationItem'
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
              <EducationItem
                universityKey="osar"
                universityName="Odesa State Academy of Refrigeration"
                location="odesa"
                img={imgOSAR}
                fromYear={2005}
                toYear={2010}
              />
            </li>
          </ul>
        </Row>
      </Container>
    </div>
  )
}
