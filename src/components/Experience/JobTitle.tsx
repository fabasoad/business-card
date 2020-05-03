import * as React from 'react'

export default function JobTitle({ company, title }) {
  return (
    <div className="timeline-heading">
      <h4>{company}</h4>
      <h4 className="subheading">{title}</h4>
    </div>
  )
}