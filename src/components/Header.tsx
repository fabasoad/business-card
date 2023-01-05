import * as React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import {Button} from 'react-bootstrap';

export default function Header() {
  const { t } = useTranslation()
  return (
    <header className="header" id="header">
      <div className="header__text">
        <h1><Trans t={t}>business-card-header-title</Trans></h1>
        <h5 className="header__text-subtitle">{t('business-card-header-occupation')}</h5>
        <Button variant="primary" size="lg" href="#about">
          {t('business-card-header-about-me')}
        </Button>
        <Button variant="primary" size="lg" href="#portfolio">
          {t('business-card-header-portfolio')}
        </Button>
      </div>
    </header>
  )
}
