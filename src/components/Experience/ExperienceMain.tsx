import * as React from 'react'
import { Row } from 'react-bootstrap'
import experienceStorage from '../../scripts/experience/ExperienceStorage'
import Section from '../Controls/Section'
import ExperienceItem from './ExperienceItem'

export default function ExperienceMain() {
  return (
    <Section id="experience">
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
    </Section>
  )
}
