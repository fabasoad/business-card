import * as React from 'react'

interface JobTitleProps {
  company: string
  title: string
  location: string
}

const JobTitle: React.FunctionComponent<JobTitleProps> =
  ({ company, location, title }) => {
    return (
      <div className="timeline-heading">
        <h4>{company}</h4>
        <h4 className="subheading">{title}</h4>
        <h6>{location}</h6>
      </div>
    )
  }

export default JobTitle
