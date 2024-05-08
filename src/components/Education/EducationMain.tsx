import * as React from 'react'
import EducationItem from './EducationItem'
import SectionTitle from '../Controls/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation} from 'react-i18next'

export default function EducationMain() {
  const { t } = useTranslation()
  return (
    <div id="education" className="light-component">
      <Container>
        <SectionTitle>{t('business-card-education-title')}</SectionTitle>
        <Row>
          <Col lg>
            <ul className="timeline">
              <li>
                <EducationItem
                  from={2005}
                  to={2010}
                  title={t('business-card-education-university-master')}
                />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
