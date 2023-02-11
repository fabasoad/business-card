import * as React from 'react'
import { useTranslation } from 'react-i18next'
import DateLocale from './DateLocale'
import { Col, Row } from 'react-bootstrap'

interface DateTimelineProps {
  fromMonthIndex: number
  fromYear: number
  toMonthIndex?: number
  toYear?: number
}

const DateTimeline: React.FunctionComponent<DateTimelineProps> =
  ({ fromMonthIndex, fromYear, toMonthIndex, toYear }) => {
    const { t } = useTranslation()
    return (
      <Col className="controls__date-timeline">
        <Row>
          {
            (toMonthIndex != undefined &&
              toYear &&
              <DateLocale monthIndex={toMonthIndex} year={toYear} />) ||
            <div>{t('business-card-experience-present')}</div>
          }
        </Row>
        <Row>-</Row>
        <Row><DateLocale monthIndex={fromMonthIndex} year={fromYear} /></Row>
      </Col>
    )
  }

export default DateTimeline
