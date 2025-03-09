/// <reference path='./Skills.d.ts' />
import * as React from 'react'
import Section from './Controls/Section'
import TechnologyStorage from '../scripts/technologies/TechnologyStorage'
import { Col, Row } from 'react-bootstrap'
import ThemeImage from './Controls/ThemeImage'

export default function Skills() {
  const technologyStorage = new TechnologyStorage()
  return (
    <Section id="skills">
      <Row>
        <Col className="skills-list text-center">
          {
            technologyStorage.findBySkill(true)
            .map((t) => <ThemeImage
              key={`skill-${t.name}`}
              className="m-4"
              imgLight={t.imgLight}
              imgDark={t.imgDark}
              alt={t.name}
              title={t.title}
            />)
          }
        </Col>
      </Row>
    </Section>
  )
}
