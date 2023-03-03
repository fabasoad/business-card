import * as React from 'react'
import { Col, Row } from 'react-bootstrap'
import { getDateLocale } from '../../scripts/utils/DateUtils'
import { withTranslation, WithTranslation } from 'react-i18next'

interface DateTimelineProps {
  fromMonthIndex: number
  fromYear: number
  toMonthIndex?: number
  toYear?: number
}

function DateTimeline({
  fromMonthIndex, fromYear, toMonthIndex, toYear, t
}: WithTranslation & DateTimelineProps) {
  return (
    <Col className="controls__date-timeline">
      <Row>
        {
          (toMonthIndex != undefined &&
            toYear && getDateLocale(toYear, toMonthIndex)) ||
          t('business-card-experience-present')
        }
      </Row>
      <Row>-</Row>
      <Row>
        {getDateLocale(fromYear, fromMonthIndex)}
      </Row>
    </Col>
  )
}

export default withTranslation()(DateTimeline)
