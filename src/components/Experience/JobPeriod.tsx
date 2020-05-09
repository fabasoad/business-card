import * as React from 'react'
import DateLocale from '../controls/DateLocale'

interface JobPeriodProps {
  fromMonth: number
  fromYear: number
  toMonth: number
  toYear: number
}

export default function JobPeriod(props: JobPeriodProps) {
  return (
    <div className="timeline-image">
      <h4>
        <DateLocale month={props.toMonth} year={props.toYear} />
        - <br />
        <DateLocale month={props.fromMonth} year={props.fromYear} />
      </h4>
    </div>
  )
}
