import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { type WithTranslation, withTranslation } from 'react-i18next'
import type { AutoloadProps } from '../Controls/AutoloadProps'
import SectionTitle from '../Controls/SectionTitle'
import StatsGitHub from './StatsGitHub'
import StatsLeetcode from './StatsLeetcode'
import StatsStackOverflow from './StatsStackOverflow'
import StatsSuperUser from './StatsSuperUser'

function StatsMain({ autoload, t }: WithTranslation & AutoloadProps) {
  return (
    <div id="stats">
      <SectionTitle>{t('business-card-stats-title')}</SectionTitle>
      <Container>
        <Row>
          <Col className="stats-list d-flex justify-content-center">
            <StatsLeetcode autoload={autoload} />
            <StatsGitHub autoload={autoload} />
            <StatsStackOverflow autoload={autoload} />
            <StatsSuperUser autoload={autoload} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

StatsMain.defaultProps = {
  autoload: true
}

export default withTranslation()(StatsMain)
