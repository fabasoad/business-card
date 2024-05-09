import * as React from 'react'
import { Badge } from 'react-bootstrap'
import { version } from '../../../package.json'
import { useTranslation } from 'react-i18next'

export default function FooterInfo() {
  const { t } = useTranslation()
  return (
    <div className="footer-info">
      <ul className="icon-list">
        <li><img src="https://img.shields.io/static/v1?label=made%20by&amp;message=fabasoad&amp;color=2c3e50&amp;style=for-the-badge&amp;logo=github" alt="Made by fabasoad" /></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.bitcoinqrcodemaker.com/?style=bitcoin&address=145HwyQAcv4vrzUumJhu7nWGAVBysX9jJH&prefix=on"><img src="https://img.shields.io/static/v1?label=bitcoin&amp;message=donate&amp;color=f7931a&amp;style=for-the-badge&amp;logo=bitcoin" alt="Donate with Bitcoin" /></a></li>
        <li><Badge pill={true} bg="secondary">{t('business-card-version', { version })}</Badge></li>
      </ul>
    </div>
  )
}
