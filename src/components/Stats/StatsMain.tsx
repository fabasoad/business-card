import * as React from 'react'
import { useTranslation } from 'react-i18next'
import StatsGitHub from './StatsGitHub'
import StatsLeetcode from './StatsLeetcode'
import StatsStackOverflow from './StatsStackOverflow'
import SectionTitle from '../Controls/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'

export interface StatsMainProps {
  autoload?: boolean
}

const StatsMain: React.FC<React.PropsWithChildren<StatsMainProps>> =
  ({ autoload }) => {
    const { t } = useTranslation()
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

export default StatsMain
