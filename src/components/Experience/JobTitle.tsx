import * as React from 'react'

interface JobTitleProps {
  company: string
  title: string
}

export default function JobTitle(props: JobTitleProps) {
  return (
    <div className="timeline-heading">
      <h4>{props.company}</h4>
      <h4 className="subheading">{props.title}</h4>
    </div>
  )
}
