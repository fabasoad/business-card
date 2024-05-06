import * as React from 'react'
import { humanize } from '../../scripts/utils/DateUtils'
import { withTranslation, WithTranslation} from 'react-i18next'

interface DateDurationProps {
  fromMonthIndex?: number
  fromYear?: number
  toMonthIndex?: number
  toYear?: number
}

function DateDuration(
  { fromMonthIndex = 0, fromYear = 0, toMonthIndex, toYear, i18n }: WithTranslation & DateDurationProps
) {
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

export default withTranslation()(DateDuration)
