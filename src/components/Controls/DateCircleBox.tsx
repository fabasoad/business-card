import * as React from 'react'
import DateDuration from './DateDuration'
import DateTimeline from './DateTimeline'

interface DateCircleBoxProps {
  fromMonthIndex: number
  fromYear: number
  toMonthIndex?: number
  toYear?: number
}

function DateCircleBox({ fromMonthIndex, fromYear, toMonthIndex, toYear }: DateCircleBoxProps) {
  return (
    <div className="timeline-image">
      <DateDuration
        fromMonthIndex={fromMonthIndex}
        fromYear={fromYear}
        toMonthIndex={toMonthIndex}
        toYear={toYear}
      />
      <DateTimeline
        fromMonthIndex={fromMonthIndex}
        fromYear={fromYear}
        toMonthIndex={toMonthIndex}
        toYear={toYear}
      />
    </div>
  )
}

export default DateCircleBox
