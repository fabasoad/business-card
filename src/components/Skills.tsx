/// <reference path='./Skills.d.ts' />
import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { type WithTranslation, withTranslation } from 'react-i18next'
import TechnologyStorage from '../scripts/technologies/TechnologyStorage'
import SectionTitle from './Controls/SectionTitle'

function Skills({ t }: WithTranslation) {
  const technologyStorage = new TechnologyStorage()
  return (
    <div id="skills" className="light-component">
      <SectionTitle>{t('business-card-skills-title')}</SectionTitle>
      <Container>
        <Row>
          <Col className="skills-list text-center">
            {technologyStorage.findBySkill(true).map((t) => (
              <img
                key={`skill-${t.name}`}
                className="m-4"
                src={t.img}
                alt={t.name}
                title={t.title}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default withTranslation()(Skills)
