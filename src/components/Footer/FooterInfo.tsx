import * as React from 'react'
import { Badge } from 'react-bootstrap'
import { version } from '../../../package.json'
import { useTranslation } from 'react-i18next'
import { useThemeContext } from '../Contexts/ThemeContext'

export default function FooterInfo() {
  const { t } = useTranslation()
  const { theme } = useThemeContext()

  return (
    <div className="d-flex justify-content-center">
      <ul className="icon-list">
        <li>
          <img src={`https://img.shields.io/static/v1?label=made%20by&message=fabasoad&color=${theme === 'dark' ? 'a7d9c1' : '2c3e50'}&style=for-the-badge&logo=github`} alt="Made by fabasoad" loading="lazy" />
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.bitcoinqrcodemaker.com/?style=bitcoin&address=145HwyQAcv4vrzUumJhu7nWGAVBysX9jJH&prefix=on">
            <img src={`https://img.shields.io/static/v1?label=bitcoin&message=donate&color=${theme === 'dark' ? 'a7d9c1' : 'f7931a'}&style=for-the-badge&logo=bitcoin`} alt="Donate with Bitcoin" loading="lazy" />
          </a>
        </li>
        <li>
          <Badge pill={true} bg="secondary">{t('version', { version })}</Badge>
        </li>
      </ul>
    </div>
  )
}
