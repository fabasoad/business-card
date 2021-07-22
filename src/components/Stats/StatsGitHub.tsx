import * as React from 'react'
import { Octokit } from '@octokit/rest'

import TechnologyStorage from '../../scripts/technologies/TechnologyStorage'
import { Technology } from '../../scripts/technologies/types';
import { v4 as uuidv4 } from 'uuid';

export default function StatsGitHub() {
  const [stars, setStars] = React.useState<number>(0)

  const octokit: Octokit = new Octokit();
  octokit.rest.repos.listForUser({
    username: 'fabasoad'
  }).then(({ data }) => {
    let totalStars: number = 0
    for (let i = 0; i < data.length; i++) {
      totalStars += data[i]['stargazers_count']
    }
    setStars(totalStars)
  })

  const technologyStorage: TechnologyStorage = new TechnologyStorage()
  const tech: Technology = technologyStorage.findByName('gitHub');
  return (
    <div className="m-4 d-flex flex-column text-center">
      <img key={uuidv4()} src={tech.img} alt={tech.name} title={tech.title} />
      ⭐️{stars}
    </div>
  )
}
