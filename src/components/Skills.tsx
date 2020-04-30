/// <reference path='./Skills.d.ts' />
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

import TechnologyStorage from '../scripts/technologies/TechnologyStorage';

export default function Skills() {
  const technologyStorage = new TechnologyStorage();
  const { t } = useTranslation();
  return (
    <div id="skills" className="light-component">
      <div className="section-title text-center center">
        <h2>{t("business-card-skills-title")}</h2>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="skills-list col text-center">
            {technologyStorage.getBySkill(true).map(t => <img key={uuidv4()} className="m-4" src={t.img} alt={t.name} />)}
          </div>
        </div>
      </div>
    </div>
  );
}