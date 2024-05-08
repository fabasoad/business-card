import * as React from 'react'
import { humanize } from '../../scripts/utils/DateUtils'
import { useTranslation } from 'react-i18next'

interface DateDurationProps {
  fromMonthIndex?: number
  fromYear?: number
  toMonthIndex?: number
  toYear?: number
}

export default function DateDuration(
  { fromMonthIndex = 0, fromYear = 0, toMonthIndex, toYear }: DateDurationProps
) {
  const { i18n } = useTranslation()
  const from = new Date(fromYear, fromMonthIndex)
  const to = !toYear || toMonthIndex == undefined
    ? new Date()
    : new Date(toYear, toMonthIndex)
  return (
    <div className="controls__date-duration">
      {humanize(from, to, i18n.language)}
    </div>
  )
}
