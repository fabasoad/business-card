import * as React from 'react'
import { Button } from 'react-bootstrap'
import * as imgPortrait from '../assets/images/portrait-light-blue.png'
import { Trans, useTranslation } from 'react-i18next'

export default function Header() {
  const { t } = useTranslation()
  return (
    <div id="header" className="header row d-flex flex-md-row-reverse flex-lg-row-reverse align-items-center">
      <div className="header__img-container col-md-5 col-lg-5">
        <img
          src={imgPortrait}
          className="mx-lg-auto img-fluid"
          alt="Portrait"
          loading="lazy"
        />
      </div>
      <div className="col-md-7 col-lg-7 pt-1">
        <h1><Trans t={t} values={{ authorGivenName: t('author.given-name') }}>header.title</Trans></h1>
        <h5>{t('header.occupation')}</h5>
        <div>
          <Button variant="primary" size="lg" href="#about-me">
            {t('about-me.title')}
          </Button>
          <Button variant="primary" size="lg" href="#experience">
            {t('experience.title')}
          </Button>
        </div>
      </div>
    </div>
  )
}
