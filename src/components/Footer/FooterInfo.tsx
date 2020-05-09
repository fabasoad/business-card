import * as React from 'react'
import { Badge } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { version } from '../../../package.json'

export default function FooterInfo() {
  const { t } = useTranslation()
  return (
    <div className="social d-flex justify-content-center">
      <ul className="icon-list">
        <li><img src="https://img.shields.io/static/v1?label=made%20by&amp;message=fabasoad&amp;color=2c3e50&amp;style=for-the-badge&amp;logo=github" alt="Made by fabasoad" /></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://en.cryptobadges.io/donate/145HwyQAcv4vrzUumJhu7nWGAVBysX9jJH"><img src="https://en.cryptobadges.io/badge/micro/145HwyQAcv4vrzUumJhu7nWGAVBysX9jJH" alt="Donate with Bitcoin" /></a></li>
        <li><Badge pill={true} variant="light">{t('business-card-version', { version })}</Badge></li>
      </ul>
    </div>
  )
}
