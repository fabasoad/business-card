import * as React from 'react'
import { Button } from 'react-bootstrap'
import { Trans, useTranslation } from 'react-i18next'

export default function Header() {
  const { t } = useTranslation()
  return (
    <header className="header" id="header">
      <div className="header__text">
        <h1><Trans t={t} values={{ authorName: t('author-name') }}>header.title</Trans></h1>
        <h5 className="header__text-subtitle">{t('header.occupation')}</h5>
        <Button variant="primary" size="lg" href="#about">
          {t('header.about-me')}
        </Button>
        <Button variant="primary" size="lg" href="#experience">
          {t('experience.title')}
        </Button>
      </div>
    </header>
  )
}
