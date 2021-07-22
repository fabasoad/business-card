import * as React from 'react'
import { useTranslation } from 'react-i18next'
import StatsGitHub from './StatsGitHub';
import StatsStackOverflow from './StatsStackOverflow';

export default function StatsMain() {
  const { t } = useTranslation()
  return (
    <div id="stats">
      <div className="section-title text-center center">
        <h2>{t('business-card-stats-title')}</h2>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="stats-list col d-flex justify-content-center">
            <StatsGitHub />
            <StatsStackOverflow />
          </div>
        </div>
      </div>
    </div>
  )
}
