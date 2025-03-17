import * as React from 'react'
import Section from '../Controls/Section'
import LoadingSpinner from '../LoadingSpinner'
import StatsGitHub from './StatsGitHub'
import StatsLeetcode from './StatsLeetcode'
import StatsStackOverflow from './StatsStackOverflow'
import { Col, Row } from 'react-bootstrap'
import StatsSuperUser from './StatsSuperUser'

export default function StatsMain() {
  return (
    <Section id="stats">
      <Row>
        <Col className="text-center">
          <React.Suspense fallback={<LoadingSpinner color="success" />}>
            <StatsLeetcode />
          </React.Suspense>
        </Col>
        <Col className="text-center">
          <React.Suspense fallback={<LoadingSpinner color="success" />}>
            <StatsGitHub />
          </React.Suspense>
        </Col>
        <Col className="text-center">
          <React.Suspense fallback={<LoadingSpinner color="success" />}>
            <StatsStackOverflow />
          </React.Suspense>
        </Col>
        <Col className="text-center">
          <React.Suspense fallback={<LoadingSpinner color="success" />}>
            <StatsSuperUser />
          </React.Suspense>
        </Col>
      </Row>
    </Section>
  )
}
