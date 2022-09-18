import * as React from 'react'

interface JobTitleProps {
  company: string
  title: string
  location: string
  logo: string
}

const JobTitle: React.FunctionComponent<JobTitleProps> =
  ({ company, location, title, logo }) => {
    return (
      <div className="timeline-heading job-title">
        <h4>
          <img src={logo} alt={company} title={company} />
          {company}
        </h4>
        <h4 className="subheading">{title}</h4>
        <h6>{location}</h6>
      </div>
    )
  }

export default JobTitle
