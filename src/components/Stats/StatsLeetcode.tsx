import * as React from 'react'

import TechnologyStorage from '../../scripts/technologies/TechnologyStorage'
import { Technology } from '../../scripts/technologies/types';
import { v4 as uuidv4 } from 'uuid';
import LeetcodeService from './LeetcodeService';

export default function StatsLeetcode() {
  const [totalSolved, setTotalSolved] = React.useState<number>(0)
  LeetcodeService.getInstance().getTotalSolved().then(setTotalSolved)

  const technologyStorage: TechnologyStorage = new TechnologyStorage()
  const tech: Technology = technologyStorage.findByName('leetcode');
  return (
    <div className="m-4 d-flex flex-column stats-item">
      <img key={uuidv4()} src={tech.img} alt={tech.name} title={tech.title}/>
      ✔️ ️{totalSolved}
    </div>
  )
}
