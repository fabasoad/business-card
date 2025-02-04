import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Row } from 'react-bootstrap'
import experienceStorage from '../../scripts/experience/ExperienceStorage'
import SectionTitle from '../Controls/SectionTitle'
import ExperienceItem from './ExperienceItem'

export default function ExperienceMain() {
  const { t } = useTranslation()

  return (
    <div id="experience" className="light-component">
      <Container>
        <SectionTitle>{t('experience.title')}</SectionTitle>
        <Row>
          <ul className="timeline">
            {
              experienceStorage.items.map((experience, index) => (
                <li key={index}>
                  <ExperienceItem experience={experience} />
                </li>
              ))
            }
          </ul>
        </Row>
      </Container>
    </div>
  )
}
