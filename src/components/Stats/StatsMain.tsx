import * as React from 'react'
import Section from '../Controls/Section'
import StatsGitHub from './StatsGitHub'
import StatsLeetcode from './Leetcode/StatsLeetcode'
import StatsStackOverflow from './StatsStackOverflow'
import { Col, Row } from 'react-bootstrap'
import StatsSuperUser from './StatsSuperUser'

export default function StatsMain() {
  return (
    <Section id="stats">
      <Row>
        <Col className="text-center">
          <StatsLeetcode />
        </Col>
        <Col className="text-center">
          {/*<StatsGitHub />*/}
        </Col>
        <Col className="text-center">
          {/*<StatsStackOverflow />*/}
        </Col>
        <Col className="text-center">
          {/*<StatsSuperUser />*/}
        </Col>
      </Row>
    </Section>
  )
}
