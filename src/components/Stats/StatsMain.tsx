import * as React from 'react'
import { useTranslation } from 'react-i18next'
import StatsGitHub from './StatsGitHub'
import StatsLeetcode from './StatsLeetcode'
import StatsStackOverflow from './StatsStackOverflow'
import SectionTitle from '../Controls/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import StatsSuperUser from './StatsSuperUser'

export default function StatsMain() {
  const { t } = useTranslation()
  return (
    <div id="stats" className="light-component">
      <SectionTitle>{t('stats.title')}</SectionTitle>
      <Container>
        <Row>
          <Col className="text-center">
            <StatsLeetcode />
          </Col>
          <Col className="text-center">
            <StatsGitHub />
          </Col>
          <Col className="text-center">
            <StatsStackOverflow />
          </Col>
          <Col className="text-center">
            <StatsSuperUser />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
