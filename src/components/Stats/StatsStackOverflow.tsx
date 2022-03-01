import * as React from 'react'

import TechnologyStorage from '../../scripts/technologies/TechnologyStorage'
import { Technology } from '../../scripts/technologies/types';
import { v4 as uuidv4 } from 'uuid';
import StackOverflowService from './StackOverflowService';

export default function StatsStackOverflow() {
  const [reputation, setReputation] = React.useState<number>(0)
  StackOverflowService.getInstance().getReputation().then(setReputation)

  const technologyStorage: TechnologyStorage = new TechnologyStorage()
  const tech: Technology = technologyStorage.findByName('stackoverflow');
  return (
    <div className="m-4 d-flex flex-column stats-item">
      <img key={uuidv4()} src={tech.img} alt={tech.name} title={tech.title} />
      ➕ ️{reputation}
    </div>
  )
}
