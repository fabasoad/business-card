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
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.bitcoinqrcodemaker.com/?style=bitcoin&address=145HwyQAcv4vrzUumJhu7nWGAVBysX9jJH&prefix=on"><img src="https://img.shields.io/badge/bitcoin-donate-yellow?style=flat&logo=bitcoin" alt="Donate with Bitcoin" /></a></li>
        <li><Badge pill={true} bg="secondary">{t<string>('business-card-version', { version })}</Badge></li>
      </ul>
    </div>
  )
}
