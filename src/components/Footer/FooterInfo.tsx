import * as React from 'react'
import { Badge } from 'react-bootstrap'
import useLocalStorage from 'use-local-storage'
import { version } from '../../../package.json'
import { useTranslation } from 'react-i18next'

export default function FooterInfo() {
  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  const { t } = useTranslation()
  const [theme, _] = useLocalStorage('theme', getSystemTheme())

  const chosenTheme = theme
    ?? document.querySelector('html').getAttribute('data-theme')
    ?? getSystemTheme()

  return (
    <div className="d-flex justify-content-center">
      <ul className="icon-list">
        <li>
          <img src={`https://img.shields.io/static/v1?label=made%20by&message=fabasoad&color=${chosenTheme === 'dark' ? 'a7d9c1' : '2c3e50'}&style=for-the-badge&logo=github`} alt="Made by fabasoad" />
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.bitcoinqrcodemaker.com/?style=bitcoin&address=145HwyQAcv4vrzUumJhu7nWGAVBysX9jJH&prefix=on">
            <img src={`https://img.shields.io/static/v1?label=bitcoin&message=donate&color=${chosenTheme === 'dark' ? 'a7d9c1' : 'f7931a'}&style=for-the-badge&logo=bitcoin`} alt="Donate with Bitcoin" />
          </a>
        </li>
        <li>
          <Badge pill={true} bg="secondary">{t('version', { version })}</Badge>
        </li>
      </ul>
    </div>
  )
}
