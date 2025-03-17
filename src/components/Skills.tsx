/// <reference path='./Skills.d.ts' />
import * as React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Technology } from '../scripts/technologies/types'
import Section from './Controls/Section'
import TechnologyStorage from '../scripts/technologies/TechnologyStorage'
import { Col, Row } from 'react-bootstrap'
import ThemeImage from './Controls/ThemeImage'
import LoadingSpinner from './LoadingSpinner'

export default function Skills() {
  const technologyStorage = new TechnologyStorage()
  const { data, isLoading } = useQuery({
    queryKey: [technologyStorage.constructor.name],
    queryFn: () => technologyStorage.findBySkill(true)
  })
  if (isLoading) {
    return <LoadingSpinner />
  }
  return (
    <Section id="skills">
      <Row>
        <React.Suspense fallback={<LoadingSpinner />}>
          <Col className="skills-list text-center">
            {
              data
              .map((t: Technology) => <ThemeImage
                key={`skill-${t.name}`}
                className="m-4"
                imgLight={t.imgLight}
                imgDark={t.imgDark}
                alt={t.name}
                title={t.title}
              />)
            }
          </Col>
        </React.Suspense>
      </Row>
    </Section>
  )
}
