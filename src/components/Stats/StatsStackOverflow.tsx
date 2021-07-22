import * as React from 'react'

import TechnologyStorage from '../../scripts/technologies/TechnologyStorage'
import { Technology } from '../../scripts/technologies/types';
import { v4 as uuidv4 } from 'uuid';

export default function StatsStackOverflow() {
  const [reputation, setReputation] = React.useState<number>(0)

  const userId: number = 215523;
  fetch(`https://api.stackexchange.com/2.3/users/${userId}/associated`)
    .then((resp) => resp.json())
    .then((data) => {
      for (let i = 0; i < data.items.length; i++) {
        if (data.items[i]['site_name'] === 'Stack Overflow') {
          setReputation(data.items[i]['reputation'])
          break;
        }
      }
    })

  const technologyStorage: TechnologyStorage = new TechnologyStorage()
  const tech: Technology = technologyStorage.findByName('stackoverflow');
  return (
    <div className="m-4 d-flex flex-column text-center">
      <img key={uuidv4()} src={tech.img} alt={tech.name} title={tech.title} />
      ➕️{reputation}
    </div>
  )
}
