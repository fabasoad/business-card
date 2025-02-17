import * as React from 'react'
import * as imgOSAR from '../../assets/images/education/osar.png'
import Section from '../Controls/Section'
import EducationItem from './EducationItem'
import { Row } from 'react-bootstrap'

export default function EducationMain() {
  return (
    <Section id="education">
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
    </Section>
  )
}
