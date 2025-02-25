import * as React from 'react'
import { Row } from 'react-bootstrap'
import TechnologyStorage from '../../scripts/technologies/TechnologyStorage'
import { Technology } from '../../scripts/technologies/types'

export interface StatsCommonProps {
  techName: string,
  url: string
}

const StatsCommon: React.FC<React.PropsWithChildren<StatsCommonProps>> =
  ({ techName, url, children }) => {
    const technologyStorage: TechnologyStorage = new TechnologyStorage()
    const tech: Technology = technologyStorage.findByName(techName)
    return (
      <Row className="justify-content-center">
        <a href={url} target="_blank" rel="noreferrer">
          <img
            src={tech.img}
            alt={tech.name}
            title={tech.title}
          />
        </a>
        {children}
      </Row>
    )
  }

export default StatsCommon
