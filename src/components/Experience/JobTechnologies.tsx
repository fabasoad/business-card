import * as React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
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
    <p className="experience-tech-stack d-flex">
      <div className="experience-tech-stack__title">{t('experience.tech-stack.title')}:</div>
      {names
        .map((name: string) => technologyStorage.findByName(name))
        .map((t: Technology, i: number) => <img
          key={`${keyPrefix}-${t.name}-${i + 1}`}
          src={t.img}
          alt={t.name}
          title={t.title}
        />)}
    </p>
  )
}
