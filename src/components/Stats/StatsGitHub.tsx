import * as React from 'react'

import TechnologyStorage from '../../scripts/technologies/TechnologyStorage'
import { Technology } from '../../scripts/technologies/types';
import { v4 as uuidv4 } from 'uuid';
import GitHubService from './GitHubService';

export default function StatsGitHub() {
  const [stars, setStars] = React.useState<number>(0)
  GitHubService.getInstance().getTotalStarsAmount().then(setStars)

  const technologyStorage: TechnologyStorage = new TechnologyStorage()
  const tech: Technology = technologyStorage.findByName('gitHub');
  return (
    <div className="m-4 d-flex flex-column text-center">
      <img key={uuidv4()} src={tech.img} alt={tech.name} title={tech.title}/>
      ⭐️{stars}
    </div>
  )
}
