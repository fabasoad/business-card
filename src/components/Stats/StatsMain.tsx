import * as React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import StatsGitHub from './StatsGitHub'
import StatsLeetcode from './StatsLeetcode'
import StatsStackOverflow from './StatsStackOverflow'
import SectionTitle from '../Controls/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import StatsSuperUser from './StatsSuperUser'
import type { StatsStackOverflowProps } from './StatsStackOverflow'
import type { StatsSuperUserProps } from './StatsSuperUser'

export type StatsMainProps = StatsStackOverflowProps & StatsSuperUserProps

function StatsMain({
  t, defaultStackOverflowReputation = 0, defaultSuperUserReputation = 0
}: WithTranslation & StatsMainProps) {
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
            <StatsStackOverflow defaultStackOverflowReputation={defaultStackOverflowReputation} />
            <StatsSuperUser defaultSuperUserReputation={defaultSuperUserReputation} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default withTranslation()(StatsMain)
