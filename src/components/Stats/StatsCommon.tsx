import * as React from 'react'

import { Technology } from '../../scripts/technologies/types';
import TechnologyStorage from '../../scripts/technologies/TechnologyStorage';
import StringUtils from '../../scripts/StringUtils'

export interface StatsCommonProps {
  techName: string,
  url: string
}

const StatsCommon: React.FC<React.PropsWithChildren<StatsCommonProps>> =
  ({ techName, url, children }) => {
    const technologyStorage: TechnologyStorage = new TechnologyStorage()
    const tech: Technology = technologyStorage.findByName(techName);
    return (
      <div className="m-4 d-flex flex-column stats-item">
        <a href={url} target="_blank" rel="noreferrer">
          <img
            key={StringUtils.random(30)}
            src={tech.img}
            alt={tech.name}
            title={tech.title}
          />
        </a>
        {children}
      </div>
    )
  }

export default StatsCommon
