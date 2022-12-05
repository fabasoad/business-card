/// <reference path='./Skills.d.ts' />
import * as React from 'react'
import { useTranslation } from 'react-i18next'

import TechnologyStorage from '../scripts/technologies/TechnologyStorage'
import StringUtils from '../scripts/StringUtils'

export default function Skills() {
  const { t } = useTranslation()
  const technologyStorage = new TechnologyStorage()
  return (
    <div id="skills" className="light-component">
      <div className="section-title text-center center">
        <h2>{t('business-card-skills-title')}</h2>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="skills-list col text-center">
            {technologyStorage.findBySkill(true).map((t) => <img key={StringUtils.random(30)} className="m-4" src={t.img} alt={t.name} title={t.title} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
