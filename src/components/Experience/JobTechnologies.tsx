import * as React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import TechnologyStorage from '../../scripts/technologies/TechnologyStorage'

interface JobTechnologiesProps {
  keyPrefix: string
  names: string[]
}

function JobTechnologies({ keyPrefix, names, t }: WithTranslation & JobTechnologiesProps) {
  const technologyStorage = new TechnologyStorage()
  return (
    <div className="technologies">
      <h5>{t('business-card-experience-technologies-title')}</h5>
      {names
        .map((name) => technologyStorage.findByName(name))
        .map((t, i) => <img
          key={`${keyPrefix}-${t.name}-${i + 1}`}
          src={t.img}
          alt={t.name}
          title={t.title}
        />)}
    </div>
  )
}

export default withTranslation()(JobTechnologies)
