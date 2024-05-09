import * as React from 'react'
import { Col, Row } from 'react-bootstrap'
import { getDateLocale } from '../../scripts/utils/DateUtils'
import { useTranslation } from 'react-i18next'

interface DateTimelineProps {
  fromMonthIndex: number
  fromYear: number
  toMonthIndex?: number
  toYear?: number
}

export default function DateTimeline({
  fromMonthIndex, fromYear, toMonthIndex, toYear
}: DateTimelineProps) {
  const { t } = useTranslation()
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
