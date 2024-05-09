/// <reference path='./Skills.d.ts' />
import * as React from 'react'
import SectionTitle from './Controls/SectionTitle'
import TechnologyStorage from '../scripts/technologies/TechnologyStorage'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export default function Skills() {
  const { t } = useTranslation()
  const technologyStorage = new TechnologyStorage()
  return (
    <div id="skills" className="light-component">
      <SectionTitle>{t('business-card-skills-title')}</SectionTitle>
      <Container>
        <Row>
          <Col className="skills-list text-center">
            {
              technologyStorage.findBySkill(true)
                .map((t) => <img
                  key={`skill-${t.name}`}
                  className="m-4"
                  src={t.img}
                  alt={t.name}
                  title={t.title}
                />)
            }
          </Col>
        </Row>
      </Container>
    </div>
  )
}
