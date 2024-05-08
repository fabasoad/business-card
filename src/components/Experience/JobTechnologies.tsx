import * as React from 'react'
import { useTranslation } from 'react-i18next'
import TechnologyStorage from '../../scripts/technologies/TechnologyStorage'
import { Technology } from '../../scripts/technologies/types'

interface JobTechnologiesProps {
  keyPrefix: string
  names: string[]
}

export default function JobTechnologies({ keyPrefix, names }: JobTechnologiesProps) {
  const { t } = useTranslation()
  const technologyStorage = new TechnologyStorage()
  return (
    <div className="technologies">
      <h5>{t('business-card-experience-technologies-title')}</h5>
      {names
        .map((name: string) => technologyStorage.findByName(name))
        .map((t: Technology, i: number) => <img
          key={`${keyPrefix}-${t.name}-${i + 1}`}
          src={t.img}
          alt={t.name}
          title={t.title}
        />)}
    </div>
  )
}
