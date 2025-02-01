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
    <div id="stats">
      <SectionTitle>{t('stats.title')}</SectionTitle>
      <Container>
        <Row>
          <Col className="m-2">
            <StatsLeetcode />
          </Col>
          <Col className="m-2">
            <StatsGitHub />
          </Col>
          <Col className="m-2">
            <StatsStackOverflow />
          </Col>
          <Col className="m-2">
            <StatsSuperUser />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
