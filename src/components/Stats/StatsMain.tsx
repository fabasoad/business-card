import * as React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import StatsGitHub from './StatsGitHub'
import StatsLeetcode from './StatsLeetcode'
import StatsStackOverflow from './StatsStackOverflow'
import SectionTitle from '../Controls/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import { AutoloadProps } from '../Controls/AutoloadProps'

function StatsMain({ autoload, t }: WithTranslation & AutoloadProps) {
  return (
    <div id="stats">
      <SectionTitle>
        {t('business-card-stats-title')}
      </SectionTitle>
      <Container>
        <Row>
          <Col className="stats-list d-flex justify-content-center">
            <StatsLeetcode autoload={autoload} />
            <StatsGitHub autoload={autoload} />
            <StatsStackOverflow autoload={autoload} />
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
