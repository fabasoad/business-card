import * as React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import StatsGitHub from './StatsGitHub'
import StatsLeetcode from './StatsLeetcode'
import StatsStackOverflow from './StatsStackOverflow'
import SectionTitle from '../Controls/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import StatsSuperUser from './StatsSuperUser'

function StatsMain({ t }: WithTranslation) {
  return (
    <div id="stats">
      <SectionTitle>
        {t('business-card-stats-title')}
      </SectionTitle>
      <Container>
        <Row>
          <Col className="stats-list d-flex justify-content-center">
            <StatsLeetcode />
            <StatsGitHub />
            <StatsStackOverflow />
            <StatsSuperUser />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default withTranslation()(StatsMain)
